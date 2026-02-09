/**
 * Google Ads Conversion Tracking
 * 
 * Fires conversion events to Google Ads (AW-17856485643).
 * Tracks: form submissions, phone clicks, booking page, AI visualizer, chat widget.
 */

const GOOGLE_ADS_ID = 'AW-17856485643';
// TODO: Replace with your actual conversion label from Google Ads
const CONVERSION_LABEL: string | null = null;

function fireConversion(eventCategory: string, eventLabel: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    console.warn('[gtag] gtag not loaded, skipping conversion tracking');
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: CONVERSION_LABEL || GOOGLE_ADS_ID,
    event_category: eventCategory,
    event_label: eventLabel,
  });

  console.log(`[gtag] Conversion fired: ${eventCategory} / ${eventLabel}`);
}

/** Form submission conversion */
export function trackFormConversion(formSource?: string) {
  fireConversion('lead', formSource || 'form_submit');
}

/** Phone call click conversion */
export function trackPhoneClick() {
  fireConversion('engagement', 'phone_call_click');
}

/** Booking page calendar loaded */
export function trackBookingPageView() {
  fireConversion('engagement', 'booking_calendar_loaded');
}

/** AI Room Visualizer generated */
export function trackVisualizerConversion() {
  fireConversion('lead', 'ai_visualizer_generated');
}

/** GHL Chat widget opened */
export function trackChatOpen() {
  fireConversion('engagement', 'chat_widget_opened');
}

/**
 * Initialize global click tracking for phone links and chat widget.
 * Call once from App or main.
 */
export function initGlobalConversionTracking() {
  if (typeof document === 'undefined') return;

  // Track all tel: link clicks via event delegation
  document.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('a[href^="tel:"]');
    if (target) {
      trackPhoneClick();
    }
  });

  // Track GHL chat widget click (widget injects an iframe/button)
  const observer = new MutationObserver(() => {
    const chatButton = document.querySelector('[data-widget-id], .lc_text-widget, iframe[src*="leadconnectorhq"]');
    if (chatButton && !chatButton.getAttribute('data-gtag-tracked')) {
      chatButton.setAttribute('data-gtag-tracked', 'true');
      chatButton.addEventListener('click', () => trackChatOpen());
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
