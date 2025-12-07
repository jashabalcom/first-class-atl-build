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
import { Calendar, UserCheck, ShieldCheck, Clock, Hammer, CheckCircle, Building, FileText, Wrench, DollarSign } from "lucide-react";
import heroTenantBuildout from "@/assets/hero-tenant-buildout.jpg";

const TenantBuildout = () => {
  const services = [
    {
      icon: Building,
      title: "Shell to Suite",
      description: "Transform raw commercial space into a fully functional, branded environment.",
    },
    {
      icon: FileText,
      title: "Lease Compliance",
      description: "We ensure all work meets landlord requirements and lease specifications.",
    },
    {
      icon: Wrench,
      title: "MEP Coordination",
      description: "Mechanical, electrical, and plumbing systems designed for your specific needs.",
    },
    {
      icon: DollarSign,
      title: "TI Allowance Management",
      description: "Maximize your tenant improvement allowance with strategic planning.",
    },
  ];

  const features = [
    "Shell space buildouts",
    "Demising wall construction",
    "HVAC system installation",
    "Electrical and lighting",
    "Plumbing and restrooms",
    "Flooring and ceiling systems",
    "Custom millwork and fixtures",
    "ADA compliance upgrades",
    "Fire and life safety systems",
    "Final punch list and turnover",
  ];

  const testimonials = [
    {
      quote: "They worked within our TI allowance and delivered a space that exceeded our expectations. The landlord was impressed with the quality.",
      author: "David L.",
      location: "Perimeter Center",
      rating: 5,
    },
    {
      quote: "From shell space to move-in ready in 8 weeks. They coordinated everything with building management seamlessly.",
      author: "Patricia M.",
      location: "Midtown",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tenant Buildout Atlanta | Tenant Improvement Contractor | First Class</title>
        <meta name="description" content="Atlanta tenant buildout contractor. Shell to suite, TI allowance management & lease-compliant improvements. Licensed & insured. 678-671-6336." />
        <meta name="keywords" content="tenant buildout atlanta, tenant improvement contractor, tenant build out contractors, commercial tenant improvement, tenant buildout contractor atlanta, TI contractor atlanta, leasehold improvement contractor, shell to suite atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/tenant-buildout" />
        <meta property="og:title" content="Tenant Buildout Atlanta | Tenant Improvement Contractor" />
        <meta property="og:description" content="Expert tenant buildout: shell to suite construction, TI allowance management, lease-compliant improvements in Metro Atlanta." />
        <meta property="og:url" content="https://fcconstruct.com/tenant-buildout" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tenant Buildout Atlanta | First Class Construction" />
        <meta name="twitter:description" content="Tenant buildout and improvement: shell to suite construction, TI management, lease-compliant improvements." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Tenant Buildout",
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
            "description": "Professional tenant buildout services including shell to suite construction, tenant improvement management, and lease-compliant commercial improvements."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a TI allowance and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Tenant Improvement (TI) allowance is money the landlord provides for buildout costs, typically $20-$80+ per sq ft. We help you maximize your TI allowance by creating efficient designs and value-engineered construction plans."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a tenant buildout take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tenant buildouts typically take 6-12 weeks from permit approval. Shell space buildouts may take 8-16 weeks, while second-generation space improvements can take 4-8 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Do you coordinate with building management?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we handle all coordination with building management including construction rules, freight elevator scheduling, contractor insurance requirements, and building inspections."
                }
              },
              {
                "@type": "Question",
                "name": "What's included in a shell space buildout?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shell space buildouts include demising walls, HVAC distribution, electrical and lighting, plumbing, flooring, ceiling systems, and finishes. We transform raw space into a complete, move-in ready environment."
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
          benefitHeadline="Transform Your Leased Space Into the Perfect Business Environment"
          seoHeadline="Tenant Buildout Atlanta | Commercial Tenant Improvement Contractor"
          title="Transform Your Leased Space Into the Perfect Business Environment"
          subtitle="Expert tenant buildouts that maximize your TI allowance and meet landlord requirements. From shell space to move-in ready, we handle it all."
          primaryCTA="Request a Consultation"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroTenantBuildout}
          trustLine="Licensed • Bonded • Insured • DBE/MBE • 20+ Years in Metro Atlanta"
          useH1={true}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl text-center">
            <SectionLabel>Atlanta Tenant Buildout Experts</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 mt-3">
              Make Your Leased Space <span className="text-accent">Work for You</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Moving into a new commercial space is exciting, but turning a shell or dated interior into 
              your ideal workplace requires expertise. At First Class Construction Group, we specialize 
              in tenant improvements that meet landlord requirements, maximize your TI allowance, and 
              create spaces that represent your brand.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <AnimatedSection delay={100}>
          <section className="py-16 md:py-20 bg-muted/30">
            <div className="container">
              <div className="text-center mb-12">
                <SectionLabel>What We Do</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Complete Tenant <span className="text-accent">Improvement Services</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Everything you need to transform your leased space.
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
                <SectionLabel>Full-Service Tenant Buildout</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                  Everything Your Space <span className="text-accent">Needs</span>
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
                  Why Tenants <span className="text-accent">Trust Us</span>
                </h2>
                <div className="section-divider mt-6" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <ValueCard
                  icon={DollarSign}
                  title="TI Allowance Experts"
                  description="We help you maximize every dollar of your tenant improvement allowance."
                />
                <ValueCard
                  icon={FileText}
                  title="Landlord Coordination"
                  description="We work directly with building management to ensure smooth approvals."
                />
                <ValueCard
                  icon={Clock}
                  title="Fast Turnaround"
                  description="Move in on schedule. We understand time is money."
                />
                <ValueCard
                  icon={UserCheck}
                  title="Dedicated Project Manager"
                  description="One point of contact throughout your entire buildout."
                />
                <ValueCard
                  icon={ShieldCheck}
                  title="Code Compliant"
                  description="All work meets building codes and lease requirements."
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
                  What Tenants <span className="text-accent">Say</span>
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
                Our Tenant Buildout <span className="text-accent">Process</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid gap-0">
              <ProcessStep
                number={1}
                title="Site & Lease Review"
                description="We review your space, lease requirements, and TI allowance to develop a strategic plan."
              />
              <ProcessStep
                number={2}
                title="Design & Approvals"
                description="Architectural plans, landlord approvals, and permit coordination."
              />
              <ProcessStep
                number={3}
                title="Build & Communicate"
                description="Professional construction with building management coordination and daily updates."
              />
              <ProcessStep
                number={4}
                title="Turnover & Move-In"
                description="Final walkthrough, punch list completion, and keys in your hand."
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
                Ready to Build Out Your <span className="text-accent">New Space?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Schedule your free consultation and get a proposal that works within your TI budget.
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
                Request Your <span className="text-accent">Tenant Buildout Quote</span>
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

      <Footer />
    </>
  );
};

export default TenantBuildout;
