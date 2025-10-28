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
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { BudgetEstimator } from "@/components/BudgetEstimator";
import AnimatedSection from "@/components/AnimatedSection";
import FeaturedBlogSection from "@/components/FeaturedBlogSection";
import BlogTeaser from "@/components/BlogTeaser";
import { Home as HomeIcon, Building2, Calendar, UserCheck, ShieldCheck } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import basementFinished from "@/assets/basement-finished.jpg";
import retailBuildout from "@/assets/retail-buildout.jpg";
import officeRenovation from "@/assets/office-renovation.jpg";

const Home = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Header />
      
      <Hero
        benefitHeadline="Transform Your Space with Atlanta's Premier Construction Partner"
        seoHeadline="Licensed Construction & Remodeling Company — Serving Atlanta, Buckhead, Midtown & Sandy Springs"
        title="Transform Your Space with Atlanta's Premier Construction Partner"
        subtitle="Residential renovations and commercial build-outs—delivered on time, on budget, and built to last by Atlanta's most trusted contractors."
        primaryCTA="Start Your Free Consultation"
        secondaryCTA="Call 678-671-6336"
        backgroundImage={heroKitchen}
        trustLine="Licensed • Bonded • Insured • DBE • MBE • 20+ Years Serving Metro Atlanta"
        useH1={true}
      />

      {/* Google Trust Badge Section */}
      <section className="py-8 bg-background border-b">
        <div className="container max-w-4xl">
          <GoogleTrustBadge variant="full" className="max-w-md mx-auto" />
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Can Help</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Expert construction services for both residential and commercial projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ServiceCard
                title="Residential Renovations"
                description="Transform your home with our expert renovation services"
                services={["Kitchens", "Bathrooms", "Basements", "Additions", "Whole-Home Remodels"]}
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
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Atlanta Chooses First Class</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
              Serving Buckhead, Midtown, Decatur, Sandy Springs, Brookhaven, Dunwoody, Marietta, and Alpharetta 
              with licensed, bonded, and insured construction services. As a DBE/MBE certified contractor, 
              we bring professionalism and quality craftsmanship to every residential renovation and 
              commercial build-out project across Metro Atlanta.
            </p>
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
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">
                See the quality and craftsmanship that sets us apart
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ProjectCard
                title="Modern Kitchen Remodel"
                subtitle="Buckhead Residence"
                description="Open layout, custom cabinetry, stone surfaces, architectural lighting."
                image={kitchenAfter}
                link="#"
              />
              <ProjectCard
                title="Retail Build-Out"
                subtitle="Midtown Atlanta Commercial"
                description="3,000 sq ft tenant improvement delivered in 6 weeks."
                image={retailBuildout}
                link="#"
              />
              <ProjectCard
                title="Office Renovation"
                subtitle="Perimeter Business Park Atlanta"
                description="Phased construction with zero downtime for staff."
                image={officeRenovation}
                link="#"
              />
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
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                Trusted by homeowners and businesses across Atlanta
              </p>
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

            <div className="text-center mt-8">
              <GoogleTrustBadge variant="compact" className="mx-auto" />
              <div className="inline-flex items-center gap-4 text-sm mt-4">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Proven, Professional Process</h2>
            <p className="text-muted-foreground text-lg">
              Clarity, communication, and craftsmanship at every step
            </p>
          </div>

          <div className="grid gap-8">
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
            />
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Metro Atlanta</h2>
          <p className="text-muted-foreground mb-8">
            Proud to serve communities across the Atlanta metropolitan area
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Atlanta", "Buckhead", "Midtown", "Decatur", "Sandy Springs", "Brookhaven", 
              "Dunwoody", "Marietta", "Alpharetta", "and surrounding areas"].map((area) => (
              <span key={area} className="px-4 py-2 bg-card border rounded-full">{area}</span>
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
