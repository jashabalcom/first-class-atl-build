import LocationPageTemplate from "@/components/LocationPageTemplate";

const Roswell = () => {
  return (
    <LocationPageTemplate
      city="Roswell"
      metaTitle="Roswell Home Renovation Contractor | Kitchen, Bathroom, Deck Builders GA"
      metaDescription="Roswell home renovation contractor. Kitchen remodeling, bathroom remodel, deck builders, flooring, basement finishing. Licensed since 2000. 678-671-6336."
      heroHeadline="Transform Your Roswell Home With Atlanta's Most Trusted Renovation Experts"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, deck building, and home renovations for Roswell families. Licensed, bonded, and DBE/MBE certified with 20+ years serving North Atlanta."
      primaryKeywords={[
        "deck builders roswell ga",
        "home renovation roswell ga",
        "kitchen remodeling roswell",
        "bathroom remodel roswell ga",
        "flooring installation roswell ga",
        "house painting roswell ga",
        "home renovation contractor roswell",
        "residential home renovation roswell",
        "carpentry services in roswell ga",
        "basement contractor roswell ga"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Deck Building",
        "Basement Finishing",
        "Flooring Installation",
        "Interior & Exterior Painting",
        "Custom Carpentry",
        "Home Renovation"
      ]}
      neighborhoods={[
        "Historic Roswell",
        "Roswell Mill",
        "Mountain Park",
        "Martin's Landing",
        "Horseshoe Bend",
        "Willow Springs",
        "Brookfield West",
        "Nesbit Ferry",
        "Dunwoody Club Forest"
      ]}
      testimonials={[
        {
          quote: "First Class transformed our dated Roswell kitchen into a stunning modern space. Professional, punctual, and exceptional craftsmanship. Highly recommend!",
          author: "Jennifer M.",
          location: "Historic Roswell"
        },
        {
          quote: "Our new deck is the perfect outdoor living space. The team was knowledgeable about local building codes and delivered exactly what we envisioned.",
          author: "David & Sarah K.",
          location: "Mountain Park"
        },
        {
          quote: "From start to finish, our bathroom remodel was seamless. Quality work, fair pricing, and they finished on schedule. Will use again!",
          author: "Robert T.",
          location: "Martin's Landing"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Roswell;
