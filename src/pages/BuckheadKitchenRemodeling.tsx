import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/Hero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { Calendar, UserCheck, ShieldCheck, DollarSign, Home as HomeIcon } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";

const BuckheadKitchenRemodeling = () => {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Header />
      
      <Hero
        benefitHeadline="Your Dream Buckhead Kitchen—Without the Contractor Headaches"
        seoHeadline="Kitchen Remodeling Buckhead | Licensed Contractor Serving Atlanta Since 2000"
        subtitle="Transform your Buckhead kitchen with Atlanta's premier remodeling experts. Serving Buckhead residents since 2000 with on-time, on-budget kitchen renovations. Licensed, bonded, and DBE/MBE certified."
        primaryCTA="Get My Free Buckhead Quote"
        secondaryCTA="Call 678-671-6336"
        backgroundImage={heroKitchen}
      />

      {/* Google Trust Badge */}
      <section className="py-8 bg-background border-b">
        <div className="container max-w-4xl">
          <GoogleTrustBadge variant="full" className="max-w-md mx-auto" />
        </div>
      </section>

      {/* Buckhead-Specific Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Buckhead's Trusted Kitchen Remodeling Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 20 years, First Class Construction Group has been transforming Buckhead kitchens into stunning, 
              functional spaces. From historic homes near Lenox Square to modern residences in Tuxedo Park, we understand 
              the unique architecture and high standards of Buckhead homeowners. Our team brings unmatched expertise in 
              custom cabinetry, premium finishes, and seamless project management—all while respecting your home and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-card border rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">20+</div>
              <p className="text-sm text-muted-foreground">Years Serving Buckhead</p>
            </div>
            <div className="p-6 bg-card border rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">$45K-$85K</div>
              <p className="text-sm text-muted-foreground">Average Buckhead Kitchen Remodel</p>
            </div>
            <div className="p-6 bg-card border rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">8-12</div>
              <p className="text-sm text-muted-foreground">Weeks Typical Timeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Buckhead Kitchen Transformations</h2>
            <p className="text-muted-foreground text-lg">
              Real Buckhead projects, real results from your neighbors
            </p>
          </div>
          
          <BeforeAfterSlider
            beforeImage={kitchenBefore}
            afterImage={kitchenAfter}
            alt="Buckhead kitchen renovation transformation"
          />
        </div>
      </section>

      {/* Why Choose Us for Buckhead */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Buckhead Homeowners Choose First Class
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience, expertise, and excellence in every Buckhead kitchen remodel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ValueCard
              icon={HomeIcon}
              title="Local Buckhead Expertise"
              description="We know Buckhead architecture, from historic homes to modern estates. Local permit knowledge and neighborhood respect."
            />
            <ValueCard
              icon={UserCheck}
              title="Dedicated Project Manager"
              description="One point of contact for your entire project. Daily updates and easy communication."
            />
            <ValueCard
              icon={DollarSign}
              title="Transparent Buckhead Pricing"
              description="Detailed line-item estimates. No hidden costs. Average Buckhead kitchen: $45K-$85K depending on scope."
            />
            <ValueCard
              icon={Calendar}
              title="On-Time Completion"
              description="8-12 week timeline for most Buckhead kitchen remodels. Schedule you can plan around."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Licensed & Insured"
              description="Fully licensed Georgia contractor. Bonded and insured. DBE/MBE certified."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Premium Craftsmanship"
              description="Custom cabinetry, stone countertops, designer fixtures. Quality that matches Buckhead standards."
            />
          </div>
        </div>
      </section>

      {/* Buckhead Kitchen Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Buckhead Kitchen Remodeling Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Full-service kitchen renovation tailored to Buckhead homes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Custom Cabinetry</h3>
              <p className="text-sm text-muted-foreground">
                Handcrafted custom cabinets designed for your Buckhead kitchen. Premium hardwoods, 
                soft-close hardware, and finishes that match your home's elegance.
              </p>
            </div>
            
            <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Designer Countertops</h3>
              <p className="text-sm text-muted-foreground">
                Granite, quartz, marble, and quartzite. We work with top Atlanta stone suppliers 
                to source premium materials for Buckhead kitchens.
              </p>
            </div>
            
            <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Layout Redesign</h3>
              <p className="text-sm text-muted-foreground">
                Open up walls, relocate islands, optimize workflow. We'll redesign your Buckhead 
                kitchen for modern entertaining and daily functionality.
              </p>
            </div>
            
            <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Premium Appliances</h3>
              <p className="text-sm text-muted-foreground">
                Sub-Zero, Wolf, Miele, and other luxury brands. Professional installation and 
                integration with your new Buckhead kitchen design.
              </p>
            </div>
            
            <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Designer Lighting</h3>
              <p className="text-sm text-muted-foreground">
                Architectural lighting, under-cabinet LED, statement pendants. Lighting design 
                that elevates your Buckhead kitchen's ambiance.
              </p>
            </div>
            
            <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Flooring & Backsplash</h3>
              <p className="text-sm text-muted-foreground">
                Hardwood, tile, luxury vinyl. Custom backsplash tile work. Coordinated finishes 
                that complete your Buckhead kitchen transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buckhead Kitchen Cost Breakdown */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Buckhead Kitchen Remodel Cost Guide
            </h2>
            <p className="text-muted-foreground text-lg">
              Transparent pricing for Buckhead homeowners
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card border rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Essential Buckhead Kitchen</h3>
                <span className="text-2xl font-bold text-accent">$45K-$60K</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Stock or semi-custom cabinets</li>
                <li>• Granite or quartz countertops</li>
                <li>• Standard appliance package</li>
                <li>• Subway tile backsplash</li>
                <li>• Basic lighting upgrade</li>
                <li>• 10x12 typical Buckhead kitchen</li>
              </ul>
            </div>

            <div className="p-6 bg-card border rounded-lg border-accent">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Premium Buckhead Kitchen</h3>
                <span className="text-2xl font-bold text-accent">$60K-$85K</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom cabinetry with premium finishes</li>
                <li>• Designer stone countertops (marble, quartzite)</li>
                <li>• High-end appliances (Wolf, Sub-Zero)</li>
                <li>• Custom tile backsplash</li>
                <li>• Architectural lighting package</li>
                <li>• Island expansion or layout changes</li>
              </ul>
            </div>

            <div className="p-6 bg-card border rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Luxury Buckhead Kitchen</h3>
                <span className="text-2xl font-bold text-accent">$85K-$150K+</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full custom cabinetry and millwork</li>
                <li>• Exotic stone and designer surfaces</li>
                <li>• Professional-grade appliance suite</li>
                <li>• Structural changes and additions</li>
                <li>• Smart home integration</li>
                <li>• Large Buckhead estates (200+ sq ft)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Buckhead Focus */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Buckhead Homeowners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Our Buckhead kitchen is absolutely stunning. The team was professional, punctual, and the quality is exceptional. They understood the high standards we expected."
              author="Sarah T."
              location="Tuxedo Park, Buckhead"
            />
            <TestimonialCard
              quote="From design to final walkthrough, First Class made our kitchen remodel seamless. They worked around our schedule and the result exceeded our expectations. Highly recommend for Buckhead renovations."
              author="Michael & Jennifer K."
              location="Chastain Park, Buckhead"
            />
          </div>

          <div className="text-center mt-8">
            <GoogleTrustBadge variant="compact" className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Buckhead Kitchen Remodeling Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven process refined over 20 years of Buckhead projects
            </p>
          </div>

          <div className="grid gap-8">
            <ProcessStep
              number={1}
              title="Free In-Home Consultation"
              description="We visit your Buckhead home, discuss your vision, take measurements, and provide a detailed estimate. No obligation."
            />
            <ProcessStep
              number={2}
              title="Design & Material Selection"
              description="Work with our designers to select cabinets, countertops, appliances, and finishes. We handle all permitting with the City of Atlanta."
            />
            <ProcessStep
              number={3}
              title="Professional Construction"
              description="Our licensed crew transforms your Buckhead kitchen. Daily updates, clean job site, and timeline you can track."
            />
            <ProcessStep
              number={4}
              title="Final Walkthrough & Warranty"
              description="Complete inspection and punch list. We stand behind our Buckhead kitchen remodels with a comprehensive warranty."
            />
          </div>
        </div>
      </section>

      {/* Local Buckhead SEO Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving All Buckhead Neighborhoods
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Proud to serve every corner of Buckhead with expert kitchen remodeling
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            {[
              "Tuxedo Park",
              "Chastain Park",
              "Garden Hills",
              "Haynes Manor",
              "Peachtree Heights",
              "Brookwood Hills",
              "Buckhead Village",
              "Lenox Square Area",
              "Phipps Plaza Area"
            ].map((neighborhood) => (
              <div key={neighborhood} className="p-4 bg-card border rounded-lg">
                <p className="font-semibold">{neighborhood}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-card border rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Near Buckhead Landmarks</h3>
            <p className="text-muted-foreground text-center">
              Serving homes near Lenox Square, Phipps Plaza, Buckhead Atlanta, The Shops Buckhead Atlanta, 
              Chastain Park, the Buckhead Theatre, and throughout the Buckhead community. Easy access from 
              Peachtree Road, Roswell Road, and GA-400.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Buckhead Kitchen?
            </h2>
            <p className="text-muted-foreground text-lg">
              Tell us about your Buckhead kitchen remodel. We'll reply within one business day with a detailed estimate.
            </p>
          </div>
          <MultiStepContactForm showCity={false} showTimeline={true} />
        </div>
      </section>
      
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default BuckheadKitchenRemodeling;
