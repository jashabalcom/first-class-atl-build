// Animation utilities for scroll-triggered and interactive effects

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const staggerDelay = (index: number, baseDelay: number = 100) => ({
  animationDelay: `${index * baseDelay}ms`
});

export const parallaxScroll = (scrollY: number, speed: number = 0.5) => ({
  transform: `translateY(${scrollY * speed}px)`
});
