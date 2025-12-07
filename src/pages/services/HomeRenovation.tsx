import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, Home, Hammer, Ruler, Paintbrush } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import MobileCallBar from "@/components/MobileCallBar";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";

const HomeRenovation = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Renovation Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "First Class Construction Group",
      "telephone": "+1-678-671-6336",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Atlanta",
        "addressRegion": "GA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Atlanta",
      "containedInPlace": { "@type": "State", "name": "Georgia" }
    },
    "description": "Complete home renovation services in Atlanta including whole-home remodeling, room additions, and interior transformations.",
    "serviceType": "Home Renovation"
  };

  const services = [
    { icon: Home, title: "Whole-Home Remodels", description: "Complete interior transformations with cohesive design and quality finishes" },
    { icon: Hammer, title: "Room Additions", description: "Seamless expansions that add living space and increase home value" },
    { icon: Ruler, title: "Open Floor Plans", description: "Wall removals and structural modifications for modern living" },
    { icon: Paintbrush, title: "Interior Updates", description: "Flooring, paint, trim, lighting, and fixture upgrades throughout" }
  ];

  const features = [
    "Complete interior remodeling", "Room additions & expansions", "Open concept conversions",
    "Structural modifications", "Flooring installation", "Interior & exterior painting",
    "Lighting upgrades", "Trim & millwork", "Door & window replacement",
    "HVAC updates", "Electrical upgrades", "Permit management"
  ];

  const testimonials = [
    { quote: "First Class transformed our 1980s colonial into a modern open-concept home. The project manager kept us informed daily and the quality exceeded expectations.", author: "David & Karen L.", location: "Dunwoody, GA", rating: 5 },
    { quote: "We renovated our entire first floor—kitchen, living room, and dining area. The crew was professional, clean, and finished on schedule.", author: "Michelle P.", location: "Marietta, GA", rating: 5 }
  ];

  const processSteps = [
    { number: 1, title: "Free Consultation", description: "We visit your home, discuss your vision, and provide a detailed renovation estimate." },
    { number: 2, title: "Design & Planning", description: "Our team creates a comprehensive plan including materials, timeline, and permits." },
    { number: 3, title: "Expert Construction", description: "Licensed professionals handle all demolition, structural work, and installations." },
    { number: 4, title: "Final Walkthrough", description: "We conduct a thorough inspection together, ensuring every detail meets your expectations." }
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" }, { name: "Buckhead", path: "/buckhead" },
    { name: "Midtown", path: "/midtown" }, { name: "Decatur", path: "/decatur" },
    { name: "Sandy Springs", path: "/sandy-springs" }, { name: "Brookhaven", path: "/brookhaven" },
    { name: "Dunwoody", path: "/dunwoody" }, { name: "Marietta", path: "/marietta" },
    { name: "Alpharetta", path: "/alpharetta" }, { name: "Roswell", path: "/roswell" }
  ];

  return (
    <>
      <Helmet>
        <title>Home Renovation Atlanta | Whole Home Remodeling Contractors | First Class</title>
        <meta name="description" content="Expert home renovation in Atlanta. Whole-home remodeling, room additions, open floor plans & complete interior transformations. Licensed contractor, 20+ years experience. Free estimates. Call 678-671-6336." />
        <meta name="keywords" content="home renovation atlanta, whole home remodeling atlanta, home remodel atlanta ga, house renovation atlanta, home addition atlanta, interior remodeling atlanta, home renovation contractors atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/home-renovation" />
        <meta property="og:title" content="Home Renovation Atlanta | Whole Home Remodeling Experts" />
        <meta property="og:description" content="Transform your entire home with Atlanta's trusted renovation experts. Complete remodeling, additions & interior updates. 20+ years experience. Free estimates!" />
        <meta property="og:url" content="https://fcconstruct.com/home-renovation" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Transform Your Entire Home Into the Space You've Always Wanted"
          seoHeadline="Home Renovation Atlanta | Whole Home Remodeling Contractors"
          subtitle="From single rooms to complete transformations, our licensed contractors deliver exceptional craftsmanship and lasting quality for your Atlanta home."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroKitchen}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · Atlanta Metro"
        />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Home Renovation Atlanta</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Complete Home <span className="text-primary">Transformations</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At First Class Construction Group, we specialize in whole-home renovations that breathe new life into your living space. Whether you're updating a dated interior, adding square footage, or completely reimagining your floor plan, our experienced team delivers exceptional results on time and within budget.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Expertise</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Home Renovation <span className="text-primary">Services</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionLabel>What We Offer</SectionLabel>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                    Complete Renovation <span className="text-primary">Solutions</span>
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-8">
                  <h3 className="font-display text-2xl text-foreground mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">Schedule your free in-home consultation today.</p>
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

        <AnimatedSection className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>The First Class Difference</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">Why Choose <span className="text-primary">Us</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ValueCard icon={Users} title="Dedicated Project Manager" description="One point of contact throughout your entire project." />
              <ValueCard icon={Shield} title="Transparent Pricing" description="Detailed estimates with no hidden fees." />
              <ValueCard icon={Clock} title="On-Time Completion" description="We respect your schedule and work efficiently." />
              <ValueCard icon={Award} title="Quality Craftsmanship" description="Skilled craftsmen with attention to detail." />
              <ValueCard icon={Hammer} title="Licensed & Insured" description="Fully licensed Georgia contractor with comprehensive insurance." />
              <ValueCard icon={Home} title="Design Expertise" description="Our team helps you select perfect materials and layouts." />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Customer Reviews</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">What Our <span className="text-primary">Clients Say</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} location={testimonial.location} rating={testimonial.rating} />
              ))}
            </div>
            <GHLReviewsWidget />
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">How We <span className="text-primary">Work</span></h2>
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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">Home Renovation Across <span className="text-primary">Metro Atlanta</span></h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <Link key={area.path} to={area.path} className="px-4 py-2 bg-card border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-colors text-sm">{area.name}</Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Schedule your free consultation today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">Book Free Consultation</Link>
              <a href="tel:+16786716336" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
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
                <h2 className="font-display text-3xl md:text-4xl text-foreground">Request Your <span className="text-primary">Free Estimate</span></h2>
              </div>
              <MultiStepContactForm />
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
      <MobileCallBar />
    </>
  );
};

export default HomeRenovation;
