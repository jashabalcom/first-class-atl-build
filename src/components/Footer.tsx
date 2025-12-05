import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/fcc-logo.png";

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

  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="space-y-3 md:space-y-4 text-center sm:text-left">
            <img src={logo} alt="First Class Construction Group - Atlanta Licensed General Contractor" className="h-10 md:h-12 w-auto mb-2 md:mb-4 brightness-0 invert mx-auto sm:mx-0" />
            <p className="text-sm opacity-90">
              You Imagine It. We Build It.
            </p>
            <p className="text-sm opacity-90">
              Atlanta's trusted partner for residential renovations and commercial build-outs.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:678-671-6336" className="hover:text-accent transition-colors">
                  678-671-6336
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@firstclassconstructionatlanta.com" className="hover:text-accent transition-colors text-xs">
                  info@firstclassconstructionatlanta.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span>Metro Atlanta Area</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/residential" className="hover:text-accent transition-colors">Residential</Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-accent transition-colors">Commercial</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
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
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link to={area.link} className="hover:text-accent transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Areas */}
          <div>
            <h4 className="font-semibold mb-4">More Areas</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {moreAreas.map((area) => (
                <li key={area.name}>
                  <Link to={area.link} className="hover:text-accent transition-colors">
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
            <p className="text-xs md:text-sm opacity-90">
              © {new Date().getFullYear()} First Class Construction Group. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm">
              <span className="opacity-90">Licensed • Bonded • Insured</span>
              <span className="text-accent font-semibold">DBE • MBE Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
