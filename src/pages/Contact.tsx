import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ContactForm from "@/components/ContactForm";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { BudgetEstimator } from "@/components/BudgetEstimator";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
    "Atlanta",
    "Buckhead",
    "Midtown",
    "Decatur",
    "Sandy Springs",
    "Brookhaven",
    "Dunwoody",
    "Marietta",
    "Alpharetta",
    "Roswell",
    "Johns Creek",
    "Smyrna",
  ];

  return (
    <>
      <Header />
      <MobileCallBar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Let's Turn Your Vision Into Reality
              </h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with First Class Construction Group. We're ready to discuss your project and provide a free consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Budget Estimator */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container">
            <div className="text-center mb-10 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Budget Estimate First</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Not sure what your project might cost? Use our estimator tool to get an instant ballpark figure before reaching out.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <BudgetEstimator 
                onGetQuote={() => {
                  document.getElementById('contact-form-section')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              />
            </div>
          </div>
        </section>

        {/* Contact Form + Info Section */}
        <section id="contact-form-section" className="py-20 scroll-mt-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <ContactForm
                  heading="Send Us a Message"
                  subheading="Fill out the form below and we'll get back to you within one business day."
                  buttonText="Send Message"
                  showCity={true}
                  showTimeline={true}
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Google Trust Badge */}
                <GoogleTrustBadge variant="full" />

                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
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
                  <h3 className="font-semibold mb-4">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div 
                        key={index}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-8 border-t">
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="px-3 py-1.5 rounded-full border bg-card">
                      ✓ Licensed
                    </div>
                    <div className="px-3 py-1.5 rounded-full border bg-card">
                      ✓ Bonded
                    </div>
                    <div className="px-3 py-1.5 rounded-full border bg-card">
                      ✓ Insured
                    </div>
                    <div className="px-3 py-1.5 rounded-full border bg-card">
                      ✓ DBE/MBE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Placeholder */}
        <section className="py-12 bg-secondary/5 border-y">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="aspect-[21/9] bg-muted rounded-lg flex items-center justify-center border">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">
                    Proudly serving Metro Atlanta and surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
