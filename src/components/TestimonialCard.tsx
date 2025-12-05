import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
}

const TestimonialCard = ({ quote, author, location, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="relative bg-card p-8 rounded-lg shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Decorative quotation mark */}
      <div className="absolute -top-3 left-6 text-6xl font-playfair text-accent/20 leading-none select-none">
        "
      </div>
      
      <div className="flex gap-1 mb-4 pt-2">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      
      <p className="text-foreground mb-6 italic font-cormorant text-lg leading-relaxed">"{quote}"</p>
      
      <div className="text-sm border-t pt-4">
        <p className="font-semibold">— {author}</p>
        {location && <p className="text-muted-foreground">{location}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
