import * as React from "react";
import { cn } from "@/lib/utils";

export interface FloatingTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  success?: boolean;
  showCharCount?: boolean;
}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ className, label, error, success, showCharCount, maxLength, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const [charCount, setCharCount] = React.useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(e.target.value.length > 0);
      setCharCount(e.target.value.length);
      props.onChange?.(e);
    };

    const isFloating = isFocused || hasValue || props.value;

    return (
      <div className="relative">
        <textarea
          ref={ref}
          className={cn(
            "peer min-h-[120px] w-full rounded-md border bg-background px-3 pt-6 pb-2 text-base transition-all",
            "ring-offset-background placeholder:text-transparent resize-none",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-destructive focus-visible:ring-destructive",
            success && "border-green-500 focus-visible:ring-green-500",
            !error && !success && "border-input",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          placeholder={label}
          maxLength={maxLength}
          {...props}
        />
        <label
          className={cn(
            "absolute left-3 top-4 text-muted-foreground transition-all pointer-events-none",
            "peer-focus:top-2 peer-focus:text-xs peer-focus:text-foreground",
            isFloating && "top-2 text-xs text-foreground"
          )}
        >
          {label}
        </label>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex-1">
            {error && (
              <p className="text-xs text-destructive animate-fade-in">
                {error}
              </p>
            )}
          </div>
          {showCharCount && maxLength && (
            <p className={cn(
              "text-xs transition-colors",
              charCount > maxLength * 0.9 ? "text-destructive" : "text-muted-foreground"
            )}>
              {charCount}/{maxLength}
            </p>
          )}
        </div>
        {success && !error && (
          <div className="absolute right-3 top-4">
            <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
    );
  }
);

FloatingTextarea.displayName = "FloatingTextarea";

export { FloatingTextarea };
