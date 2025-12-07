import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/Hero";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, UserCheck, ShieldCheck, DollarSign, Hammer, CheckCircle, Ruler, Lightbulb, PaintBucket } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";

const KitchenRemodeling = () => {
  const services = [
    {
      icon: Ruler,
      title: "Custom Cabinet Design",
      description: "Maximize storage and style with custom cabinetry tailored to your space and workflow.",
    },
    {
      icon: PaintBucket,
      title: "Countertops & Surfaces",
      description: "Granite, quartz, marble, and butcher block options to match your aesthetic and budget.",
    },
    {
      icon: Lightbulb,
      title: "Lighting & Electrical",
      description: "Under-cabinet lighting, pendant fixtures, and smart home integration for modern living.",
    },
    {
      icon: Hammer,
      title: "Flooring & Tile",
      description: "Durable, beautiful flooring options including hardwood, tile, and luxury vinyl.",
    },
  ];

  const features = [
    "Full kitchen layout redesign",
    "Custom cabinetry installation",
    "Countertop fabrication & installation",
    "Backsplash tile work",
    "Appliance installation",
    "Plumbing fixture upgrades",
    "Electrical & lighting updates",
    "Flooring installation",
    "Island additions",
    "Pantry organization systems",
  ];

  const testimonials = [
    {
      quote: "Our kitchen went from dated and cramped to open and gorgeous. The team was professional, clean, and finished on schedule. We cook every night now!",
      author: "Sarah M.",
      location: "Buckhead",
      rating: 5,
    },
    {
      quote: "They helped us design a layout that actually works for our family. The custom cabinets are stunning and the attention to detail was incredible.",
      author: "James & Linda P.",
      location: "Sandy Springs",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kitchen Remodeling Atlanta | Kitchen Remodel Contractors | First Class</title>
        <meta name="description" content="Atlanta kitchen remodeling experts. Custom cabinets, countertops & complete renovations. Licensed, 20+ years experience. Free estimates. 678-671-6336." />
        <meta name="keywords" content="kitchen remodeling atlanta, kitchen remodel atlanta, atlanta kitchen renovation, kitchen renovation atlanta ga, kitchen contractors atlanta, kitchen cabinets atlanta, kitchen countertops atlanta, kitchen design atlanta, custom kitchen atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/kitchen-remodeling" />
        <meta property="og:title" content="Kitchen Remodeling Atlanta | Expert Kitchen Renovation Contractors" />
        <meta property="og:description" content="Expert kitchen remodeling in Atlanta. Custom cabinets, countertops, backsplash, flooring & complete renovations. Licensed contractor. Free estimates." />
        <meta property="og:url" content="https://fcconstruct.com/kitchen-remodeling" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fcconstruct.com/assets/kitchen-after.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Remodeling Atlanta | First Class Construction" />
        <meta name="twitter:description" content="Expert kitchen remodeling: custom cabinets, countertops, backsplash, flooring & complete kitchen renovations in Metro Atlanta." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Kitchen Remodeling",
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
            "areaServed": ["Atlanta", "Buckhead", "Midtown", "Decatur", "Sandy Springs", "Brookhaven", "Dunwoody", "Marietta", "Alpharetta", "Roswell"],
            "description": "Professional kitchen remodeling services including custom cabinets, countertops, backsplash, flooring, and complete kitchen renovations.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD"
              }
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a kitchen remodel cost in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kitchen remodel costs in Atlanta typically range from $25,000 to $75,000+ depending on scope. Basic updates run $15,000-$30,000, mid-range remodels $30,000-$60,000, and high-end renovations $60,000-$150,000+. We provide free detailed estimates for your specific project."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a kitchen remodel take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most kitchen remodels take 6-12 weeks from demolition to completion. Simple updates may take 4-6 weeks, while complete gut renovations can take 10-16 weeks. We provide a detailed timeline during your free consultation."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need permits for a kitchen remodel in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, permits are typically required for electrical, plumbing, and structural work in Atlanta. As a licensed contractor, we handle all permit acquisition and inspections for you."
                }
              },
              {
                "@type": "Question",
                "name": "Can I stay in my home during a kitchen remodel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, most homeowners stay in their homes during kitchen remodels. We set up a temporary kitchen area and work to minimize disruption. We also maintain a clean job site throughout the project."
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
          credentialBadge="Licensed Contractor · Atlanta Metro"
          benefitHeadline="Create the Kitchen You've Always Dreamed Of"
          seoHeadline="Kitchen Remodeling Atlanta | Licensed Kitchen Renovation Contractors"
          title="Create the Kitchen You've Always Dreamed Of"
          subtitle="Expert kitchen remodeling for Atlanta homeowners. Custom cabinets, stunning countertops, and thoughtful design—delivered on time and on budget."
          primaryCTA="Get Your Free Kitchen Consultation"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroKitchen}
          trustLine="Licensed • Insured • 20+ Years Serving Metro Atlanta • Free Estimates"
          useH1={true}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl text-center">
            <SectionLabel>Atlanta's Kitchen Experts</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 mt-3">
              Transform Your Kitchen Into the <span className="text-accent">Heart of Your Home</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your kitchen is more than just a place to cook—it's where family gathers, memories are made, 
              and everyday life happens. At First Class Construction Group, we specialize in kitchen remodeling 
              that combines beautiful design with practical functionality. From complete gut renovations to 
              strategic updates, we deliver kitchens Atlanta homeowners love.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <AnimatedSection>
          <section className="py-12 bg-muted/30">
            <div className="container max-w-5xl">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={kitchenAfter} 
                  alt="Modern kitchen remodel in Atlanta with custom cabinets and quartz countertops" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-playfair text-xl">Modern Kitchen Renovation – Buckhead, Atlanta</p>
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
                <SectionLabel>What We Do</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Complete Kitchen <span className="text-accent">Remodeling Services</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Everything you need to create your dream kitchen, all from one trusted contractor.
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
                <SectionLabel>Full-Service Kitchen Renovation</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Everything Your Kitchen <span className="text-accent">Needs</span>
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
                  Why Atlanta Homeowners <span className="text-accent">Trust Us</span>
                </h2>
                <div className="section-divider mt-6" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <ValueCard
                  icon={UserCheck}
                  title="Dedicated Project Manager"
                  description="One point of contact from design to completion. No confusion, no runaround."
                />
                <ValueCard
                  icon={DollarSign}
                  title="Transparent Pricing"
                  description="Detailed quotes with clear line items. No surprises, no hidden costs."
                />
                <ValueCard
                  icon={Calendar}
                  title="On-Time Completion"
                  description="We respect your time. Clear schedules you can plan your life around."
                />
                <ValueCard
                  icon={Hammer}
                  title="Quality Craftsmanship"
                  description="Skilled tradespeople, premium materials, and attention to every detail."
                />
                <ValueCard
                  icon={ShieldCheck}
                  title="Licensed & Insured"
                  description="Fully licensed, bonded, and insured. DBE/MBE certified contractor."
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
                <SectionLabel>Happy Homeowners</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  What Our Kitchen Clients <span className="text-accent">Say</span>
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

        {/* Process */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <SectionLabel>How It Works</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                Our Kitchen Remodeling <span className="text-accent">Process</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                From first consultation to final walkthrough—exactly what to expect.
              </p>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid gap-0">
              <ProcessStep
                number={1}
                title="Free Consultation"
                description="We visit your home, discuss your vision, take measurements, and understand your goals."
              />
              <ProcessStep
                number={2}
                title="Design & Estimate"
                description="You receive a detailed proposal with material selections, timeline, and transparent pricing."
              />
              <ProcessStep
                number={3}
                title="Build & Communicate"
                description="Our professional crew transforms your kitchen while keeping you updated every step of the way."
              />
              <ProcessStep
                number={4}
                title="Final Walkthrough"
                description="We complete a detailed inspection with you and provide warranty documentation."
                isLast={true}
              />
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container text-center">
            <SectionLabel>Service Areas</SectionLabel>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4 mt-3">
              Kitchen Remodeling Across <span className="text-accent">Metro Atlanta</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Serving homeowners throughout the Atlanta metropolitan area
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm max-w-4xl mx-auto">
              {["Atlanta", "Buckhead", "Midtown", "Decatur", "Sandy Springs", "Brookhaven", 
                "Dunwoody", "Marietta", "Alpharetta", "Roswell", "Johns Creek", "Smyrna"].map((area) => (
                <Link 
                  key={area} 
                  to={`/${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-card border rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <SectionLabel>Get Started Today</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                Ready to Transform Your <span className="text-accent">Kitchen?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule your free in-home consultation and get a detailed estimate for your kitchen remodel.
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
                Request Your Free <span className="text-accent">Kitchen Quote</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us about your kitchen project. We'll respond within one business day.
              </p>
              <div className="section-divider mt-6" />
            </div>
            <MultiStepContactForm showCity={true} showTimeline={true} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default KitchenRemodeling;
