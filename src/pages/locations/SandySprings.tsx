import LocationPageTemplate from "@/components/LocationPageTemplate";

const SandySprings = () => {
  return (
    <LocationPageTemplate
      city="Sandy Springs"
      metaTitle="Sandy Springs Home Renovation Contractor | Kitchen, Bathroom, Deck GA"
      metaDescription="Expert Sandy Springs renovation services. Kitchen remodeling, bathroom remodel, deck builder, floor installation, painting. Licensed contractor since 2000. Call 678-671-6336."
      heroHeadline="Sandy Springs' Premier Home Renovation Contractor—Exceptional Quality Guaranteed"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, deck building, flooring installation, and painting services for Sandy Springs families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "kitchen remodeling sandy springs ga",
        "bathroom remodel sandy springs",
        "deck builder sandy springs ga",
        "home renovation contractor sandy springs",
        "residential remodeling contractor sandy springs",
        "floor installation sandy springs ga",
        "sandy springs ga commercial construction",
        "painting companies sandy springs"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Deck Building",
        "Flooring Installation",
        "Interior & Exterior Painting",
        "Basement Finishing",
        "Home Renovation",
        "Commercial Construction"
      ]}
      neighborhoods={[
        "Riverside",
        "North Springs",
        "Sandy Springs Perimeter",
        "High Point",
        "Spalding Drive",
        "Heards Ferry",
        "Glenridge",
        "Hammond Park",
        "Powers Ferry"
      ]}
      testimonials={[
        {
          quote: "Our Sandy Springs kitchen is absolutely stunning. First Class delivered premium quality on time and on budget. The custom cabinetry and countertops are perfect!",
          author: "Amanda R.",
          location: "Riverside"
        },
        {
          quote: "Beautiful custom deck overlooking our backyard. They handled permits, worked efficiently, and the quality is exceptional. Best deck builder in Sandy Springs!",
          author: "John & Lisa K.",
          location: "North Springs"
        },
        {
          quote: "Professional flooring installation throughout our entire home. Clean work, great communication, and beautiful results. Highly recommend!",
          author: "Robert M.",
          location: "Sandy Springs Perimeter"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default SandySprings;
