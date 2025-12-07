import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import SectionLabel from "@/components/SectionLabel";
import CertificationBadges from "@/components/CertificationBadges";
import { Shield, Clock, Award } from "lucide-react";

const Book = () => {
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Schedule Your Free Consultation | Major Leads Agency</title>
        <meta
          name="description"
          content="Book a free consultation with Atlanta's trusted renovation experts. Schedule your appointment online and get started on your dream renovation project."
        />
        <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-10 lg:py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-5 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <SectionLabel className="mb-3 animate-fade-in-up">Book Now</SectionLabel>
              <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Schedule Your{" "}
                <span className="text-accent">Free Consultation</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-5 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Take the first step toward your dream renovation.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>30-Minute Consultation</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span>100% Free, No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="pt-2 sm:pt-4 pb-12 lg:pb-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="container mx-auto px-3 sm:px-5 lg:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Calendar Container */}
              <div className="bg-card rounded-lg shadow-xl border-t-4 border-accent overflow-hidden">
                <div className="p-3 sm:p-4 md:p-6 bg-muted/30 border-b border-border">
                  <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-foreground text-center">
                    Select a Date & Time
                  </h2>
                </div>
                <div className="p-2 sm:p-4 md:p-6 lg:p-8 relative">
                  {/* Skeleton Loader */}
                  {!calendarLoaded && (
                    <div className="absolute inset-4 md:inset-8 flex flex-col items-center justify-center bg-muted/50 rounded-lg animate-pulse">
                      <div className="w-16 h-16 rounded-full bg-muted mb-4" />
                      <div className="h-4 w-48 bg-muted rounded mb-2" />
                      <div className="h-3 w-32 bg-muted rounded" />
                    </div>
                  )}
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/ITabl42VTFSLL9X27hGf"
                    className="w-full border-none overflow-hidden min-h-[550px] sm:min-h-[600px] md:min-h-[700px]"
                    style={{
                      opacity: calendarLoaded ? 1 : 0,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                    scrolling="no"
                    id="ITabl42VTFSLL9X27hGf_1765057687412"
                    title="Schedule Appointment"
                    onLoad={() => setCalendarLoaded(true)}
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Prefer to speak with someone directly?
                </p>
                <a
                  href="tel:678-671-6336"
                  className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors"
                >
                  Call us at 678-671-6336
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Badges */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <CertificationBadges />
          </div>
        </section>
      </main>

      <Footer />
      <MobileCallBar />
    </>
  );
};

export default Book;
