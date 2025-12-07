import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollIndicator from "./ScrollIndicator";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import { useState } from "react";

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
  fullHeight?: boolean;
  showScrollIndicator?: boolean;
  credentialBadge?: string;
  /** Priority loading for above-the-fold heroes (e.g., Home page) */
  priority?: boolean;
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
  seoHeadline,
  fullHeight = false,
  showScrollIndicator = true,
  credentialBadge,
  priority = false
}: HeroProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // In hybrid mode (benefitHeadline + seoHeadline), seoHeadline is always H1
  // In legacy mode (title only), respect useH1 prop
  const TitleTag = (seoHeadline || useH1) ? 'h1' : 'h2';
  const displayTitle = benefitHeadline || title;
  
  // Split headline for gold accent treatment
  const renderHeadlineWithAccent = (headline: string) => {
    const words = headline.split(' ');
    const midpoint = Math.ceil(words.length / 2);
    const firstPart = words.slice(0, midpoint).join(' ');
    const secondPart = words.slice(midpoint).join(' ');
    
    return (
      <>
        <span>{firstPart}</span>
        {secondPart && <span className="text-accent"> {secondPart}</span>}
      </>
    );
  };
  
  return (
    <section className={`relative ${fullHeight ? 'min-h-screen' : 'min-h-[500px] md:min-h-[600px]'} flex items-center justify-center overflow-hidden`}>
      {/* Optimized Background Image with native lazy loading */}
      <div className="absolute inset-0 z-0">
        {/* Low-quality placeholder / skeleton */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden="true"
        />
        
        {/* Main hero image with lazy loading */}
        <img
          src={backgroundImage}
          alt=""
          role="presentation"
          width={1920}
          height={1080}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/50"
          aria-hidden="true"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center text-white">
          {/* Credential Badge - Eyebrow */}
          {credentialBadge && (
            <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/90 font-medium">
                {credentialBadge}
              </span>
            </div>
          )}
          
          {/* Benefit-Driven Headline (Primary Visual) */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight animate-fade-in-up">
            {renderHeadlineWithAccent(displayTitle || '')}
          </h2>
          
          {/* SEO Headline (H1 for Google, Secondary Visual) */}
          {seoHeadline && (
            <h1 className="text-base sm:text-lg md:text-xl text-gray-300/90 mb-4 md:mb-6 font-medium animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {seoHeadline}
            </h1>
          )}
          
          {!seoHeadline && title && (
            <TitleTag className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance leading-tight animate-fade-in-up">
              {title}
            </TitleTag>
          )}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-200 text-balance max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link to="/book" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 border-2 border-accent text-accent-foreground bg-accent hover:bg-accent/90 gap-2 group">
                {primaryCTA}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            {secondaryCTA && (
              <a href="tel:678-671-6336" className="text-white/90 hover:text-accent transition-colors text-center min-h-[44px] flex items-center justify-center text-sm underline underline-offset-4 decoration-white/30 hover:decoration-accent">
                {secondaryCTA}
              </a>
            )}
          </div>

          {trustLine && (
            <p className="text-xs sm:text-sm text-gray-300/80 border-t border-white/20 pt-3 md:pt-4 mt-6 md:mt-8 animate-fade-in-up tracking-wide" style={{ animationDelay: '400ms' }}>
              {trustLine}
            </p>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <ScrollIndicator />
        </div>
      )}
    </section>
  );
};

export default Hero;
