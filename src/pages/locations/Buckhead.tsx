import LocationPageTemplate from "@/components/LocationPageTemplate";

const Buckhead = () => {
  return (
    <LocationPageTemplate
      city="Buckhead"
      metaTitle="Buckhead Home Renovation Contractor | Kitchen, Bathroom, Basement GA"
      metaDescription="Buckhead renovation contractor. Kitchen remodeling, bathroom remodel, basement finishing, painting. Licensed since 2000. 678-671-6336."
      heroHeadline="Buckhead's Most Trusted Home Renovation Experts—Luxury Craftsmanship"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, basement finishing, and painting services for Buckhead's finest homes. Licensed, bonded, and DBE/MBE certified with 20+ years serving Atlanta."
      primaryKeywords={[
        "kitchen remodeling buckhead",
        "painting contractor buckhead",
        "buckhead home renovation",
        "buckhead bathroom remodel",
        "basement remodel company buckhead ga",
        "buckhead commercial contractor",
        "home renovation contractor buckhead",
        "general contractor buckhead atlanta"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Interior & Exterior Painting",
        "Commercial Build-Outs",
        "Home Renovation",
        "Custom Carpentry",
        "Flooring Installation"
      ]}
      neighborhoods={[
        "Tuxedo Park",
        "Chastain Park",
        "Garden Hills",
        "Haynes Manor",
        "Peachtree Heights",
        "Brookwood Hills",
        "Buckhead Village",
        "Lenox Square Area",
        "Phipps Plaza Area"
      ]}
      testimonials={[
        {
          quote: "Our Buckhead kitchen is absolutely stunning. The team was professional, punctual, and the quality is exceptional. They understood the high standards we expected!",
          author: "Sarah T.",
          location: "Tuxedo Park"
        },
        {
          quote: "First Class transformed our basement into a beautiful entertainment space with wet bar and home theater. Best basement remodel company in Buckhead!",
          author: "Michael & Jennifer K.",
          location: "Chastain Park"
        },
        {
          quote: "Professional painting contractors who delivered flawless results. Our Buckhead home looks brand new inside and out. Highly recommend!",
          author: "David L.",
          location: "Garden Hills"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Buckhead;
