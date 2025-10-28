import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectCard = ({ title, subtitle, description, image, link = "#" }: ProjectCardProps) => {
  return (
    <a 
      href={link}
      className="group block overflow-hidden rounded-lg border bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
        <p className="text-sm mb-4">{description}</p>
        
        <div className="flex items-center text-accent font-semibold group-hover:gap-2 transition-all">
          <span>View Details</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
