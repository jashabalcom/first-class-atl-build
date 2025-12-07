import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, Home, Tv, Dumbbell, Sofa } from "lucide-react";
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
import basementFinished from "@/assets/basement-finished.jpg";

const BasementFinishing = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Basement Finishing Atlanta",
    "provider": {
      "@type": "LocalBusiness",
      "name": "First Class Construction Group",
      "telephone": "+1-678-671-6336",
      "address": { "@type": "PostalAddress", "addressLocality": "Atlanta", "addressRegion": "GA", "addressCountry": "US" }
    },
    "areaServed": { "@type": "City", "name": "Atlanta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    "description": "Professional basement finishing services in Atlanta including media rooms, home gyms, in-law suites, and home offices.",
    "serviceType": "Basement Finishing"
  };

  const services = [
    { icon: Tv, title: "Media Rooms", description: "Custom entertainment spaces with sound insulation and theater seating" },
    { icon: Dumbbell, title: "Home Gyms", description: "Dedicated workout spaces with proper flooring and ventilation" },
    { icon: Home, title: "In-Law Suites", description: "Complete living quarters with bedroom, bathroom, and kitchenette" },
    { icon: Sofa, title: "Family Rooms", description: "Comfortable living spaces for entertaining and relaxation" }
  ];

  const features = [
    "Waterproofing & moisture control", "Egress windows", "Custom framing & drywall",
    "Drop ceilings & recessed lighting", "Flooring installation", "Bathroom additions",
    "Wet bars & kitchenettes", "Home theater setups", "HVAC extensions",
    "Electrical upgrades", "Storage solutions", "Permit management"
  ];

  const testimonials = [
    { quote: "Our basement went from a dark storage space to an incredible family room and home theater. First Class handled everything including the egress window and bathroom addition.", author: "James & Lisa R.", location: "Alpharetta, GA", rating: 5 },
    { quote: "We added 1,200 sq ft of living space by finishing our basement. The quality is outstanding and it was completed ahead of schedule.", author: "Thomas W.", location: "Johns Creek, GA", rating: 5 }
  ];

  const processSteps = [
    { number: 1, title: "Free Consultation", description: "We assess your basement, discuss your vision, and provide a detailed estimate." },
    { number: 2, title: "Design & Planning", description: "Our team creates a custom layout including electrical, plumbing, and HVAC plans." },
    { number: 3, title: "Expert Construction", description: "Licensed professionals handle all framing, drywall, flooring, and installations." },
    { number: 4, title: "Final Walkthrough", description: "We conduct a thorough inspection together, ensuring every detail meets expectations." }
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" }, { name: "Buckhead", path: "/buckhead" },
    { name: "Alpharetta", path: "/alpharetta" }, { name: "Johns Creek", path: "/johns-creek" },
    { name: "Roswell", path: "/roswell" }, { name: "Dunwoody", path: "/dunwoody" },
    { name: "Sandy Springs", path: "/sandy-springs" }, { name: "Marietta", path: "/marietta" }
  ];

  return (
    <>
      <Helmet>
        <title>Basement Finishing Atlanta | Basement Remodeling Contractors | First Class</title>
        <meta name="description" content="Atlanta basement finishing experts. Media rooms, home gyms & in-law suites. Licensed, 20+ years experience. Free estimates. 678-671-6336." />
        <meta name="keywords" content="basement finishing atlanta, basement remodeling atlanta, finished basement atlanta ga, basement contractors atlanta, basement renovation atlanta, basement buildout atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/basement-finishing" />
        <meta property="og:title" content="Basement Finishing Atlanta | Expert Basement Contractors" />
        <meta property="og:description" content="Transform your basement into valuable living space. Media rooms, gyms, in-law suites & more. 20+ years experience. Free estimates!" />
        <meta property="og:url" content="https://fcconstruct.com/basement-finishing" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does it cost to finish a basement in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Basement finishing costs in Atlanta typically range from $30,000 to $100,000+ depending on size and features. Basic finishing runs $25-$50 per sq ft, while high-end finishes with bathrooms and wet bars run $50-$100+ per sq ft."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need an egress window for a basement bedroom in Georgia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Georgia building code requires egress windows for basement bedrooms. The window must be at least 5.7 sq ft with a minimum opening of 20 inches wide and 24 inches high. We install code-compliant egress windows."
                }
              },
              {
                "@type": "Question",
                "name": "How long does basement finishing take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most basement finishing projects take 4-8 weeks. Simple finishes may take 3-4 weeks, while complex projects with bathrooms, wet bars, and custom features can take 8-12 weeks."
                }
              },
              {
                "@type": "Question",
                "name": "Can you add a bathroom to my basement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we regularly add bathrooms to basements. This includes rough-in plumbing, sewage ejector pumps if needed, full bathroom fixtures, tile work, and ventilation. We handle all permits and inspections."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Unlock Your Basement's Full Potential"
          seoHeadline="Basement Finishing Atlanta | Expert Basement Remodeling Contractors"
          subtitle="Transform unused space into a stunning media room, home gym, in-law suite, or family room. Our licensed contractors deliver exceptional craftsmanship."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={basementFinished}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · Atlanta Metro"
        />

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Basement Finishing Atlanta</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Add Valuable Living <span className="text-primary">Space</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Your unfinished basement represents untapped potential. At First Class Construction Group, we specialize in transforming dark, unused basements into beautiful, functional living spaces that add value to your home and quality to your life.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img src={basementFinished} alt="Finished basement with modern lighting and comfortable seating - Atlanta basement remodel by First Class Construction" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg font-medium">Recent basement transformation in Alpharetta, Georgia</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Expertise</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Basement Finishing <span className="text-primary">Services</span></h2>
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

        <AnimatedSection className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionLabel>What We Offer</SectionLabel>
                  <h2 className="font-playfair text-3xl md:text-4xl text-foreground mb-6">Complete Basement <span className="text-primary">Solutions</span></h2>
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
                  <p className="text-muted-foreground mb-6">Schedule your free basement consultation today.</p>
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
              <ValueCard icon={Users} title="Dedicated Project Manager" description="One point of contact throughout your entire project." />
              <ValueCard icon={Shield} title="Transparent Pricing" description="Detailed estimates with no hidden fees." />
              <ValueCard icon={Clock} title="On-Time Completion" description="We respect your schedule and work efficiently." />
              <ValueCard icon={Award} title="Quality Craftsmanship" description="Skilled craftsmen with attention to detail." />
              <ValueCard icon={Home} title="Licensed & Insured" description="Fully licensed Georgia contractor." />
              <ValueCard icon={Tv} title="Custom Designs" description="Tailored layouts to maximize your space." />
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
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground">Basement Finishing Across <span className="text-primary">Metro Atlanta</span></h2>
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
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-3">Ready to Finish Your <span className="text-accent">Basement?</span></h2>
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

export default BasementFinishing;
