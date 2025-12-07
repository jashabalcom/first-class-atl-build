import { useState, useEffect, useRef } from 'react';

interface UseImageLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook for lazy loading images with Intersection Observer
 * Returns ref, isInView, and isLoaded states for optimized image loading
 */
export const useImageLazyLoad = (options: UseImageLazyLoadOptions = {}) => {
  const { threshold = 0.1, rootMargin = '100px' } = options;
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLImageElement | HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is available
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
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const onLoad = () => setIsLoaded(true);

  return { ref, isInView, isLoaded, onLoad };
};

export default useImageLazyLoad;
