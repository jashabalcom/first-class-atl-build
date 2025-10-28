import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormStepIndicatorProps {
  steps: string[];
  currentStep: number;
  completedSteps: number[];
}

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

          return (
            <div key={index} className="relative flex flex-col items-center gap-2 z-10">
              {/* Step circle */}
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background transition-all duration-300",
                  isCurrent && "border-primary scale-110 shadow-lg shadow-primary/20",
                  isCompleted && "border-primary bg-primary",
                  !isCurrent && !isCompleted && !isPast && "border-border",
                  isPast && !isCompleted && "border-primary"
                )}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5 text-primary-foreground animate-scale-in" />
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
              <span
                className={cn(
                  "text-xs font-medium text-center transition-colors max-w-[80px]",
                  isCurrent && "text-foreground",
                  !isCurrent && "text-muted-foreground"
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
