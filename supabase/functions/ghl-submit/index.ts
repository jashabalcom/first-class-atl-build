import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Allowed origins for CORS
const allowedOrigins = [
  'https://firstclassconstructionatlanta.com',
  'https://www.firstclassconstructionatlanta.com',
  'http://localhost:5173',
  'http://localhost:8080',
];

// Check if origin is allowed (includes Lovable preview URLs)
function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (allowedOrigins.includes(origin)) return true;
  // Allow Lovable preview URLs
  if (origin.includes('.lovable.app') || origin.includes('.lovableproject.com')) return true;
  return false;
}

function getCorsHeaders(origin: string | null) {
  const allowedOrigin = isAllowedOrigin(origin) ? origin : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin!,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };
}

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
  formSource: string;
}

// Simple validation
function validateFormData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.name || typeof data.name !== 'string' || data.name.length < 1 || data.name.length > 100) {
    errors.push('Name is required and must be 1-100 characters');
  }
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@') || data.email.length > 255) {
    errors.push('Valid email is required');
  }
  // Phone is optional, but if provided must be valid
  if (data.phone && typeof data.phone === 'string' && data.phone.length > 0) {
    const digitsOnly = data.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      errors.push('Phone number must be 10-15 digits');
    }
  }
  if (!data.formSource || typeof data.formSource !== 'string') {
    errors.push('Form source is required');
  }
  
  return { valid: errors.length === 0, errors };
}

// Append row to Google Sheets
async function appendToGoogleSheets(lead: FormSubmission & { created_at: string }): Promise<boolean> {
  try {
    let privateKey = Deno.env.get('GOOGLE_SHEETS_PRIVATE_KEY');
    let clientEmail = Deno.env.get('GOOGLE_SHEETS_CLIENT_EMAIL');
    const spreadsheetId = Deno.env.get('GOOGLE_SHEETS_SPREADSHEET_ID');
    
    if (!privateKey || !spreadsheetId) {
      console.log('Google Sheets credentials not configured, skipping...');
      return false;
    }

    // Handle if the entire JSON file was pasted instead of just the private_key
    // This also extracts client_email to ensure they match
    if (privateKey.includes('"private_key"')) {
      try {
        const jsonData = JSON.parse(privateKey);
        if (jsonData.private_key) {
          privateKey = jsonData.private_key;
          console.log('Extracted private_key from JSON object');
        }
        if (jsonData.client_email) {
          clientEmail = jsonData.client_email;
          console.log('Extracted client_email from JSON object:', clientEmail);
        }
      } catch {
        console.error('Could not parse private key JSON');
      }
    }

    // Verify we have both required credentials after potential extraction
    if (!privateKey || !clientEmail) {
      console.error('Private key or client email is missing');
      return false;
    }

    // Create JWT for Google Sheets API
    const header = { alg: 'RS256', typ: 'JWT' };
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    };

    // Encode JWT parts
    const encoder = new TextEncoder();
    const toBase64Url = (data: Uint8Array) => 
      btoa(String.fromCharCode(...data))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    
    const headerB64 = toBase64Url(encoder.encode(JSON.stringify(header)));
    const payloadB64 = toBase64Url(encoder.encode(JSON.stringify(payload)));
    const signatureInput = `${headerB64}.${payloadB64}`;

    // Debug: Log raw key info (first/last chars only for security)
    console.log('Raw private key length:', privateKey.length);
    console.log('Key starts with:', privateKey.substring(0, 50));
    console.log('Key ends with:', privateKey.substring(privateKey.length - 30));
    
    // Import private key and sign - handle various escaped newline formats
    let processedKey = privateKey;
    
    // Handle literal \n strings (from JSON/env)
    processedKey = processedKey.replace(/\\n/g, '\n');
    // Handle \\n that became \n in string
    processedKey = processedKey.replace(/\\\\n/g, '\n');
    
    // Extract the base64 content
    const cleanedKey = processedKey
      .replace(/-----BEGIN PRIVATE KEY-----/g, '')
      .replace(/-----END PRIVATE KEY-----/g, '')
      .replace(/[\s\n\r]/g, '');
    
    console.log('Cleaned key length:', cleanedKey.length);
    
    if (cleanedKey.length < 1000) {
      console.error('Private key seems too short. Expected ~1700 chars, got:', cleanedKey.length);
      console.log('Make sure you copied the ENTIRE private_key value from the service account JSON, including the -----BEGIN/END----- markers');
      return false;
    }
    
    const binaryKey = Uint8Array.from(atob(cleanedKey), c => c.charCodeAt(0));
    
    const cryptoKey = await crypto.subtle.importKey(
      'pkcs8',
      binaryKey,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      cryptoKey,
      encoder.encode(signatureInput)
    );
    
    const signatureB64 = toBase64Url(new Uint8Array(signature));
    const jwt = `${signatureInput}.${signatureB64}`;

    // Get access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
    });
    
    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      console.error('Failed to get Google access token:', tokenData);
      return false;
    }

    // Prepare row data
    const rowData = [
      lead.created_at,
      lead.name,
      lead.email,
      lead.phone,
      lead.projectType || '',
      lead.city || '',
      lead.timeline || '',
      lead.message || '',
      lead.estimatedBudget || '',
      lead.companyName || '',
      lead.businessType || '',
      lead.squareFootage || '',
      lead.formSource,
    ];

    // Append to sheet (use A:M without sheet name to append to first sheet)
    const appendResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A:M:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values: [rowData] }),
      }
    );

    if (!appendResponse.ok) {
      const error = await appendResponse.text();
      console.error('Google Sheets append error:', error);
      return false;
    }

    console.log('Successfully appended to Google Sheets');
    return true;
  } catch (error) {
    console.error('Google Sheets error:', error);
    return false;
  }
}

