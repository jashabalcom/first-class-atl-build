import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GHL_API_KEY = Deno.env.get('GHL_API_KEY');
    const GHL_LOCATION_ID = Deno.env.get('GHL_LOCATION_ID');

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      throw new Error('Missing GHL_API_KEY or GHL_LOCATION_ID');
    }

    const headers = {
      'Authorization': `Bearer ${GHL_API_KEY}`,
      'Version': '2021-07-28',
      'Content-Type': 'application/json',
    };

    // Fetch pipelines
    console.log('Fetching pipelines...');
    const pipelinesResponse = await fetch(
      `https://services.leadconnectorhq.com/opportunities/pipelines?locationId=${GHL_LOCATION_ID}`,
      { method: 'GET', headers }
    );

    let pipelines = [];
    if (pipelinesResponse.ok) {
      const pipelinesData = await pipelinesResponse.json();
      pipelines = pipelinesData.pipelines || [];
      console.log(`Found ${pipelines.length} pipelines`);
    } else {
      console.error('Failed to fetch pipelines:', await pipelinesResponse.text());
    }

    // Fetch workflows
    console.log('Fetching workflows...');
    const workflowsResponse = await fetch(
      `https://services.leadconnectorhq.com/workflows/?locationId=${GHL_LOCATION_ID}`,
      { method: 'GET', headers }
    );

    let workflows = [];
    if (workflowsResponse.ok) {
      const workflowsData = await workflowsResponse.json();
      workflows = workflowsData.workflows || [];
      console.log(`Found ${workflows.length} workflows`);
    } else {
      console.error('Failed to fetch workflows:', await workflowsResponse.text());
    }

    // Format response with clear IDs
    const formattedPipelines = pipelines.map((p: any) => ({
      id: p.id,
      name: p.name,
      stages: (p.stages || []).map((s: any) => ({
        id: s.id,
        name: s.name,
        position: s.position,
      })),
    }));

    const formattedWorkflows = workflows.map((w: any) => ({
      id: w.id,
      name: w.name,
      status: w.status,
    }));

    return new Response(
      JSON.stringify({
        success: true,
        locationId: GHL_LOCATION_ID,
        pipelines: formattedPipelines,
        workflows: formattedWorkflows,
        summary: {
          totalPipelines: formattedPipelines.length,
          totalWorkflows: formattedWorkflows.length,
        },
      }, null, 2),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching GHL config:', error);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
