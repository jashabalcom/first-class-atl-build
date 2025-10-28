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
    // Interior Projects
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      location: "Buckhead, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-50_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/first-class-website-images_orig.png",
      description: "Complete kitchen renovation with custom cabinetry, quartz countertops, and architectural lighting.",
    },
    {
      id: 2,
      title: "Luxury Bathroom Remodel",
      category: "bathroom",
      location: "Midtown, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-54_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/first-class-website-images-4_orig.png",
      description: "Spa-inspired bathroom with frameless glass shower, dual vanities, and heated floors.",
    },
    {
      id: 3,
      title: "Commercial Office Build-Out",
      category: "commercial",
      location: "Downtown, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/before-6_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-24_orig.png",
      description: "Modern office transformation with open floor plan and collaborative workspaces.",
    },
    {
      id: 4,
      title: "Restaurant Interior Renovation",
      category: "commercial",
      location: "Virginia Highland, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/61_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/2_orig.png",
      description: "Complete restaurant interior renovation with custom bar and seating areas.",
    },
    {
      id: 5,
      title: "Retail Store Build-Out",
      category: "commercial",
      location: "Perimeter, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/beforeafter-facebook-post-4_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/beforeafter-facebook-post-8_orig.png",
      description: "3,000 sq ft retail space completed in 6 weeks with custom fixtures and lighting.",
    },
    {
      id: 6,
      title: "Basement Finishing Project",
      category: "basement",
      location: "Decatur, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/80_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/83_orig.png",
      description: "Transformed unfinished basement into entertainment room with wet bar and full bath.",
    },
    {
      id: 7,
      title: "Kitchen Modernization",
      category: "kitchen",
      location: "Sandy Springs, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-62_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-28_orig.png",
      description: "Contemporary kitchen update with new appliances and custom cabinetry.",
    },
    {
      id: 8,
      title: "Master Bathroom Renovation",
      category: "bathroom",
      location: "Roswell, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/before-13_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/6_orig.png",
      description: "Luxurious master bath with walk-in shower and double vanity.",
    },
    {
      id: 9,
      title: "Commercial Space Renovation",
      category: "commercial",
      location: "Buckhead, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/beforeafter-facebook-post-17_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-38_orig.png",
      description: "Full commercial space renovation with modern finishes and lighting.",
    },
    {
      id: 10,
      title: "Kitchen & Dining Expansion",
      category: "kitchen",
      location: "Brookhaven, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-67_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-39_orig.png",
      description: "Opened up walls to create spacious kitchen with large island and dining area.",
    },
    // Exterior Projects
    {
      id: 11,
      title: "Home Exterior Renovation",
      category: "exterior",
      location: "East Atlanta, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/before-15_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/untitled-design-44_orig.png",
      description: "Complete exterior makeover with new siding, windows, and landscaping.",
    },
    {
      id: 12,
      title: "Storefront Facade Renovation",
      category: "exterior",
      location: "Little Five Points, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/86_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/34_orig.png",
      description: "Modern storefront renovation with new signage and exterior finishes.",
    },
    {
      id: 13,
      title: "Commercial Building Exterior",
      category: "exterior",
      location: "Midtown, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/beforeafter-facebook-post-18_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/92_orig.png",
      description: "Commercial building exterior renovation with modern architectural elements.",
    },
    {
      id: 14,
      title: "Restaurant Exterior Update",
      category: "exterior",
      location: "Inman Park, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/95_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/100_orig.png",
      description: "Restaurant facade renovation with outdoor seating area construction.",
    },
    {
      id: 15,
      title: "Residential Exterior Remodel",
      category: "exterior",
      location: "Grant Park, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/104_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/106_orig.png",
      description: "Full exterior renovation with new roofing, siding, and porch addition.",
    },
    {
      id: 16,
      title: "Commercial Building Facade",
      category: "exterior",
      location: "West End, Atlanta",
      beforeImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/110_orig.png",
      afterImage: "https://www.fcconstruct.com/uploads/1/3/8/4/138491708/115_orig.png",
      description: "Modern commercial facade with updated storefront and exterior lighting.",
    },
    {
      id: 17,
      title: "Gourmet Kitchen Remodel",
      category: "kitchen",
      location: "Druid Hills, Atlanta",
      beforeImage: kitchenBefore,
      afterImage: kitchenAfter,
      description: "High-end kitchen renovation with professional-grade appliances and custom island.",
    },
    {
      id: 18,
      title: "Spa Bathroom Retreat",
      category: "bathroom",
      location: "Ansley Park, Atlanta",
      beforeImage: heroBathroom,
      afterImage: heroBathroom,
      description: "Luxury spa bathroom with soaking tub, walk-in shower, and custom tile work.",
    },
    {
      id: 19,
      title: "Finished Basement Entertainment",
      category: "basement",
      location: "Chamblee, Atlanta",
      beforeImage: basementFinished,
      afterImage: basementFinished,
      description: "Complete basement finishing with home theater, bar, and game room.",
    },
    {
      id: 20,
      title: "Office Space Buildout",
      category: "commercial",
      location: "Dunwoody, Atlanta",
      beforeImage: officeRenovation,
      afterImage: officeRenovation,
      description: "Professional office buildout with conference rooms and open workspace.",
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