// Send to GoHighLevel
async function sendToGHL(formData: FormSubmission): Promise<{ success: boolean; contactId?: string }> {
  try {
    const ghlApiKey = Deno.env.get('GHL_API_KEY');
    const ghlLocationId = Deno.env.get('GHL_LOCATION_ID');

    if (!ghlApiKey || !ghlLocationId) {
      console.log('GHL credentials not configured, skipping...');
      return { success: false };
    }

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
      contactPayload.customFields.push({ key: 'projectType', value: formData.projectType });
    }
    if (formData.timeline) {
      contactPayload.customFields.push({ key: 'timeline', value: formData.timeline });
    }
    if (formData.city) {
      contactPayload.customFields.push({ key: 'city', value: formData.city });
    }
    if (formData.estimatedBudget) {
      contactPayload.customFields.push({ key: 'estimatedBudget', value: formData.estimatedBudget });
    }
    if (formData.message) {
      contactPayload.customFields.push({ key: 'message', value: formData.message });
    }
    if (formData.companyName) {
      contactPayload.customFields.push({ key: 'companyName', value: formData.companyName });
    }
    if (formData.businessType) {
      contactPayload.customFields.push({ key: 'businessType', value: formData.businessType });
    }
    if (formData.squareFootage) {
      contactPayload.customFields.push({ key: 'squareFootage', value: formData.squareFootage });
    }
    contactPayload.customFields.push({ key: 'formSource', value: formData.formSource });

    console.log('Sending to GHL:', { ...contactPayload, email: '***', phone: '***' });

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
      return { success: false };
    }

    console.log('GHL success:', ghlData);
    return { success: true, contactId: ghlData.contact?.id };
  } catch (error) {
    console.error('GHL error:', error);
    return { success: false };
  }
}

serve(async (req) => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: FormSubmission = await req.json();
    console.log('Received form submission:', { ...formData, email: '***', phone: '***' });

    // Validate input
    const validation = validateFormData(formData);
    if (!validation.valid) {
      console.error('Validation errors:', validation.errors);
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: validation.errors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const syncErrors: string[] = [];
    const created_at = new Date().toISOString();

    // STEP 1: Save to database (primary capture - must succeed)
    const { data: leadData, error: dbError } = await supabase
      .from('leads')
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType || null,
        city: formData.city || null,
        timeline: formData.timeline || null,
        message: formData.message || null,
        estimated_budget: formData.estimatedBudget || null,
        company_name: formData.companyName || null,
        business_type: formData.businessType || null,
        square_footage: formData.squareFootage || null,
        form_source: formData.formSource,
        synced_to_sheets: false,
        synced_to_ghl: false,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database insert error:', dbError);
      // Even if DB fails, try other methods
      syncErrors.push(`Database: ${dbError.message}`);
    } else {
      console.log('Lead saved to database:', leadData.id);
    }

    // STEP 2: Sync to Google Sheets (backup)
    const sheetsSuccess = await appendToGoogleSheets({ ...formData, created_at });
    if (!sheetsSuccess) {
      syncErrors.push('Google Sheets sync failed');
    }

    // STEP 3: Send to GoHighLevel (CRM)
    const ghlResult = await sendToGHL(formData);
    if (!ghlResult.success) {
      syncErrors.push('GoHighLevel sync failed');
    }

    // Update lead with sync status
    if (leadData?.id) {
      await supabase
        .from('leads')
        .update({
          synced_to_sheets: sheetsSuccess,
          synced_to_ghl: ghlResult.success,
          ghl_contact_id: ghlResult.contactId || null,
          sync_errors: syncErrors.length > 0 ? syncErrors : [],
        })
        .eq('id', leadData.id);
    }

    // Success if at least database OR sheets captured the lead
    const captured = leadData || sheetsSuccess;
    
    if (!captured) {
      return new Response(
        JSON.stringify({ error: 'Failed to capture lead', details: syncErrors }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        leadId: leadData?.id,
        contactId: ghlResult.contactId,
        syncStatus: {
          database: !!leadData,
          googleSheets: sheetsSuccess,
          goHighLevel: ghlResult.success,
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in ghl-submit function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...getCorsHeaders(req.headers.get('origin')), 'Content-Type': 'application/json' } }
    );
  }
});
