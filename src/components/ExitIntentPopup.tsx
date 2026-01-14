import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { SMSConsentCheckboxes } from "@/components/ui/sms-consent-checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitLead, getFormTimestamp } from "@/lib/lead-submission";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Check, Gift, Clock, Phone, X, Sparkles, Wand2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    marketingSmsConsent: false,
    nonMarketingSmsConsent: false,
  });
  // Anti-spam
  const [honeypotWebsite, setHoneypotWebsite] = useState('');
  const [formTimestamp] = useState(() => getFormTimestamp());
  const { toast } = useToast();
  const navigate = useNavigate();

  const showPopup = useCallback(() => {
    const hasShown = sessionStorage.getItem("exitIntentShown");
    if (!hasShown) {
      setIsOpen(true);
      sessionStorage.setItem("exitIntentShown", "true");
    }
  }, []);

  useEffect(() => {
    // Desktop: Mouse leaves viewport toward top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    // Mobile: Inactivity timer (45 seconds)
    let inactivityTimer: NodeJS.Timeout;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        showPopup();
      }, 45000);
    };

    // Check if mobile
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: Use inactivity detection
      resetInactivityTimer();
      window.addEventListener("touchstart", resetInactivityTimer);
      window.addEventListener("scroll", resetInactivityTimer);
    } else {
      // Desktop: Use mouse leave detection
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", resetInactivityTimer);
      window.removeEventListener("scroll", resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, [showPopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name, email, and phone to reach you.",
        variant: "destructive",
      });
      return;
    }

    // A2P Compliant: SMS consent is OPTIONAL - no longer required to submit
    setIsSubmitting(true);

    const result = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType || "General Inquiry",
      formSource: "exit-intent-offer",
      message: "Exit Intent Popup - Renovation Blueprint Package Request",
      marketingSmsConsent: formData.marketingSmsConsent,
      nonMarketingSmsConsent: formData.nonMarketingSmsConsent,
      consentTimestamp: new Date().toISOString(),
      // Anti-spam fields
      website: honeypotWebsite,
      _timestamp: formTimestamp,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
    } else {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  const handleBookNow = () => {
    setIsOpen(false);
    navigate("/book");
  };

  const valueItems = [
    { text: "AI-Powered Design Recommendations", value: "NEW!", icon: Sparkles },
    { text: "Free In-Home Consultation", value: "$300 value" },
    { text: "Custom 3D Design Concept", value: "$500 value" },
    { text: "Detailed Line-by-Line Estimate", value: "$200 value" },
    { text: "AI Room Visualizer Access", value: "Exclusive", icon: Wand2 },
    { text: "60-Day Price-Lock Guarantee", value: "Priceless" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden bg-background border-accent/30">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="bg-accent/10 px-6 pt-8 pb-6 text-center border-b border-accent/20">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm mb-3">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Wait! Before You Go...</span>
              </div>
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl md:text-3xl text-foreground leading-tight">
                  See Your Remodel with <span className="text-accent">AI</span><br />
                  Before Committing
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Special offer popup for renovation blueprint package
                </DialogDescription>
              </DialogHeader>
              <p className="text-muted-foreground text-sm mt-2">
                Get your <span className="text-accent font-semibold">FREE Renovation Blueprint</span> — Valued at $1,650+
              </p>
            </div>

            {/* Value Stack */}
            <div className="px-6 py-5">
              <p className="text-sm font-medium text-foreground mb-3">Here's Everything You'll Get:</p>
              <div className="space-y-2">
                {valueItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {item.icon ? (
                        <item.icon className="h-4 w-4 text-accent flex-shrink-0" />
                      ) : (
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      )}
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                    <span className={cn(
                      "text-xs whitespace-nowrap",
                      item.value === "NEW!" || item.value === "Exclusive" 
                        ? "text-accent font-semibold" 
                        : "text-muted-foreground"
                    )}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Bonus */}
              <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm font-medium text-foreground">
                  🔥 <span className="text-accent">BONUS:</span> Book This Week & Get <span className="text-accent font-bold">$500 Off</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">Any project over $15,000</p>
              </div>

              {/* Urgency */}
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-accent" />
                <span>Only <span className="text-accent font-semibold">3 Spots Left</span> This Week</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-3">
              <FloatingInput
                label="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <FloatingInput
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <FloatingInput
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Select
                value={formData.projectType}
                onValueChange={(value) => setFormData({ ...formData, projectType: value })}
              >
                <SelectTrigger className="h-14">
                  <SelectValue placeholder="What type of project?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kitchen Remodel">Kitchen Remodel</SelectItem>
                  <SelectItem value="Bathroom Remodel">Bathroom Remodel</SelectItem>
                  <SelectItem value="Basement Finishing">Basement Finishing</SelectItem>
                  <SelectItem value="Home Renovation">Home Renovation</SelectItem>
                  <SelectItem value="Deck/Outdoor">Deck/Outdoor</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              {/* A2P Compliant: Two separate OPTIONAL consent checkboxes */}
              <SMSConsentCheckboxes
                marketingConsent={formData.marketingSmsConsent}
                nonMarketingConsent={formData.nonMarketingSmsConsent}
                onMarketingChange={(checked) => setFormData({ ...formData, marketingSmsConsent: checked })}
                onNonMarketingChange={(checked) => setFormData({ ...formData, nonMarketingSmsConsent: checked })}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base"
              >
                {isSubmitting ? "Submitting..." : "Claim My Free Blueprint"}
              </Button>

              {/* Footer Links */}
              <p className="text-xs text-muted-foreground text-center pt-1">
                By submitting, you agree to our{" "}
                <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms-of-service" className="text-primary underline hover:text-primary/80">
                  Terms of Service
                </Link>.
              </p>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="px-6 py-12 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-playfair text-2xl text-foreground mb-2">You're In! 🎉</h3>
            <p className="text-muted-foreground mb-6">
              We'll call you within 24 hours to schedule your Blueprint consultation.
            </p>
            
            <div className="space-y-3">
              <Button
                onClick={handleBookNow}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Book a Time Now
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="w-full border-accent/30 hover:bg-accent/5"
              >
                I'll Wait for Your Call
              </Button>
              <a
                href="tel:+14044638547"
                className="flex items-center justify-center gap-2 text-sm text-accent hover:underline pt-2"
              >
                <Phone className="h-4 w-4" />
                Or call us now: (404) 463-8547
              </a>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
