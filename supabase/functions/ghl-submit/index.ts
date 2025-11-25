import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormSubmission {
  name: string;
  email: string;
  phone: string;
  projectType?: string;
  city?: string;
  timeline?: string;
  message?: string;
  companyName?: string;
  businessType?: string;
  squareFootage?: string;
  estimatedBudget?: string;
  formSource: string; // 'contact' | 'multistep' | 'commercial' | 'budget'
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ghlApiKey = Deno.env.get('GHL_API_KEY');
    const ghlLocationId = Deno.env.get('GHL_LOCATION_ID');

    if (!ghlApiKey || !ghlLocationId) {
      console.error('Missing GHL credentials');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const formData: FormSubmission = await req.json();
    console.log('Received form submission:', { ...formData, email: '***', phone: '***' });

    // Generate tags based on form data
    const tags = ['Website-Lead'];
    
    if (formData.formSource === 'budget') {
      tags.push('Budget-Estimator-Lead');
    }
    if (formData.formSource === 'commercial') {
      tags.push('Commercial-Lead');
    }
    if (formData.projectType) {
      tags.push(formData.projectType.replace(/\s+/g, '-'));
    }
    if (formData.city) {
      tags.push(formData.city.replace(/\s+/g, '-'));
    }
    if (formData.timeline) {
      tags.push(`Timeline-${formData.timeline.replace(/\s+/g, '-')}`);
    }
    if (formData.estimatedBudget) {
      tags.push('Hot-Lead');
    }

    // Prepare contact data for GHL
    const contactPayload: any = {
      locationId: ghlLocationId,
      firstName: formData.name.split(' ')[0] || formData.name,
      lastName: formData.name.split(' ').slice(1).join(' ') || '',
      email: formData.email,
      phone: formData.phone,
      tags: tags,
      customFields: []
    };

    // Add custom fields
    if (formData.projectType) {
      contactPayload.customFields.push({
        key: 'projectType',
        value: formData.projectType
      });
    }
    if (formData.timeline) {
      contactPayload.customFields.push({
        key: 'timeline',
        value: formData.timeline
      });
    }
    if (formData.city) {
      contactPayload.customFields.push({
        key: 'city',
        value: formData.city
      });
    }
    if (formData.estimatedBudget) {
      contactPayload.customFields.push({
        key: 'estimatedBudget',
        value: formData.estimatedBudget
      });
    }
    if (formData.message) {
      contactPayload.customFields.push({
        key: 'message',
        value: formData.message
      });
    }
    if (formData.companyName) {
      contactPayload.customFields.push({
        key: 'companyName',
        value: formData.companyName
      });
    }
    if (formData.businessType) {
      contactPayload.customFields.push({
        key: 'businessType',
        value: formData.businessType
      });
    }
    if (formData.squareFootage) {
      contactPayload.customFields.push({
        key: 'squareFootage',
        value: formData.squareFootage
      });
    }
    contactPayload.customFields.push({
      key: 'formSource',
      value: formData.formSource
    });

    console.log('Sending to GHL:', { ...contactPayload, email: '***', phone: '***' });

    // Create or update contact in GoHighLevel
    const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ghlApiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify(contactPayload)
    });

    const ghlData = await ghlResponse.json();
    
    if (!ghlResponse.ok) {
      console.error('GHL API error:', ghlData);
      return new Response(
        JSON.stringify({ error: 'Failed to submit to CRM', details: ghlData }),
        { status: ghlResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('GHL success:', ghlData);

    return new Response(
      JSON.stringify({ success: true, contactId: ghlData.contact?.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ghl-submit function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
