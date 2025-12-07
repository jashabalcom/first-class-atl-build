import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, Building2, Hammer, Store, UtensilsCrossed, Briefcase, HardHat } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepCommercialForm } from "@/components/MultiStepCommercialForm";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import MobileCallBar from "@/components/MobileCallBar";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import heroCommercial from "@/assets/hero-commercial.jpg";

const CommercialContractorAtlanta = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "First Class Construction Group - Commercial Contractor Atlanta",
    "@id": "https://fcconstruct.com/commercial-contractor-atlanta",
    "url": "https://fcconstruct.com/commercial-contractor-atlanta",
    "telephone": "+1-678-671-6336",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Atlanta",
      "containedInPlace": { "@type": "State", "name": "Georgia" }
    },
    "description": "Licensed commercial contractor in Atlanta offering office renovations, restaurant remodeling, retail construction, and tenant build-outs. DBE/MBE certified.",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  const commercialServices = [
    { icon: Briefcase, title: "Office Renovation", description: "Modern office build-outs, conference rooms, and workspace transformations.", path: "/office-renovation" },
    { icon: UtensilsCrossed, title: "Restaurant Remodeling", description: "Kitchen upgrades, dining room renovations, and full restaurant build-outs.", path: "/restaurant-remodeling" },
    { icon: Store, title: "Retail Construction", description: "Storefront build-outs, retail displays, and customer-focused spaces.", path: "/retail-construction" },
    { icon: Building2, title: "Tenant Build-Out", description: "Custom tenant improvements for commercial lease spaces.", path: "/tenant-buildout" }
  ];

  const whyChooseUs = [
    "Licensed & insured Georgia contractor",
    "DBE/MBE certified",
    "20+ years commercial experience",
    "Minimize business downtime",
    "Code-compliant construction",
    "ADA accessibility expertise",
    "Full permit management",
    "On-time project delivery",
    "Transparent pricing",
    "Dedicated project manager",
    "After-hours work available",
    "National brand experience"
  ];

  const testimonials = [
    { quote: "First Class completed our restaurant renovation on time and under budget. They worked nights to minimize our downtime. Highly professional team.", author: "David M.", location: "Restaurant Owner, Midtown", rating: 5 },
    { quote: "We've used them for three retail locations now. Consistent quality, great communication, and they understand the urgency of getting stores open.", author: "Jennifer K.", location: "Retail Manager, Buckhead", rating: 5 }
  ];

  const processSteps = [
    { number: 1, title: "Site Consultation", description: "We assess your space, understand your business needs, and provide a detailed estimate." },
    { number: 2, title: "Design & Permits", description: "Our team manages design, engineering, permitting, and code compliance." },
    { number: 3, title: "Professional Build-Out", description: "Skilled crews execute your project efficiently with minimal business disruption." },
    { number: 4, title: "Final Inspection", description: "Complete walkthrough, punch list resolution, and certificate of occupancy assistance." }
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" }, { name: "Buckhead", path: "/buckhead" },
    { name: "Midtown", path: "/midtown" }, { name: "Decatur", path: "/decatur" },
    { name: "Sandy Springs", path: "/sandy-springs" }, { name: "Brookhaven", path: "/brookhaven" },
    { name: "Dunwoody", path: "/dunwoody" }, { name: "Marietta", path: "/marietta" },
    { name: "Alpharetta", path: "/alpharetta" }, { name: "Roswell", path: "/roswell" },
    { name: "Johns Creek", path: "/johns-creek" }, { name: "Smyrna", path: "/smyrna" }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Contractor Atlanta | Licensed Business Build-Outs | First Class</title>
        <meta name="description" content="Licensed commercial contractor in Atlanta. Office renovations, restaurant remodeling, retail construction & tenant build-outs. DBE/MBE certified. 20+ years experience. Free estimates. Call 678-671-6336." />
        <meta name="keywords" content="commercial contractor atlanta, commercial construction atlanta, commercial remodeling atlanta, commercial build out atlanta, office contractor atlanta, restaurant contractor atlanta, retail contractor atlanta, tenant improvement atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/commercial-contractor-atlanta" />
        <meta property="og:title" content="Commercial Contractor Atlanta | Licensed Business Build-Outs" />
        <meta property="og:description" content="Atlanta's trusted commercial contractor. Office, restaurant, retail & tenant build-outs. DBE/MBE certified, 20+ years experience. Free estimates!" />
        <meta property="og:url" content="https://fcconstruct.com/commercial-contractor-atlanta" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Build Your Business Space with Atlanta's Trusted Commercial Experts"
          seoHeadline="Commercial Contractor Atlanta | Licensed Business Build-Outs & Renovations"
          subtitle="From offices and restaurants to retail stores and tenant improvements, our licensed commercial contractors deliver quality construction on time and on budget."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroCommercial}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · DBE/MBE Certified"
        />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Commercial Contractor Atlanta</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Full-Service <span className="text-primary">Commercial Construction</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                First Class Construction Group is Atlanta's premier commercial contractor, specializing in office renovations, restaurant remodeling, retail construction, and tenant build-outs. As a DBE/MBE certified contractor with over 20 years of experience, we understand the unique demands of commercial projects—delivering quality work while minimizing disruption to your business.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">
                Commercial Construction <span className="text-primary">Services</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {commercialServices.map((service, index) => (
                <Link key={index} to={service.path} className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionLabel>Why Choose Us</SectionLabel>
                  <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-6">
                    Atlanta's Trusted <span className="text-primary">Commercial Contractor</span>
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {whyChooseUs.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-playfair text-2xl text-foreground mb-4">Ready to Start Your Project?</h3>
                  <p className="text-muted-foreground mb-6">Schedule your free site consultation today and get a detailed estimate for your commercial project.</p>
                  <div className="space-y-4">
                    <Link to="/contact" className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">Get Free Estimate</Link>
                    <a href="tel:+16786716336" className="flex items-center justify-center gap-2 w-full border border-primary text-primary py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors">
                      <Phone className="w-4 h-4" />Call 678-671-6336
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>The First Class Difference</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">What Sets Us <span className="text-primary">Apart</span></h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ValueCard icon={Users} title="Dedicated Project Manager" description="One point of contact for seamless coordination and communication." />
              <ValueCard icon={Shield} title="DBE/MBE Certified" description="Certified disadvantaged and minority business enterprise." />
              <ValueCard icon={Clock} title="Minimize Downtime" description="Flexible scheduling including nights and weekends to keep your business running." />
              <ValueCard icon={Award} title="Code Compliance" description="Expert navigation of building codes, ADA requirements, and inspections." />
              <ValueCard icon={Hammer} title="Quality Construction" description="Skilled craftsmen delivering lasting, professional results." />
              <ValueCard icon={HardHat} title="Full-Service Contractor" description="Design, permitting, construction, and final inspection—all handled." />
            </div>
          </div>
        </AnimatedSection>

        {/* Client Logos */}
        <ClientLogosCarousel />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Customer Reviews</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">What Our <span className="text-primary">Clients Say</span></h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} location={testimonial.location} rating={testimonial.rating} />
              ))}
            </div>
            <GHLReviewsWidget />
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">How We <span className="text-primary">Work</span></h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step) => (
                <ProcessStep key={step.number} number={step.number} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Service Areas</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Serving <span className="text-primary">Metro Atlanta</span></h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <Link key={area.path} to={area.path} className="px-4 py-2 bg-card border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-colors text-sm">{area.name}</Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <SectionLabel>Get Started Today</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-3">Ready to Build Your <span className="text-accent">Business Space?</span></h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Contact Atlanta's trusted commercial contractor for a free site consultation and estimate.</p>
            <div className="section-divider" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">Book Free Consultation</Link>
              <a href="tel:+16786716336" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-accent/50 hover:border-accent hover:text-accent font-semibold rounded-lg transition-colors">
                <Phone className="w-5 h-5" />Call 678-671-6336
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <SectionLabel>Get Started</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl text-foreground">Request Your <span className="text-primary">Free Estimate</span></h2>
              </div>
              <MultiStepCommercialForm />
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
      <MobileCallBar />
    </>
  );
};

export default CommercialContractorAtlanta;