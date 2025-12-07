import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitLead } from "@/lib/lead-submission";
import { useToast } from "@/hooks/use-toast";
import { Check, Gift, Clock, Phone, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "",
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  // DEV ONLY: Test trigger
  const isDev = import.meta.env.DEV;

  const showPopup = useCallback(() => {
    const hasShown = sessionStorage.getItem("exitIntentShown");
    if (!hasShown) {
      setIsOpen(true);
      sessionStorage.setItem("exitIntentShown", "true");
    }
  }, []);

  const forceShowPopup = () => {
    sessionStorage.removeItem("exitIntentShown");
    setIsSuccess(false);
    setFormData({ name: "", contact: "", projectType: "" });
    setIsOpen(true);
    sessionStorage.setItem("exitIntentShown", "true");
  };

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
    
    if (!formData.name.trim() || !formData.contact.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name and contact info to reach you.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Determine if contact is email or phone
    const isEmail = formData.contact.includes("@");

    const result = await submitLead({
      name: formData.name,
      email: isEmail ? formData.contact : "",
      phone: isEmail ? "" : formData.contact,
      projectType: formData.projectType || "General Inquiry",
      formSource: "exit-intent-offer",
      message: "Exit Intent Popup - Renovation Blueprint Package Request",
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
    { text: "Free In-Home Consultation", value: "$300 value" },
    { text: "Custom 3D Design Concept", value: "$500 value" },
    { text: "Detailed Line-by-Line Estimate", value: "$200 value" },
    { text: "Personalized Material Guide", value: "$150 value" },
    { text: "60-Day Price-Lock Guarantee", value: "Priceless" },
  ];

  return (
    <>
      {/* DEV ONLY: Test button */}
      {isDev && (
        <button
          onClick={forceShowPopup}
          className="fixed bottom-4 left-4 z-50 bg-accent text-accent-foreground px-3 py-2 rounded-md text-xs font-medium shadow-lg hover:bg-accent/90 transition-colors"
        >
          🧪 Test Exit Popup
        </button>
      )}

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
                <Gift className="h-4 w-4" />
                <span className="font-medium">Wait! Before You Go...</span>
              </div>
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl md:text-3xl text-foreground leading-tight">
                  Get Your <span className="text-accent">FREE</span><br />
                  "Renovation Blueprint Package"
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground text-sm mt-2">
                Valued at <span className="text-accent font-semibold">$1,650+</span> — Yours FREE
              </p>
            </div>

            {/* Value Stack */}
            <div className="px-6 py-5">
              <p className="text-sm font-medium text-foreground mb-3">Here's Everything You'll Get:</p>
              <div className="space-y-2">
                {valueItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{item.value}</span>
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
                label="Phone or Email"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
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

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base"
              >
                {isSubmitting ? "Submitting..." : "Claim My Free Blueprint"}
              </Button>

              <p className="text-center text-xs text-muted-foreground pt-1">
                No pressure. No obligation. Just great ideas for your space.
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
    </>
  );
};

export default ExitIntentPopup;
