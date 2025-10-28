import { useState } from "react";
import GalleryCard from "./GalleryCard";
import ImageLightbox from "./ImageLightbox";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import basementFinished from "@/assets/basement-finished.jpg";
import retailBuildout from "@/assets/retail-buildout.jpg";
import officeRenovation from "@/assets/office-renovation.jpg";

interface GalleryGridProps {
  filter: string;
}

const GalleryGrid = ({ filter }: GalleryGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      location: "Buckhead, Atlanta",
      beforeImage: kitchenBefore,
      afterImage: kitchenAfter,
      description: "Complete kitchen renovation with custom cabinetry, quartz countertops, and architectural lighting.",
    },
    {
      id: 2,
      title: "Luxury Bathroom Remodel",
      category: "bathroom",
      location: "Midtown, Atlanta",
      beforeImage: heroBathroom,
      afterImage: heroBathroom,
      description: "Spa-inspired bathroom with frameless glass shower, dual vanities, and heated floors.",
    },
    {
      id: 3,
      title: "Finished Basement Living Space",
      category: "basement",
      location: "Decatur, Atlanta",
      beforeImage: basementFinished,
      afterImage: basementFinished,
      description: "Transformed unfinished basement into entertainment room with wet bar and full bath.",
    },
    {
      id: 4,
      title: "Retail Store Build-Out",
      category: "commercial",
      location: "Perimeter, Atlanta",
      beforeImage: retailBuildout,
      afterImage: retailBuildout,
      description: "3,000 sq ft retail space completed in 6 weeks with custom fixtures and lighting.",
    },
    {
      id: 5,
      title: "Office Renovation",
      category: "commercial",
      location: "Sandy Springs, Atlanta",
      beforeImage: officeRenovation,
      afterImage: officeRenovation,
      description: "Modern office transformation with open floor plan and collaborative workspaces.",
    },
    {
      id: 6,
      title: "Kitchen & Dining Expansion",
      category: "kitchen",
      location: "Brookhaven, Atlanta",
      beforeImage: kitchenAfter,
      afterImage: kitchenAfter,
      description: "Opened up walls to create spacious kitchen with large island and dining area.",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const handleCardClick = (project: any) => {
    setCurrentProject(project);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <GalleryCard
            key={project.id}
            project={project}
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
        project={currentProject}
      />
    </>
  );
};

export default GalleryGrid;
