import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ProjectTypeCard } from "@/components/ui/project-type-card";
import { Hammer, Bath, Home, PlusCircle, Building2, Calculator, ArrowRight, Info } from "lucide-react";
import { toast } from "sonner";
import { submitLead } from "@/lib/lead-submission";

// Conservative pricing matrix (in thousands)
const PRICING_DATA = {
  kitchen: {
    base: { min: 15, max: 35 },
    standard: { min: 25, max: 50 },
    premium: { min: 45, max: 80 },
    luxury: { min: 75, max: 150 }
  },
  bathroom: {
    base: { min: 8, max: 18 },
    standard: { min: 15, max: 30 },
    premium: { min: 28, max: 50 },
    luxury: { min: 45, max: 85 }
  },
  basement: {
    base: { min: 20, max: 40 },
    standard: { min: 35, max: 60 },
    premium: { min: 55, max: 90 },
    luxury: { min: 85, max: 150 }
  },
  addition: {
    base: { min: 80, max: 150 },
    standard: { min: 140, max: 220 },
    premium: { min: 200, max: 300 },
    luxury: { min: 280, max: 450 }
  },
  "whole-home": {
    base: { min: 100, max: 200 },
    standard: { min: 180, max: 300 },
    premium: { min: 280, max: 450 },
    luxury: { min: 420, max: 750 }
  }
};

const projectTypes = [
  { id: "kitchen", title: "Kitchen Remodel", icon: Hammer },
  { id: "bathroom", title: "Bathroom Remodel", icon: Bath },
  { id: "basement", title: "Basement Finish", icon: Home },
  { id: "addition", title: "Home Addition", icon: PlusCircle },
  { id: "whole-home", title: "Whole Home Remodel", icon: Building2 },
];

const finishLevels = [
  { 
    id: "base", 
    title: "Essential", 
    description: "Quality materials, clean finish",
    features: ["Standard fixtures", "Durable finishes", "Code compliance"]
  },
  { 
    id: "standard", 
    title: "Select", 
    description: "Upgraded materials, great value",
    features: ["Mid-range fixtures", "Custom options", "Enhanced details"]
  },
  { 
    id: "premium", 
    title: "Premium", 
    description: "High-end materials, custom work",
    features: ["Designer fixtures", "Custom cabinetry", "Premium finishes"]
  },
  { 
    id: "luxury", 
    title: "Luxury", 
    description: "Top-tier materials, full custom",
    features: ["Luxury fixtures", "Full custom work", "Designer details"]
  }
];

interface BudgetEstimatorProps {
  onGetQuote?: () => void;
}

