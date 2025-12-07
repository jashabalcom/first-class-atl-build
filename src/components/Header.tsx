import { Phone, Menu, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/fcc-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/residential", label: "Residential" },
    { to: "/commercial", label: "Commercial" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Resources" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex flex-col items-start group transition-transform duration-300 hover:scale-[1.02]">
          <img src={logo} alt="First Class Construction Group - Atlanta Licensed General Contractor" className="h-12 md:h-12 lg:h-14 w-auto drop-shadow-sm" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-0.5 hidden sm:block transition-colors duration-300 group-hover:text-foreground/80">
            Licensed Contractor <span className="text-accent">·</span> Atlanta Metro
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-sm font-medium transition-colors hover:text-accent nav-link-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/book" className="hidden sm:block">
            <Button variant="cta" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden lg:inline">Book Now</span>
              <span className="lg:hidden">Book</span>
            </Button>
          </Link>
          <a href="tel:678-671-6336" className="hidden sm:block">
            <Button variant="outline" size="sm" className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">678-671-6336</span>
              <span className="lg:hidden">Call</span>
            </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm" className="gap-2 h-11">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium transition-colors hover:text-accent py-2 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t mt-2 space-y-3">
                  <Link to="/book" onClick={() => setIsOpen(false)} className="w-full block">
                    <Button variant="cta" size="lg" className="w-full gap-2 h-12">
                      <Calendar className="h-5 w-5" />
                      Book Consultation
                    </Button>
                  </Link>
                  <a href="tel:678-671-6336" className="w-full block">
                    <Button variant="outline" size="lg" className="w-full gap-2 h-12 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Phone className="h-5 w-5" />
                      678-671-6336
                    </Button>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
