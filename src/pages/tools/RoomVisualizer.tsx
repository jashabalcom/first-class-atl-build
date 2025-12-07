import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import SectionLabel from "@/components/SectionLabel";
import RoomVisualizerTool from "@/components/RoomVisualizerTool";
import { Shield, Sparkles, Clock, CheckCircle } from "lucide-react";

const RoomVisualizer = () => {
  return (
    <>
      <Helmet>
        <title>AI Room Visualizer | See Your Remodel Before You Build | First Class Construction</title>
        <meta
          name="description"
          content="Upload a photo of your room and instantly see what it could look like after a professional remodel. Try different styles - modern, farmhouse, luxury, and more. Free AI room visualization tool."
        />
        <meta
          name="keywords"
          content="room visualizer, kitchen remodel visualization, bathroom design tool, AI home design, remodel preview, before and after, Atlanta contractor"
        />
        <link rel="canonical" href="https://fcconstruct.com/room-visualizer" />
        <meta property="og:title" content="AI Room Visualizer | See Your Remodel Before You Build" />
        <meta
          property="og:description"
          content="Upload a photo and see your room transformed with AI. Try modern, farmhouse, luxury styles and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fcconstruct.com/room-visualizer" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "AI Room Visualizer",
            "description": "Upload a photo of your room and instantly see what it could look like after a professional remodel.",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "First Class Construction Group",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Atlanta",
                "addressRegion": "GA"
              }
            }
          })}
        </script>
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted/30 py-16 sm:py-20 md:py-24">
          <div className="container px-4 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
              style={{ animationDelay: "0ms" }}
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Design Tool
            </div>
            
            <h1
              className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
              style={{ animationDelay: "100ms" }}
            >
              See Your <span className="text-accent">Dream Remodel</span>
              <br className="hidden sm:block" /> Before You Build
            </h1>
            
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              style={{ animationDelay: "200ms" }}
            >
              Upload a photo of your current room and our AI will show you exactly what it could 
              look like with a professional remodel. Try different styles instantly.
            </p>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Results in Seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>No Sign-Up Required</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4">
            <RoomVisualizerTool />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container px-4">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
              3 Simple Steps to Your Dream Room
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Upload Your Photo",
                  description: "Take a photo of your current kitchen, bathroom, basement, or living room."
                },
                {
                  step: "2",
                  title: "Choose Your Style",
                  description: "Select from modern, farmhouse, luxury, spa-like, and many more design styles."
                },
                {
                  step: "3",
                  title: "See the Magic",
                  description: "Our AI instantly transforms your room into a stunning visualization of the finished remodel."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Ready to Make Your Vision a Reality?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Love what you see? Our expert team at First Class Construction Group can bring your 
              dream room to life. We've been transforming Atlanta homes for over a decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book" className="inline-block">
                <button className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                  Schedule Free Consultation
                </button>
              </a>
              <a href="tel:678-671-6336" className="inline-block">
                <button className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
                  Call 678-671-6336
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCallBar />
    </>
  );
};

export default RoomVisualizer;
