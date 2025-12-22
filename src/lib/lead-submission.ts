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
  // Anti-spam fields (should be empty if human)
  website?: string; // honeypot field
  _gotcha?: string; // secondary honeypot
  _timestamp?: number; // form load timestamp for timing check
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

// Rate limiting storage key
const RATE_LIMIT_KEY = 'fcc_lead_submissions';
const RATE_LIMIT_MAX = 3; // Max submissions per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MIN_FORM_TIME = 3000; // Minimum 3 seconds to fill form (bots are faster)

/**
 * Check if submission is rate limited
 */
function isRateLimited(): boolean {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) return false;
    
    const submissions: number[] = JSON.parse(stored);
    const now = Date.now();
    const recentSubmissions = submissions.filter(ts => now - ts < RATE_LIMIT_WINDOW);
    
    return recentSubmissions.length >= RATE_LIMIT_MAX;
  } catch {
    return false;
  }
}

/**
 * Record a submission for rate limiting
 */
function recordSubmission(): void {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const submissions: number[] = stored ? JSON.parse(stored) : [];
    const now = Date.now();
    
    // Clean old submissions and add new one
    const recentSubmissions = submissions.filter(ts => now - ts < RATE_LIMIT_WINDOW);
    recentSubmissions.push(now);
    
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  } catch {
    // Ignore storage errors
  }
}

/**
 * Validate honeypot and timing to detect bots
 */
function detectSpam(formData: LeadFormData): { isSpam: boolean; reason?: string } {
  // Check honeypot fields (should be empty)
  if (formData.website && formData.website.trim() !== '') {
    return { isSpam: true, reason: 'honeypot_website' };
  }
  
  if (formData._gotcha && formData._gotcha.trim() !== '') {
    return { isSpam: true, reason: 'honeypot_gotcha' };
  }
  
  // Check form timing (bots fill forms too quickly)
  if (formData._timestamp) {
    const fillTime = Date.now() - formData._timestamp;
    if (fillTime < MIN_FORM_TIME) {
      return { isSpam: true, reason: 'too_fast' };
    }
  }
  
  return { isSpam: false };
}

/**
 * Submit lead to the triple-layer capture system:
 * 1. Supabase database (primary)
 * 2. Google Sheets (backup)
 * 3. GoHighLevel CRM (if configured)
 */
export async function submitLead(formData: LeadFormData): Promise<SubmissionResult> {
  console.log('[Lead Submission] Starting submission process...');
  
  // Check rate limiting first
  if (isRateLimited()) {
    console.warn('[Lead Submission] Rate limited - too many submissions');
    return {
      success: false,
      error: 'Too many submissions. Please try again later.',
    };
  }
  
  // Check for spam/bot indicators
  const spamCheck = detectSpam(formData);
  if (spamCheck.isSpam) {
    // Silently fail for bots (don't reveal detection)
    console.warn('[Lead Submission] Spam detected:', spamCheck.reason);
    // Return fake success to not alert the bot
    return {
      success: true,
      leadId: 'blocked',
    };
  }
  
  // Clean form data - remove honeypot fields before submission
  const cleanData = { ...formData };
  delete cleanData.website;
  delete cleanData._gotcha;
  delete cleanData._timestamp;
  
  console.log('[Lead Submission] Cleaned data prepared, invoking edge function...');
  console.log('[Lead Submission] Form source:', cleanData.formSource);
  
  try {
    console.log('[Lead Submission] Calling supabase.functions.invoke("ghl-submit")...');
    
    const response = await supabase.functions.invoke('ghl-submit', {
      body: cleanData,
    });

    console.log('[Lead Submission] Response received:', {
      hasData: !!response.data,
      hasError: !!response.error,
      errorMessage: response.error?.message,
      errorContext: response.error?.context,
    });

    if (response.error) {
      console.error('[Lead Submission] Edge function error:', {
        message: response.error.message,
        context: response.error.context,
        name: response.error.name,
      });
      
      // Provide more specific error messages
      let errorMessage = 'Failed to submit lead';
      if (response.error.message?.includes('Failed to fetch') || response.error.message?.includes('NetworkError')) {
        errorMessage = 'Network error - please check your connection and try again';
      } else if (response.error.message?.includes('timeout')) {
        errorMessage = 'Request timed out - please try again';
      } else if (response.error.message) {
        errorMessage = response.error.message;
      }
      
      return {
        success: false,
        error: errorMessage,
      };
    }

    // Check if data is null or undefined
    if (!response.data) {
      console.error('[Lead Submission] No data returned from edge function');
      return {
        success: false,
        error: 'No response from server - please try again',
      };
    }

    console.log('[Lead Submission] Success! Lead ID:', response.data.leadId);
    
    // Record successful submission for rate limiting
    recordSubmission();

    return {
      success: response.data.success,
      leadId: response.data.leadId,
      contactId: response.data.contactId,
      syncStatus: response.data.syncStatus,
    };
  } catch (error) {
    console.error('[Lead Submission] Exception caught:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    // More specific error handling
    let errorMessage = 'Network error - please try again';
    if (error instanceof Error) {
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Unable to connect to server - please check your internet connection';
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Request timed out - please try again';
      } else if (error.message.includes('NetworkError')) {
        errorMessage = 'Network error - please check your connection';
      } else {
        errorMessage = error.message;
      }
    }
    
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Get the form load timestamp for timing validation
 */
export function getFormTimestamp(): number {
  return Date.now();
}
