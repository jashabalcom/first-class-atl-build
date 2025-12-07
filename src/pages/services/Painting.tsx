import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, Paintbrush, Home, Building2, Palette } from "lucide-react";
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

const Painting = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Painting Services Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "First Class Construction Group",
      "telephone": "+1-678-671-6336",
      "address": { "@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA", "addressCountry": "US" }
    },
    "areaServed": { "@type": "City", "name": "Atlanta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    "description": "Professional interior and exterior painting services in Atlanta for residential and commercial properties.",
    "serviceType": "Painting Services"
  };

  const services = [
    { icon: Home, title: "Interior Painting", description: "Walls, ceilings, trim, doors, and accent walls with premium paints" },
    { icon: Building2, title: "Exterior Painting", description: "Siding, trim, decks, fences, and complete exterior transformations" },
    { icon: Palette, title: "Color Consultation", description: "Expert help selecting the perfect colors for your space" },
    { icon: Paintbrush, title: "Specialty Finishes", description: "Faux finishes, textured walls, and decorative painting techniques" }
  ];

  const features = [
    "Interior wall painting", "Exterior house painting", "Cabinet painting",
    "Trim & molding", "Ceiling painting", "Deck & fence staining",
    "Pressure washing", "Drywall repair", "Wallpaper removal",
    "Color matching", "Eco-friendly paints", "Commercial painting"
  ];

  const testimonials = [
    { quote: "First Class painted our entire home interior in just 3 days. The crew was professional, clean, and the finished result is stunning. Great color recommendations too!", author: "Emily & Jason W.", location: "Midtown, GA", rating: 5 },
    { quote: "We hired them for exterior painting and were impressed with the prep work, attention to detail, and the quality of finish. Our home looks brand new.", author: "Greg M.", location: "Smyrna, GA", rating: 5 }
  ];

  const processSteps = [
    { number: 1, title: "Free Estimate", description: "We assess your project, discuss color options, and provide a detailed quote." },
    { number: 2, title: "Surface Preparation", description: "Thorough prep work including cleaning, sanding, priming, and repairs." },
    { number: 3, title: "Professional Painting", description: "Expert application with premium paints for a flawless finish." },
    { number: 4, title: "Final Inspection", description: "We walk through together to ensure your complete satisfaction." }
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" }, { name: "Buckhead", path: "/buckhead" },
    { name: "Midtown", path: "/midtown" }, { name: "Smyrna", path: "/smyrna" },
    { name: "Decatur", path: "/decatur" }, { name: "Marietta", path: "/marietta" },
    { name: "Sandy Springs", path: "/sandy-springs" }, { name: "Brookhaven", path: "/brookhaven" }
  ];

  return (
    <>
      <Helmet>
        <title>Painting Services Atlanta | Interior & Exterior Painters | First Class</title>
        <meta name="description" content="Professional painting services in Atlanta. Interior & exterior painting, cabinet refinishing, deck staining & more. Licensed contractor. Free estimates. Call 678-671-6336." />
        <meta name="keywords" content="painting atlanta, house painters atlanta, interior painting atlanta, exterior painting atlanta ga, painting contractors atlanta, residential painting atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/painting" />
        <meta property="og:title" content="Painting Services Atlanta | Expert Interior & Exterior Painters" />
        <meta property="og:description" content="Transform your home with Atlanta's trusted painting professionals. Interior, exterior & specialty finishes. Free estimates!" />
        <meta property="og:url" content="https://fcconstruct.com/painting" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Transform Your Space with Expert Painting"
          seoHeadline="Painting Services Atlanta | Professional Interior & Exterior Painters"
          subtitle="Fresh paint transforms any space. Our professional painters deliver flawless finishes for interiors, exteriors, and specialty projects across Atlanta."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroKitchen}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · Atlanta Metro"
        />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Painting Services Atlanta</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Professional Painting <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nothing refreshes a home like a fresh coat of paint. At First Class Construction Group, our professional painters combine premium materials, expert technique, and meticulous prep work to deliver beautiful, long-lasting results that transform your space.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Expertise</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Painting <span className="text-primary">Services</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl text-foreground mb-2">{service.title}</h3>
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
                  <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-6">Complete Painting <span className="text-primary">Solutions</span></h2>
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
                  <h3 className="font-playfair text-2xl text-foreground mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">Schedule your free painting estimate today.</p>
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
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Why Choose <span className="text-primary">Us</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ValueCard icon={Users} title="Professional Painters" description="Skilled craftsmen with years of painting experience." />
              <ValueCard icon={Shield} title="Premium Paints" description="Top-quality paints from Sherwin-Williams, Benjamin Moore & more." />
              <ValueCard icon={Clock} title="Efficient Service" description="We complete projects on time with minimal disruption." />
              <ValueCard icon={Award} title="Meticulous Prep" description="Proper prep work ensures a flawless, lasting finish." />
              <ValueCard icon={Paintbrush} title="Licensed & Insured" description="Fully licensed Georgia contractor." />
              <ValueCard icon={Palette} title="Color Expertise" description="Free color consultation to find your perfect palette." />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Customer Reviews</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">What Our <span className="text-primary">Clients Say</span></h2>
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
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Painting Services Across <span className="text-primary">Metro Atlanta</span></h2>
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
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-3">Ready for a Fresh New <span className="text-accent">Look?</span></h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Schedule your free painting estimate today.</p>
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

export default Painting;
