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

// Rate limiting - per form source
const RATE_LIMIT_KEY_PREFIX = 'fcc_lead_submissions_';
const RATE_LIMIT_MAX = 10; // Max submissions per window (increased from 3)
const RATE_LIMIT_WINDOW = 30 * 60 * 1000; // 30 minutes in milliseconds (reduced from 1 hour)
const MIN_FORM_TIME = 3000; // Minimum 3 seconds to fill form (bots are faster)

/**
 * Get rate limit key for a specific form source
 */
function getRateLimitKey(formSource: string): string {
  return `${RATE_LIMIT_KEY_PREFIX}${formSource}`;
}

/**
 * Check if submission is rate limited for a specific form
 */
function isRateLimited(formSource: string): { limited: boolean; waitTime?: number } {
  try {
    const key = getRateLimitKey(formSource);
    const stored = localStorage.getItem(key);
    if (!stored) return { limited: false };
    
    const submissions: number[] = JSON.parse(stored);
    const now = Date.now();
    const recentSubmissions = submissions.filter(ts => now - ts < RATE_LIMIT_WINDOW);
    
    if (recentSubmissions.length >= RATE_LIMIT_MAX) {
      const oldestSubmission = Math.min(...recentSubmissions);
      const waitTime = Math.ceil((RATE_LIMIT_WINDOW - (now - oldestSubmission)) / 60000);
      return { limited: true, waitTime };
    }
    
    return { limited: false };
  } catch {
    return { limited: false };
  }
}

/**
 * Record a submission for rate limiting
 */
function recordSubmission(formSource: string): void {
  try {
    const key = getRateLimitKey(formSource);
    const stored = localStorage.getItem(key);
    const submissions: number[] = stored ? JSON.parse(stored) : [];
    const now = Date.now();
    
    // Clean old submissions and add new one
    const recentSubmissions = submissions.filter(ts => now - ts < RATE_LIMIT_WINDOW);
    recentSubmissions.push(now);
    
    localStorage.setItem(key, JSON.stringify(recentSubmissions));
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
 * Normalize phone number to digits only
 */
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Submit lead to the triple-layer capture system:
 * 1. Supabase database (primary)
 * 2. Google Sheets (backup)
 * 3. GoHighLevel CRM (if configured)
 */
export async function submitLead(formData: LeadFormData): Promise<SubmissionResult> {
  console.log('[Lead Submission] Starting submission process for form:', formData.formSource);
  
  // Check rate limiting first (per form source)
  const rateLimit = isRateLimited(formData.formSource);
  if (rateLimit.limited) {
    console.warn('[Lead Submission] Rate limited for form:', formData.formSource);
    return {
      success: false,
      error: `Too many submissions. Please try again in ${rateLimit.waitTime} minute${rateLimit.waitTime !== 1 ? 's' : ''}.`,
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
  
  // Clean form data - remove honeypot fields and normalize phone
  const cleanData = { 
    ...formData,
    phone: normalizePhone(formData.phone),
  };
  delete cleanData.website;
  delete cleanData._gotcha;
  delete cleanData._timestamp;
  
  console.log('[Lead Submission] Cleaned data prepared, invoking edge function...');
  
  try {
    console.log('[Lead Submission] Calling supabase.functions.invoke("ghl-submit")...');
    
    const response = await supabase.functions.invoke('ghl-submit', {
      body: cleanData,
    });

    console.log('[Lead Submission] Response received:', {
      hasData: !!response.data,
      hasError: !!response.error,
      errorMessage: response.error?.message,
    });

    if (response.error) {
      console.error('[Lead Submission] Edge function error:', response.error);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to submit. Please try again or call us at 678-671-6336.';
      if (response.error.message?.includes('Failed to fetch') || response.error.message?.includes('NetworkError')) {
        errorMessage = 'Network error - please check your connection and try again.';
      } else if (response.error.message?.includes('timeout')) {
        errorMessage = 'Request timed out - please try again.';
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
        error: 'No response from server - please try again.',
      };
    }

    console.log('[Lead Submission] Success! Lead ID:', response.data.leadId);
    
    // Record successful submission for rate limiting
    recordSubmission(formData.formSource);

    return {
      success: response.data.success,
      leadId: response.data.leadId,
      contactId: response.data.contactId,
      syncStatus: response.data.syncStatus,
    };
  } catch (error) {
    console.error('[Lead Submission] Exception caught:', error);
    
    return {
      success: false,
      error: 'Network error - please check your connection and try again.',
    };
  }
}

/**
 * Get the form load timestamp for timing validation
 */
export function getFormTimestamp(): number {
  return Date.now();
}
