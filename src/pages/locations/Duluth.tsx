import LocationPageTemplate from "@/components/LocationPageTemplate";

const Duluth = () => {
  return (
    <LocationPageTemplate
      city="Duluth"
      metaTitle="Duluth Home Renovation Contractor | Kitchen, Bathroom, Flooring GA"
      metaDescription="Duluth home renovation contractor. Kitchen remodel, bathroom remodel, flooring installation, painting. Licensed since 2000. 678-671-6336."
      heroHeadline="Transform Your Duluth Home With Expert Renovation Services"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, flooring installation, and painting services for Duluth families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "kitchen remodel duluth",
        "bathroom remodel duluth ga",
        "flooring installation duluth",
        "painting contractors duluth",
        "home renovation contractor duluth",
        "flooring installation duluth ga"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Flooring Installation",
        "Interior & Exterior Painting",
        "Home Renovation",
        "Custom Carpentry",
        "Basement Finishing",
        "Deck Building"
      ]}
      neighborhoods={[
        "Downtown Duluth",
        "Sugarloaf Country Club",
        "Berkeley Lake",
        "Peachtree Ridge",
        "Chattahoochee River Area",
        "Parsons Plantation",
        "Duluth Station",
        "River Green",
        "Mill Creek"
      ]}
      testimonials={[
        {
          quote: "Our Duluth kitchen is now magazine-worthy. First Class delivered exceptional quality and the team was a pleasure to work with!",
          author: "Jennifer L.",
          location: "Sugarloaf Country Club"
        },
        {
          quote: "Beautiful new hardwood floors throughout our home. Professional installation and the floors look stunning. Highly recommend!",
          author: "Michael & Beth R.",
          location: "Berkeley Lake"
        },
        {
          quote: "Best painting contractors in Duluth. They transformed our home's exterior and interior. Attention to detail was incredible!",
          author: "Chris D.",
          location: "Downtown Duluth"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Duluth;
