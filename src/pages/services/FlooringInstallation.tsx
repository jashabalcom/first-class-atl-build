import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, Layers, Hammer, Sparkles, Grid3X3 } from "lucide-react";
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
import heroFlooring from "@/assets/hero-flooring.jpg";

const FlooringInstallation = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Installation Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "First Class Construction Group",
      "telephone": "+1-678-671-6336",
      "address": { "@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA", "addressCountry": "US" }
    },
    "areaServed": { "@type": "City", "name": "Atlanta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    "description": "Professional flooring installation services in Atlanta including hardwood, tile, luxury vinyl, and carpet installation.",
    "serviceType": "Flooring Installation"
  };

  const services = [
    { icon: Layers, title: "Hardwood Floors", description: "Solid and engineered hardwood installation, refinishing, and repair" },
    { icon: Grid3X3, title: "Tile Flooring", description: "Ceramic, porcelain, natural stone, and decorative tile installation" },
    { icon: Sparkles, title: "Luxury Vinyl", description: "LVP and LVT flooring that looks like wood or stone at a fraction of the cost" },
    { icon: Hammer, title: "Carpet Installation", description: "Premium carpet installation for bedrooms, offices, and living areas" }
  ];

  const features = [
    "Hardwood installation", "Hardwood refinishing", "Tile flooring",
    "Luxury vinyl plank (LVP)", "Carpet installation", "Subfloor repair",
    "Floor leveling", "Moisture barriers", "Transition strips",
    "Baseboards & trim", "Floor heating systems", "Free estimates"
  ];

  const testimonials = [
    { quote: "First Class installed beautiful engineered hardwood throughout our main level. The attention to detail on the transitions and baseboards was exceptional.", author: "Catherine & Steve B.", location: "Sandy Springs, GA", rating: 5 },
    { quote: "We had LVP installed in our kitchen and bathrooms. It looks just like real wood but is so much more practical. Great installation team!", author: "Nicole R.", location: "Decatur, GA", rating: 5 }
  ];

  const processSteps = [
    { number: 1, title: "Free Consultation", description: "We measure your space, discuss flooring options, and provide a detailed estimate." },
    { number: 2, title: "Material Selection", description: "Choose from our wide selection of flooring materials and finishes." },
    { number: 3, title: "Professional Installation", description: "Expert installers prepare your subfloor and install your new flooring." },
    { number: 4, title: "Final Walkthrough", description: "We inspect every detail and ensure your complete satisfaction." }
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" }, { name: "Buckhead", path: "/buckhead" },
    { name: "Sandy Springs", path: "/sandy-springs" }, { name: "Decatur", path: "/decatur" },
    { name: "Brookhaven", path: "/brookhaven" }, { name: "Dunwoody", path: "/dunwoody" },
    { name: "Marietta", path: "/marietta" }, { name: "Roswell", path: "/roswell" }
  ];

  return (
    <>
      <Helmet>
        <title>Flooring Installation Atlanta | Hardwood, Tile & LVP | First Class</title>
        <meta name="description" content="Expert flooring installation in Atlanta. Hardwood, tile, luxury vinyl & carpet installation. Licensed contractor, 20+ years experience. Free estimates. Call 678-671-6336." />
        <meta name="keywords" content="flooring installation atlanta, hardwood floors atlanta, tile flooring atlanta, lvp flooring atlanta ga, flooring contractors atlanta, floor installation atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/flooring-installation" />
        <meta property="og:title" content="Flooring Installation Atlanta | Hardwood, Tile & LVP Experts" />
        <meta property="og:description" content="Beautiful new floors installed by Atlanta's trusted flooring contractors. Hardwood, tile, LVP & carpet. Free estimates!" />
        <meta property="og:url" content="https://fcconstruct.com/flooring-installation" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Beautiful Floors That Transform Your Home"
          seoHeadline="Flooring Installation Atlanta | Hardwood, Tile & LVP Contractors"
          subtitle="From classic hardwood to modern luxury vinyl, our expert installers deliver flawless flooring that enhances your home's beauty and value."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroFlooring}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · Atlanta Metro"
        />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Flooring Installation Atlanta</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Quality Flooring, Expert <span className="text-primary">Installation</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Your floors are the foundation of your home's interior design. At First Class Construction Group, we install all types of flooring with precision and care—from timeless hardwood to durable tile and modern luxury vinyl. Our experienced installers ensure a perfect finish every time.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Expertise</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Flooring <span className="text-primary">Services</span></h2>
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
                  <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-6">Complete Flooring <span className="text-primary">Solutions</span></h2>
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
                  <p className="text-muted-foreground mb-6">Schedule your free flooring consultation today.</p>
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
              <ValueCard icon={Users} title="Expert Installers" description="Skilled craftsmen with years of flooring experience." />
              <ValueCard icon={Shield} title="Quality Materials" description="Premium flooring products from trusted brands." />
              <ValueCard icon={Clock} title="Efficient Installation" description="Minimal disruption to your daily life." />
              <ValueCard icon={Award} title="Precision Work" description="Perfect cuts, seamless transitions, flawless finish." />
              <ValueCard icon={Hammer} title="Licensed & Insured" description="Fully licensed Georgia contractor." />
              <ValueCard icon={Layers} title="Wide Selection" description="All flooring types and styles available." />
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
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Flooring Installation Across <span className="text-primary">Metro Atlanta</span></h2>
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
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-3">Ready for Beautiful New <span className="text-accent">Floors?</span></h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Schedule your free flooring consultation today.</p>
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

export default FlooringInstallation;
