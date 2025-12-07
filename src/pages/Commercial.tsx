import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ValueCard from "@/components/ValueCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import { MultiStepCommercialForm } from "@/components/MultiStepCommercialForm";
import ProjectCard from "@/components/ProjectCard";
import SectionLabel from "@/components/SectionLabel";
import { Store, Utensils, Briefcase, Building2, Wrench, ArrowRight } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";
import retailBuildout from "@/assets/retail-buildout.jpg";
import officeRenovation from "@/assets/office-renovation.jpg";
import AnimatedSection from "@/components/AnimatedSection";
import GHLReviewsWidget from "@/components/GHLReviewsWidget";
import ClientLogosCarousel from "@/components/ClientLogosCarousel";
import { Link } from "react-router-dom";

const Commercial = () => {
  const services = [
    {
      icon: Store,
      title: "Retail Build-Outs",
      description: "Custom retail spaces that attract customers and maximize sales per square foot.",
      link: "/retail-construction",
    },
    {
      icon: Utensils,
      title: "Restaurant Fit-Outs",
      description: "Code-compliant kitchens and dining spaces designed for efficiency and ambiance.",
      link: "/restaurant-remodeling",
    },
    {
      icon: Briefcase,
      title: "Office Renovations",
      description: "Modern workspaces that boost productivity and reflect your brand.",
      link: "/office-renovation",
    },
    {
      icon: Building2,
      title: "Tenant Improvements",
      description: "Transform leased spaces into functional, branded environments.",
      link: "/tenant-buildout",
    },
    {
      icon: Wrench,
      title: "Facilities Management",
      description: "Ongoing maintenance and improvement for commercial properties.",
      link: null,
    },
  ];

  const values = [
    {
      title: "Minimize Downtime",
      description: "We work around your schedule to keep your business running smoothly.",
    },
    {
      title: "Code-Compliant Work",
      description: "All projects meet or exceed local building codes and regulations.",
    },
    {
      title: "Dedicated Project Management",
      description: "One point of contact who owns accountability from start to finish.",
    },
    {
      title: "Transparent Timelines",
      description: "Clear schedules with milestone tracking and regular updates.",
    },
  ];

  const testimonials = [
    {
      quote: "They communicated daily and hit every milestone. The buildout was completed ahead of schedule, and our grand opening exceeded all expectations. Best contractor experience we've had.",
      author: "J. Rivera",
      location: "Store Owner, Midtown",
      rating: 5,
    },
    {
      quote: "Professional crew, zero drama, and the kitchen passed inspection on the first try. We were able to open two weeks earlier than planned. Highly recommend for any restaurant project.",
      author: "M. Thompson",
      location: "Restaurant Manager, Buckhead",
      rating: 5,
    },
  ];

  const projects = [
    {
      title: "Retail Build-Out",
      subtitle: "3,000 sq ft | Midtown Atlanta",
      description: "Complete tenant improvement delivered in 6 weeks with custom fixtures, lighting, and point-of-sale infrastructure.",
      image: retailBuildout,
      badge: "Retail",
    },
    {
      title: "Office Renovation",
      subtitle: "5,000 sq ft | Perimeter",
      description: "Phased construction with zero downtime for staff. Modern open floor plan with collaborative workspaces.",
      image: officeRenovation,
      badge: "Office",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Contractor Atlanta | Office, Retail & Restaurant Build-Outs</title>
        <meta name="description" content="Commercial construction contractor in Atlanta. Retail build-outs, restaurant fit-outs, office renovations & tenant improvements. Licensed, bonded, insured. Minimize downtime. Call 678-671-6336." />
        <meta name="keywords" content="commercial contractor atlanta, office renovation atlanta, restaurant remodeling atlanta, retail build out atlanta, tenant improvement contractor, commercial construction atlanta ga, office renovation contractor, restaurant remodel contractor, tenant buildout atlanta" />
        <link rel="canonical" href="https://fcconstruct.com/commercial" />
        <meta property="og:title" content="Commercial Contractor Atlanta | Office, Retail & Restaurant Build-Outs" />
        <meta property="og:description" content="Commercial construction contractor in Atlanta. Retail build-outs, restaurant fit-outs, office renovations & tenant improvements. Licensed, bonded, insured." />
        <meta property="og:url" content="https://fcconstruct.com/commercial" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Commercial Contractor Atlanta | First Class Construction" />
        <meta name="twitter:description" content="Commercial construction: retail build-outs, restaurant fit-outs, office renovations & tenant improvements in Metro Atlanta." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "name": "First Class Construction Group - Commercial Services",
            "description": "Commercial construction contractor specializing in retail build-outs, restaurant fit-outs, office renovations, and tenant improvements in Metro Atlanta.",
            "url": "https://fcconstruct.com/commercial",
            "telephone": "678-671-6336",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Atlanta",
              "addressRegion": "GA",
              "addressCountry": "US"
            },
            "areaServed": ["Atlanta", "Buckhead", "Midtown", "Perimeter", "Sandy Springs", "Marietta", "Alpharetta"],
            "serviceType": ["Retail Build-Out", "Restaurant Fit-Out", "Office Renovation", "Tenant Improvement"]
          })}
        </script>
      </Helmet>
      <Header />
      <MobileCallBar />
      
      <main className="pb-24 md:pb-0">
        <Hero
          benefitHeadline="Build Your Business Success—On Time, On Budget, Zero Drama"
          seoHeadline="Commercial Build-Out Contractor Atlanta | Retail, Restaurant & Office Renovation"
          title="Build Your Business Success—On Time, On Budget, Zero Drama"
          subtitle="Professional build-outs and tenant improvements that minimize downtime and maximize results. Serving Metro Atlanta's retail, restaurant, and office markets."
          primaryCTA="Request a Consultation"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroCommercial}
          trustLine="Licensed • Bonded • Insured • DBE • MBE • 20+ Years in Metro Atlanta"
          useH1={true}
        />

        {/* Problem/Empathy Section */}
        <section className="py-20 border-b">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <SectionLabel>The Challenge</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                Commercial Projects Demand <span className="text-accent">More</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Delays cost revenue. Code violations cost time and money. Poor communication creates chaos. 
                With First Class Construction Group, you get a contractor who understands the stakes—because 
                we've been building commercial spaces across Atlanta for over 20 years.
              </p>
              <div className="section-divider" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <AnimatedSection>
          <section className="py-12 md:py-16 lg:py-20 bg-secondary/5">
            <div className="container space-y-12">
            <div className="text-center space-y-4">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                Commercial Services <span className="text-accent">We Offer</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From retail to restaurants to office spaces—we build environments that work.
              </p>
              <div className="section-divider" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                const content = (
                  <div className={`flex flex-col items-start gap-4 p-6 rounded-lg bg-card border border-l-2 border-l-transparent hover:border-l-accent hover:shadow-md transition-all duration-300 h-full ${service.link ? 'group cursor-pointer' : ''}`}>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    {service.link && (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:underline">
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </div>
                );

                return service.link ? (
                  <Link key={index} to={service.link} className="block">
                    {content}
                  </Link>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection delay={100}>
          <section className="py-12 md:py-16 lg:py-20 border-y">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <SectionLabel>Why Us</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                The First Class <span className="text-accent">Difference</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What sets us apart from other commercial contractors.
              </p>
              <div className="section-divider" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-l-2 border-l-transparent hover:border-l-accent hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-accent mt-1.5" />
                  <div>
                    <h3 className="font-playfair font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Featured Projects */}
        <AnimatedSection delay={200}>
          <section className="py-12 md:py-16 lg:py-20 bg-secondary/5">
            <div className="container space-y-12">
              <div className="text-center space-y-4">
                <SectionLabel>Portfolio</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                  Featured Commercial <span className="text-accent">Projects</span>
                </h2>
                <div className="section-divider" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection delay={100}>
          <section className="py-12 md:py-16 lg:py-20 border-y">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                What Business Owners <span className="text-accent">Say</span>
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
              </div>
              
              <GHLReviewsWidget />
            </div>
          </section>
        </AnimatedSection>

        <ClientLogosCarousel />

        {/* Process */}
        <AnimatedSection delay={200}>
          <section className="py-12 md:py-16 lg:py-20 bg-secondary/5">
            <div className="container space-y-12">
              <div className="text-center space-y-4">
                <SectionLabel>How It Works</SectionLabel>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                  Our Commercial <span className="text-accent">Process</span>
                </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent, efficient, and designed to minimize disruption.
              </p>
              <div className="section-divider" />
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              <ProcessStep
                number={1}
                title="Site Assessment"
                description="We evaluate your space, timeline, and budget to create a detailed proposal."
                isLast={true}
              />
              <ProcessStep
                number={2}
                title="Design & Planning"
                description="Architectural plans, permitting, and material selections—all coordinated."
                isLast={true}
              />
              <ProcessStep
                number={3}
                title="Build & Communicate"
                description="Professional crew with daily updates and minimal business disruption."
                isLast={true}
              />
              <ProcessStep
                number={4}
                title="Inspection & Handover"
                description="Final walkthrough, code inspections, and warranty documentation."
                isLast={true}
              />
              </div>
            </div>
          </section>
        </AnimatedSection>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 md:py-20 border-t">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <SectionLabel>Get Started</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-3">
                Ready to Discuss Your <span className="text-accent">Commercial Project?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us about your project and we'll provide a detailed proposal within one business day.
              </p>
              <div className="section-divider" />
            </div>
            <MultiStepCommercialForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Commercial;
