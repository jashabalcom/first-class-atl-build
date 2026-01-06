import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

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
          By checking this box, I consent to receive text messages and phone calls 
          from First Class Construction Group at the phone number provided. 
          Message and data rates may apply. Message frequency varies. 
          Reply STOP to opt out.
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
