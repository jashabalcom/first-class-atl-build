import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import MobileCallBar from "@/components/MobileCallBar";
import { Award, Users, Clock, DollarSign, Shield, Sparkles } from "lucide-react";
import basementImage from "@/assets/basement-finished.jpg";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";

const AtlantaBasementFinishing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        benefitHeadline="Transform Your Unused Basement Into Valuable Living Space—Fast"
        seoHeadline="Basement Finishing Atlanta | Licensed Contractor Serving Metro Atlanta Since 2000"
        subtitle="Professional basement finishing that adds space, value, and functionality to your Atlanta home. Expert waterproofing, insulation, and design. Licensed, bonded, and DBE/MBE certified with 20+ years transforming basements across Metro Atlanta."
        primaryCTA="Get My Free Basement Quote"
        secondaryCTA="Call 678-671-6336"
        backgroundImage={basementImage}
      />

      {/* Local Expertise Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Atlanta's Basement Finishing Specialists
            </h2>
            <p className="text-lg text-muted-foreground">
              We know Atlanta basements—from moisture challenges to building codes. Our team specializes in 
              creating comfortable, safe, and beautiful finished basements that add real value to your home.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Basements Completed</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">4-8</div>
              <div className="text-sm text-muted-foreground">Weeks Typical Timeline</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Code Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Atlanta Basement Transformations
          </h2>
          <BeforeAfterSlider
            beforeImage={kitchenBefore}
            afterImage={kitchenAfter}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Atlanta Homeowners Trust First Class Construction
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Shield}
              title="Moisture & Waterproofing Experts"
              description="We address moisture issues before finishing. Proper drainage, vapor barriers, and waterproofing ensure your basement stays dry."
            />
            <ValueCard
              icon={Clock}
              title="Efficient Project Timeline"
              description="Most basements finished in 4-8 weeks. We coordinate all trades and inspections to keep your project on schedule."
            />
            <ValueCard
              icon={Sparkles}
              title="Custom Space Design"
              description="From home theaters to guest suites, we design basements that match your lifestyle and add maximum value."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Atlanta Basement Finishing Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Complete Basement Finishing",
              "Basement Waterproofing",
              "Egress Window Installation",
              "Home Theater Design",
              "Guest Suite Addition",
              "Home Office Creation",
              "Wet Bar Installation",
              "Game Room Design",
              "In-Law Suite Conversion"
            ].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 bg-card rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Atlanta Basement Finishing Costs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent pricing based on square footage and features. Costs include waterproofing, insulation, framing, electrical, and finishes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="text-2xl font-bold mb-2">Essential</h3>
              <div className="text-3xl font-bold text-primary mb-4">$30K-$50K</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>800-1000 sq ft typical</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Basic waterproofing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Standard finishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Basic electrical & HVAC</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>One egress window</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-primary">
              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-3xl font-bold text-primary mb-4">$50K-$80K</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>1000-1500 sq ft typical</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium waterproofing system</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Upgraded finishes & flooring</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Full bathroom addition</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Wet bar or kitchenette</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Multiple egress windows</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="text-2xl font-bold mb-2">Luxury</h3>
              <div className="text-3xl font-bold text-primary mb-4">$80K-$150K+</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>1500+ sq ft</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Advanced waterproofing & drainage</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>High-end finishes throughout</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Full in-law suite or apartment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Home theater with custom features</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Smart home integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Atlanta Homeowners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="We were hesitant about finishing our basement due to moisture concerns. First Class addressed everything properly and now we have a beautiful home theater that's been dry for 3 years."
              author="Kevin & Andrea P."
              location="Brookhaven"
              rating={5}
            />
            <TestimonialCard
              quote="They transformed our dark, unused basement into a stunning in-law suite. The craftsmanship is outstanding and it added significant value to our home."
              author="Patricia R."
              location="Decatur"
              rating={5}
            />
            <TestimonialCard
              quote="From permits to final walkthrough, First Class handled everything professionally. Our finished basement gave us 1200 sq ft of usable space. Best investment we've made."
              author="Brian & Michelle T."
              location="Marietta"
              rating={5}
            />
          </div>
          
          <GHLReviewsWidget />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Atlanta Basement Finishing Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number={1}
              title="Moisture Assessment"
              description="We inspect your basement for moisture issues, water intrusion, and structural concerns before designing your space."
            />
            <ProcessStep
              number={2}
              title="Custom Design & Quote"
              description="Detailed floor plans showing layout, egress windows, bathroom placement, and electrical. Transparent pricing included."
            />
            <ProcessStep
              number={3}
              title="Expert Construction"
              description="Licensed professionals handle waterproofing, framing, electrical, plumbing, and finishing. All work inspected and code-compliant."
            />
            <ProcessStep
              number={4}
              title="Final Inspection"
              description="We walk through every detail, ensure all systems work properly, and obtain final building department approval."
            />
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Metro Atlanta Areas We Serve
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                "Buckhead",
                "Midtown",
                "Sandy Springs",
                "Brookhaven",
                "Decatur",
                "Marietta",
                "Roswell",
                "Alpharetta",
                "Johns Creek",
                "Dunwoody",
                "Vinings",
                "Smyrna"
              ].map((area) => (
                <div key={area} className="p-4 bg-card rounded-lg font-medium">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 md:py-16 bg-background scroll-mt-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Finish Your Atlanta Basement?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your free consultation and quote today. Most Atlanta quotes delivered within 24-48 hours.
            </p>
          </div>
          <MultiStepContactForm />
        </div>
      </section>

      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default AtlantaBasementFinishing;
