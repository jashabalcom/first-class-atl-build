import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProjectCard from "@/components/ProjectCard";
import ProcessStep from "@/components/ProcessStep";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import { BudgetEstimator } from "@/components/BudgetEstimator";
import AnimatedSection from "@/components/AnimatedSection";
import FeaturedBlogSection from "@/components/FeaturedBlogSection";
import BlogTeaser from "@/components/BlogTeaser";
import SectionLabel from "@/components/SectionLabel";
import { Home as HomeIcon, Building2, Calendar, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import basementFinished from "@/assets/basement-finished.jpg";
import retailBuildout from "@/assets/retail-buildout.jpg";
import officeRenovation from "@/assets/office-renovation.jpg";
import bathroomAfter from "@/assets/bathroom-after.jpg";

const Home = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Helmet>
        <title>General Contractor Atlanta GA | Licensed Construction Company | First Class</title>
        <meta name="description" content="First Class Construction Group is Atlanta's premier licensed general contractor. Kitchen remodeling, bathroom renovations, commercial build-outs & more. DBE/MBE certified. Free estimates. Call 678-671-6336." />
        <meta name="keywords" content="general contractor atlanta ga, contractors atlanta ga, construction companies atlanta ga, licensed contractor atlanta, home remodeling atlanta, kitchen remodeling atlanta, bathroom remodel atlanta, commercial contractor atlanta, DBE contractor atlanta, MBE contractor atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/" />
        <meta property="og:title" content="General Contractor Atlanta GA | Licensed Construction Company" />
        <meta property="og:description" content="Atlanta's premier licensed general contractor. Kitchen remodeling, bathroom renovations, commercial build-outs & more. DBE/MBE certified. Free estimates." />
        <meta property="og:url" content="https://fcconstruct.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="General Contractor Atlanta GA | First Class Construction Group" />
        <meta name="twitter:description" content="Atlanta's premier licensed general contractor. Kitchen remodeling, bathroom renovations, commercial build-outs. DBE/MBE certified." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "name": "First Class Construction Group",
            "description": "Licensed general contractor serving Metro Atlanta with residential renovations and commercial build-outs.",
            "url": "https://fcconstruct.com",
            "telephone": "678-671-6336",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atlanta",
              "addressRegion": "GA",
              "addressCountry": "US"
            },
            "areaServed": ["Atlanta", "Buckhead", "Midtown", "Decatur", "Sandy Springs", "Brookhaven", "Dunwoody", "Marietta", "Alpharetta"],
            "priceRange": "$$",
            "openingHours": "Mo-Fr 08:00-18:00"
          })}
        </script>
      </Helmet>
      <Header />
      
      <Hero
        credentialBadge="Licensed Contractor · Atlanta Metro"
        benefitHeadline="Transform Your Space with Atlanta's Premier Construction Partner"
        seoHeadline="Licensed Construction & Remodeling Company — Serving Atlanta, Buckhead, Midtown & Sandy Springs"
        title="Transform Your Space with Atlanta's Premier Construction Partner"
        subtitle="Residential renovations and commercial build-outs—delivered on time, on budget, and built to last by Atlanta's most trusted contractors."
        primaryCTA="Start Your Free Consultation"
        secondaryCTA="Call 678-671-6336"
        backgroundImage={heroKitchen}
        trustLine="Licensed • Bonded • Insured • DBE • MBE • 20+ Years Serving Metro Atlanta"
        useH1={true}
        fullHeight={true}
      />

      {/* Services Section */}
      <AnimatedSection>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                How We Can <span className="text-accent">Help</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Expert construction services for both residential and commercial projects
              </p>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ServiceCard
                title="Residential Renovations"
                description="Transform your home with our expert renovation services"
                services={["Kitchens", "Bathrooms", "Basements", "Additions", "Home Remodels"]}
                tagline="We make home upgrades simple, beautiful, and stress-free."
                ctaText="Explore Residential"
                ctaLink="/residential"
                icon={<HomeIcon className="h-12 w-12" />}
              />
              
              <ServiceCard
                title="Commercial Build-Outs"
                description="Professional spaces designed for your business success"
                services={["Retail", "Restaurants", "Offices", "Tenant Improvements", "Facilities"]}
                tagline="Efficient, code-compliant spaces that minimize downtime."
                ctaText="Explore Commercial"
                ctaLink="/commercial"
                icon={<Building2 className="h-12 w-12" />}
              />
            </div>

          </div>
        </section>
      </AnimatedSection>

      {/* Why Atlanta Chooses First Class */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
              Why Atlanta Chooses <span className="text-accent">First Class</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
              Serving Buckhead, Midtown, Decatur, Sandy Springs, Brookhaven, Dunwoody, Marietta, and Alpharetta 
              with licensed, bonded, and insured construction services. As a DBE/MBE certified contractor, 
              we bring professionalism and quality craftsmanship to every residential renovation and 
              commercial build-out project across Metro Atlanta.
            </p>
            <div className="section-divider" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ValueCard
              icon={Calendar}
              title="On-Time & On-Budget"
              description="Schedules and costs you can rely on, with clear communication every step of the way."
            />
            <ValueCard
              icon={UserCheck}
              title="Dedicated Project Manager"
              description="One accountable owner from start to finish—no guesswork, just results."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Quality Craftsmanship"
              description="Vetted trades, inspected milestones, and standout results that last."
            />
            <ValueCard
              icon={HomeIcon}
              title="Transparent Pricing"
              description="Clear scopes and detailed line items. No surprises, no bait-and-switch."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Certified & Insured"
              description="Licensed, bonded, insured. DBE/MBE certified for your peace of mind."
            />
            <ValueCard
              icon={UserCheck}
              title="Clear Communication"
              description="Daily updates and easy access to your dedicated team throughout the project."
            />
          </div>
        </div>
      </section>

      {/* Blog Teaser - Touch Point #1 */}
      <BlogTeaser />

      {/* Featured Projects */}
      <AnimatedSection delay={200}>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Portfolio</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                Featured <span className="text-accent">Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                See the quality and craftsmanship that sets us apart
              </p>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Modern Kitchen Remodel"
                subtitle="Buckhead Residence"
                description="Open layout, custom cabinetry, stone surfaces, architectural lighting."
                image={kitchenAfter}
                link="/kitchen-remodeling"
                badge="Residential"
              />
              <ProjectCard
                title="Luxury Bathroom Renovation"
                subtitle="Sandy Springs Home"
                description="Custom tile work, walk-in shower, elegant vanity installation."
                image={bathroomAfter}
                link="/bathroom-remodeling"
                badge="Residential"
              />
              <ProjectCard
                title="Retail Build-Out"
                subtitle="Midtown Atlanta Commercial"
                description="3,000 sq ft tenant improvement delivered in 6 weeks."
                image={retailBuildout}
                link="/retail-construction"
                badge="Commercial"
              />
            </div>

            {/* Quick Links to Service Pages */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Explore our specialized services:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link 
                  to="/residential-contractor-atlanta" 
                  className="inline-flex items-center gap-1 px-4 py-2 bg-card border rounded-full text-sm hover:border-accent hover:text-accent transition-colors group"
                >
                  Residential Contractor
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link 
                  to="/kitchen-remodeling" 
                  className="inline-flex items-center gap-1 px-4 py-2 bg-card border rounded-full text-sm hover:border-accent hover:text-accent transition-colors group"
                >
                  Kitchen Remodeling
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link 
                  to="/bathroom-remodeling" 
                  className="inline-flex items-center gap-1 px-4 py-2 bg-card border rounded-full text-sm hover:border-accent hover:text-accent transition-colors group"
                >
                  Bathroom Remodeling
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link 
                  to="/office-renovation" 
                  className="inline-flex items-center gap-1 px-4 py-2 bg-card border rounded-full text-sm hover:border-accent hover:text-accent transition-colors group"
                >
                  Office Renovation
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link 
                  to="/commercial-contractor-atlanta" 
                  className="inline-flex items-center gap-1 px-4 py-2 bg-card border rounded-full text-sm hover:border-accent hover:text-accent transition-colors group"
                >
                  Commercial Contractor
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Budget Estimator */}
      <AnimatedSection delay={300}>
        <section id="budget-estimator" className="py-12 md:py-16 bg-muted/30 scroll-mt-20">
          <div className="container max-w-6xl">
            <BudgetEstimator 
              onGetQuote={() => {
                document.getElementById('contact-form')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection delay={100}>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                What Our Clients <span className="text-accent">Say</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Trusted by homeowners and businesses across Atlanta
              </p>
              <div className="section-divider mt-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <TestimonialCard
                quote="They communicated daily and hit every milestone. Best contractor experience we've had."
                author="J. Rivera"
                location="Store Owner"
              />
              <TestimonialCard
                quote="Seamless from design to final walkthrough—and our new kitchen is stunning."
                author="A. Coleman"
                location="Homeowner"
              />
            </div>

            {/* GHL Google Reviews Widget */}
            <div className="max-w-4xl mx-auto">
              <GHLReviewsWidget />
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-4 text-sm">
                <span>Licensed • Bonded • Insured</span>
                <span>•</span>
                <span className="text-accent font-semibold">DBE • MBE</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Blog Section - Touch Point #2 */}
      <FeaturedBlogSection />

      {/* Process */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
              A Proven, Professional <span className="text-accent">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Clarity, communication, and craftsmanship at every step
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid gap-0">
            <ProcessStep
              number={1}
              title="Consult"
              description="Free consultation to discuss goals, measurements, and budget."
            />
            <ProcessStep
              number={2}
              title="Design/Plan"
              description="Materials selection, permitting, and your approval on everything."
            />
            <ProcessStep
              number={3}
              title="Build/Update"
              description="Professional crew, clean site, and a schedule you can track."
            />
            <ProcessStep
              number={4}
              title="Final Walkthrough/Warranty"
              description="Punch list complete. We stand behind our work."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container text-center">
          <SectionLabel>Coverage Area</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
            Serving <span className="text-accent">Metro Atlanta</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Proud to serve communities across the Atlanta metropolitan area
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Atlanta", "Buckhead", "Midtown", "Decatur", "Sandy Springs", "Brookhaven", 
              "Dunwoody", "Marietta", "Alpharetta", "and surrounding areas"].map((area) => (
              <span key={area} className="px-4 py-2 bg-card border rounded-full hover:border-accent transition-colors">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogosCarousel />

      <div id="contact-form">
        <ContactForm />
      </div>
      
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default Home;
