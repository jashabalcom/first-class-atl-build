import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, Home, Hammer, Bath, ChefHat, PaintBucket, Layers, TreeDeciduous, Wrench } from "lucide-react";
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

const ResidentialContractorAtlanta = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "First Class Construction Group - Residential Contractor Atlanta",
    "@id": "https://fcconstruct.com/residential-contractor-atlanta",
    "url": "https://fcconstruct.com/residential-contractor-atlanta",
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
    "description": "Licensed residential contractor in Atlanta offering kitchen remodeling, bathroom renovations, basement finishing, deck building, flooring, painting, and complete home renovations.",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  const residentialServices = [
    { icon: ChefHat, title: "Kitchen Remodeling", description: "Complete kitchen transformations with custom cabinets, countertops, and modern layouts.", path: "/kitchen-remodeling" },
    { icon: Bath, title: "Bathroom Remodeling", description: "Luxury bathroom renovations featuring tile work, vanities, and spa-like finishes.", path: "/bathroom-remodeling" },
    { icon: Home, title: "Home Renovation", description: "Whole-home remodels, room additions, and open floor plan conversions.", path: "/home-renovation" },
    { icon: Layers, title: "Basement Finishing", description: "Transform unused basements into beautiful living spaces, home theaters, or guest suites.", path: "/basement-finishing" },
    { icon: TreeDeciduous, title: "Deck Builders", description: "Custom wood and composite decks, patios, and outdoor living spaces.", path: "/deck-builders" },
    { icon: PaintBucket, title: "Painting", description: "Interior and exterior painting with premium paints and professional preparation.", path: "/painting" },
    { icon: Hammer, title: "Flooring Installation", description: "Hardwood, tile, LVP, and carpet installation with expert craftsmanship.", path: "/flooring-installation" },
    { icon: Wrench, title: "Custom Cabinets", description: "Built-in cabinetry, closet systems, and custom millwork.", path: "/custom-cabinets" }
  ];

  const whyChooseUs = [
    "Licensed & insured Georgia contractor",
    "20+ years residential experience",
    "Dedicated project manager",
    "Transparent pricing, no hidden fees",
    "On-time project completion",
    "Quality materials & craftsmanship",
    "Full permit management",
    "Clean, professional crews",
    "Detailed written estimates",
    "Warranty on all work",
    "Local Atlanta references",
    "Financing options available"
  ];

  const testimonials = [
    { quote: "First Class transformed our entire first floor. The team was professional, on schedule, and the quality exceeded our expectations. Highly recommend for any residential project!", author: "Michael & Jennifer T.", location: "Buckhead, GA", rating: 5 },
    { quote: "We've used them for our kitchen, bathroom, and deck. Every project has been completed on time with exceptional craftsmanship. They're our go-to contractor.", author: "Robert S.", location: "Sandy Springs, GA", rating: 5 }
  ];

  const processSteps = [
    { number: 1, title: "Free Consultation", description: "We visit your home, discuss your vision, and provide a detailed estimate at no cost." },
    { number: 2, title: "Design & Planning", description: "Our team creates a comprehensive plan with material selections, timeline, and permits." },
    { number: 3, title: "Expert Construction", description: "Licensed professionals execute your project with precision and attention to detail." },
    { number: 4, title: "Final Walkthrough", description: "We conduct a thorough inspection together, ensuring every detail meets your expectations." }
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
        <title>Residential Contractor Atlanta | Licensed Home Remodeling | First Class</title>
        <meta name="description" content="Licensed residential contractor in Atlanta. Kitchen remodeling, bathroom renovations, basement finishing, deck building, flooring & painting. 20+ years experience. Free estimates. Call 678-671-6336." />
        <meta name="keywords" content="residential contractor atlanta, home contractor atlanta, residential remodeling atlanta, home remodeling contractor atlanta ga, residential construction atlanta, house contractor atlanta, licensed residential contractor atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/residential-contractor-atlanta" />
        <meta property="og:title" content="Residential Contractor Atlanta | Licensed Home Remodeling Experts" />
        <meta property="og:description" content="Atlanta's trusted residential contractor. Kitchen, bathroom, basement, deck, flooring & painting services. Licensed, insured, 20+ years experience. Free estimates!" />
        <meta property="og:url" content="https://fcconstruct.com/residential-contractor-atlanta" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Your Trusted Partner for Every Home Improvement Project"
          seoHeadline="Residential Contractor Atlanta | Licensed Home Remodeling Experts"
          subtitle="From kitchens and bathrooms to basements and decks, our licensed contractors deliver exceptional craftsmanship for all your residential construction needs."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroKitchen}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · Atlanta Metro"
        />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Residential Contractor Atlanta</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Full-Service <span className="text-primary">Home Contractor</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                First Class Construction Group is Atlanta's premier residential contractor, specializing in kitchen remodeling, bathroom renovations, basement finishing, deck building, flooring installation, and interior painting. With over 20 years of experience serving Atlanta homeowners, we bring expertise, reliability, and exceptional craftsmanship to every project.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">
                Residential Remodeling <span className="text-primary">Services</span>
              </h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {residentialServices.map((service, index) => (
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
                    Atlanta's Trusted <span className="text-primary">Residential Contractor</span>
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
                  <p className="text-muted-foreground mb-6">Schedule your free in-home consultation today and let's bring your vision to life.</p>
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
              <ValueCard icon={Users} title="Dedicated Project Manager" description="One point of contact throughout your entire project for seamless communication." />
              <ValueCard icon={Shield} title="Licensed & Insured" description="Fully licensed Georgia contractor with comprehensive liability and workers' comp coverage." />
              <ValueCard icon={Clock} title="On-Time Completion" description="We respect your schedule and deliver projects when promised." />
              <ValueCard icon={Award} title="Quality Craftsmanship" description="Skilled tradesmen with attention to every detail." />
              <ValueCard icon={Hammer} title="Transparent Pricing" description="Detailed written estimates with no hidden fees or surprise charges." />
              <ValueCard icon={Home} title="Full-Service Contractor" description="From design to completion, we handle every aspect of your renovation." />
            </div>
          </div>
        </AnimatedSection>

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
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-3">Ready to Transform Your <span className="text-accent">Home?</span></h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Contact Atlanta's trusted residential contractor for a free consultation and estimate.</p>
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

export default ResidentialContractorAtlanta;