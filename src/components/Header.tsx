import { Phone, Menu, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/fccg-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { to: "/residential", label: "Residential" },
    { to: "/commercial", label: "Commercial" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Resources" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const residentialServices = [
    { to: "/kitchen-remodeling", label: "Kitchen Remodeling" },
    { to: "/bathroom-remodeling", label: "Bathroom Remodeling" },
    { to: "/basement-finishing", label: "Basement Finishing" },
    { to: "/home-renovation", label: "Home Renovation" },
    { to: "/deck-builders", label: "Deck Building" },
    { to: "/custom-cabinets", label: "Custom Cabinets" },
    { to: "/flooring-installation", label: "Flooring Installation" },
    { to: "/painting", label: "Painting Services" },
  ];

  const commercialServices = [
    { to: "/office-renovation", label: "Office Renovation" },
    { to: "/restaurant-remodeling", label: "Restaurant Remodeling" },
    { to: "/retail-construction", label: "Retail Construction" },
    { to: "/tenant-buildout", label: "Tenant Buildout" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
          <img src={logo} alt="First Class Construction Group - Atlanta Licensed General Contractor" className="h-14 md:h-16 w-auto drop-shadow-sm" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent nav-link-underline outline-none">
              Services
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-56 bg-background border border-border shadow-lg z-[100]"
            >
              <DropdownMenuLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                Residential
              </DropdownMenuLabel>
              {residentialServices.map((service) => (
                <DropdownMenuItem key={service.to} asChild>
                  <Link 
                    to={service.to} 
                    className="w-full cursor-pointer hover:text-accent"
                  >
                    {service.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                Commercial
              </DropdownMenuLabel>
              {commercialServices.map((service) => (
                <DropdownMenuItem key={service.to} asChild>
                  <Link 
                    to={service.to} 
                    className="w-full cursor-pointer hover:text-accent"
                  >
                    {service.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
            <SheetContent side="right" className="w-[300px] sm:w-[340px] overflow-y-auto">
              <nav className="flex flex-col gap-2 mt-6">
                {/* Mobile Services Accordion */}
                <div className="border-b pb-4">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-base font-medium py-2 min-h-[44px]"
                  >
                    Services
                    <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-1 mt-2">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground py-1">Residential</p>
                      {residentialServices.map((service) => (
                        <Link
                          key={service.to}
                          to={service.to}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-muted-foreground hover:text-accent py-2 min-h-[40px] flex items-center"
                        >
                          {service.label}
                        </Link>
                      ))}
                      <p className="text-xs uppercase tracking-widest text-muted-foreground py-1 mt-3">Commercial</p>
                      {commercialServices.map((service) => (
                        <Link
                          key={service.to}
                          to={service.to}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-muted-foreground hover:text-accent py-2 min-h-[40px] flex items-center"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

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
