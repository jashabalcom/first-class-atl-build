import { cn } from "@/lib/utils";

interface SMSFormDisclaimerProps {
  className?: string;
}

export function SMSFormDisclaimer({ className }: SMSFormDisclaimerProps) {
  return (
    <p className={cn("text-xs text-muted-foreground text-center", className)}>
      By submitting this form, you consent to receive SMS text messages from 
      FC Construct. Reply STOP to unsubscribe or HELP for assistance. 
      Message and data rates may apply.
    </p>
  );
}
