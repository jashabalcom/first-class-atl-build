import { supabase } from "@/integrations/supabase/client";

export interface LeadFormData {
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
  formSource: string;
}

export interface SubmissionResult {
  success: boolean;
  leadId?: string;
  contactId?: string;
  syncStatus?: {
    database: boolean;
    googleSheets: boolean;
    goHighLevel: boolean;
  };
  error?: string;
}

/**
 * Submit lead to the triple-layer capture system:
 * 1. Supabase database (primary)
 * 2. Google Sheets (backup)
 * 3. GoHighLevel CRM (if configured)
 */
export async function submitLead(formData: LeadFormData): Promise<SubmissionResult> {
  try {
    const { data, error } = await supabase.functions.invoke('ghl-submit', {
      body: formData,
    });

    if (error) {
      console.error('Lead submission error:', error);
      return {
        success: false,
        error: error.message || 'Failed to submit lead',
      };
    }

    return {
      success: data.success,
      leadId: data.leadId,
      contactId: data.contactId,
      syncStatus: data.syncStatus,
    };
  } catch (error) {
    console.error('Lead submission exception:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}
