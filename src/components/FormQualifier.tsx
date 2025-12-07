import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Hammer, Bath, Home, PlusCircle, Building2, Wrench, Sparkles, ArrowRight, Clock, Zap, Calendar, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormQualifierProps {
  onComplete: (projectType: string, timeline: string) => void;
}

const projectTypes = [
  { id: "kitchen", title: "Kitchen", icon: Hammer, description: "Counters, cabinets, layout" },
  { id: "bathroom", title: "Bathroom", icon: Bath, description: "Vanity, tile, fixtures" },
  { id: "basement", title: "Basement", icon: Home, description: "Finish or remodel" },
  { id: "addition", title: "Addition", icon: PlusCircle, description: "Expand your space" },
  { id: "whole-home", title: "Full Remodel", icon: Building2, description: "Multiple rooms" },
  { id: "other", title: "Other", icon: Wrench, description: "Something else" },
];

const timelines = [
  { id: "immediate", title: "ASAP", icon: Zap, description: "Ready to start now" },
  { id: "1-3-months", title: "1-3 Months", icon: Clock, description: "Soon, but flexible" },
  { id: "3-6-months", title: "3-6 Months", icon: Calendar, description: "Planning ahead" },
  { id: "planning", title: "Just Exploring", icon: HelpCircle, description: "Gathering ideas" },
];

export function FormQualifier({ onComplete }: FormQualifierProps) {
  const [step, setStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    // Auto-advance after a brief delay for visual feedback
    setTimeout(() => setStep(1), 300);
  };

  const handleTimelineSelect = (timelineId: string) => {
    setSelectedTimeline(timelineId);
    // Auto-advance after a brief delay for visual feedback
    setTimeout(() => onComplete(selectedProject, timelineId), 300);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className={cn(
          "w-3 h-3 rounded-full transition-all duration-300",
          step >= 0 ? "bg-primary scale-110" : "bg-muted"
        )} />
        <div className="w-8 h-0.5 bg-muted">
          <div className={cn(
            "h-full bg-primary transition-all duration-500",
            step >= 1 ? "w-full" : "w-0"
          )} />
        </div>
        <div className={cn(
          "w-3 h-3 rounded-full transition-all duration-300",
          step >= 1 ? "bg-primary scale-110" : "bg-muted"
        )} />
      </div>

      {step === 0 && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-3">
              What are you looking to remodel?
            </h3>
            <p className="text-muted-foreground">
              Select your project type to get started
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {projectTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedProject === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleProjectSelect(type.id)}
                  className={cn(
                    "group relative p-4 md:p-6 rounded-xl border-2 transition-all duration-300 text-left",
                    "hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1",
                    isSelected 
                      ? "border-primary bg-primary/10 shadow-lg -translate-y-1" 
                      : "border-border bg-card"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 transition-colors",
                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                  )}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{type.title}</h4>
                  <p className="text-xs text-muted-foreground">{type.description}</p>
                  
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-scale-in">
                      <ArrowRight className="w-3 h-3 text-primary-foreground" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-3">
              When are you hoping to start?
            </h3>
            <p className="text-muted-foreground">
              This helps us prioritize your request
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {timelines.map((timeline) => {
              const Icon = timeline.icon;
              const isSelected = selectedTimeline === timeline.id;
              return (
                <button
                  key={timeline.id}
                  type="button"
                  onClick={() => handleTimelineSelect(timeline.id)}
                  className={cn(
                    "group relative p-4 md:p-6 rounded-xl border-2 transition-all duration-300 text-left",
                    "hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1",
                    isSelected 
                      ? "border-primary bg-primary/10 shadow-lg -translate-y-1" 
                      : "border-border bg-card"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 transition-colors",
                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                  )}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{timeline.title}</h4>
                  <p className="text-xs text-muted-foreground">{timeline.description}</p>
                  
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-scale-in">
                      <ArrowRight className="w-3 h-3 text-primary-foreground" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setStep(0)}
            className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto block"
          >
            ← Back to project selection
          </button>
        </div>
      )}

      {/* AI Preview Teaser */}
      <div className="mt-8 p-4 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border border-accent/20 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              You'll unlock <span className="text-accent font-semibold">FREE AI Design Ideas</span> after completing the form
            </p>
            <p className="text-xs text-muted-foreground">
              Personalized recommendations for your project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
