import { useState, useRef, useEffect, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onLoad'> {
  src: string;
  alt: string;
  /** Show blur-up placeholder effect */
  blurUp?: boolean;
  /** Priority loading for above-the-fold images (LCP) */
  priority?: boolean;
  /** Aspect ratio for the container (e.g., "4/3", "16/9") */
  aspectRatio?: string;
  /** Object fit mode */
  objectFit?: 'cover' | 'contain' | 'fill';
  /** Custom placeholder background color */
  placeholderColor?: string;
}

/**
 * Optimized Image component with:
 * - Intersection Observer lazy loading
 * - Blur-up placeholder effect
 * - Priority loading for LCP images
 * - Proper width/height attributes for CLS prevention
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  blurUp = true,
  priority = false,
  aspectRatio,
  objectFit = 'cover',
  placeholderColor = 'hsl(var(--muted))',
  width,
  height,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const element = imgRef.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: '200px', threshold: 0.01 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [priority]);

  const containerStyle = aspectRatio
    ? { aspectRatio, backgroundColor: placeholderColor }
    : { backgroundColor: placeholderColor };

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        aspectRatio && 'w-full'
      )}
      style={containerStyle}
    >
      {/* Placeholder skeleton */}
      {blurUp && !isLoaded && (
        <div 
          className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-muted/80 to-muted"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        data-src={!isInView ? src : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'transition-opacity duration-500',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
