import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import StatsSection from "@/components/StatsSection";
import CertificationBadges from "@/components/CertificationBadges";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Users, Award, CheckCircle } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "We never compromise on craftsmanship. Every project meets our exacting standards.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Transparent pricing, honest timelines, and promises we keep. No surprises.",
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Dedicated project managers and consistent communication from start to finish.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "20+ years of proven results across residential and commercial projects.",
    },
  ];

  return (
    <>
      <Header />
      <MobileCallBar />
      
      <main className="min-h-screen pb-24 md:pb-0">
        {/* Hero Section */}
        <section 
          className="relative py-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCommercial})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-black/55" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <SectionLabel className="text-accent">Our Story</SectionLabel>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold animate-fade-in-up mt-3">
                About First Class <span className="text-accent">Construction Group</span>
              </h1>
              <p className="text-xl opacity-90">
                Building trust, quality, and lasting relationships across Atlanta for over 20 years.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <SectionLabel>Who We Are</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                  Two Decades of <span className="text-accent">Excellence</span>
                </h2>
                <div className="section-divider" />
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Over the last 20 years, commercial and residential clients alike have trusted First Class Construction Group 
                  to turn their visions into reality. From intimate kitchen remodels to large-scale commercial build-outs, 
                  we bring the same dedication to quality, communication, and craftsmanship to every project.
                </p>
                <p>
                  Founded in Atlanta and proud to serve the metro area, we've grown from a small team with big ambitions 
                  into one of the region's most respected construction partners. Our success is built on a simple principle: 
                  treat every project like it's our own home or business.
                </p>
                <p>
                  Today, we're a certified DBE/MBE contractor with a portfolio spanning hundreds of satisfied clients. 
                  We've earned our reputation one project at a time—by showing up, staying transparent, and delivering 
                  results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Values Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <SectionLabel>Our Values</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                  Our Core <span className="text-accent">Values</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide every decision, every project, every interaction.
                </p>
                <div className="section-divider" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={index}
                      className="flex gap-4 p-6 rounded-lg border bg-card border-l-2 border-l-transparent hover:border-l-accent hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-playfair text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <CertificationBadges />

        {/* Client Logos */}
        <ClientLogosCarousel />

        {/* Reviews Widget */}
        <section className="py-12 bg-secondary/5">
          <div className="container">
            <GHLReviewsWidget />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                Let's Build Something <span className="text-accent">Great Together</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the First Class difference. Request your free consultation today.
              </p>
              <div className="section-divider" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/residential">
                  <Button variant="default" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Get Your Free Quote</Button>
                </Link>
                <a href="tel:678-671-6336">
                  <Button variant="outline" size="lg" className="border-accent/50 hover:border-accent hover:text-accent">Call 678-671-6336</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
