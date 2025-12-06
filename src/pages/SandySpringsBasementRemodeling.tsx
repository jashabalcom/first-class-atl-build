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
import heroBathroom from "@/assets/hero-bathroom.jpg";
import bathroomBefore from "@/assets/bathroom-before.jpg";
import bathroomAfter from "@/assets/bathroom-after.jpg";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";

const SandySpringsBasementRemodeling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        benefitHeadline="Turn Your Sandy Springs Bathroom Into a Luxury Retreat—Fast & Hassle-Free"
        seoHeadline="Bathroom Remodeling Sandy Springs | Licensed Atlanta Contractor Since 2000"
        subtitle="Premium bathroom renovations for Sandy Springs families. Expert craftsmanship with superior materials. Licensed, bonded, and DBE/MBE certified with 20+ years transforming North Atlanta bathrooms."
        primaryCTA="Get My Free Sandy Springs Quote"
        secondaryCTA="Call 678-671-6336"
        backgroundImage={heroBathroom}
      />

      {/* Local Expertise Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sandy Springs Bathroom Specialists
            </h2>
            <p className="text-lg text-muted-foreground">
              We know Sandy Springs homes—from established neighborhoods near Riverside to new developments in North Springs. 
              Our team specializes in upgrading bathrooms to match the quality and style Sandy Springs homeowners expect.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Sandy Springs Bathrooms</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">2-4</div>
              <div className="text-sm text-muted-foreground">Weeks Typical Timeline</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Permits Handled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sandy Springs Bathroom Transformations
          </h2>
          <BeforeAfterSlider
            beforeImage={bathroomBefore}
            afterImage={bathroomAfter}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Sandy Springs Homeowners Trust First Class Construction
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Award}
              title="Master Bath Specialists"
              description="Expert in creating spa-like retreats. From walk-in showers to soaking tubs, we design bathrooms that elevate your daily routine."
            />
            <ValueCard
              icon={Clock}
              title="Fast Turnaround"
              description="Most Sandy Springs bathroom remodels completed in 2-4 weeks. We respect your schedule and minimize household disruption."
            />
            <ValueCard
              icon={Sparkles}
              title="Luxury Materials"
              description="Premium tile, fixtures, and finishes. We source from top suppliers to ensure your bathroom looks stunning for years."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sandy Springs Bathroom Remodeling Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Master Bathroom Renovations",
              "Guest Bathroom Remodeling",
              "Powder Room Upgrades",
              "Walk-In Shower Installation",
              "Soaking Tub Installation",
              "Double Vanity Installation",
              "Custom Tile Work",
              "Luxury Fixture Installation",
              "Heated Floor Installation"
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
            Sandy Springs Bathroom Remodeling Costs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent pricing for every bathroom size and style. Final quotes depend on materials, fixtures, and layout changes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="text-2xl font-bold mb-2">Essential</h3>
              <div className="text-3xl font-bold text-primary mb-4">$12K-$20K</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Standard fixtures & vanity</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Quality ceramic tile</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Basic lighting upgrade</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Tub or shower replacement</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-primary">
              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-3xl font-bold text-primary mb-4">$20K-$35K</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Custom vanity & storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Designer tile & stone</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Frameless glass shower</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Luxury fixtures & faucets</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Recessed lighting</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="text-2xl font-bold mb-2">Luxury</h3>
              <div className="text-3xl font-bold text-primary mb-4">$35K-$60K+</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Fully custom design</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium stone & tile</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Freestanding soaking tub</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Smart shower systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Layout modifications</span>
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
            What Sandy Springs Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Our master bath went from dated to stunning in just 3 weeks. The walk-in shower and double vanity transformed our morning routine. Couldn't be happier!"
              author="Amanda R."
              location="Riverside Sandy Springs"
              rating={5}
            />
            <TestimonialCard
              quote="Professional, punctual, and pristine work. They gutted our old bathroom and created a spa-like retreat. Worth every penny."
              author="John & Lisa K."
              location="North Springs"
              rating={5}
            />
            <TestimonialCard
              quote="From the initial design meeting to final walkthrough, First Class was exceptional. Our guest bathroom is now a showpiece."
              author="Robert M."
              location="Sandy Springs Perimeter"
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
            Our Sandy Springs Bathroom Remodeling Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number={1}
              title="Free Consultation"
              description="We visit your Sandy Springs home to discuss your vision, measure the space, and assess plumbing and electrical needs."
            />
            <ProcessStep
              number={2}
              title="Design & Quote"
              description="Detailed 3D designs showing exactly how your new bathroom will look. Transparent pricing with no hidden fees."
            />
            <ProcessStep
              number={3}
              title="Expert Installation"
              description="Licensed plumbers and electricians execute the plan. Daily cleanup and communication throughout the project."
            />
            <ProcessStep
              number={4}
              title="Final Walkthrough"
              description="We inspect every detail and ensure you're completely satisfied before project sign-off."
            />
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Sandy Springs Neighborhoods We Serve
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                "Riverside",
                "North Springs",
                "Sandy Springs Perimeter",
                "Dunwoody Club Forest",
                "High Point",
                "Spalding Drive",
                "Heards Ferry",
                "Glenridge",
                "Hammond Park"
              ].map((neighborhood) => (
                <div key={neighborhood} className="p-4 bg-card rounded-lg font-medium">
                  {neighborhood}
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
              Ready to Transform Your Sandy Springs Bathroom?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your free consultation and quote today. Most Sandy Springs quotes delivered within 24 hours.
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

export default SandySpringsBasementRemodeling;
