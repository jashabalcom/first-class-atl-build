import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
}

const TestimonialCard = ({ quote, author, location, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-8 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
      <Quote className="h-8 w-8 text-accent mb-4" />
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
        ))}
      </div>
      
      <p className="text-foreground mb-4 italic">"{quote}"</p>
      
      <div className="text-sm">
        <p className="font-semibold">— {author}</p>
        {location && <p className="text-muted-foreground">{location}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
