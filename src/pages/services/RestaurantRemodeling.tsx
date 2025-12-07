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
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, UserCheck, ShieldCheck, Clock, Hammer, CheckCircle, Utensils, Flame, Armchair, Wind } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";

const RestaurantRemodeling = () => {
  const services = [
    {
      icon: Flame,
      title: "Commercial Kitchen Buildouts",
      description: "Code-compliant commercial kitchens designed for efficiency, safety, and health inspections.",
    },
    {
      icon: Armchair,
      title: "Dining Room Design",
      description: "Ambiance-focused dining spaces that maximize seating without sacrificing comfort.",
    },
    {
      icon: Utensils,
      title: "Bar & Beverage Stations",
      description: "Custom bar construction with proper plumbing, refrigeration, and serving areas.",
    },
    {
      icon: Wind,
      title: "Ventilation & HVAC",
      description: "Commercial-grade ventilation systems that meet health codes and keep guests comfortable.",
    },
  ];

  const features = [
    "Commercial kitchen construction",
    "Walk-in cooler installation",
    "Hood and ventilation systems",
    "Grease trap installation",
    "Dining room buildouts",
    "Bar and lounge construction",
    "Restroom renovations",
    "ADA compliance upgrades",
    "Outdoor patio construction",
    "Signage and branding integration",
  ];

  const testimonials = [
    {
      quote: "Professional crew, zero drama, and the kitchen passed inspection on the first try. We opened two weeks earlier than planned.",
      author: "M. Thompson",
      location: "Buckhead",
      rating: 5,
    },
    {
      quote: "They understood our vision and created a space that our customers love. The attention to detail in the dining room is incredible.",
      author: "Carlos D.",
      location: "Midtown",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Restaurant Remodeling Atlanta | Restaurant Contractor | First Class</title>
        <meta name="description" content="Atlanta restaurant remodeling contractor. Commercial kitchens, dining rooms & bar construction. Code-compliant, inspection-ready. 678-671-6336." />
        <meta name="keywords" content="restaurant remodeling atlanta, restaurant contractor atlanta, restaurant remodel contractor, commercial kitchen contractor, restaurant construction atlanta, restaurant renovation atlanta, bar construction atlanta, restaurant buildout" />
        <link rel="canonical" href="https://www.fcconstruct.com/restaurant-remodeling" />
        <meta property="og:title" content="Restaurant Remodeling Atlanta | Restaurant Contractor" />
        <meta property="og:description" content="Expert restaurant remodeling: commercial kitchens, dining rooms, bar construction & restaurant buildouts in Metro Atlanta. Code-compliant." />
        <meta property="og:url" content="https://www.fcconstruct.com/restaurant-remodeling" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Restaurant Remodeling Atlanta | First Class Construction" />
        <meta name="twitter:description" content="Restaurant remodeling: commercial kitchens, dining rooms, bar construction & restaurant buildouts. Code-compliant contractor." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Restaurant Remodeling",
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
            "areaServed": ["Atlanta", "Buckhead", "Midtown", "Decatur", "Sandy Springs", "Marietta", "Alpharetta"],
            "description": "Professional restaurant remodeling services including commercial kitchen construction, dining room design, bar buildouts, and complete restaurant renovations."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a restaurant buildout cost in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Restaurant buildout costs in Atlanta range from $100-$400+ per sq ft. Fast-casual concepts run $100-$200/sq ft, full-service restaurants $150-$300/sq ft, and fine dining $250-$500+/sq ft including kitchen equipment."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build out a restaurant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Restaurant buildouts typically take 8-16 weeks from permit approval. Simple spaces may take 6-8 weeks, while complex restaurants with custom kitchens and extensive finishes can take 12-20 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle health department requirements?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we have extensive experience with Georgia health department requirements. We ensure your commercial kitchen meets all codes for hood ventilation, grease traps, floor drains, and food-safe surfaces."
                }
              },
              {
                "@type": "Question",
                "name": "Can you install commercial kitchen equipment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we coordinate commercial kitchen equipment installation including walk-in coolers, hood systems, cooking equipment connections, and plumbing for commercial dishwashers and sinks."
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
          benefitHeadline="Build a Restaurant That Keeps Customers Coming Back"
          seoHeadline="Restaurant Remodeling Atlanta | Commercial Restaurant Contractor"
          title="Build a Restaurant That Keeps Customers Coming Back"
          subtitle="Expert restaurant construction from commercial kitchens to stunning dining rooms. Code-compliant, health inspection ready, and built to impress."
          primaryCTA="Request a Consultation"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroCommercial}
          trustLine="Licensed • Bonded • Insured • DBE/MBE • 20+ Years in Metro Atlanta"
          useH1={true}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl text-center">
            <SectionLabel>Atlanta Restaurant Construction Experts</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 mt-3">
              From Kitchen to Curb Appeal—<span className="text-accent">We Build It All</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Opening a restaurant is challenging enough without construction headaches. At First Class Construction Group, 
              we specialize in restaurant remodeling that passes health inspections the first time, creates memorable 
              dining experiences, and gets you open on schedule. From fast-casual to fine dining, we build restaurants 
              that work.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <AnimatedSection delay={100}>
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container">
              <div className="text-center mb-12">
                <SectionLabel>What We Build</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Complete Restaurant <span className="text-accent">Construction Services</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Everything you need to open or renovate your restaurant.
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
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <SectionLabel>Full-Service Restaurant Buildout</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Everything Your Restaurant <span className="text-accent">Needs</span>
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
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container">
              <div className="text-center mb-12">
                <SectionLabel>The First Class Difference</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Why Restaurant Owners <span className="text-accent">Trust Us</span>
                </h2>
                <div className="section-divider mt-6" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <ValueCard
                  icon={ShieldCheck}
                  title="Code Compliant"
                  description="We know health codes inside and out. Your kitchen passes inspection the first time."
                />
                <ValueCard
                  icon={Clock}
                  title="Fast Turnaround"
                  description="Every day you are not open costs money. We work efficiently to get you open faster."
                />
                <ValueCard
                  icon={UserCheck}
                  title="Dedicated Project Manager"
                  description="One point of contact who understands restaurant construction."
                />
                <ValueCard
                  icon={Hammer}
                  title="Quality Construction"
                  description="Built to handle high-volume commercial use. Durable and professional."
                />
                <ValueCard
                  icon={Calendar}
                  title="On-Time Delivery"
                  description="Clear schedules so you can plan your opening date with confidence."
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection delay={100}>
          <section className="py-16 md:py-20 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <SectionLabel>Client Success Stories</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  What Restaurant Owners <span className="text-accent">Say</span>
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
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                Our Restaurant Buildout <span className="text-accent">Process</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid gap-0">
              <ProcessStep
                number={1}
                title="Site Assessment"
                description="We evaluate your space, review your concept, and identify code requirements."
              />
              <ProcessStep
                number={2}
                title="Design & Permits"
                description="Architectural plans, health department coordination, and permit acquisition."
              />
              <ProcessStep
                number={3}
                title="Build & Communicate"
                description="Professional construction with daily updates and milestone tracking."
              />
              <ProcessStep
                number={4}
                title="Inspection & Handover"
                description="Final walkthrough, health inspections, and certificate of occupancy."
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
                Ready to Build Your <span className="text-accent">Restaurant?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule your free consultation and get a detailed proposal for your restaurant project.
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
                Request Your <span className="text-accent">Restaurant Quote</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us about your restaurant project. We respond within one business day.
              </p>
              <div className="section-divider mt-6" />
            </div>
            <MultiStepCommercialForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RestaurantRemodeling;