export function BudgetEstimator({ onGetQuote }: BudgetEstimatorProps) {
  const [projectType, setProjectType] = useState<string>("");
  const [scope, setScope] = useState<number>(50); // 0-100 percentage
  const [finishLevel, setFinishLevel] = useState<string>("standard");
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateEstimate = () => {
    if (!projectType) return { min: 0, max: 0 };
    
    const pricing = PRICING_DATA[projectType as keyof typeof PRICING_DATA][finishLevel as keyof typeof PRICING_DATA.kitchen];
    
    // Adjust based on scope (0-100%)
    const scopeMultiplier = 0.3 + (scope / 100) * 0.7; // 30% to 100%
    
    const min = Math.round(pricing.min * scopeMultiplier);
    const max = Math.round(pricing.max * scopeMultiplier);
    
    return { min, max };
  };

  const estimate = calculateEstimate();
  const hasEstimate = projectType !== "";

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount * 1000);
  };

  const getScopeLabel = () => {
    if (scope < 35) return "Partial Update";
    if (scope < 70) return "Standard Remodel";
    return "Complete Transformation";
  };

  const handleGetQuote = () => {
    if (hasEstimate) {
      setShowEmailCapture(true);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast.error("Please enter your name and email");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const estimateText = `${formatCurrency(estimate.min)} - ${formatCurrency(estimate.max)}`;
      const projectDetails = `${projectTypes.find(p => p.id === projectType)?.title} - ${getScopeLabel()} - ${finishLevels.find(l => l.id === finishLevel)?.title}`;
      
      const result = await submitLead({
        name,
        email,
        phone: '',
        projectType,
        estimatedBudget: estimateText,
        message: `Budget Estimator: ${projectDetails}. Estimated range: ${estimateText}`,
        formSource: 'budget'
      });

      if (!result.success) {
        toast.error("Failed to send estimate. Please try again or call us at 678-671-6336.");
        return;
      }

      toast.success("We've received your estimate request and will send you a detailed quote shortly!");
      setShowEmailCapture(false);
      setEmail("");
      setName("");
      
      if (onGetQuote) {
        onGetQuote();
      }
    } catch (error) {
      console.error('Budget estimator submission error:', error);
      toast.error("Failed to send estimate. Please try again or call us at 678-671-6336.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 md:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
          <Calculator className="h-3 md:h-4 w-3 md:w-4" />
          Instant Budget Estimator
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Get Your Project Estimate
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Get a realistic budget range in seconds. Select your project type, scope, and finish level below.
        </p>
      </div>

      {/* Project Type Selection */}
      <Card className="p-4 md:p-6 space-y-3 md:space-y-4">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">Project Type</h3>
          <p className="text-xs md:text-sm text-muted-foreground">What are you looking to remodel?</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
          {projectTypes.map((type) => (
            <ProjectTypeCard
              key={type.id}
              icon={type.icon}
              title={type.title}
              value={type.id}
              selected={projectType === type.id}
              onClick={() => setProjectType(type.id)}
            />
          ))}
        </div>
      </Card>

      {/* Scope Slider */}
      <Card className="p-4 md:p-6 space-y-3 md:space-y-4">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">Project Scope</h3>
          <p className="text-xs md:text-sm text-muted-foreground">How extensive is your remodel?</p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Partial</span>
            <span className="font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
              {getScopeLabel()}
            </span>
            <span className="text-muted-foreground">Complete</span>
          </div>
          <Slider
            value={[scope]}
            onValueChange={(value) => setScope(value[0])}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </Card>

      {/* Finish Level */}
      <Card className="p-4 md:p-6 space-y-3 md:space-y-4">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">Finish Level</h3>
          <p className="text-xs md:text-sm text-muted-foreground">Choose your quality tier</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {finishLevels.map((level) => (
            <button
              key={level.id}
              type="button"
              onClick={() => setFinishLevel(level.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                finishLevel === level.id
                  ? "border-accent bg-accent/10 shadow-sm"
                  : "border-input bg-card hover:border-accent/50"
              }`}
            >
              <h4 className={`font-semibold mb-1 ${
                finishLevel === level.id ? "text-accent" : "text-foreground"
              }`}>
                {level.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-3">{level.description}</p>
              <ul className="space-y-1">
                {level.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                    <span className="text-accent mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </Card>

      {/* Estimate Display */}
      {hasEstimate && (
        <Card className="p-8 space-y-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
            <div className="text-center space-y-2">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Your Estimated Investment Range
            </p>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {formatCurrency(estimate.min)} - {formatCurrency(estimate.max)}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              Based on {getScopeLabel().toLowerCase()} with {finishLevels.find(l => l.id === finishLevel)?.title.toLowerCase()} finishes
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 bg-background/50 rounded-lg border border-border">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="font-medium text-foreground">Important Note:</p>
              <p>
                This is a conservative estimate based on typical projects. Your actual cost may vary based on 
                specific requirements, materials, site conditions, and local market rates. Schedule a consultation 
                for an accurate quote tailored to your project.
              </p>
            </div>
          </div>

          {!showEmailCapture ? (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                size="lg" 
                onClick={handleGetQuote}
                className="gap-2 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto h-12"
              >
                Get Exact Quote
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  toast.info("Call us at (678) 671-6336 to discuss your project");
                }}
                className="gap-2 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto h-12"
              >
                Schedule Consultation
              </Button>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md mx-auto">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Me Quote"}
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => setShowEmailCapture(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </Card>
      )}

      {!hasEstimate && (
        <div className="text-center p-8 text-muted-foreground">
          <Calculator className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>Select a project type above to see your estimate</p>
        </div>
      )}
    </div>
  );
}
