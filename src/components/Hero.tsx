import { Button } from "@/components/ui/button";
import heroKitchen from "@/assets/hero-kitchen.jpg";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA?: string;
  backgroundImage?: string;
  trustLine?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA, 
  backgroundImage = heroKitchen,
  trustLine 
}: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 sm:py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 text-balance max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
            <a href="#contact-form">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
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
            <p className="text-sm text-gray-300 border-t border-white/20 pt-4 mt-8">
              {trustLine}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
