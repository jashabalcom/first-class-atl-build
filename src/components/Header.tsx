import { Phone, Menu } from "lucide-react";
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
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="First Class Construction Group" className="h-12 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:678-671-6336" className="hidden sm:block">
            <Button variant="cta" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call 678-671-6336</span>
              <span className="lg:hidden">Call</span>
            </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm" className="gap-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-accent py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6 border-t">
                  <a href="tel:678-671-6336" className="w-full block">
                    <Button variant="cta" size="lg" className="w-full gap-2">
                      <Phone className="h-5 w-5" />
                      Call 678-671-6336
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
