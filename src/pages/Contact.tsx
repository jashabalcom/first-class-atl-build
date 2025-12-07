import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import SectionLabel from "@/components/SectionLabel";
import { Phone, Mail, MapPin, Clock, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import CertificationBadges from "@/components/CertificationBadges";

type ContactInfoItem = {
  icon: typeof Phone;
  title: string;
  content: string;
  link: string | null;
};

const Contact = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: Phone,
      title: "Call Us",
      content: "678-671-6336",
      link: "tel:678-671-6336",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@fcconstruct.com",
      link: "mailto:info@fcconstruct.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Metro Atlanta & Surrounding Areas",
      link: null,
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 8AM-6PM · Sat: 9AM-2PM",
      link: null,
    },
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" },
    { name: "Buckhead", path: "/buckhead" },
    { name: "Midtown", path: "/midtown" },
    { name: "Decatur", path: "/decatur" },
    { name: "Sandy Springs", path: "/sandy-springs" },
    { name: "Brookhaven", path: "/brookhaven" },
    { name: "Dunwoody", path: "/dunwoody" },
    { name: "Marietta", path: "/marietta" },
    { name: "Alpharetta", path: "/alpharetta" },
    { name: "Roswell", path: "/roswell" },
    { name: "Johns Creek", path: "/johns-creek" },
    { name: "Smyrna", path: "/smyrna" },
  ];

  // Staggered animation component for contact info cards
  const ContactInfoCards = ({ contactInfo }: { contactInfo: ContactInfoItem[] }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <section ref={sectionRef} className="py-10 md:py-14 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className={`group relative p-5 rounded-xl bg-card border hover:border-accent transition-all duration-300 hover:shadow-lg
                    ${isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-6'
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                    transitionProperty: 'opacity, transform, border-color, box-shadow',
                    transitionDuration: '500ms',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-accent/0 group-hover:bg-accent rounded-l-xl transition-all duration-300" />
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-foreground hover:text-accent transition-colors font-medium text-sm md:text-base break-all"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm md:text-base">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Helmet>
        <title>Contact First Class Construction | Atlanta Contractor | 678-671-6336</title>
        <meta name="description" content="Contact First Class Construction for your Atlanta renovation. Free consultations, fast response. Licensed contractor. Call 678-671-6336." />
        <meta name="keywords" content="contact atlanta contractor, atlanta construction company phone, renovation consultation atlanta, contractor quote atlanta ga" />
        <link rel="canonical" href="https://www.fcconstruct.com/contact" />
        <meta property="og:title" content="Contact First Class Construction | Atlanta Contractor" />
        <meta property="og:description" content="Contact Atlanta's trusted construction company. Free consultations and fast response. Licensed, bonded, insured." />
        <meta property="og:url" content="https://www.fcconstruct.com/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "GeneralContractor",
              "name": "First Class Construction Group",
              "telephone": "678-671-6336",
              "email": "info@fcconstruct.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Atlanta",
                "addressRegion": "GA",
                "addressCountry": "US"
              },
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <MobileCallBar />
      
      <main className="min-h-screen pb-24 md:pb-0">
        {/* Hero Section with Split Layout - Form Above the Fold */}
        <section className="relative py-8 md:py-12 lg:py-16 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
              {/* Left: Headline & Quick Info */}
              <div className="space-y-6 lg:sticky lg:top-24">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-medium">
                    <Shield className="h-4 w-4" />
                    Licensed Contractor · Atlanta Metro
                  </div>
                  <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Let's Turn Your Vision{" "}
                    <span className="text-accent">Into Reality</span>
                  </h1>
                  <p className="text-muted-foreground text-lg">
                    Get in touch with our team. We respond same-day and offer free consultations for all projects.
                  </p>
                </div>

                {/* Trust Badges - Inline */}
                <div className="flex flex-wrap gap-2 text-sm">
                  {["Licensed", "Bonded", "Insured", "DBE/MBE"].map((badge, i) => (
                    <span 
                      key={badge}
                      className={`px-3 py-1 rounded-full border bg-card text-foreground ${i === 3 ? 'border-accent text-accent font-medium' : ''}`}
                    >
                      ✓ {badge}
                    </span>
                  ))}
                </div>

                {/* Quick Contact - Desktop Only */}
                <div className="hidden lg:block pt-4 border-t space-y-3">
                  <p className="text-sm text-muted-foreground">Prefer to call or email?</p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="tel:678-671-6336" 
                      className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      678-671-6336
                    </a>
                    <a 
                      href="mailto:info@fcconstruct.com" 
                      className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
                    >
                      <Mail className="h-4 w-4" />
                      info@fcconstruct.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="animate-fade-in-up">
                <MultiStepContactForm showCity={true} showTimeline={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards with Stagger Animation */}
        <ContactInfoCards contactInfo={contactInfo} />

        {/* Service Areas - Pill Style */}
        <section className="py-10 md:py-14">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div>
                <SectionLabel>Service Areas</SectionLabel>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold mt-2">
                  Serving <span className="text-accent">Metro Atlanta</span>
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {serviceAreas.map((area, index) => (
                  <Link 
                    key={index}
                    to={area.path}
                    className="px-4 py-2 rounded-full border bg-card hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-200 text-sm font-medium"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                + 20 more communities across the Atlanta metro area
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <section className="py-10 md:py-14 bg-muted/30">
          <div className="container">
            <GHLReviewsWidget />
          </div>
        </section>

        {/* Certification Badges - Compact */}
        <section className="py-10 md:py-14">
          <div className="container">
            <CertificationBadges />
          </div>
        </section>

        {/* CTA Section - Streamlined */}
        <section className="py-12 md:py-16 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-5">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                Ready to Get <span className="text-accent">Started?</span>
              </h2>
              <p className="text-secondary-foreground/80">
                Book a free consultation directly on our calendar.
              </p>
              <Link to="/book">
                <Button size="lg" className="gap-2 px-8">
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </Button>
              </Link>
              <p className="text-xs text-secondary-foreground/60">
                No obligation · Same-day response · Free estimate
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
