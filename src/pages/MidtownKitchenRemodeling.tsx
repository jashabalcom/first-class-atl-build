import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import MobileCallBar from "@/components/MobileCallBar";
import { Award, Users, Clock, DollarSign, Shield, Sparkles } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";

const MidtownKitchenRemodeling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero
        benefitHeadline="Midtown's Most Trusted Kitchen Remodeler—Zero Surprises, Pure Results"
        seoHeadline="Kitchen Remodeling Midtown Atlanta | Licensed Contractor Since 2000"
        subtitle="Premium kitchen renovations for Midtown's sophisticated homeowners. Expert craftsmanship meeting urban design standards. Licensed, bonded, and DBE/MBE certified with 20+ years serving Atlanta's heart."
        primaryCTA="Get My Free Midtown Quote"
        secondaryCTA="Call 678-671-6336"
        backgroundImage={heroKitchen}
      />

      {/* Google Trust Badge */}
      <div className="container py-8">
        <GoogleTrustBadge />
      </div>

      {/* Local Expertise Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Midtown Kitchen Specialists
            </h2>
            <p className="text-lg text-muted-foreground">
              We understand Midtown living—from high-rise condos to historic homes near Piedmont Park. 
              Our team knows the unique challenges and opportunities of remodeling in Midtown's dynamic urban environment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Midtown Kitchens Completed</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Midtown Rating</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">3-6</div>
              <div className="text-sm text-muted-foreground">Weeks Typical Timeline</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Midtown Permits Handled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Midtown Kitchen Transformations
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
            Why Midtown Homeowners Choose First Class Construction
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Award}
              title="High-Rise & Condo Expertise"
              description="Specialized experience with Midtown's vertical living. We handle building management, elevator access, and noise restrictions seamlessly."
            />
            <ValueCard
              icon={Clock}
              title="Fast-Track Timelines"
              description="We respect your urban lifestyle. Most Midtown kitchens completed in 3-6 weeks with minimal disruption to your daily routine."
            />
            <ValueCard
              icon={Sparkles}
              title="Modern Design Focus"
              description="Contemporary designs that match Midtown's sophisticated aesthetic—from minimalist to industrial chic."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Midtown Kitchen Remodeling Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "High-Rise Kitchen Renovations",
              "Condo Kitchen Remodeling",
              "Historic Home Kitchen Updates",
              "Modern Kitchen Design",
              "Open Concept Conversions",
              "Luxury Appliance Installation",
              "Custom Cabinetry & Storage",
              "Quartz & Granite Countertops",
              "Smart Kitchen Technology"
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
            Midtown Kitchen Remodeling Costs
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transparent pricing for every budget. Final quotes depend on materials, size, and customization level.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="text-2xl font-bold mb-2">Essential</h3>
              <div className="text-3xl font-bold text-primary mb-4">$25K-$45K</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Quality stock cabinets</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Laminate countertops</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Standard appliances</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Basic fixtures & lighting</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-primary">
              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="text-3xl font-bold text-primary mb-4">$45K-$75K</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Semi-custom cabinetry</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Quartz countertops</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Upgraded appliances</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Designer lighting & fixtures</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Custom backsplash</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-border">
              <h3 className="text-2xl font-bold mb-2">Luxury</h3>
              <div className="text-3xl font-bold text-primary mb-4">$75K-$150K+</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Fully custom cabinetry</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Premium stone countertops</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>High-end appliance packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Smart home integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Structural modifications</span>
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
            What Midtown Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Living in a Midtown high-rise, I was worried about logistics. First Class handled everything perfectly—coordinated with building management, respected quiet hours, and delivered a stunning modern kitchen."
              author="Jennifer M."
              location="Viewpoint Midtown"
              rating={5}
            />
            <TestimonialCard
              quote="Our 1920s Midtown bungalow needed a kitchen that honored its character while adding modern functionality. They nailed it. The blend of historic charm and contemporary design is exactly what we wanted."
              author="David & Sarah L."
              location="Ansley Park"
              rating={5}
            />
            <TestimonialCard
              quote="Fast, professional, and zero drama. They completed our condo kitchen in 4 weeks flat. The result is a sleek, efficient space perfect for urban living."
              author="Michael T."
              location="1010 Midtown"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Midtown Kitchen Remodeling Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number={1}
              title="Free Consultation"
              description="We visit your Midtown home or condo to discuss your vision, assess the space, and understand any building-specific requirements."
            />
            <ProcessStep
              number={2}
              title="Design & Quote"
              description="Detailed 3D designs and transparent pricing. We coordinate with your HOA or building management as needed."
            />
            <ProcessStep
              number={3}
              title="Expert Installation"
              description="Licensed professionals execute the plan with minimal disruption. Daily updates and respect for your neighbors."
            />
            <ProcessStep
              number={4}
              title="Final Walkthrough"
              description="We ensure every detail meets our standards and your expectations before project completion."
            />
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Midtown Neighborhoods We Serve
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                "Ansley Park",
                "Piedmont Heights",
                "Midtown North",
                "Midtown South",
                "Home Park",
                "Atlantic Station",
                "West Midtown",
                "Underwood Hills",
                "Berkeley Park"
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
              Ready to Transform Your Midtown Kitchen?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get your free consultation and quote today. Most Midtown quotes delivered within 24 hours.
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

export default MidtownKitchenRemodeling;
