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
    // Slideshow mode - show carousel of images at natural aspect ratio
    if (project.displayMode === 'slideshow' && project.slideshowImages && project.slideshowImages.length > 0) {
      const setApi = (api: CarouselApi) => {
        carouselRef.current = api;
      };
      return (
        <div className="w-full flex items-center justify-center py-4">
          <Carousel className="w-full max-w-4xl" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {project.slideshowImages.map((image) => (
                <CarouselItem key={image.id} className="flex items-center justify-center">
                  <img
                    src={getOptimizedImageUrl(image.image_url, imagePresets.lightbox)}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 backdrop-blur px-3 py-1 rounded-full">
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

    // Single image mode - show full image at natural aspect ratio
    return (
      <div className="w-full flex items-center justify-center py-4">
        <img
          src={getOptimizedImageUrl(project.afterImage, imagePresets.lightbox)}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-lg"
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
