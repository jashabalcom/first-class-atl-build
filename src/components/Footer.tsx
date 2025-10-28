import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/fcc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="First Class Construction Group" className="h-12 w-auto mb-4 brightness-0 invert" />
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
                <a href="mailto:info@firstclassconstructionatlanta.com" className="hover:text-accent transition-colors">
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
                <Link to="/" className="hover:text-accent transition-colors">Commercial</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/" className="hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-accent transition-colors">Contact</a>
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
              <li>Home Additions</li>
              <li>Whole-Home Renovations</li>
              <li>Commercial Build-Outs</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Atlanta</li>
              <li>Buckhead</li>
              <li>Midtown</li>
              <li>Decatur</li>
              <li>Sandy Springs</li>
              <li>Brookhaven</li>
              <li>Dunwoody</li>
              <li>Marietta</li>
              <li>Alpharetta</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © {new Date().getFullYear()} First Class Construction Group. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
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
