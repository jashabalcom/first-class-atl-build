import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import GalleryCard from "./GalleryCard";
import ImageLightbox from "./ImageLightbox";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface GalleryGridProps {
  filter: string;
}

interface GalleryProject {
  id: string;
  title: string;
  category: string;
  location: string | null;
  description: string | null;
  before_image_url: string | null;
  after_image_url: string;
  featured: boolean | null;
  display_order: number | null;
  display_mode: string | null;
}

interface ProjectImage {
  id: string;
  project_id: string;
  image_url: string;
  display_order: number | null;
}

const GalleryGrid = ({ filter }: GalleryGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<GalleryProject | null>(null);

  // Fetch projects
  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ['gallery-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_projects')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as GalleryProject[];
    },
  });

  // Fetch all project images for slideshow thumbnails
  const { data: projectImages = [], isLoading: imagesLoading } = useQuery({
    queryKey: ['gallery-project-images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_project_images')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as ProjectImage[];
    },
  });

  const isLoading = projectsLoading || imagesLoading;

  // Helper to get thumbnail for a project
  const getThumbnail = (project: GalleryProject): string => {
    // If slideshow mode and after_image_url is placeholder, use first slideshow image
    if (project.display_mode === 'slideshow') {
      const firstImage = projectImages.find(img => img.project_id === project.id);
      if (firstImage) {
        return firstImage.image_url;
      }
    }
    return project.after_image_url;
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleCardClick = (project: GalleryProject) => {
    setCurrentProject(project);
    setLightboxOpen(true);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-64 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  // Get slideshow images for current project
  const currentProjectImages = currentProject 
    ? projectImages.filter(img => img.project_id === currentProject.id)
    : [];

  // Map database fields to component expected format
  const mappedProject = currentProject ? {
    id: currentProject.id,
    title: currentProject.title,
    category: currentProject.category,
    location: currentProject.location || '',
    beforeImage: currentProject.before_image_url || currentProject.after_image_url,
    afterImage: currentProject.after_image_url,
    description: currentProject.description || '',
    displayMode: currentProject.display_mode || 'single',
    slideshowImages: currentProjectImages.map(img => ({
      id: img.id,
      image_url: img.image_url,
    })),
  } : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <GalleryCard
            key={project.id}
            project={{
              title: project.title,
              category: project.category,
              location: project.location || '',
              afterImage: getThumbnail(project),
              description: project.description || '',
            }}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No projects found in this category. Check back soon!
          </p>
        </div>
      )}

      <ImageLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        project={mappedProject}
      />
    </>
  );
};

export default GalleryGrid;