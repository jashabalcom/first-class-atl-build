import { cn } from "@/lib/utils";
import { Check, Gift, Sparkles, Star, Trophy, Zap } from "lucide-react";

interface Milestone {
  step: number;
  label: string;
  icon: React.ReactNode;
  reward: string;
}

interface GamifiedProgressBarProps {
  currentStep: number;
  totalSteps: number;
  completedSteps: number[];
}

const milestones: Milestone[] = [
  { step: 0, label: "Started", icon: <Zap className="w-3 h-3" />, reward: "Great start!" },
  { step: 1, label: "Details", icon: <Star className="w-3 h-3" />, reward: "Project picked!" },
  { step: 2, label: "Vision", icon: <Sparkles className="w-3 h-3" />, reward: "Almost there!" },
  { step: 3, label: "AI Bonus", icon: <Gift className="w-3 h-3" />, reward: "AI Unlocked!" },
  { step: 4, label: "Complete", icon: <Trophy className="w-3 h-3" />, reward: "You did it!" },
];

export function GamifiedProgressBar({ currentStep, totalSteps, completedSteps }: GamifiedProgressBarProps) {
  const progressPercentage = Math.round((currentStep / (totalSteps - 1)) * 100);
  const isComplete = currentStep === totalSteps - 1;
  
  // Get current milestone reward message
  const currentMilestone = milestones.find(m => m.step === currentStep);
  const showReward = completedSteps.includes(currentStep - 1) && currentStep > 0;

  return (
    <div className="mb-8 space-y-4">
      {/* Percentage and reward message */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">{progressPercentage}%</span>
          <span className="text-sm text-muted-foreground">complete</span>
        </div>
        
        {showReward && currentMilestone && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full animate-scale-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">{currentMilestone.reward}</span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="relative">
        {/* Background track */}
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          {/* Animated fill */}
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-700 ease-out",
              isComplete 
                ? "bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-pulse" 
                : "bg-gradient-to-r from-primary to-accent"
            )}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Milestone markers */}
        <div className="absolute inset-0 flex justify-between items-center px-0">
          {milestones.map((milestone, index) => {
            const position = (index / (milestones.length - 1)) * 100;
            const isCompleted = completedSteps.includes(milestone.step) || currentStep > milestone.step;
            const isCurrent = currentStep === milestone.step;
            
            return (
              <div 
                key={milestone.step}
                className="relative flex flex-col items-center"
                style={{ position: 'absolute', left: `${position}%`, transform: 'translateX(-50%)' }}
              >
                {/* Marker dot */}
                <div 
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 border-2",
                    isCompleted 
                      ? "bg-primary border-primary text-primary-foreground scale-100" 
                      : isCurrent 
                        ? "bg-background border-primary text-primary scale-110 shadow-lg shadow-primary/30" 
                        : "bg-muted border-muted-foreground/30 text-muted-foreground scale-90"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    milestone.icon
                  )}
                </div>
                
                {/* Label */}
                <span 
                  className={cn(
                    "absolute -bottom-5 text-[10px] font-medium whitespace-nowrap transition-colors",
                    isCompleted || isCurrent ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {milestone.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spacer for labels */}
      <div className="h-4" />

      {/* Motivational message */}
      {currentStep < totalSteps - 1 && (
        <p className="text-center text-sm text-muted-foreground">
          {currentStep === 0 && "Let's get to know you!"}
          {currentStep === 1 && "Tell us about your project"}
          {currentStep === 2 && "Share your vision with us"}
          {currentStep === 3 && "Your personalized AI insights are ready!"}
        </p>
      )}
      
      {isComplete && (
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Ready to submit!</span>
          </div>
        </div>
      )}
    </div>
  );
}
