import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SMSConsentCheckboxesProps {
  marketingConsent: boolean;
  nonMarketingConsent: boolean;
  onMarketingChange: (checked: boolean) => void;
  onNonMarketingChange: (checked: boolean) => void;
  className?: string;
}

/**
 * A2P 10DLC Compliant SMS Consent Checkboxes
 * 
 * Per GoHighLevel 2026 requirements:
 * - Two separate checkboxes: Marketing and Non-Marketing
 * - Neither pre-checked
 * - Both OPTIONAL (not required to submit form)
 * - Exact carrier-mandated language
 * - Business name must match registration docs
 */
export function SMSConsentCheckboxes({ 
  marketingConsent,
  nonMarketingConsent,
  onMarketingChange,
  onNonMarketingChange,
  className 
}: SMSConsentCheckboxesProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Non-Marketing SMS Consent (Customer Care) */}
      <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-muted/30">
        <Checkbox
          id="non-marketing-sms-consent"
          checked={nonMarketingConsent}
          onCheckedChange={(checked) => onNonMarketingChange(checked === true)}
          className="mt-0.5"
        />
        <Label 
          htmlFor="non-marketing-sms-consent" 
          className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
        >
          I consent to receive non-marketing text messages from First Class Construction Group 
          about estimates, project updates, invoices, scheduling, and customer service. 
          Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
        </Label>
      </div>

      {/* Marketing SMS Consent */}
      <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-muted/30">
        <Checkbox
          id="marketing-sms-consent"
          checked={marketingConsent}
          onCheckedChange={(checked) => onMarketingChange(checked === true)}
          className="mt-0.5"
        />
        <Label 
          htmlFor="marketing-sms-consent" 
          className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
        >
          I consent to receive marketing text messages from First Class Construction Group 
          at the phone number provided. Frequency may vary. Message & data rates may apply. 
          Text HELP for assistance, reply STOP to opt out.
        </Label>
      </div>

      {/* Policy Links */}
      <p className="text-xs text-muted-foreground text-center">
        View our{" "}
        <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">
          Terms of Service
        </Link>
      </p>
    </div>
  );
}

// Legacy single checkbox for backwards compatibility during transition
interface SMSConsentCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  error?: string;
  className?: string;
}

export function SMSConsentCheckbox({ 
  checked, 
  onCheckedChange, 
  error,
  className 
}: SMSConsentCheckboxProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-start gap-3">
        <Checkbox
          id="sms-consent"
          checked={checked}
          onCheckedChange={(checked) => onCheckedChange(checked === true)}
          className="mt-1"
        />
        <Label 
          htmlFor="sms-consent" 
          className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
        >
          I agree to receive SMS text messages from First Class Construction Group regarding estimates, 
          project updates, invoices, and customer service communications. Message 
          frequency may vary. Message & data rates may apply. Reply STOP to opt out 
          or HELP for help. I agree to the{" "}
          <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">
            Terms of Service
          </Link>.
        </Label>
      </div>
      {error && (
        <p className="text-xs text-destructive animate-fade-in pl-7">
          {error}
        </p>
      )}
    </div>
  );
}
