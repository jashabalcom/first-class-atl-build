import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StickyAICTAProps {
  roomType?: string;
}

const StickyAICTA = ({ roomType = "room" }: StickyAICTAProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    const dismissed = sessionStorage.getItem("stickyAICTADismissed");
    if (dismissed) {
      setIsDismissed(true);
    }

    const handleScroll = () => {
      // Hide when user is near the bottom of page (likely at contact form)
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const nearBottom = pageHeight - scrollPosition < 500;
      
      setIsVisible(!nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem("stickyAICTADismissed", "true");
  };

  if (isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-accent/20 shadow-lg px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                See YOUR {roomType} remodel with AI
              </p>
              <p className="text-xs text-muted-foreground">
                Free • Instant • No signup
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link to="/room-visualizer">
              <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs px-3">
                Try Free
              </Button>
            </Link>
            <button
              onClick={handleDismiss}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyAICTA;
