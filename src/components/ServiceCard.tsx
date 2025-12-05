import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  services: string[];
  tagline: string;
  ctaText: string;
  ctaLink: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, description, services, tagline, ctaText, ctaLink, icon }: ServiceCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-l-2 border-l-transparent bg-card p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-l-accent hover:border-accent/50">
      {icon && (
        <div className="mb-4 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
      )}
      
      <h3 className="font-playfair text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
      
      <div className="mb-4 text-sm text-muted-foreground">
        {services.join(" • ")}
      </div>
      
      <p className="text-muted-foreground mb-6 italic font-cormorant text-lg">"{tagline}"</p>
      
      <a href={ctaLink}>
        <Button variant="outline" className="border-accent/50 hover:border-accent hover:bg-accent hover:text-accent-foreground group/btn">
          {ctaText}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </a>
    </div>
  );
};

export default ServiceCard;
