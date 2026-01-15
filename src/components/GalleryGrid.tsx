import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
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
  categories: string[] | null;
  location: string | null;
  description: string | null;
  before_image_url: string | null;
  after_image_url: string;
  featured: boolean | null;
  display_order: number | null;
  display_mode: string | null;
  aspect_ratio: string | null;
  fit_mode: string | null;
}

interface ProjectImage {
  id: string;
  project_id: string;
  image_url: string;
  image_type: string;
  display_order: number | null;
}

const GalleryGrid = ({ filter }: GalleryGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<GalleryProject | null>(null);
  const queryClient = useQueryClient();

  // Real-time subscriptions for instant updates
  useEffect(() => {
    const projectsChannel = supabase
      .channel('gallery-projects-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'gallery_projects' },
        () => {
          queryClient.invalidateQueries({ queryKey: ['gallery-projects'] });
        }
      )
      .subscribe();

    const imagesChannel = supabase
      .channel('gallery-images-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'gallery_project_images' },
        () => {
          queryClient.invalidateQueries({ queryKey: ['gallery-project-images'] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(projectsChannel);
      supabase.removeChannel(imagesChannel);
    };
  }, [queryClient]);

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

  // Helper to get thumbnail for a project - always prefer uploaded images
  const getThumbnail = (project: GalleryProject): string => {
    const projectImgs = projectImages.filter(img => img.project_id === project.id);
    
    if (projectImgs.length > 0) {
      // For before_after, prefer 'after' type image
      if (project.display_mode === 'before_after') {
        const afterImg = projectImgs.find(img => img.image_type === 'after');
        if (afterImg) return afterImg.image_url;
      }
      // For slideshow or any mode, use first image by display_order
      return projectImgs[0].image_url;
    }
    
    // Only fallback to after_image_url if no uploaded images exist
    return project.after_image_url;
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => {
        // Check new categories array first, fallback to old category
        const projectCategories = p.categories && p.categories.length > 0 ? p.categories : [p.category];
        return projectCategories.includes(filter);
      });

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

  // Get before/after images from gallery_project_images for before_after mode
  const beforeImage = currentProjectImages.find(img => img.image_type === 'before');
  const afterImage = currentProjectImages.find(img => img.image_type === 'after');

  // Map database fields to component expected format
  const mappedProject = currentProject ? {
    id: currentProject.id,
    title: currentProject.title,
    category: currentProject.category,
    location: currentProject.location || '',
    // Use images from gallery_project_images if available
    beforeImage: beforeImage?.image_url || afterImage?.image_url || currentProjectImages[0]?.image_url || currentProject.after_image_url,
    afterImage: afterImage?.image_url || currentProjectImages[0]?.image_url || currentProject.after_image_url,
    description: currentProject.description || '',
    displayMode: currentProject.display_mode || 'single',
    slideshowImages: currentProjectImages.map(img => ({
      id: img.id,
      image_url: img.image_url,
    })),
    aspectRatio: currentProject.aspect_ratio || '4:3',
    fitMode: currentProject.fit_mode || 'cover',
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
              aspectRatio: project.aspect_ratio || '4:3',
              fitMode: project.fit_mode || 'cover',
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