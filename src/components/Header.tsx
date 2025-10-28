import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/fcc-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="First Class Construction Group" className="h-12 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-accent">
            Residential
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-accent">
            Commercial
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-accent">
            Gallery
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-accent">
            About
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>

        <a href="tel:678-671-6336">
          <Button variant="cta" size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call 678-671-6336</span>
            <span className="sm:hidden">Call</span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
