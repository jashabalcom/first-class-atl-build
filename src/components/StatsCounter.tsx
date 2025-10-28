import { useEffect, useState } from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

interface StatsCounterProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

const StatsCounter = ({ value, label, icon, suffix = '' }: StatsCounterProps) => {
  const { ref, isInView } = useInViewAnimation();
  const [count, setCount] = useState(0);
  
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const hasPlus = value.includes('+');
  const isPercentage = value.includes('%');

  useEffect(() => {
    if (isInView && numericValue > 0) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <div 
      ref={ref}
      className="text-center space-y-4 animate-fade-in-up"
    >
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-accent/20">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
          {isInView ? count : 0}
          {hasPlus && '+'}
          {isPercentage && '%'}
          {suffix}
        </div>
        <div className="text-sm md:text-base text-muted-foreground">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
