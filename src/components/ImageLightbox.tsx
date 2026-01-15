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
import { getOptimizedImageUrl, imagePresets } from "@/lib/image-utils";

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
    aspectRatio?: string;
    fitMode?: string;
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
        <div className="w-full h-[60vh] flex items-center justify-center">
          <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full">
              {project.slideshowImages.map((image) => (
                <CarouselItem key={image.id} className="flex items-center justify-center h-full">
                  <img
                    src={getOptimizedImageUrl(image.image_url, imagePresets.lightbox)}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-[55vh] object-contain rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
              {project.slideshowImages.length} images
            </div>
          </Carousel>
        </div>
      );
    }

    // Before/After mode - show slider (check for both underscore and hyphen formats)
    if (project.displayMode === 'before_after' || project.displayMode === 'before-after' || (project.beforeImage && project.beforeImage !== project.afterImage)) {
      return (
        <BeforeAfterSlider
          beforeImage={project.beforeImage}
          afterImage={project.afterImage}
          alt={project.title}
          inLightbox={true}
        />
      );
    }

    // Single image mode - show full image without cropping
    return (
      <div className="w-full h-[60vh] flex items-center justify-center bg-muted rounded-lg">
        <img
          src={getOptimizedImageUrl(project.afterImage, imagePresets.lightbox)}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-[55vh] object-contain"
        />
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-6xl max-h-[90vh] p-0 overflow-hidden flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur p-2 hover:bg-background transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="flex-1 overflow-auto p-6 space-y-6">
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
