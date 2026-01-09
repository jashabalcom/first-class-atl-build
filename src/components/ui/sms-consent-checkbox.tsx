import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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
          I agree to receive SMS text messages from FC Construct regarding estimates, 
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
