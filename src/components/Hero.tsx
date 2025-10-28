import { Button } from "@/components/ui/button";
import heroKitchen from "@/assets/hero-kitchen.jpg";

interface HeroProps {
  title?: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
  backgroundImage?: string;
  trustLine?: string;
  useH1?: boolean;
  benefitHeadline?: string;
  seoHeadline?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  backgroundImage = heroKitchen,
  trustLine,
  useH1 = false,
  benefitHeadline,
  seoHeadline
}: HeroProps) => {
  // In hybrid mode (benefitHeadline + seoHeadline), seoHeadline is always H1
  // In legacy mode (title only), respect useH1 prop
  const TitleTag = (seoHeadline || useH1) ? 'h1' : 'h2';
  const displayTitle = benefitHeadline || title;
  
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 sm:py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Benefit-Driven Headline (Primary Visual) */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance leading-tight bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent animate-fade-in-up">
            {displayTitle}
          </h2>
          
          {/* SEO Headline (H1 for Google, Secondary Visual) */}
          {seoHeadline && (
            <h1 className="text-lg sm:text-xl text-gray-300/90 mb-6 font-medium animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {seoHeadline}
            </h1>
          )}
          
          {!seoHeadline && (
            <TitleTag className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
              {title}
            </TitleTag>
          )}
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 text-balance max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <a href="#contact-form">
              <Button variant="hero" size="lg" className="w-full sm:w-auto animate-pulse-glow">
                {primaryCTA}
              </Button>
            </a>
            {secondaryCTA && (
              <a href="tel:678-671-6336" className="text-white hover:text-accent transition-colors">
                {secondaryCTA}
              </a>
            )}
          </div>

          {trustLine && (
            <p className="text-sm text-gray-300 border-t border-white/20 pt-4 mt-8 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {trustLine}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
