import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import { BudgetEstimator } from "@/components/BudgetEstimator";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, UserCheck, ShieldCheck, DollarSign, Hammer } from "lucide-react";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import basementFinished from "@/assets/basement-finished.jpg";

const ResidentialFunnel = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Header />
      
      <Hero
        benefitHeadline="Breathe New Life Into Your Home—Without the Contractor Headaches"
        seoHeadline="Kitchen & Bathroom Remodeling Atlanta | Licensed Residential Contractor"
        title="Breathe New Life Into Your Home—Without the Contractor Headaches"
        subtitle="Expert renovations for kitchens, bathrooms, basements & whole homes. Serving Buckhead, Midtown, Decatur, and Sandy Springs with quality craftsmanship you can trust."
        primaryCTA="Get Your Free Consultation"
        secondaryCTA="Call 678-671-6336"
        backgroundImage={heroBathroom}
        trustLine="Licensed • Insured • 20+ Years in Metro Atlanta • 98% Customer Satisfaction"
        useH1={true}
      />

      {/* Before/After Slider */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See the Transformation</h2>
              <p className="text-muted-foreground text-lg">
                Real projects, real results from Atlanta homeowners
              </p>
            </div>
            
            <BeforeAfterSlider
              beforeImage={kitchenBefore}
              afterImage={kitchenAfter}
              alt="Kitchen renovation in Buckhead"
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Empathy Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Renovations Should Be Exciting—Not Overwhelming
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You've got the vision. But unreliable timelines, surprise costs, and messy job sites 
            turn dream projects into stress. With First Class Construction Group, you get a proven 
            process, clear pricing, and a clean, professional crew—so the only surprise is how much 
            you love the result.
          </p>
        </div>
      </section>

      {/* The First Class Difference */}
      <AnimatedSection delay={100}>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The First Class Difference</h2>
              <p className="text-muted-foreground text-lg">
                Why Atlanta homeowners trust us with their most important projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <ValueCard
                icon={UserCheck}
                title="Dedicated Project Manager"
                description="One point of contact, daily/weekly updates, no guesswork."
              />
              <ValueCard
                icon={DollarSign}
                title="Transparent, Detailed Quotes"
                description="Clear scopes and line items. No bait-and-switch."
              />
              <ValueCard
                icon={Calendar}
                title="On-Time, On-Budget"
                description="A schedule you can plan your life around."
              />
              <ValueCard
                icon={Hammer}
                title="Quality Craftsmanship"
                description="Vetted pros, inspected milestones, lasting finishes."
              />
              <ValueCard
                icon={ShieldCheck}
                title="Licensed, Bonded & Insured"
                description="Certified DBE/MBE. Work done right and protected."
              />
            </div>

            <div className="text-center mt-8">
              <a href="#contact-form">
                <span className="inline-block text-accent font-semibold hover:underline cursor-pointer">
                  Ready to plan your project? Get My Free Quote →
                </span>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection delay={200}>
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Renovation Services We Offer</h2>
              <p className="text-muted-foreground text-lg">
                From single rooms to whole-home transformations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Kitchen Remodeling</h3>
                <p className="text-sm text-muted-foreground">
                  Layouts, custom cabinetry, countertops, lighting, and appliances for everyday luxury.
                </p>
              </div>
              
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Bathroom Remodeling</h3>
                <p className="text-sm text-muted-foreground">
                  Spa-level finishes, smart storage, flawless tile & fixtures.
                </p>
              </div>
              
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Basement Finishing</h3>
                <p className="text-sm text-muted-foreground">
                  Turn unused space into a media room, gym, in-law suite, or office.
                </p>
              </div>
              
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3">Home Additions</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless expansions—more room, more value, perfectly integrated.
                </p>
              </div>
              
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-bold mb-3">Home Renovations</h3>
                <p className="text-sm text-muted-foreground">
                  Cohesive design, efficient timelines, and single-team accountability.
                </p>
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

      {/* Social Proof */}
      <AnimatedSection delay={100}>
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Atlanta Homeowners Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <TestimonialCard
                quote="They finished two weeks early and the quality is outstanding. The process was simple and communication was constant."
                author="Sarah T."
                location="Buckhead"
              />
              <TestimonialCard
                quote="No surprise costs, clean crew, and the bathroom looks like a boutique hotel. Five stars."
                author="Marcus J."
                location="Decatur"
              />
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

      {/* Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Concept to Completion—Exactly What to Expect
            </h2>
            <p className="text-muted-foreground text-lg">
              Our proven 4-step process ensures your project stays on track
            </p>
          </div>

          <div className="grid gap-8">
            <ProcessStep
              number={1}
              title="Free Consultation & Estimate"
              description="We discuss goals, measurements, and budget."
            />
            <ProcessStep
              number={2}
              title="Design & Planning"
              description="Materials, selections, permitting; you approve everything."
            />
            <ProcessStep
              number={3}
              title="Build & Update"
              description="Professional crew, clean site, schedule you can track."
            />
            <ProcessStep
              number={4}
              title="Final Walkthrough & Warranty"
              description="Punch list complete. We stand behind our work."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How much is the consultation?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Free and no obligation. We'll visit your home, discuss your vision, take measurements, 
                and provide you with a detailed estimate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you handle permits?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes—we manage permitting and inspections. You don't have to worry about dealing 
                with the city or county offices. We handle all of that for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How are payments structured?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Milestone-based with a clear schedule. You'll know exactly when payments are due 
                and what work will be completed at each phase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do you offer a warranty?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes—workmanship warranty on all projects. We stand behind our work and want you 
                to be completely satisfied with your renovation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Dream Home?</h2>
            <p className="text-muted-foreground text-lg">Tell us about your project. We'll reply within one business day.</p>
          </div>
          <MultiStepContactForm showCity={true} showTimeline={true} />
        </div>
      </section>
      
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default ResidentialFunnel;
