import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, LayoutGrid, Hammer, Palette, Ruler } from "lucide-react";
import AIVisualizerCTA from "@/components/AIVisualizerCTA";
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
import heroCabinets from "@/assets/hero-cabinets.jpg";

const CustomCabinets = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Cabinets Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "First Class Construction Group",
      "telephone": "+1-678-671-6336",
      "address": { "@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA", "addressCountry": "US" }
    },
    "areaServed": { "@type": "City", "name": "Atlanta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    "description": "Custom cabinet design and installation services in Atlanta including kitchen cabinets, bathroom vanities, built-ins, and storage solutions.",
    "serviceType": "Custom Cabinets"
  };

  const services = [
    { icon: LayoutGrid, title: "Kitchen Cabinets", description: "Custom kitchen cabinetry with premium finishes and hardware" },
    { icon: Ruler, title: "Bathroom Vanities", description: "Custom vanity cabinets designed to maximize space and style" },
    { icon: Hammer, title: "Built-In Storage", description: "Custom closets, entertainment centers, and built-in shelving" },
    { icon: Palette, title: "Cabinet Refacing", description: "Transform existing cabinets with new doors and finishes" }
  ];

  const features = [
    "Custom design consultation", "Premium wood species", "Soft-close hinges & drawers",
    "Custom finishes & stains", "Organizational inserts", "Pull-out shelves",
    "Lazy Susans", "Appliance garages", "Crown molding",
    "Glass door options", "LED cabinet lighting", "Professional installation"
  ];

  const testimonials = [
    { quote: "The custom kitchen cabinets exceeded our expectations. The soft-close drawers, pull-out shelves, and custom organization inserts make our kitchen so functional.", author: "Patricia & Mark D.", location: "Buckhead, GA", rating: 5 },
    { quote: "First Class designed and installed beautiful built-in cabinets for our home office and living room. The craftsmanship is exceptional.", author: "Andrew H.", location: "Midtown, GA", rating: 5 }
  ];

  const processSteps = [
    { number: 1, title: "Design Consultation", description: "We discuss your style preferences, storage needs, and measure your space." },
    { number: 2, title: "Custom Design", description: "Our designers create detailed 3D renderings of your custom cabinets." },
    { number: 3, title: "Fabrication", description: "Your cabinets are built with premium materials and meticulous attention to detail." },
    { number: 4, title: "Installation", description: "Expert installers ensure perfect fit and finish." }
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" }, { name: "Buckhead", path: "/buckhead" },
    { name: "Midtown", path: "/midtown" }, { name: "Sandy Springs", path: "/sandy-springs" },
    { name: "Brookhaven", path: "/brookhaven" }, { name: "Dunwoody", path: "/dunwoody" },
    { name: "Marietta", path: "/marietta" }, { name: "Alpharetta", path: "/alpharetta" }
  ];

  return (
    <>
      <Helmet>
        <title>Custom Cabinets Atlanta | Cabinet Makers & Installation | First Class</title>
        <meta name="description" content="Atlanta custom cabinet makers. Kitchen cabinets, bathroom vanities & built-ins. Premium materials, expert installation. Free estimates. 678-671-6336." />
        <meta name="keywords" content="custom cabinets atlanta, kitchen cabinets atlanta, cabinet makers atlanta, custom cabinetry atlanta ga, cabinet installation atlanta, bathroom vanity atlanta" />
        <link rel="canonical" href="https://www.fcconstruct.com/custom-cabinets" />
        <meta property="og:title" content="Custom Cabinets Atlanta | Expert Cabinet Makers" />
        <meta property="og:description" content="Beautiful custom cabinets designed and installed by Atlanta's trusted craftsmen. Kitchen cabinets, vanities & built-ins. Free estimates!" />
        <meta property="og:url" content="https://www.fcconstruct.com/custom-cabinets" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much do custom kitchen cabinets cost in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Custom kitchen cabinets in Atlanta typically cost $15,000 to $50,000+ depending on size, materials, and features. Semi-custom options run $10,000-$25,000, while fully custom cabinets with premium woods and finishes run $25,000-$75,000+."
                }
              },
              {
                "@type": "Question",
                "name": "How long does custom cabinet installation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Custom cabinets typically take 6-12 weeks from design approval to installation. This includes 4-8 weeks for fabrication and 1-2 weeks for installation. Rush orders may be available for additional cost."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between custom and semi-custom cabinets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Semi-custom cabinets offer standard sizes with customizable finishes and hardware. Fully custom cabinets are built to your exact specifications with unlimited design options, wood species, finishes, and organizational features."
                }
              },
              {
                "@type": "Question",
                "name": "Can you reface existing cabinets instead of replacing them?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, cabinet refacing is a cost-effective alternative that replaces doors and drawer fronts while keeping existing cabinet boxes. This works well when your cabinet layout is functional but the appearance is dated."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Custom Cabinets Crafted for Your Home"
          seoHeadline="Custom Cabinets Atlanta | Expert Cabinet Makers & Installation"
          subtitle="Beautiful, functional cabinetry designed specifically for your space. From kitchen cabinets to built-in storage, our craftsmen deliver exceptional quality."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroCabinets}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · Atlanta Metro"
        />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Custom Cabinets Atlanta</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Cabinetry That Fits Your <span className="text-primary">Lifestyle</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At First Class Construction Group, we believe your cabinets should be as unique as your home. Our custom cabinetry is designed to maximize storage, complement your style, and stand the test of time with premium materials and expert craftsmanship.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img src={heroCabinets} alt="Custom kitchen cabinets with modern design - Atlanta custom cabinetry by First Class Construction" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg font-medium">Custom kitchen cabinetry in Buckhead, Atlanta</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Expertise</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Custom Cabinet <span className="text-primary">Services</span></h2>
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

        {/* AI Room Visualizer CTA */}
        <section className="py-8 bg-background">
          <div className="container max-w-4xl">
            <AIVisualizerCTA />
          </div>
        </section>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionLabel>What We Offer</SectionLabel>
                  <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-6">Premium Cabinet <span className="text-primary">Features</span></h2>
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
                  <p className="text-muted-foreground mb-6">Schedule your free cabinet design consultation today.</p>
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

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>The First Class Difference</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Why Choose <span className="text-primary">Us</span></h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ValueCard icon={Users} title="Design Expertise" description="Custom designs tailored to your space and style." />
              <ValueCard icon={Shield} title="Premium Materials" description="Quality wood species and hardware that lasts." />
              <ValueCard icon={Clock} title="On-Time Delivery" description="We respect your timeline and deliver as promised." />
              <ValueCard icon={Award} title="Expert Craftsmanship" description="Skilled cabinet makers with decades of experience." />
              <ValueCard icon={Hammer} title="Professional Installation" description="Perfect fit guaranteed by our expert installers." />
              <ValueCard icon={Palette} title="Custom Finishes" description="Unlimited finish and stain options to match your home." />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
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

        <AnimatedSection className="py-16 lg:py-24 bg-background">
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

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Service Areas</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Custom Cabinets Across <span className="text-primary">Metro Atlanta</span></h2>
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
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-3">Ready for Custom <span className="text-accent">Cabinets?</span></h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Schedule your free design consultation today.</p>
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

export default CustomCabinets;
