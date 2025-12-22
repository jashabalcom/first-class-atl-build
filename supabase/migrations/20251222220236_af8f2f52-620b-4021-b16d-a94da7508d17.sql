-- Add column to track GHL opportunity ID
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS ghl_opportunity_id text;

-- Add column to track workflow trigger status
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS workflow_triggered boolean DEFAULT false;