-- Add separate consent columns for marketing and non-marketing SMS
-- This supports A2P 10DLC compliance with two distinct consent types

ALTER TABLE leads 
ADD COLUMN IF NOT EXISTS marketing_sms_consent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS non_marketing_sms_consent boolean DEFAULT false;