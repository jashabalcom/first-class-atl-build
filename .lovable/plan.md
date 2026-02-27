

## Add Google Ads Conversion Label

**What's changing:** One simple but critical update -- plugging in your actual Google Ads conversion label so conversions start showing up in your Google Ads dashboard charts.

**Your conversion details:**
- Conversion ID: `17856485643`
- Conversion Label: `tzJuCKb4yPUbEIuy0cJC`
- Full send_to value: `AW-17856485643/tzJuCKb4yPUbEIuy0cJC`

**The fix:**
In `src/lib/gtag.ts`, line 10 currently reads:
```
const CONVERSION_LABEL: string | null = null;
```

It will be updated to:
```
const CONVERSION_LABEL = 'AW-17856485643/tzJuCKb4yPUbEIuy0cJC';
```

**What this unlocks:**
All 5 tracking channels (form submissions, phone clicks, booking page, AI visualizer, chat widget) will now send the correct `send_to` value that Google Ads needs to count them as real conversions in your campaign reports and optimization algorithms.

**After deployment**, conversions should start appearing in your main Google Ads charts within 1-3 hours (sometimes up to 24 hours for the first batch).

