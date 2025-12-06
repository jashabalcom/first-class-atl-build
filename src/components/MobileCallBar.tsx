import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MobileCallBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-background border-t shadow-lg">
      <div className="flex gap-2">
        <a href="tel:678-671-6336" className="flex-1">
          <Button variant="cta" size="lg" className="w-full gap-2 h-14 text-base">
            <Phone className="h-5 w-5" />
            Call 678-671-6336
          </Button>
        </a>
        <Link to="/book" className="flex-1">
          <Button variant="outline" size="lg" className="w-full h-14 text-base gap-2">
            <Calendar className="h-5 w-5" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileCallBar;
