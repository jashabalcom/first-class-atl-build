import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getOptimizedImageUrl, imagePresets } from "@/lib/image-utils";

interface GalleryCardProps {
  project: {
    title: string;
    category: string;
    location: string;
    afterImage: string;
    description: string;
    aspectRatio?: string;
    fitMode?: string;
  };
  onClick: () => void;
}

const GalleryCard = ({ project, onClick }: GalleryCardProps) => {
  const getCategoryLabel = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  // Always use 4:3 container for uniform grid alignment
  // fitMode controls whether image crops (cover) or shows full with letterboxing (contain)
  const fitMode = project.fitMode || 'cover';
  const fitClass = fitMode === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-lg border bg-card shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Fixed 4:3 container ensures all cards align in grid */}
      <div className="aspect-[4/3] overflow-hidden relative bg-muted">
        <img
          src={getOptimizedImageUrl(project.afterImage, imagePresets.thumbnail)}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width={600}
          height={450}
          className={`w-full h-full ${fitClass} transition-transform duration-300 group-hover:scale-110`}
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {getCategoryLabel(project.category)}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span>{project.location}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <p className="text-sm text-accent font-semibold mt-4 group-hover:gap-2 transition-all">
          Click to view before & after →
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
