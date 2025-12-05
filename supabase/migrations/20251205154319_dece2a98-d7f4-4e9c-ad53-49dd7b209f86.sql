-- Create leads table for capturing all form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  
  -- Project details
  project_type TEXT,
  city TEXT,
  timeline TEXT,
  message TEXT,
  estimated_budget TEXT,
  
  -- Commercial-specific fields
  company_name TEXT,
  business_type TEXT,
  square_footage TEXT,
  
  -- Meta
  form_source TEXT NOT NULL,
  
  -- Sync status
  synced_to_sheets BOOLEAN DEFAULT false,
  synced_to_ghl BOOLEAN DEFAULT false,
  ghl_contact_id TEXT,
  
  -- Error tracking
  sync_errors JSONB DEFAULT '[]'::jsonb
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (forms need to write without auth)
CREATE POLICY "Allow public lead submissions"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view leads (for future admin)
CREATE POLICY "Authenticated users can view leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);

-- Create index for faster queries
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_synced ON public.leads(synced_to_sheets, synced_to_ghl);

-- Add comment
COMMENT ON TABLE public.leads IS 'Stores all form submissions with sync status to Google Sheets and GoHighLevel';