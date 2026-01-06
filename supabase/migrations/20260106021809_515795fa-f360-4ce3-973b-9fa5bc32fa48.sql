-- Add SMS consent tracking columns to leads table
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS sms_consent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS consent_timestamp timestamptz,
ADD COLUMN IF NOT EXISTS consent_ip text;

-- Add comment for documentation
COMMENT ON COLUMN public.leads.sms_consent IS 'Whether user consented to receive SMS/phone communications';
COMMENT ON COLUMN public.leads.consent_timestamp IS 'Timestamp when consent was given';
COMMENT ON COLUMN public.leads.consent_ip IS 'IP address from which consent was given';