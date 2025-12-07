import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Lovable AI Gateway endpoint
const LOVABLE_AI_URL = "https://ai.gateway.lovable.dev/v1/chat/completions";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { projectType, scope, finishLevel, budgetMin, budgetMax } = await req.json();

    console.log("Generating cost breakdown for:", { projectType, scope, finishLevel, budgetMin, budgetMax });

    const midBudget = Math.round((budgetMin + budgetMax) / 2);

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a construction cost estimation expert specializing in residential remodeling projects in the Atlanta metro area. 
Your task is to provide realistic cost breakdowns for renovation projects.

IMPORTANT: You MUST respond with ONLY a valid JSON object, no other text. The response must be parseable JSON.

Based on the project details, provide percentage allocations for these 5 categories:
1. materials - Materials and supplies (cabinets, countertops, fixtures, flooring, etc.)
2. labor - Labor costs (demolition, installation, plumbing, electrical, carpentry)
3. permits - Permits, inspections, and compliance fees
4. design - Design consultation, planning, and project management
5. contingency - Buffer for unexpected issues and price fluctuations

Adjust percentages based on:
- Project type: Kitchens have higher material costs (cabinets/appliances), bathrooms have higher fixture costs
- Finish level: Luxury finishes have higher material percentages, essential finishes have higher labor ratios
- Scope: Larger scopes may need more contingency for complexity

The percentages MUST total exactly 100%.`;

    const userPrompt = `Generate a cost breakdown for this project:
- Project Type: ${projectType}
- Scope: ${scope}
- Finish Level: ${finishLevel}
- Budget Range: $${budgetMin.toLocaleString()} - $${budgetMax.toLocaleString()} (midpoint: $${midBudget.toLocaleString()})

Respond with ONLY this JSON structure (no markdown, no explanation):
{
  "materials": {
    "percentage": <number 30-50>,
    "amount": <calculated from midpoint budget>,
    "details": "<brief description of what's included>"
  },
  "labor": {
    "percentage": <number 25-40>,
    "amount": <calculated from midpoint budget>,
    "details": "<brief description of labor involved>"
  },
  "permits": {
    "percentage": <number 3-8>,
    "amount": <calculated from midpoint budget>,
    "details": "<brief description of permits/fees>"
  },
  "design": {
    "percentage": <number 5-12>,
    "amount": <calculated from midpoint budget>,
    "details": "<brief description of design services>"
  },
  "contingency": {
    "percentage": <number 10-18>,
    "amount": <calculated from midpoint budget>,
    "details": "<brief description of what contingency covers>"
  }
}`;

    const response = await fetch(LOVABLE_AI_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Lovable AI error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits." }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      throw new Error(`AI request failed: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI response received:", JSON.stringify(data).slice(0, 200));
    
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("No content in AI response");
    }

    console.log("Raw AI response:", content);

    // Parse the JSON from the response
    let breakdown;
    try {
      // Try to extract JSON from the response (in case there's extra text)
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        breakdown = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("No JSON found in response");
      }
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      // Fallback to default breakdown
      breakdown = getDefaultBreakdown(projectType, finishLevel, midBudget);
    }

    // Validate and normalize percentages
    const categories = ['materials', 'labor', 'permits', 'design', 'contingency'];
    let total = 0;
    
    for (const cat of categories) {
      if (!breakdown[cat] || typeof breakdown[cat].percentage !== 'number') {
        breakdown = getDefaultBreakdown(projectType, finishLevel, midBudget);
        break;
      }
      total += breakdown[cat].percentage;
    }

    // Recalculate amounts based on midBudget
    for (const cat of categories) {
      breakdown[cat].amount = Math.round(midBudget * (breakdown[cat].percentage / 100));
    }

    console.log("Final breakdown:", breakdown);

    return new Response(JSON.stringify({ breakdown, budget: midBudget }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error in budget-breakdown function:', error);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function getDefaultBreakdown(projectType: string, finishLevel: string, budget: number) {
  // Default percentages based on project type
  const defaults: Record<string, Record<string, number>> = {
    kitchen: { materials: 45, labor: 32, permits: 5, design: 6, contingency: 12 },
    bathroom: { materials: 40, labor: 35, permits: 5, design: 7, contingency: 13 },
    basement: { materials: 38, labor: 38, permits: 6, design: 5, contingency: 13 },
    addition: { materials: 42, labor: 35, permits: 7, design: 6, contingency: 10 },
    "whole-home": { materials: 40, labor: 35, permits: 6, design: 7, contingency: 12 },
  };

  const percentages = defaults[projectType] || defaults.kitchen;

  // Adjust for finish level
  if (finishLevel === 'luxury' || finishLevel === 'premium') {
    percentages.materials += 5;
    percentages.labor -= 3;
    percentages.design += 2;
    percentages.contingency -= 4;
  } else if (finishLevel === 'base') {
    percentages.materials -= 5;
    percentages.labor += 5;
  }

  return {
    materials: {
      percentage: percentages.materials,
      amount: Math.round(budget * percentages.materials / 100),
      details: "Cabinets, countertops, fixtures, appliances, and finishing materials"
    },
    labor: {
      percentage: percentages.labor,
      amount: Math.round(budget * percentages.labor / 100),
      details: "Demolition, installation, plumbing, electrical, and carpentry work"
    },
    permits: {
      percentage: percentages.permits,
      amount: Math.round(budget * percentages.permits / 100),
      details: "Building permits, inspections, and code compliance"
    },
    design: {
      percentage: percentages.design,
      amount: Math.round(budget * percentages.design / 100),
      details: "Design consultation, 3D rendering, and project management"
    },
    contingency: {
      percentage: percentages.contingency,
      amount: Math.round(budget * percentages.contingency / 100),
      details: "Buffer for unexpected issues, changes, and price fluctuations"
    }
  };
}
