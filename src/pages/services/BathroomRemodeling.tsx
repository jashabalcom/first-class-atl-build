import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Shield, Clock, Award, Users, Sparkles, Droplets, Bath, Palette, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AIVisualizerCTA from "@/components/AIVisualizerCTA";
import { BudgetEstimator } from "@/components/BudgetEstimator";
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
import StickyAICTA from "@/components/StickyAICTA";
import heroBathroomImage from "@/assets/hero-bathroom.jpg";
import bathroomAfterImage from "@/assets/bathroom-after.jpg";

const BathroomRemodeling = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bathroom Remodeling Atlanta",
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
      "containedInPlace": {
        "@type": "State",
        "name": "Georgia"
      }
    },
    "description": "Expert bathroom remodeling services in Atlanta including custom showers, vanity installation, tile work, and complete bathroom renovations.",
    "serviceType": "Bathroom Remodeling"
  };

  const bathroomServices = [
    {
      icon: Bath,
      title: "Custom Showers",
      description: "Walk-in showers, frameless glass enclosures, rain heads, and luxury shower systems"
    },
    {
      icon: Sparkles,
      title: "Vanity Installation",
      description: "Custom vanities, double sinks, floating designs, and elegant countertop options"
    },
    {
      icon: Palette,
      title: "Tile Work",
      description: "Floor-to-ceiling tile, accent walls, decorative patterns, and waterproof installations"
    },
    {
      icon: Droplets,
      title: "Plumbing Fixtures",
      description: "Modern faucets, soaker tubs, toilets, and water-efficient upgrades"
    }
  ];

  const features = [
    "Walk-in showers & frameless glass",
    "Freestanding soaker tubs",
    "Heated tile floors",
    "Custom vanities & storage",
    "LED mirror lighting",
    "Tile backsplash & accents",
    "Ventilation upgrades",
    "Accessibility modifications",
    "Water-efficient fixtures",
    "Luxury shower systems",
    "Stone countertops",
    "Built-in niches & shelving"
  ];

  const testimonials = [
    {
      quote: "First Class completely transformed our outdated master bathroom into a spa-like retreat. The custom tile work and walk-in shower exceeded our expectations. Professional team from start to finish!",
      author: "Jennifer M.",
      location: "Buckhead, Atlanta",
      rating: 5
    },
    {
      quote: "We hired First Class for our bathroom renovation and couldn't be happier. They handled everything—plumbing, tile, vanity installation—all on schedule and within budget. Highly recommend!",
      author: "Robert K.",
      location: "Sandy Springs, GA",
      rating: 5
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Free Consultation",
      description: "We visit your home, discuss your vision, assess the space, and provide a detailed estimate with no obligation."
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "Our team creates a custom design plan including fixtures, finishes, tile selections, and layout optimization."
    },
    {
      number: 3,
      title: "Expert Construction",
      description: "Licensed professionals handle all demolition, plumbing, electrical, tile work, and installations with precision."
    },
    {
      number: 4,
      title: "Final Walkthrough",
      description: "We conduct a thorough inspection together, ensuring every detail meets your expectations before project completion."
    }
  ];

  const serviceAreas = [
    { name: "Atlanta", path: "/atlanta" },
    { name: "Buckhead", path: "/buckhead" },
    { name: "Midtown", path: "/midtown" },
    { name: "Decatur", path: "/decatur" },
    { name: "Sandy Springs", path: "/sandy-springs" },
    { name: "Brookhaven", path: "/brookhaven" },
    { name: "Dunwoody", path: "/dunwoody" },
    { name: "Marietta", path: "/marietta" },
    { name: "Alpharetta", path: "/alpharetta" },
    { name: "Roswell", path: "/roswell" },
    { name: "Johns Creek", path: "/johns-creek" },
    { name: "Smyrna", path: "/smyrna" }
  ];

  return (
    <>
      <Helmet>
        <title>Bathroom Remodeling Atlanta | Bathroom Remodel Contractors | First Class</title>
        <meta name="description" content="Atlanta bathroom remodeling experts. Custom showers, vanities & tile work. Licensed, 20+ years experience. Free estimates. 678-671-6336." />
        <meta 
          name="keywords" 
          content="bathroom remodel atlanta, bathroom remodeling atlanta ga, atlanta bathroom renovation, bathroom renovation atlanta, bathroom contractors atlanta, bathroom remodel contractors atlanta, shower remodel atlanta, vanity installation atlanta, tile contractor atlanta" 
        />
        <link rel="canonical" href="https://www.fcconstruct.com/bathroom-remodeling" />
        <meta property="og:title" content="Bathroom Remodeling Atlanta | Expert Bathroom Contractors" />
        <meta property="og:description" content="Transform your bathroom with Atlanta's trusted remodeling experts. Custom showers, vanities, tile work & complete renovations. 20+ years experience. Free estimates!" />
        <meta property="og:url" content="https://www.fcconstruct.com/bathroom-remodeling" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.fcconstruct.com/assets/bathroom-after.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bathroom Remodeling Atlanta | First Class Construction" />
        <meta name="twitter:description" content="Expert bathroom remodeling in Atlanta. Custom showers, vanities, tile work & complete renovations. Licensed contractor. Free estimates!" />
        <meta name="twitter:image" content="https://www.fcconstruct.com/assets/bathroom-after.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a bathroom remodel cost in Atlanta?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bathroom remodel costs in Atlanta range from $10,000 to $50,000+ depending on size and scope. A basic update runs $8,000-$15,000, mid-range remodel $15,000-$30,000, and high-end spa-like renovation $30,000-$75,000+. We provide free estimates."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a bathroom remodel take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most bathroom remodels take 2-4 weeks. Simple updates may take 1-2 weeks, while complete renovations with custom tile and fixtures can take 4-6 weeks. We provide a detailed timeline upfront."
                }
              },
              {
                "@type": "Question",
                "name": "Can you add a bathroom to my Atlanta home?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in bathroom additions including basement bathrooms, en-suite additions, and converting closets to half-baths. We handle all plumbing, electrical, and permit requirements."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best tile for bathroom floors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Porcelain tile is the best choice for bathroom floors—it's durable, water-resistant, and available in many styles. We also install ceramic, natural stone, and luxury vinyl tile. Our designers help you choose the best option."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />
      
      <main>
        <Hero
          benefitHeadline="Transform Your Bathroom Into a Stunning Retreat"
          seoHeadline="Bathroom Remodeling Atlanta | Expert Bathroom Renovation Contractors"
          subtitle="From custom showers to complete renovations, our licensed contractors deliver exceptional craftsmanship and lasting quality for your Atlanta home."
          primaryCTA="Get Free Estimate"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroBathroomImage}
          showScrollIndicator={true}
          credentialBadge="Licensed Contractor · Atlanta Metro"
        />

        {/* Introduction Section */}
        <AnimatedSection className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Bathroom Remodeling Atlanta</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6 mb-6">
                Your Dream Bathroom <span className="text-accent">Awaits</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At First Class Construction Group, we specialize in creating beautiful, functional bathrooms that enhance your daily routine and add value to your home. Whether you're looking for a complete master bath renovation, a guest bathroom update, or accessibility modifications, our experienced team delivers exceptional results on time and within budget.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 20 years of experience serving Atlanta homeowners, we understand that your bathroom is more than just a functional space—it's your personal sanctuary. Let us help you create the bathroom you've always wanted.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Image Section */}
        <AnimatedSection className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={bathroomAfterImage} 
                  alt="Modern bathroom renovation featuring custom tile work and elegant vanity - Atlanta bathroom remodel by First Class Construction" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg font-medium font-playfair">
                    Recent bathroom transformation in Buckhead, Atlanta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Our Expertise</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6">
                Bathroom Remodeling <span className="text-accent">Services</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {bathroomServices.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-card border border-l-2 border-l-transparent hover:border-l-accent hover:border-accent/50 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="text-accent mb-4 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* AI Room Visualizer CTA */}
        <AIVisualizerCTA />

        {/* Budget Estimator */}
        <AnimatedSection className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-8">
              <SectionLabel>Budget Planning</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6 mb-4">
                Estimate Your <span className="text-accent">Investment</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get a preliminary estimate for your bathroom remodel based on your preferences and requirements.
              </p>
            </div>
            <BudgetEstimator />
          </div>
        </AnimatedSection>

        {/* Features Checklist */}
        <AnimatedSection className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionLabel>What We Offer</SectionLabel>
                  <div className="section-divider mt-6" />
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6 mb-6">
                    Complete Bathroom <span className="text-accent">Solutions</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    From small updates to full-scale renovations, we handle every aspect of your bathroom remodel with expert precision and attention to detail.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={bathroomAfterImage} 
                    alt="Luxury bathroom remodel" 
                    className="rounded-lg shadow-xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                    <p className="font-playfair text-2xl font-bold">500+</p>
                    <p className="text-sm">Bathrooms Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>The First Class Difference</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6">
                Why Choose <span className="text-accent">Us</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ValueCard
                icon={Shield}
                title="Licensed & Insured"
                description="Full protection for your home and investment throughout the project."
              />
              <ValueCard
                icon={Award}
                title="Quality Materials"
                description="Premium fixtures, tiles, and finishes that stand the test of time."
              />
              <ValueCard
                icon={Clock}
                title="On-Time Delivery"
                description="We respect your schedule and complete projects when promised."
              />
              <ValueCard
                icon={Users}
                title="Expert Team"
                description="Skilled craftsmen with specialized bathroom remodeling experience."
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Client Stories</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6">
                What Our <span className="text-accent">Clients</span> Say
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* GHL Reviews Widget */}
        <AnimatedSection className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="text-center mb-8">
              <SectionLabel>Customer Reviews</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6">
                See What <span className="text-accent">Others</span> Are Saying
              </h2>
            </div>
            <GHLReviewsWidget />
          </div>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Our Process</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6">
                How We <span className="text-accent">Work</span>
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Service Areas */}
        <AnimatedSection className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Service Areas</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6">
                Serving <span className="text-accent">Metro Atlanta</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-accent hover:text-accent transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Get Started</SectionLabel>
              <div className="section-divider mt-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6 mb-4">
                Ready to Transform Your <span className="text-accent">Bathroom?</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Take the first step toward your dream bathroom. Schedule a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="cta" size="lg" className="gap-2">
                    Get Your Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/book">
                  <Button variant="outline" size="lg" className="gap-2 border-accent/50 hover:border-accent hover:bg-accent hover:text-accent-foreground">
                    <Calendar className="h-5 w-5" />
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection className="py-16 md:py-20 border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <SectionLabel>Contact Us</SectionLabel>
                <div className="section-divider mt-6" />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-6 mb-4">
                  Start Your <span className="text-accent">Project</span>
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your bathroom remodeling project and we'll get back to you within 24 hours.
                </p>
              </div>
              <MultiStepContactForm showCity={true} showTimeline={true} />
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
      <MobileCallBar />
      <StickyAICTA roomType="bathroom" />
    </>
  );
};

export default BathroomRemodeling;
