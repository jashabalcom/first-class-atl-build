import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import BeforeAfterSlider from "./BeforeAfterSlider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

interface SlideshowImage {
  id: string;
  image_url: string;
}

interface ImageLightboxProps {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    location: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    displayMode?: string;
    slideshowImages?: SlideshowImage[];
  } | null;
}

const ImageLightbox = ({ open, onClose, project }: ImageLightboxProps) => {
  const carouselRef = useRef<CarouselApi | null>(null);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!carouselRef.current) return;
    
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      carouselRef.current.scrollPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      carouselRef.current.scrollNext();
    }
  }, []);

  useEffect(() => {
    if (open && project?.displayMode === 'slideshow') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, project?.displayMode, handleKeyDown]);

  if (!project) return null;

  const renderContent = () => {
    // Slideshow mode - show carousel of images
    if (project.displayMode === 'slideshow' && project.slideshowImages && project.slideshowImages.length > 0) {
      const setApi = (api: CarouselApi) => {
        carouselRef.current = api;
      };
      return (
        <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent>
            {project.slideshowImages.map((image) => (
              <CarouselItem key={image.id}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <img
                    src={image.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
          <div className="text-center text-sm text-muted-foreground mt-2">
            {project.slideshowImages.length} images
          </div>
        </Carousel>
      );
    }

    // Before/After mode - show slider
    if (project.displayMode === 'before-after' || (project.beforeImage && project.beforeImage !== project.afterImage)) {
      return (
        <BeforeAfterSlider
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
          alt={project.title}
        />
      );
    }

    // Single image mode - just show the image
    return (
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
        <img
          src={project.afterImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur p-2 hover:bg-background transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="space-y-6 p-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-muted-foreground">{project.location}</p>
          </div>

          {renderContent()}

          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
