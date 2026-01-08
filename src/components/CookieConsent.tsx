import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container">
        <div className="bg-card border border-border rounded-xl shadow-2xl p-4 md:p-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-12 w-12 rounded-full bg-accent/10 items-center justify-center flex-shrink-0">
              <Cookie className="h-6 w-6 text-accent" />
            </div>
            
            <div className="flex-grow space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground">
                    Cookie & Privacy Notice
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
                    By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                    <Link to="/privacy-policy" className="text-accent hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/terms-of-service" className="text-accent hover:underline">
                      Terms of Service
                    </Link>{" "}
                    for more information.
                  </p>
                </div>
                <button 
                  onClick={acceptEssential}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptAll}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Accept All Cookies
                </Button>
                <Button 
                  onClick={acceptEssential}
                  variant="outline"
                  className="border-border hover:bg-muted"
                >
                  Essential Only
                </Button>
                <Link to="/privacy-policy">
                  <Button 
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
