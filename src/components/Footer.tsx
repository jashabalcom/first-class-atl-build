import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import logo from "@/assets/fccg-logo.png";
import mlaLogo from "@/assets/mla-logo-white.png";

const Footer = () => {
  const serviceAreas = [
    { name: "Atlanta", link: "/atlanta" },
    { name: "Buckhead", link: "/buckhead" },
    { name: "Midtown", link: "/midtown" },
    { name: "Decatur", link: "/decatur" },
    { name: "Sandy Springs", link: "/sandy-springs" },
    { name: "Brookhaven", link: "/brookhaven" },
    { name: "Dunwoody", link: "/dunwoody" },
    { name: "Roswell", link: "/roswell" },
    { name: "Alpharetta", link: "/alpharetta" },
    { name: "Marietta", link: "/marietta" },
    { name: "Johns Creek", link: "/johns-creek" },
    { name: "Duluth", link: "/duluth" },
  ];

  const moreAreas = [
    { name: "Smyrna", link: "/smyrna" },
    { name: "Douglasville", link: "/douglasville" },
    { name: "Norcross", link: "/norcross" },
    { name: "Snellville", link: "/snellville" },
    { name: "Kirkwood", link: "/kirkwood" },
    { name: "East Atlanta", link: "/east-atlanta-village" },
    { name: "East Lake", link: "/east-lake" },
    { name: "Downtown", link: "/downtown" },
    { name: "Candler Park", link: "/candler-park" },
    { name: "Inman Park", link: "/inman-park" },
    { name: "Lake Claire", link: "/lake-claire" },
    { name: "Oakhurst", link: "/oakhurst" },
    { name: "Avondale Estates", link: "/avondale-estates" },
    { name: "Mableton", link: "/mableton" },
    { name: "Powder Springs", link: "/powder-springs" },
    { name: "Austell", link: "/austell" },
    { name: "Lithia Springs", link: "/lithia-springs" },
    { name: "Vinings", link: "/areas/vinings-kitchen-remodeling" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Gold accent line */}
      <div className="h-1 bg-accent" />
      
      <div className="py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Company Info */}
            <div className="space-y-3 md:space-y-4 text-center sm:text-left">
              <Link to="/">
                <img src={logo} alt="First Class Construction Group - Atlanta Licensed General Contractor" className="h-14 md:h-16 w-auto mb-3 md:mb-4 mx-auto sm:mx-0 brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform" />
              </Link>
              <p className="font-playfair text-lg italic opacity-90">
                You Imagine It. We Build It.
              </p>
              <p className="text-sm opacity-80">
                Atlanta's trusted partner for residential renovations and commercial build-outs.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Phone className="h-4 w-4 text-accent" />
                  <a href="tel:678-671-6336" className="hover:text-accent transition-colors">
                    678-671-6336
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href="mailto:info@firstclassconstructionatlanta.com" className="hover:text-accent transition-colors text-xs">
                    info@firstclassconstructionatlanta.com
                  </a>
                </div>
                <div className="flex items-start gap-2 justify-center sm:justify-start">
                  <MapPin className="h-4 w-4 text-accent mt-1" />
                  <span>Metro Atlanta Area</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Home</Link>
                </li>
                <li>
                  <Link to="/residential" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Residential</Link>
                </li>
                <li>
                  <Link to="/commercial" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Commercial</Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Gallery</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Resources</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent transition-colors opacity-80 hover:opacity-100">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Kitchen Remodeling</li>
                <li>Bathroom Remodeling</li>
                <li>Basement Finishing</li>
                <li>Custom Decks</li>
                <li>Flooring Installation</li>
                <li>Interior Painting</li>
                <li>Custom Carpentry</li>
                <li>Commercial Build-Outs</li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-sm opacity-80">
                {serviceAreas.map((area) => (
                  <li key={area.name}>
                    <Link to={area.link} className="hover:text-accent hover:opacity-100 transition-colors">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Areas */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">More Areas</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm opacity-80">
                {moreAreas.map((area) => (
                  <li key={area.name}>
                    <Link to={area.link} className="hover:text-accent hover:opacity-100 transition-colors">
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
              <p className="text-xs md:text-sm opacity-80">
                © {new Date().getFullYear()} First Class Construction Group. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-xs md:text-sm">
                <span className="opacity-80">Licensed • Bonded • Insured</span>
                <span className="text-accent font-semibold">DBE • MBE Certified</span>
                <button 
                  onClick={scrollToTop}
                  className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors ml-4"
                  aria-label="Back to top"
                >
                  <ArrowUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Back to top</span>
                </button>
                <Link 
                  to="/auth" 
                  className="text-xs opacity-40 hover:opacity-100 hover:text-accent transition-all ml-4"
                >
                  Admin
                </Link>
              </div>
            </div>
            
            {/* Agency Credit */}
            <div className="border-t border-white/10 mt-6 pt-4 flex justify-center">
              <a 
                href="https://www.majorleadsagency.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-xs tracking-wide">Website by</span>
                <img 
                  src={mlaLogo} 
                  alt="Major Leads Agency" 
                  className="h-5 w-auto group-hover:brightness-110 transition-all"
                />
                <span className="text-xs font-medium group-hover:text-accent transition-colors">
                  Major Leads Agency
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
