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
import GoogleTrustBadge from "@/components/GoogleTrustBadge";
import { Store, Utensils, Briefcase, Building2, Wrench } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial.jpg";
import retailBuildout from "@/assets/retail-buildout.jpg";
import officeRenovation from "@/assets/office-renovation.jpg";

const Commercial = () => {
  const services = [
    {
      icon: Store,
      title: "Retail Build-Outs",
      description: "Custom retail spaces that attract customers and maximize sales per square foot.",
    },
    {
      icon: Utensils,
      title: "Restaurant Fit-Outs",
      description: "Code-compliant kitchens and dining spaces designed for efficiency and ambiance.",
    },
    {
      icon: Briefcase,
      title: "Office Renovations",
      description: "Modern workspaces that boost productivity and reflect your brand.",
    },
    {
      icon: Building2,
      title: "Tenant Improvements",
      description: "Transform leased spaces into functional, branded environments.",
    },
    {
      icon: Wrench,
      title: "Facilities Management",
      description: "Ongoing maintenance and improvement for commercial properties.",
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
    },
    {
      title: "Office Renovation",
      subtitle: "5,000 sq ft | Perimeter",
      description: "Phased construction with zero downtime for staff. Modern open floor plan with collaborative workspaces.",
      image: officeRenovation,
    },
  ];

  return (
    <>
      <Header />
      <MobileCallBar />
      
      <main className="pb-24 md:pb-0">
        <Hero
          title="Efficient Commercial Spaces That Keep Your Business Running"
          subtitle="Build-outs and renovations for retail, restaurants, offices, and more—delivered on time with minimal disruption to your operations."
          primaryCTA="Request a Consultation"
          secondaryCTA="Call 678-671-6336"
          backgroundImage={heroCommercial}
          trustLine="Licensed • Bonded • Insured • DBE • MBE • 20+ Years in Atlanta"
        />

        {/* Google Trust Badge Section */}
        <section className="py-8 bg-background border-b">
          <div className="container max-w-4xl">
            <GoogleTrustBadge variant="full" className="max-w-md mx-auto" />
          </div>
        </section>

        {/* Problem/Empathy Section */}
        <section className="py-20 border-b">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Commercial Projects Demand More
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Delays cost revenue. Code violations cost time and money. Poor communication creates chaos. 
                With First Class Construction Group, you get a contractor who understands the stakes—because 
                we've been building commercial spaces across Atlanta for over 20 years.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Commercial Services We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From retail to restaurants to office spaces—we build environments that work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 border-y">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">The First Class Difference</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What sets us apart from other commercial contractors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-accent mt-1.5" />
                  <div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-secondary/5">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Commercial Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 border-y">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What Business Owners Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-secondary/5">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Commercial Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent, efficient, and designed to minimize disruption.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <ProcessStep
                number={1}
                title="Site Assessment"
                description="We evaluate your space, timeline, and budget to create a detailed proposal."
              />
              <ProcessStep
                number={2}
                title="Design & Planning"
                description="Architectural plans, permitting, and material selections—all coordinated."
              />
              <ProcessStep
                number={3}
                title="Build & Communicate"
                description="Professional crew with daily updates and minimal business disruption."
              />
              <ProcessStep
                number={4}
                title="Inspection & Handover"
                description="Final walkthrough, code inspections, and warranty documentation."
              />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-20 border-t">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Discuss Your Commercial Project?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tell us about your project and we'll provide a detailed proposal within one business day.
              </p>
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
