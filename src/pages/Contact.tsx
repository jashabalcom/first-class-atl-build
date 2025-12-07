import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import CertificationBadges from "@/components/CertificationBadges";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
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
      content: "Serving Metro Atlanta & Surrounding Areas",
      link: null,
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM",
      link: null,
    },
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/locations/atlanta" },
    { name: "Buckhead", path: "/locations/buckhead" },
    { name: "Midtown", path: "/locations/midtown" },
    { name: "Decatur", path: "/locations/decatur" },
    { name: "Sandy Springs", path: "/locations/sandy-springs" },
    { name: "Brookhaven", path: "/locations/brookhaven" },
    { name: "Dunwoody", path: "/locations/dunwoody" },
    { name: "Marietta", path: "/locations/marietta" },
    { name: "Alpharetta", path: "/locations/alpharetta" },
    { name: "Roswell", path: "/locations/roswell" },
    { name: "Johns Creek", path: "/locations/johns-creek" },
    { name: "Smyrna", path: "/locations/smyrna" },
  ];

  return (
    <>
      <Header />
      <MobileCallBar />
      
      <main className="min-h-screen pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
              <SectionLabel className="animate-fade-in-up">Contact Us</SectionLabel>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mt-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Let's Turn Your Vision <span className="text-accent">Into Reality</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Get in touch with First Class Construction Group. We're ready to discuss your project and provide a free consultation.
              </p>
              <div className="section-divider" />
            </div>
          </div>
        </section>

        <ClientLogosCarousel />

        {/* Contact Form + Info Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <ContactForm
                  heading="Send Us a Message"
                  subheading="Fill out the form below and we'll get back to you within one business day."
                  buttonText="Send Message"
                  showCity={true}
                  showTimeline={true}
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>

                <div>
                  <h2 className="font-playfair text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      const content = info.link ? (
                        <a 
                          href={info.link}
                          className="text-accent hover:underline"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <span className="whitespace-pre-line">{info.content}</span>
                      );

                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                              <Icon className="h-6 w-6 text-accent" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <div className="text-muted-foreground">{content}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Service Areas */}
                <div className="pt-8 border-t">
                  <h3 className="font-playfair font-semibold text-lg mb-4">Service Areas</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <Link 
                        key={index}
                        to={area.path}
                        className="text-sm text-muted-foreground flex items-center gap-2 hover:text-accent transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-8 border-t">
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="px-3 py-1.5 rounded-full border bg-card hover:border-accent transition-colors">
                      ✓ Licensed
                    </div>
                    <div className="px-3 py-1.5 rounded-full border bg-card hover:border-accent transition-colors">
                      ✓ Bonded
                    </div>
                    <div className="px-3 py-1.5 rounded-full border bg-card hover:border-accent transition-colors">
                      ✓ Insured
                    </div>
                    <div className="px-3 py-1.5 rounded-full border bg-card text-accent font-semibold">
                      ✓ DBE/MBE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Widget */}
        <section className="py-12 bg-background animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="container">
            <GHLReviewsWidget />
          </div>
        </section>

        {/* Certification Badges */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <CertificationBadges />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold">
                Ready to Get <span className="text-accent">Started?</span>
              </h2>
              <p className="text-lg text-secondary-foreground/80">
                Skip the back-and-forth. Book a free consultation directly on our calendar and let's discuss your project in detail.
              </p>
              <Link to="/book">
                <Button size="lg" className="mt-4 gap-2 text-base px-8 py-6">
                  <Calendar className="h-5 w-5" />
                  Book Your Free Consultation
                </Button>
              </Link>
              <p className="text-sm text-secondary-foreground/60">
                No obligation · Same-day response · 100% free estimate
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
