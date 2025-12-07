import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/Hero";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepContactForm } from "@/components/MultiStepContactForm";
import SectionLabel from "@/components/SectionLabel";
import { Award, Clock, Shield, Home, Users, Sparkles } from "lucide-react";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";

export interface LocationPageProps {
  city: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  primaryKeywords: string[];
  services: string[];
  neighborhoods?: string[];
  testimonials: {
    quote: string;
    author: string;
    location: string;
  }[];
  heroImage?: "kitchen" | "bathroom" | "commercial";
}

const heroImages = {
  kitchen: heroKitchen,
  bathroom: heroBathroom,
  commercial: heroCommercial,
};

const LocationPageTemplate = ({
  city,
  metaTitle,
  metaDescription,
  heroHeadline,
  heroSubtitle,
  primaryKeywords,
  services,
  neighborhoods = [],
  testimonials,
  heroImage = "kitchen",
}: LocationPageProps) => {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={primaryKeywords.join(", ")} />
        <link rel="canonical" href={`https://www.fcconstruct.com/${city.toLowerCase().replace(/\s+/g, '-')}/`} />
      </Helmet>

      <Header />

      <Hero
        benefitHeadline={heroHeadline}
        seoHeadline={`${city} Home Renovation & Remodeling | Licensed Atlanta Contractor Since 2000`}
        subtitle={heroSubtitle}
        primaryCTA={`Get My Free ${city} Quote`}
        secondaryCTA="Call 678-671-6336"
        backgroundImage={heroImages[heroImage]}
        credentialBadge="Licensed Contractor · Atlanta Metro"
      />

      {/* City-Specific Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <SectionLabel>Local Expertise</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 mt-3">
              {city}'s Trusted Home <span className="text-accent">Renovation Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over 20 years, First Class Construction Group has been transforming {city} homes 
              into stunning, functional spaces. From kitchen remodels to bathroom renovations, 
              basement finishing to custom decks, we bring unmatched expertise and dedication 
              to every project. Licensed, bonded, and DBE/MBE certified.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-card border rounded-lg hover:border-accent transition-colors">
              <div className="font-playfair text-4xl font-bold text-accent mb-2">20+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-6 bg-card border rounded-lg hover:border-accent transition-colors">
              <div className="font-playfair text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="p-6 bg-card border rounded-lg hover:border-accent transition-colors">
              <div className="font-playfair text-4xl font-bold text-accent mb-2">4.9★</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="p-6 bg-card border rounded-lg hover:border-accent transition-colors">
              <div className="font-playfair text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Licensed & Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
              Why {city} Homeowners Choose <span className="text-accent">First Class</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience, expertise, and excellence in every {city} renovation
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ValueCard
              icon={Home}
              title={`Local ${city} Expertise`}
              description={`We know ${city} homes and architecture. Local permit knowledge and respect for your neighborhood.`}
            />
            <ValueCard
              icon={Users}
              title="Dedicated Project Manager"
              description="One point of contact for your entire project. Daily updates and easy communication throughout."
            />
            <ValueCard
              icon={Award}
              title="Licensed & Certified"
              description="Fully licensed Georgia contractor. Bonded and insured. Proud DBE/MBE certified business."
            />
            <ValueCard
              icon={Clock}
              title="On-Time Completion"
              description="We respect your schedule with realistic timelines and consistent progress updates."
            />
            <ValueCard
              icon={Shield}
              title="Transparent Pricing"
              description="Detailed line-item estimates with no hidden costs. Know exactly what you're paying for."
            />
            <ValueCard
              icon={Sparkles}
              title="Premium Craftsmanship"
              description="Quality materials and expert workmanship that stands the test of time."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
              {city} <span className="text-accent">Renovation Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive home improvement solutions for {city} residents
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service} className="p-6 bg-card border rounded-lg border-l-2 border-l-transparent hover:border-l-accent hover:shadow-lg transition-all duration-300">
                <h3 className="font-playfair text-xl font-bold mb-3">{service}</h3>
                <p className="text-sm text-muted-foreground">
                  Professional {service.toLowerCase()} services for {city} homeowners. 
                  Quality craftsmanship with attention to detail.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
              What {city} Homeowners <span className="text-accent">Say</span>
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
              />
            ))}
          </div>

          <GHLReviewsWidget />
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
              Our {city} <span className="text-accent">Renovation Process</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven process refined over 20 years of Atlanta-area projects
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid gap-0">
            <ProcessStep
              number={1}
              title="Free In-Home Consultation"
              description={`We visit your ${city} home, discuss your vision, take measurements, and provide a detailed estimate. No obligation.`}
            />
            <ProcessStep
              number={2}
              title="Design & Planning"
              description="Work with our team to finalize designs, select materials, and establish your timeline. We handle all permitting."
            />
            <ProcessStep
              number={3}
              title="Professional Construction"
              description={`Our licensed crew transforms your ${city} home. Daily updates, clean job site, and timeline you can track.`}
            />
            <ProcessStep
              number={4}
              title="Final Walkthrough & Warranty"
              description="Complete inspection and punch list. We stand behind our work with a comprehensive warranty."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {neighborhoods.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <SectionLabel>Coverage Area</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
                Serving All {city} <span className="text-accent">Neighborhoods</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Proud to serve every corner of {city} with expert renovation services
              </p>
              <div className="section-divider" />
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="p-4 bg-card border rounded-lg hover:border-accent transition-colors">
                  <p className="font-semibold">{neighborhood}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Form */}
      <section id="contact-form" className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 mt-3">
              Ready to Transform Your <span className="text-accent">{city} Home?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tell us about your project. We'll reply within one business day with a detailed estimate.
            </p>
            <div className="section-divider mt-6" />
          </div>
          <MultiStepContactForm showCity={false} showTimeline={true} />
        </div>
      </section>

      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default LocationPageTemplate;
