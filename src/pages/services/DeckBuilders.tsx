import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, Trees, Hammer, Sun, Fence } from "lucide-react";
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
import heroDeck from "@/assets/hero-deck.jpg";

const DeckBuilders = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Deck Builders Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "First Class Construction Group",
      "telephone": "+1-678-671-6336",
      "address": { "@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA", "addressCountry": "US" }
    },
    "areaServed": { "@type": "City", "name": "Atlanta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    "description": "Professional deck building and construction services in Atlanta including composite decks, wood decks, multi-level decks, and deck repairs.",
    "serviceType": "Deck Building"
  };

  const services = [
    { icon: Trees, title: "Wood Decks", description: "Traditional pressure-treated lumber and premium hardwood options" },
    { icon: Sun, title: "Composite Decks", description: "Low-maintenance Trex, TimberTech, and other composite materials" },
    { icon: Fence, title: "Multi-Level Decks", description: "Custom designs with multiple levels, stairs, and landings" },
    { icon: Hammer, title: "Deck Repairs", description: "Board replacement, structural repairs, and refinishing services" }
  ];

  const features = [
    "Custom deck design", "Pressure-treated lumber", "Composite decking",
    "Pergolas & shade structures", "Built-in seating", "Deck lighting",
    "Railings & balusters", "Stairs & landings", "Permit acquisition",
    "Structural engineering", "Staining & sealing", "Deck repairs"
  ];

  const testimonials = [
    { quote: "First Class built an incredible multi-level deck that connects our kitchen to the backyard. The Trex composite looks amazing and requires zero maintenance.", author: "Brian & Sarah M.", location: "Roswell, GA", rating: 5 },
    { quote: "Our new deck is the perfect outdoor entertaining space. The built-in lighting and custom railings really set it apart. Great craftsmanship!", author: "Kevin T.", location: "Brookhaven, GA", rating: 5 }
  ];

  const processSteps = [
    { number: 1, title: "Free Consultation", description: "We assess your yard, discuss design preferences, and provide a detailed estimate." },
    { number: 2, title: "Design & Permits", description: "Custom deck design with 3D visualization and permit acquisition." },
    { number: 3, title: "Expert Construction", description: "Licensed professionals build your deck with quality materials and precision." },
    { number: 4, title: "Final Walkthrough", description: "We inspect every detail together and provide care instructions." }
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" }, { name: "Buckhead", path: "/buckhead" },
    { name: "Roswell", path: "/roswell" }, { name: "Brookhaven", path: "/brookhaven" },
    { name: "Decatur", path: "/decatur" }, { name: "Marietta", path: "/marietta" },
    { name: "Alpharetta", path: "/alpharetta" }, { name: "Dunwoody", path: "/dunwoody" }
  ];

  return (
    <>
      <Helmet>
        <title>Deck Builders Atlanta | Custom Deck Construction | First Class</title>
        <meta name="description" content="Atlanta deck builders. Custom wood & composite decks, pergolas & repairs. Licensed, 20+ years experience. Free estimates. 678-671-6336." />
        <meta name="keywords" content="deck builders atlanta, deck construction atlanta, composite deck atlanta, wood deck atlanta, deck contractors atlanta ga, deck building atlanta, deck repair atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/deck-builders" />
        <meta property="og:title" content="Deck Builders Atlanta | Custom Deck Construction" />
        <meta property="og:description" content="Build your dream outdoor space with Atlanta's trusted deck builders. Custom designs, quality materials, expert installation. Free estimates!" />
        <meta property="og:url" content="https://fcconstruct.com/deck-builders" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a deck cost in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deck costs in Atlanta range from $15,000 to $50,000+ depending on size and materials. Pressure-treated wood decks run $25-$40 per sq ft, while composite decks (Trex, TimberTech) run $40-$75+ per sq ft including railings."
                }
              },
              {
                "@type": "Question",
                "name": "Is composite or wood decking better for Atlanta weather?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Composite decking is ideal for Atlanta's humid climate—it resists rot, insects, and warping without staining or sealing. Wood is more affordable upfront but requires annual maintenance. We help you choose based on your budget and preferences."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a permit to build a deck in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, deck construction in Atlanta and most metro area cities requires a building permit. Permits ensure structural safety and proper attachment to your home. We handle all permit acquisition and inspections."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a deck?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most decks take 1-3 weeks to build after permits are approved. Simple decks may take 3-5 days, while multi-level decks with custom features can take 2-4 weeks. Permit approval typically adds 1-2 weeks."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Create Your Perfect Outdoor Living Space"
          seoHeadline="Deck Builders Atlanta | Custom Deck Construction Contractors"
          subtitle="Custom wood and composite decks designed for Atlanta's climate. Our licensed contractors deliver beautiful, durable outdoor spaces you'll enjoy for years."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroDeck}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · Atlanta Metro"
        />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Deck Builders Atlanta</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Beautiful Decks Built to <span className="text-primary">Last</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At First Class Construction Group, we design and build custom decks that extend your living space outdoors. Whether you prefer the natural beauty of wood or the low-maintenance benefits of composite materials, our experienced team creates outdoor spaces that complement your home and lifestyle.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Expertise</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Deck Building <span className="text-primary">Services</span></h2>
              <div className="section-divider mt-6" />
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
                  <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-6">Complete Deck <span className="text-primary">Solutions</span></h2>
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
                  <p className="text-muted-foreground mb-6">Schedule your free deck consultation today.</p>
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
              <div className="section-divider mt-6" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ValueCard icon={Users} title="Dedicated Project Manager" description="One point of contact throughout your project." />
              <ValueCard icon={Shield} title="Transparent Pricing" description="Detailed estimates with no hidden fees." />
              <ValueCard icon={Clock} title="On-Time Completion" description="We respect your schedule and work efficiently." />
              <ValueCard icon={Award} title="Quality Materials" description="Premium lumber and composite options." />
              <ValueCard icon={Hammer} title="Licensed & Insured" description="Fully licensed Georgia contractor." />
              <ValueCard icon={Trees} title="Custom Designs" description="Tailored to your home and lifestyle." />
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
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Deck Building Across <span className="text-primary">Metro Atlanta</span></h2>
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
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-3">Ready to Build Your Dream <span className="text-accent">Deck?</span></h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Schedule your free consultation today.</p>
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

export default DeckBuilders;
