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
import { Calendar, UserCheck, ShieldCheck, Clock, Hammer, CheckCircle, Store, Lightbulb, CreditCard, ShoppingBag } from "lucide-react";
import heroRetail from "@/assets/hero-retail.jpg";
import retailBuildout from "@/assets/retail-buildout.jpg";

const RetailConstruction = () => {
  const services = [
    {
      icon: Store,
      title: "Storefront Design",
      description: "Eye-catching storefronts that attract customers and showcase your brand.",
    },
    {
      icon: ShoppingBag,
      title: "Display & Fixtures",
      description: "Custom shelving, display cases, and merchandising systems for maximum impact.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Strategic lighting that highlights products and creates the right ambiance.",
    },
    {
      icon: CreditCard,
      title: "POS & Technology",
      description: "Point-of-sale infrastructure, security systems, and smart retail integration.",
    },
  ];

  const features = [
    "Complete store buildouts",
    "Storefront and facade construction",
    "Custom display and shelving",
    "Fitting room construction",
    "Checkout counter installation",
    "Flooring and ceiling systems",
    "HVAC and electrical upgrades",
    "Security system installation",
    "ADA compliance updates",
    "Signage and branding integration",
  ];

  const testimonials = [
    {
      quote: "They communicated daily and hit every milestone. The buildout was completed ahead of schedule, and our grand opening exceeded all expectations.",
      author: "J. Rivera",
      location: "Midtown",
      rating: 5,
    },
    {
      quote: "Our new store looks amazing. Customers constantly compliment the design. First Class understood our brand and brought it to life.",
      author: "Amanda K.",
      location: "Buckhead",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Retail Construction Atlanta | Retail Build-Out Contractor | First Class</title>
        <meta name="description" content="Atlanta retail construction & build-outs. Storefronts, display fixtures & complete retail spaces. Fast turnaround, on-budget. Licensed. 678-671-6336." />
        <meta name="keywords" content="retail construction atlanta, retail build out atlanta, retail buildout contractor, store construction atlanta, retail renovation atlanta, commercial retail construction, retail store buildout, storefront construction atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/retail-construction" />
        <meta property="og:title" content="Retail Construction Atlanta | Retail Build-Out Contractor" />
        <meta property="og:description" content="Expert retail construction: storefronts, display fixtures, fitting rooms & complete retail spaces in Metro Atlanta. Fast turnaround." />
        <meta property="og:url" content="https://fcconstruct.com/retail-construction" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Retail Construction Atlanta | First Class Construction" />
        <meta name="twitter:description" content="Retail construction and build-outs: storefronts, display fixtures, fitting rooms & complete retail spaces." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Retail Construction",
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
            "areaServed": ["Atlanta", "Buckhead", "Midtown", "Lenox", "Perimeter", "Sandy Springs", "Marietta"],
            "description": "Professional retail construction services including store buildouts, storefront construction, display fixtures, and complete retail space renovations."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a retail buildout cost in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Retail buildout costs in Atlanta range from $50-$200+ per sq ft depending on store type and finishes. Basic retail spaces run $50-$100/sq ft, boutiques $100-$150/sq ft, and flagship stores $150-$300+/sq ft."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a retail buildout take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Retail buildouts typically take 6-12 weeks from permit approval. Small stores may take 4-6 weeks, while larger stores with custom fixtures and complex MEP work can take 10-16 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Can you work with my landlord's requirements?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we regularly coordinate with landlords and property managers. We review lease requirements, obtain necessary approvals, and ensure all work meets building and landlord specifications."
                }
              },
              {
                "@type": "Question",
                "name": "Do you install custom retail fixtures and displays?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we build and install custom display fixtures, shelving systems, checkout counters, fitting rooms, and specialty retail elements. We can also coordinate with fixture vendors you specify."
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
          benefitHeadline="Build a Retail Space That Drives Sales"
          seoHeadline="Retail Construction Atlanta | Commercial Retail Build-Out Contractor"
          title="Build a Retail Space That Drives Sales"
          subtitle="Expert retail construction that maximizes your selling space and showcases your brand. Fast turnaround, quality construction, and on-budget delivery."
          primaryCTA="Request a Consultation"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroRetail}
          trustLine="Licensed • Bonded • Insured • DBE/MBE • 20+ Years in Metro Atlanta"
          useH1={true}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl text-center">
            <SectionLabel>Atlanta Retail Construction Experts</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 mt-3">
              Create a Store That <span className="text-accent">Sells</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your retail space is your most powerful sales tool. At First Class Construction Group, 
              we build retail environments that attract customers, showcase products, and drive revenue. 
              From boutiques to flagship stores, we deliver construction that meets deadlines and exceeds expectations.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <AnimatedSection>
          <section className="py-12 bg-muted/30">
            <div className="container max-w-5xl">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={retailBuildout} 
                  alt="Modern retail store buildout in Atlanta with custom fixtures and lighting" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white font-playfair text-xl">Retail Build-Out – Midtown Atlanta</p>
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
                  Complete Retail <span className="text-accent">Construction Services</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Everything you need to open or renovate your retail space.
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
                <SectionLabel>Full-Service Retail Buildout</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Everything Your Store <span className="text-accent">Needs</span>
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
                  Why Retailers <span className="text-accent">Trust Us</span>
                </h2>
                <div className="section-divider mt-6" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <ValueCard
                  icon={Clock}
                  title="Fast Turnaround"
                  description="Every day your doors are closed costs money. We work efficiently to open on time."
                />
                <ValueCard
                  icon={UserCheck}
                  title="Dedicated Project Manager"
                  description="One point of contact who understands retail construction timelines."
                />
                <ValueCard
                  icon={Hammer}
                  title="Quality Construction"
                  description="Built to handle high-traffic retail environments. Durable and beautiful."
                />
                <ValueCard
                  icon={ShieldCheck}
                  title="Code Compliant"
                  description="All work meets local codes. ADA compliant and inspection-ready."
                />
                <ValueCard
                  icon={Calendar}
                  title="On-Time Delivery"
                  description="Plan your grand opening with confidence. We hit our deadlines."
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
                  What Store Owners <span className="text-accent">Say</span>
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
                Our Retail Buildout <span className="text-accent">Process</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid gap-0">
              <ProcessStep
                number={1}
                title="Site Assessment"
                description="We evaluate your space, understand your brand, and develop a comprehensive plan."
              />
              <ProcessStep
                number={2}
                title="Design & Proposal"
                description="Detailed plans, fixture specifications, timeline, and transparent pricing."
              />
              <ProcessStep
                number={3}
                title="Build & Communicate"
                description="Professional construction with daily updates and milestone tracking."
              />
              <ProcessStep
                number={4}
                title="Inspection & Handover"
                description="Final walkthrough, code inspections, and grand opening preparation."
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
                Ready to Build Your <span className="text-accent">Retail Space?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule your free consultation and get a detailed proposal for your retail project.
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
                Request Your <span className="text-accent">Retail Quote</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us about your retail project. We respond within one business day.
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

export default RetailConstruction;
