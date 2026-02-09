

## Install Google Ads Tag (gtag.js) + Conversion Tracking

### What This Does
Installs your Google Ads tracking tag (AW-17856485643) so every page view is tracked, and fires a conversion event whenever someone successfully submits any lead form on the site.

### Step 1: Add gtag.js to index.html

Insert the Google tag script in the `<head>` section of `index.html`, right after the existing meta tags and before the font preconnects:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17856485643"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17856485643');
</script>
```

### Step 2: Create a Conversion Tracking Utility

Create a small helper file (`src/lib/gtag.ts`) that fires a Google Ads conversion event. This keeps the tracking code centralized and easy to update when you set up your actual conversion action ID in Google Ads.

The function will call `gtag('event', 'conversion', ...)` with your Google Ads conversion label.

**Note:** You'll need to create a "Conversion Action" in Google Ads (Settings > Conversions > New) to get a conversion label (e.g., `AW-17856485643/AbCdEf...`). For now, we'll fire a generic conversion event that Google Ads will still register, and you can add the specific label later.

### Step 3: Fire Conversion on All Form Submissions

Add the conversion tracking call to the success path of every lead form (5 forms total):

1. **ContactForm.tsx** -- fires after `result.success` (line ~118)
2. **MultiStepContactForm.tsx** -- fires after `result.success` (line ~195)
3. **MultiStepCommercialForm.tsx** -- fires after successful submission (line ~179)
4. **ExitIntentPopup.tsx** -- fires after `result.success` (line ~121)
5. **BudgetEstimator.tsx** -- fires after successful email/estimate submission

Each form will import and call the tracking function right when the submission succeeds, before showing the toast/success state. No thank-you page redirect needed -- the conversion fires on the success callback.

### Step 4: TypeScript Declaration

Add a small type declaration file (`src/types/gtag.d.ts`) so TypeScript doesn't complain about the global `gtag` function.

---

### Files Changed
| File | Change |
|------|--------|
| `index.html` | Add gtag.js script in `<head>` |
| `src/lib/gtag.ts` | New -- conversion tracking helper |
| `src/types/gtag.d.ts` | New -- TypeScript type declaration |
| `src/components/ContactForm.tsx` | Add conversion call on success |
| `src/components/MultiStepContactForm.tsx` | Add conversion call on success |
| `src/components/MultiStepCommercialForm.tsx` | Add conversion call on success |
| `src/components/ExitIntentPopup.tsx` | Add conversion call on success |
| `src/components/BudgetEstimator.tsx` | Add conversion call on success |

### After Implementation
Once this is live, you'll need to:
1. Go to Google Ads > Goals > Conversions > New conversion action
2. Choose "Website" and enter your domain
3. Create a conversion named "Lead Form Submit"
4. Copy the conversion label (looks like `AW-17856485643/XyZ123...`)
5. Update the label in `src/lib/gtag.ts` -- or just tell me and I'll update it

Until then, all page views will track immediately, and form submissions will fire as generic conversion events.
