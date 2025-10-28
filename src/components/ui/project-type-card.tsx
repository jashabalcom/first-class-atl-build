import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ProjectTypeCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  selected: boolean;
  onClick: () => void;
}

export const ProjectTypeCard = React.forwardRef<HTMLButtonElement, ProjectTypeCardProps>(
  ({ icon: Icon, title, value, selected, onClick }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
          "relative flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 min-h-[80px] sm:min-h-[100px]",
          "hover:scale-105 hover:shadow-md active:scale-95",
          selected
            ? "border-accent bg-accent/10 shadow-sm"
            : "border-input bg-card hover:border-accent/50"
        )}
      >
        <div className={cn(
          "p-2 sm:p-3 rounded-full transition-colors",
          selected ? "bg-accent/20" : "bg-muted"
        )}>
          <Icon className={cn(
            "h-5 w-5 sm:h-6 sm:w-6 transition-colors",
            selected ? "text-accent" : "text-muted-foreground"
          )} />
        </div>
        <span className={cn(
          "text-xs sm:text-sm font-medium text-center transition-colors leading-tight",
          selected ? "text-accent" : "text-foreground"
        )}>
          {title}
        </span>
        {selected && (
          <div className="absolute top-2 right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center animate-scale-in">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </button>
    );
  }
);

ProjectTypeCard.displayName = "ProjectTypeCard";
