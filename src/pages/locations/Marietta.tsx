import LocationPageTemplate from "@/components/LocationPageTemplate";

const Marietta = () => {
  return (
    <LocationPageTemplate
      city="Marietta"
      metaTitle="Marietta Home Renovation Contractor | Kitchen, Bathroom, Deck, Basement GA"
      metaDescription="Expert Marietta home renovation services. Kitchen remodeling, bathroom remodel, custom cabinets, basement finishing, deck building, flooring. Licensed contractor since 2000. Call 678-671-6336."
      heroHeadline="Transform Your Marietta Home With Metro Atlanta's Most Trusted Contractor"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, basement finishing, deck building, and flooring installation for Marietta families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "kitchen remodeling marietta ga",
        "bathroom remodel marietta ga",
        "custom cabinets marietta ga",
        "home renovation marietta",
        "flooring installation marietta ga",
        "basement finishing marietta",
        "floor installation marietta ga",
        "deck building marietta",
        "deck construction marietta"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Cabinetry",
        "Basement Finishing",
        "Deck Building & Construction",
        "Flooring Installation",
        "Whole-Home Renovation",
        "Interior & Exterior Painting"
      ]}
      neighborhoods={[
        "Historic Marietta Square",
        "East Cobb",
        "West Cobb",
        "Kennesaw Mountain",
        "Indian Hills",
        "Timber Ridge",
        "Loch Highland",
        "Walton High School Area",
        "Wheeler High School Area"
      ]}
      testimonials={[
        {
          quote: "First Class did an amazing job on our Marietta kitchen. Custom cabinets, beautiful countertops, and finished ahead of schedule. Couldn't be happier!",
          author: "Amanda S.",
          location: "East Cobb"
        },
        {
          quote: "Our basement is now the favorite room in the house. Professional, clean, and excellent craftsmanship. Highly recommend for Marietta homeowners!",
          author: "Tom & Julie B.",
          location: "West Cobb"
        },
        {
          quote: "The new deck they built is stunning. They handled permits, worked efficiently, and the quality is exceptional. Best contractor in Marietta!",
          author: "Greg H.",
          location: "Indian Hills"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Marietta;
