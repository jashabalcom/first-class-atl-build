

## Google Ads Conversion Tracking: Complete Fix

### The Problem
The conversion label in `src/lib/gtag.ts` (line 10) is still set to `null`. This means every conversion event fires to the generic account ID instead of the specific conversion action you created in Google Ads. That's why conversions aren't showing up in your main campaign charts.

### The Fix -- One Line Change
**File: `src/lib/gtag.ts`, line 10**

Change:
```
const CONVERSION_LABEL: string | null = null;
```
To:
```
const CONVERSION_LABEL = 'AW-17856485643/tzJuCKb4yPUbEIuy0cJC';
```

### What This Connects (All 5 Conversion Channels)

Once the label is set, every conversion event across your entire site will send the correct `send_to: 'AW-17856485643/tzJuCKb4yPUbEIuy0cJC'` value to Google Ads:

| Channel | Where It Fires | Event Type |
|---|---|---|
| Contact Form | `/contact`, homepage, service pages | Lead |
| Multi-Step Residential Form | `/residential` | Lead |
| Multi-Step Commercial Form | `/commercial` | Lead |
| Exit-Intent Popup | Site-wide (triggers on mouse leave) | Lead |
| Budget Estimator | Embedded on pages | Lead |
| Phone Call Clicks | Every `tel:678-671-6336` link site-wide | Engagement |
| Booking Calendar | `/book` page (fires when calendar loads) | Engagement |
| AI Room Visualizer | `/room-visualizer` (fires on image generation) | Lead |
| GHL Chat Widget | Site-wide (fires when chat button clicked) | Engagement |

### How to Verify After Deployment

1. Open your live site in Chrome
2. Open DevTools (F12) and go to Console
3. Submit a test form, click the phone number, or visit `/book`
4. You should see: `[gtag] Conversion fired: lead / contact` with the correct send_to value
5. In Google Ads, conversions should appear in the main charts within 1-24 hours

### Technical Details
- The Google Tag (`gtag.js`) is already correctly installed in `index.html` (line 39-45)
- `initGlobalConversionTracking()` is called on app mount in `App.tsx` (line 91), which sets up phone click tracking and chat widget detection
- All 5 form components already import and call `trackFormConversion()` on successful submission
- The booking page already calls `trackBookingPageView()` on iframe load
- The visualizer already calls `trackVisualizerConversion()` on successful generation
- No other files need changes -- just the one label value

