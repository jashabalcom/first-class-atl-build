import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
  badge?: string;
}

const ProjectCard = ({ title, subtitle, description, image, link = "#", badge }: ProjectCardProps) => {
  return (
    <a 
      href={link}
      className="group block overflow-hidden rounded-lg border bg-card shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={image}
          alt={`${title} - ${subtitle} by First Class Construction Group Atlanta`}
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badge overlay */}
        {badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider rounded">
            {badge}
          </div>
        )}
        
        {/* Location badge */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="text-white text-sm font-medium">{subtitle}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold mb-1 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
        <p className="text-sm mb-4">{description}</p>
        
        <div className="flex items-center text-accent font-semibold text-sm group-hover:gap-2 transition-all">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
