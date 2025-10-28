import { Quote } from "lucide-react";
import { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
}

const PullQuote = ({ children }: PullQuoteProps) => {
  return (
    <div className="my-8 md:my-12 py-6 md:py-8 border-y border-[hsl(var(--editorial-border))] bg-accent/5">
      <div className="max-w-3xl mx-auto text-center relative px-4 md:px-6">
        <Quote className="h-10 w-10 md:h-12 md:w-12 text-accent/30 mx-auto mb-4" />
        <blockquote className="font-playfair text-xl md:text-2xl lg:text-3xl leading-[1.4] text-foreground italic font-light">
          {children}
        </blockquote>
      </div>
    </div>
  );
};

export default PullQuote;
