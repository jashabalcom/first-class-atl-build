import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCallBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
      <div className="flex gap-2">
        <a href="tel:678-671-6336" className="flex-1">
          <Button variant="cta" size="lg" className="w-full gap-2">
            <Phone className="h-5 w-5" />
            Call 678-671-6336
          </Button>
        </a>
        <a href="#contact-form" className="flex-1">
          <Button variant="outline" size="lg" className="w-full">
            Free Quote
          </Button>
        </a>
      </div>
    </div>
  );
};

export default MobileCallBar;
