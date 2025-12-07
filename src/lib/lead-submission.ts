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
  // Check rate limiting first
  if (isRateLimited()) {
    return {
      success: false,
      error: 'Too many submissions. Please try again later.',
    };
  }
  
  // Check for spam/bot indicators
  const spamCheck = detectSpam(formData);
  if (spamCheck.isSpam) {
    // Silently fail for bots (don't reveal detection)
    console.warn('Spam detected:', spamCheck.reason);
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
  
  try {
    const { data, error } = await supabase.functions.invoke('ghl-submit', {
      body: cleanData,
    });

    if (error) {
      console.error('Lead submission error:', error);
      return {
        success: false,
        error: error.message || 'Failed to submit lead',
      };
    }

    // Record successful submission for rate limiting
    recordSubmission();

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

/**
 * Get the form load timestamp for timing validation
 */
export function getFormTimestamp(): number {
  return Date.now();
}
