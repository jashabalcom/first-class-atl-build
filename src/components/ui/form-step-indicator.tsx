import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormStepIndicatorProps {
  steps: string[];
  currentStep: number;
  completedSteps: number[];
}

// Step descriptions for micro-copy
const stepDescriptions: Record<string, string> = {
  "Basic Info": "30 seconds",
  "Project Details": "Pick your project",
  "Description": "Tell us your vision",
  "AI Insights": "🎁 Free AI tips",
  "Review": "Almost done!"
};

export function FormStepIndicator({ steps, currentStep, completedSteps }: FormStepIndicatorProps) {
  return (
    <div className="w-full py-8">
      <div className="relative flex items-center justify-between">
        {/* Progress bar background */}
        <div className="absolute top-5 left-0 h-0.5 w-full bg-border" />
        
        {/* Progress bar fill */}
        <div 
          className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />

        {/* Step indicators */}
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(index);
          const isCurrent = currentStep === index;
          const isPast = index < currentStep;
          const isAIStep = step === "AI Insights";

          return (
            <div key={index} className="relative flex flex-col items-center gap-2 z-10">
              {/* Step circle */}
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background transition-all duration-300",
                  isCurrent && "border-primary scale-110 shadow-lg shadow-primary/20",
                  isCompleted && "border-primary bg-primary",
                  !isCurrent && !isCompleted && !isPast && "border-border",
                  isPast && !isCompleted && "border-primary",
                  // Special styling for AI step
                  isAIStep && !isCompleted && !isCurrent && "border-accent/50 bg-accent/5",
                  isAIStep && isCurrent && "border-accent scale-110 shadow-lg shadow-accent/30 bg-accent/10",
                  isAIStep && isCompleted && "border-accent bg-accent"
                )}
              >
                {isCompleted ? (
                  <Check className={cn(
                    "h-5 w-5 animate-scale-in",
                    isAIStep ? "text-accent-foreground" : "text-primary-foreground"
                  )} />
                ) : isAIStep ? (
                  <Sparkles className={cn(
                    "h-5 w-5 transition-colors",
                    isCurrent ? "text-accent" : "text-accent/60"
                  )} />
                ) : (
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      isCurrent && "text-primary",
                      !isCurrent && "text-muted-foreground"
                    )}
                  >
                    {index + 1}
                  </span>
                )}
              </div>

              {/* Step label */}
              <div className="flex flex-col items-center">
                <span
                  className={cn(
                    "text-xs font-medium text-center transition-colors max-w-[80px]",
                    isCurrent && "text-foreground",
                    !isCurrent && "text-muted-foreground",
                    isAIStep && !isCurrent && "text-accent/70",
                    isAIStep && isCurrent && "text-accent font-semibold"
                  )}
                >
                  {step}
                </span>
                {/* Micro-copy - only show for current and upcoming steps */}
                {(isCurrent || (!isCompleted && !isPast)) && (
                  <span className={cn(
                    "text-[10px] text-center max-w-[70px] leading-tight mt-0.5 hidden sm:block",
                    isAIStep ? "text-accent/60" : "text-muted-foreground/70"
                  )}>
                    {stepDescriptions[step]}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
