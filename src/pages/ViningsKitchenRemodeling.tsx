import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import SectionLabel from "@/components/SectionLabel";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import MobileCallBar from "@/components/MobileCallBar";
import { Award, Clock, Sparkles } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";

const ViningsKitchenRemodeling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kitchen Remodeling Vinings GA | Luxury Kitchen Contractor</title>
        <meta 
          name="description" 
          content="Premier kitchen remodeling in Vinings, GA. Licensed Cobb County contractor specializing in luxury kitchen renovations. DBE/MBE certified. Call 678-671-6336." 
        />
        <meta name="keywords" content="kitchen remodeling vinings ga, vinings kitchen contractor, luxury kitchen renovation vinings, cobb county kitchen remodeling" />
        <link rel="canonical" href="https://firstclassconstructionatl.com/areas/vinings-kitchen-remodeling" />
      </Helmet>

      <Header />
      
      <Hero
        benefitHeadline="Vinings' Premier Kitchen Remodeler—Elegance Meets Functionality"
        seoHeadline="Kitchen Remodeling Vinings GA | Licensed Cobb County Contractor Since 2000"
        subtitle="Sophisticated kitchen renovations for Vinings' luxury homes. Expert craftsmanship matching your upscale lifestyle. Licensed, bonded, and DBE/MBE certified with 20+ years serving Cobb County's finest community."
        primaryCTA="Get My Free Vinings Quote"
        secondaryCTA="Call 678-671-6336"
        backgroundImage={heroKitchen}
      />

      {/* Local Expertise Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <SectionLabel>Local Expertise</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Vinings <span className="text-accent">Kitchen Remodeling</span> Experts
            </h2>
            <div className="section-divider" />
            <p className="text-lg text-muted-foreground mt-6">
              We understand Vinings' unique character—from historic homes in Vinings Village to luxury estates overlooking the Chattahoochee. 
              Our team specializes in creating kitchens that match the sophistication Vinings is known for.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors">
              <div className="font-playfair text-4xl font-bold text-accent mb-2">175+</div>
              <div className="text-sm text-muted-foreground">Vinings Kitchens Completed</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors">
              <div className="font-playfair text-4xl font-bold text-accent mb-2">5.0★</div>
              <div className="text-sm text-muted-foreground">Average Vinings Rating</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors">
              <div className="font-playfair text-4xl font-bold text-accent mb-2">4-8</div>
              <div className="text-sm text-muted-foreground">Weeks Typical Timeline</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors">
              <div className="font-playfair text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Cobb Permits Handled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <SectionLabel>Transformations</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Vinings Kitchen <span className="text-accent">Transformations</span>
          </h2>
          <div className="section-divider" />
          <div className="mt-12">
            <BeforeAfterSlider
              beforeImage={kitchenBefore}
              afterImage={kitchenAfter}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Why Vinings Homeowners Choose <span className="text-accent">First Class</span>
          </h2>
          <div className="section-divider" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ValueCard
              icon={Award}
              title="Luxury Home Expertise"
              description="Specialized in high-end renovations that preserve your home's character while adding modern luxury. Every detail matters."
            />
            <ValueCard
              icon={Clock}
              title="White Glove Service"
              description="Premium experience from start to finish. Dedicated project manager, daily updates, and meticulous attention to your home."
            />
            <ValueCard
              icon={Sparkles}
              title="Designer Partnerships"
              description="Access to top kitchen designers and premium suppliers. We create kitchens worthy of Vinings' finest homes."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Vinings Kitchen <span className="text-accent">Remodeling Services</span>
          </h2>
          <div className="section-divider" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Luxury Kitchen Renovations",
              "Chef's Kitchen Design",
              "Custom Cabinetry & Millwork",
              "Gourmet Kitchen Islands",
              "Professional Appliance Integration",
              "Wine Room & Bar Design",
              "Butler's Pantry Installation",
              "Premium Stone Countertops",
              "Smart Kitchen Technology"
            ].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 bg-card rounded-lg border-l-2 border-l-transparent hover:border-l-accent transition-colors">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionLabel>Investment Tiers</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Vinings Kitchen <span className="text-accent">Remodeling Investment</span>
          </h2>
          <div className="section-divider" />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto mt-6">
            Premium craftsmanship for discerning homeowners. Final investment depends on materials, appliances, and custom features.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="font-playfair text-2xl font-bold mb-2">Premium</h3>
              <div className="font-playfair text-3xl font-bold text-accent mb-4">$50K-$75K</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Semi-custom cabinetry</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Quartz or granite countertops</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Professional-grade appliances</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Designer lighting & fixtures</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border-2 border-accent">
              <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-2">
                MOST POPULAR
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">Luxury</h3>
              <div className="font-playfair text-3xl font-bold text-accent mb-4">$75K-$125K</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Fully custom cabinetry</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Exotic stone countertops</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>High-end appliance packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Butler's pantry or wine room</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Smart home integration</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:border-accent transition-colors">
              <h3 className="font-playfair text-2xl font-bold mb-2">Estate</h3>
              <div className="font-playfair text-3xl font-bold text-accent mb-4">$125K-$250K+</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Bespoke custom design</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Premium imported materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Chef-grade appliance suites</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Architectural modifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Multi-room integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            What Vinings <span className="text-accent">Clients Say</span>
          </h2>
          <div className="section-divider" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="We've lived in Vinings for 15 years and finally found contractors who understand luxury. Our new chef's kitchen exceeded our expectations in every way."
              author="Catherine & James H."
              location="Vinings Estates"
              rating={5}
            />
            <TestimonialCard
              quote="Impeccable attention to detail. They respected our home, stayed on schedule, and delivered a kitchen that's both beautiful and functional. Highly recommend."
              author="Margaret S."
              location="Paces West"
              rating={5}
            />
            <TestimonialCard
              quote="From custom millwork to professional appliances, every element was executed flawlessly. First Class understands what Vinings homeowners expect."
              author="Thomas & Rebecca M."
              location="Vinings Village"
              rating={5}
            />
          </div>
          
          <GHLReviewsWidget />
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Our Vinings Kitchen <span className="text-accent">Remodeling Process</span>
          </h2>
          <div className="section-divider" />
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <ProcessStep
              number={1}
              title="Private Consultation"
              description="In-home meeting to understand your vision, lifestyle, and design preferences. We assess your space and discuss possibilities."
            />
            <ProcessStep
              number={2}
              title="Custom Design"
              description="Professional 3D renderings and material selections. Transparent pricing with detailed specifications for every element."
            />
            <ProcessStep
              number={3}
              title="Premium Execution"
              description="Master craftsmen and licensed professionals bring your vision to life. Daily communication and meticulous attention to detail."
            />
            <ProcessStep
              number={4}
              title="White Glove Completion"
              description="Final walkthrough ensuring every detail meets our exacting standards and your complete satisfaction."
            />
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <SectionLabel>Coverage Area</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Vinings <span className="text-accent">Neighborhoods</span> We Serve
          </h2>
          <div className="section-divider" />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              {[
                "Vinings Village",
                "Paces West",
                "Vinings Estates",
                "Cumberland Vinings",
                "Riverwood",
                "Sterling Pointe",
                "Paces Ferry",
                "Chattahoochee Overlook",
                "Vinings Quarters"
              ].map((neighborhood) => (
                <div key={neighborhood} className="p-4 bg-card rounded-lg font-medium border border-border hover:border-accent transition-colors">
                  {neighborhood}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-16 md:py-24 bg-background scroll-mt-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Transform Your <span className="text-accent">Vinings Kitchen</span>?
            </h2>
            <div className="section-divider" />
            <p className="text-lg text-muted-foreground mt-6">
              Schedule your private consultation today. Most Vinings quotes delivered within 24 hours.
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

export default ViningsKitchenRemodeling;
