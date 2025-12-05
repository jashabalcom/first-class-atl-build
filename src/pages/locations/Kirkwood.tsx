import LocationPageTemplate from "@/components/LocationPageTemplate";

const Kirkwood = () => {
  return (
    <LocationPageTemplate
      city="Kirkwood"
      metaTitle="Kirkwood Home Renovation Contractor | Kitchen, Bathroom, Painting GA"
      metaDescription="Expert Kirkwood home renovation services. Kitchen remodel, bathroom remodeling, painting company. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Transform Your Kirkwood Home With Atlanta's Trusted Renovation Experts"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, and painting services for Kirkwood families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "kirkwood residential renovation company",
        "bathroom remodeling kirkwood",
        "kirkwood kitchen remodel",
        "painting company in kirkwood"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Interior & Exterior Painting",
        "Whole-Home Renovation",
        "Custom Carpentry",
        "Flooring Installation",
        "Basement Finishing",
        "Deck Building"
      ]}
      neighborhoods={[
        "Historic Kirkwood",
        "East Lake",
        "Edgewood",
        "Reynoldstown",
        "Oakhurst",
        "Hosea Williams Drive",
        "Memorial Drive Area",
        "DeKalb Avenue Corridor"
      ]}
      testimonials={[
        {
          quote: "First Class renovated our Kirkwood bungalow kitchen beautifully. They respected our home's character while adding modern functionality!",
          author: "Sarah M.",
          location: "Historic Kirkwood"
        },
        {
          quote: "Our bathroom is now a beautiful retreat. Professional team, quality work, and great communication throughout the project!",
          author: "Michael & Amy R.",
          location: "Kirkwood"
        },
        {
          quote: "Best painting company in Kirkwood. They transformed our home's curb appeal. Meticulous work and fair pricing!",
          author: "David T.",
          location: "East Lake"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Kirkwood;
