import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/Hero";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepCommercialForm } from "@/components/MultiStepCommercialForm";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import StickyAICTA from "@/components/StickyAICTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, UserCheck, ShieldCheck, Clock, Hammer, CheckCircle, Users, Lightbulb, Building2, Wifi } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import officeRenovation from "@/assets/office-renovation.jpg";

const OfficeRenovation = () => {
  const services = [
    {
      icon: Building2,
      title: "Open Floor Plans",
      description: "Modern layouts that foster collaboration while maintaining productivity zones.",
    },
    {
      icon: Users,
      title: "Conference Rooms",
      description: "Professional meeting spaces with integrated AV and presentation systems.",
    },
    {
      icon: Lightbulb,
      title: "Lighting & Acoustics",
      description: "Energy-efficient lighting and sound management for comfortable work environments.",
    },
    {
      icon: Wifi,
      title: "IT Infrastructure",
      description: "Network cabling, server rooms, and smart building integration.",
    },
  ];

  const features = [
    "Complete office space redesign",
    "Cubicle and workstation installation",
    "Private office construction",
    "Reception and lobby upgrades",
    "Break room and kitchen buildouts",
    "Restroom renovations",
    "HVAC system upgrades",
    "Flooring and ceiling installation",
    "ADA compliance updates",
    "Phased construction to minimize disruption",
  ];

  const testimonials = [
    {
      quote: "They renovated our entire floor in phases so we never had to close. The new space has transformed how our team works together.",
      author: "Michael R.",
      location: "Perimeter Business Park",
      rating: 5,
    },
    {
      quote: "Professional from start to finish. They understood our brand and created an office that impresses every client who walks in.",
      author: "Jennifer S.",
      location: "Buckhead",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Office Renovation Atlanta | Commercial Office Contractor | First Class</title>
        <meta name="description" content="Atlanta office renovation contractor. Modern buildouts, conference rooms & workspace design. Minimize downtime. Licensed & insured. 678-671-6336." />
        <meta name="keywords" content="office renovation atlanta, office renovation contractor, commercial office renovation, office buildout atlanta, office remodeling atlanta, workspace renovation atlanta, office construction atlanta, corporate office renovation" />
        <link rel="canonical" href="https://www.fcconstruct.com/office-renovation" />
        <meta property="og:title" content="Office Renovation Atlanta | Commercial Office Contractor" />
        <meta property="og:description" content="Expert office renovation contractor in Atlanta. Modern office buildouts, conference rooms, open floor plans & workspace design. Minimize downtime." />
        <meta property="og:url" content="https://www.fcconstruct.com/office-renovation" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Office Renovation Atlanta | First Class Construction" />
        <meta name="twitter:description" content="Commercial office renovation: modern buildouts, conference rooms, open floor plans & workspace design in Metro Atlanta." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Office Renovation",
            "provider": {
              "@type": "GeneralContractor",
              "name": "First Class Construction Group",
              "url": "https://fcconstruct.com",
              "telephone": "678-671-6336",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Atlanta",
                "addressRegion": "GA",
                "addressCountry": "US"
              }
            },
            "areaServed": ["Atlanta", "Buckhead", "Midtown", "Perimeter", "Sandy Springs", "Dunwoody", "Marietta", "Alpharetta"],
            "description": "Professional office renovation services including workspace design, conference rooms, open floor plans, and complete office buildouts."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does an office renovation cost in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Office renovation costs in Atlanta range from $50-$200+ per sq ft depending on scope. Basic updates run $50-$80/sq ft, mid-range renovations $80-$150/sq ft, and high-end buildouts $150-$250+/sq ft."
                }
              },
              {
                "@type": "Question",
                "name": "Can you renovate our office without shutting down?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in phased construction that minimizes business disruption. We can work in sections, during off-hours, or on weekends to keep your operations running during renovation."
                }
              },
              {
                "@type": "Question",
                "name": "How long does an office renovation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Office renovations typically take 4-12 weeks depending on size and complexity. Small office updates may take 2-4 weeks, while complete floor renovations can take 8-16 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle ADA compliance for office renovations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our office renovations meet ADA requirements including accessible doorways, restrooms, and workspaces. We ensure your space is compliant with current accessibility standards."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      <MobileCallBar />

      <main className="min-h-screen pb-24 md:pb-0">
        <Hero
          credentialBadge="Licensed Commercial Contractor"
          benefitHeadline="Transform Your Workspace Into a Productivity Powerhouse"
          seoHeadline="Office Renovation Atlanta | Commercial Office Contractor"
          title="Transform Your Workspace Into a Productivity Powerhouse"
          subtitle="Expert office renovation that minimizes downtime and maximizes results. Modern workspaces designed for collaboration, productivity, and your brand."
          primaryCTA="Request a Consultation"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroOffice}
          trustLine="Licensed • Bonded • Insured • DBE/MBE • 20+ Years in Metro Atlanta"
          useH1={true}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl text-center">
            <SectionLabel>Atlanta Office Renovation Experts</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 mt-3">
              Create a Workspace That <span className="text-accent">Works for You</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your office environment directly impacts employee productivity, client impressions, and company culture. 
              At First Class Construction Group, we specialize in office renovations that transform outdated spaces 
              into modern, efficient workplaces—all while minimizing disruption to your operations.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <AnimatedSection>
          <section className="py-12 bg-muted/30">
            <div className="container max-w-5xl">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={officeRenovation} 
                  alt="Modern office renovation in Atlanta with open floor plan and collaborative workspace" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-playfair text-xl">Modern Office Renovation – Perimeter, Atlanta</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection delay={100}>
          <section className="py-16 md:py-20 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <SectionLabel>What We Build</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Complete Office <span className="text-accent">Renovation Services</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Everything you need to create a modern, functional workspace.
                </p>
                <div className="section-divider mt-6" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-lg bg-card border border-l-2 border-l-transparent hover:border-l-accent hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-playfair font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Features Checklist */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <SectionLabel>Full-Service Office Renovation</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Everything Your Office <span className="text-accent">Needs</span>
                </h2>
                <div className="section-divider mt-6" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <AnimatedSection delay={100}>
          <section className="py-16 md:py-20 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <SectionLabel>The First Class Difference</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Why Businesses <span className="text-accent">Trust Us</span>
                </h2>
                <div className="section-divider mt-6" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <ValueCard
                  icon={Clock}
                  title="Minimize Downtime"
                  description="Phased construction and after-hours work to keep your business running."
                />
                <ValueCard
                  icon={UserCheck}
                  title="Dedicated Project Manager"
                  description="One point of contact from design to completion. Clear communication always."
                />
                <ValueCard
                  icon={Hammer}
                  title="Quality Construction"
                  description="Professional crews, premium materials, and attention to every detail."
                />
                <ValueCard
                  icon={ShieldCheck}
                  title="Code Compliant"
                  description="All work meets or exceeds local building codes. ADA compliant."
                />
                <ValueCard
                  icon={Calendar}
                  title="On-Time Delivery"
                  description="Clear schedules and milestone tracking. We respect your timeline."
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection delay={100}>
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container">
              <div className="text-center mb-12">
                <SectionLabel>Client Success Stories</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  What Business Owners <span className="text-accent">Say</span>
                </h2>
                <div className="section-divider mt-6" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>

              <GHLReviewsWidget />
            </div>
          </section>
        </AnimatedSection>

        <ClientLogosCarousel />

        {/* Process */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                Our Office Renovation <span className="text-accent">Process</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid gap-0">
              <ProcessStep
                number={1}
                title="Site Assessment"
                description="We evaluate your space, understand your needs, and develop a comprehensive plan."
              />
              <ProcessStep
                number={2}
                title="Design & Proposal"
                description="Detailed plans, material selections, timeline, and transparent pricing."
              />
              <ProcessStep
                number={3}
                title="Build & Communicate"
                description="Professional construction with daily updates and minimal disruption to your operations."
              />
              <ProcessStep
                number={4}
                title="Inspection & Handover"
                description="Final walkthrough, code inspections, and warranty documentation."
                isLast={true}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <SectionLabel>Get Started Today</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                Ready to Transform Your <span className="text-accent">Office?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule your free consultation and get a detailed proposal for your office renovation.
              </p>
              <div className="section-divider" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/book">
                  <Button variant="cta" size="lg" className="gap-2">
                    <Calendar className="h-5 w-5" />
                    Book Free Consultation
                  </Button>
                </Link>
                <a href="tel:678-671-6336">
                  <Button variant="outline" size="lg" className="border-accent/50 hover:border-accent hover:text-accent">
                    Call 678-671-6336
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16 md:py-20 bg-background border-t">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Contact Us</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                Request Your <span className="text-accent">Office Renovation Quote</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us about your project. We respond within one business day.
              </p>
              <div className="section-divider mt-6" />
            </div>
            <MultiStepCommercialForm />
          </div>
        </section>
      </main>

      <StickyAICTA roomType="office" />
      <Footer />
    </>
  );
};

export default OfficeRenovation;
