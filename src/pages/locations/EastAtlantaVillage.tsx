import LocationPageTemplate from "@/components/LocationPageTemplate";

const EastAtlantaVillage = () => {
  return (
    <LocationPageTemplate
      city="East Atlanta Village"
      metaTitle="East Atlanta Village Renovation Contractor | Painting, Home Renovations GA"
      metaDescription="Expert East Atlanta Village home renovation and painting services. Residential renovations and professional painting. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="East Atlanta Village Home Renovation & Painting Experts"
      heroSubtitle="Premium painting services and whole-home renovations for East Atlanta Village residents. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "painting contractors in east atlanta",
        "east atlanta painting company",
        "east atlanta renovations"
      ]}
      services={[
        "Interior & Exterior Painting",
        "Whole-Home Renovation",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Carpentry",
        "Flooring Installation",
        "Deck Building",
        "Basement Finishing"
      ]}
      neighborhoods={[
        "East Atlanta Village",
        "Ormewood Park",
        "Grant Park",
        "Boulevard Heights",
        "Gresham Park",
        "Flat Shoals",
        "Brownwood Park",
        "Constitution"
      ]}
      testimonials={[
        {
          quote: "First Class painted our EAV craftsman beautifully. They understood the neighborhood aesthetic and delivered flawless results!",
          author: "Jessica P.",
          location: "East Atlanta Village"
        },
        {
          quote: "Complete home renovation done right. Professional, punctual, and the quality speaks for itself. Highly recommend!",
          author: "Ryan & Kate S.",
          location: "Ormewood Park"
        },
        {
          quote: "Best painting contractors in East Atlanta. Transformed our home's exterior with careful prep and beautiful finish!",
          author: "Marcus T.",
          location: "Grant Park"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default EastAtlantaVillage;
