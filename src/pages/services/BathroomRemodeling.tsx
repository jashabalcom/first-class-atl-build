import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Clock, Award, Users, Sparkles, Droplets, Bath, Palette, Wrench, Lightbulb } from "lucide-react";
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
        <link rel="canonical" href="https://fcconstruct.com/bathroom-remodeling" />
        <meta property="og:title" content="Bathroom Remodeling Atlanta | Expert Bathroom Contractors" />
        <meta property="og:description" content="Transform your bathroom with Atlanta's trusted remodeling experts. Custom showers, vanities, tile work & complete renovations. 20+ years experience. Free estimates!" />
        <meta property="og:url" content="https://fcconstruct.com/bathroom-remodeling" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://fcconstruct.com/assets/bathroom-after.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bathroom Remodeling Atlanta | First Class Construction" />
        <meta name="twitter:description" content="Expert bathroom remodeling in Atlanta. Custom showers, vanities, tile work & complete renovations. Licensed contractor. Free estimates!" />
        <meta name="twitter:image" content="https://fcconstruct.com/assets/bathroom-after.jpg" />
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
        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel>Bathroom Remodeling Atlanta</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Your Dream Bathroom <span className="text-primary">Awaits</span>
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
        <AnimatedSection className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={bathroomAfterImage} 
                  alt="Modern bathroom renovation featuring custom tile work and elegant vanity - Atlanta bathroom remodel by First Class Construction" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Recent bathroom transformation in Buckhead, Atlanta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Expertise</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Bathroom Remodeling <span className="text-primary">Services</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {bathroomServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
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

        {/* Features Checklist */}
        <AnimatedSection className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <SectionLabel>What We Offer</SectionLabel>
                  <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                    Complete Bathroom <span className="text-primary">Solutions</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    From small updates to full-scale renovations, we handle every aspect of your bathroom remodel with expert precision and attention to detail.
                  </p>
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
                  <p className="text-muted-foreground mb-6">
                    Schedule your free in-home consultation today. We'll discuss your vision, assess your space, and provide a detailed estimate.
                  </p>
                  <div className="space-y-4">
                    <Link 
                      to="/contact"
                      className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Get Free Estimate
                    </Link>
                    <a 
                      href="tel:+16786716336"
                      className="flex items-center justify-center gap-2 w-full border border-primary text-primary py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call 678-671-6336
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Choose Us */}
        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>The First Class Difference</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Why Choose <span className="text-primary">Us</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ValueCard
                icon={Users}
                title="Dedicated Project Manager"
                description="One point of contact throughout your entire project for seamless communication and coordination."
              />
              <ValueCard
                icon={Shield}
                title="Transparent Pricing"
                description="Detailed estimates with no hidden fees. Know exactly what you're paying for before work begins."
              />
              <ValueCard
                icon={Clock}
                title="On-Time Completion"
                description="We respect your schedule and work efficiently to complete your project on the agreed timeline."
              />
              <ValueCard
                icon={Award}
                title="Quality Craftsmanship"
                description="Skilled craftsmen with attention to detail ensure beautiful, lasting results you'll love for years."
              />
              <ValueCard
                icon={Wrench}
                title="Licensed & Insured"
                description="Fully licensed Georgia contractor with comprehensive insurance for your complete peace of mind."
              />
              <ValueCard
                icon={Lightbulb}
                title="Design Expertise"
                description="Our team helps you select the perfect fixtures, finishes, and layouts to maximize your space."
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Customer Reviews</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                What Our <span className="text-primary">Clients Say</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
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
            <GHLReviewsWidget />
          </div>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Our Process</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                How We <span className="text-primary">Work</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Service Areas */}
        <AnimatedSection className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <SectionLabel>Service Areas</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Bathroom Remodeling Across <span className="text-primary">Metro Atlanta</span>
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
                We proudly serve homeowners throughout the greater Atlanta area with expert bathroom renovation services.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <Link
                  key={area.path}
                  to={area.path}
                  className="px-4 py-2 bg-card border border-border rounded-full text-foreground hover:border-primary hover:text-primary transition-colors text-sm"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and take the first step toward the bathroom of your dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Book Free Consultation
              </Link>
              <a
                href="tel:+16786716336"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call 678-671-6336
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <SectionLabel>Get Started</SectionLabel>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Request Your <span className="text-primary">Free Estimate</span>
                </h2>
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

export default BathroomRemodeling;
