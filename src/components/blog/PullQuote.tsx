import { Quote } from "lucide-react";
import { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
}

const PullQuote = ({ children }: PullQuoteProps) => {
  return (
    <div className="my-12 py-8 border-y border-[hsl(var(--editorial-border))]">
      <div className="max-w-3xl mx-auto text-center relative">
        <Quote className="h-12 w-12 text-accent/20 mx-auto mb-4" />
        <blockquote className="font-playfair text-2xl md:text-3xl leading-[1.4] text-foreground italic font-light">
          {children}
        </blockquote>
      </div>
    </div>
  );
};

export default PullQuote;
