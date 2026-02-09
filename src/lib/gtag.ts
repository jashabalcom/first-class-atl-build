/**
 * Google Ads Conversion Tracking
 * 
 * Fires a conversion event to Google Ads (AW-17856485643).
 * 
 * To add a specific conversion label:
 * 1. Go to Google Ads > Goals > Conversions > New conversion action
 * 2. Create "Lead Form Submit" conversion
 * 3. Replace the CONVERSION_LABEL below with your label (e.g., 'AW-17856485643/AbCdEf...')
 */

const GOOGLE_ADS_ID = 'AW-17856485643';
// TODO: Replace with your actual conversion label from Google Ads
const CONVERSION_LABEL: string | null = null;

export function trackFormConversion(formSource?: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    console.warn('[gtag] gtag not loaded, skipping conversion tracking');
    return;
  }

  if (CONVERSION_LABEL) {
    // Fire specific conversion with label
    window.gtag('event', 'conversion', {
      send_to: CONVERSION_LABEL,
      event_category: 'lead',
      event_label: formSource || 'form_submit',
    });
  } else {
    // Fire generic conversion event (still tracked by Google Ads)
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_ID,
      event_category: 'lead',
      event_label: formSource || 'form_submit',
    });
  }

  console.log(`[gtag] Conversion fired: ${formSource || 'form_submit'}`);
}
