import LocationPageTemplate from "@/components/LocationPageTemplate";

const LithiaSprings = () => {
  return (
    <LocationPageTemplate
      city="Lithia Springs"
      metaTitle="Lithia Springs Deck Builder & Home Renovation Contractor GA"
      metaDescription="Expert Lithia Springs deck builder and home renovation services. Custom deck construction. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Lithia Springs' Trusted Deck Builder & Home Renovation Expert"
      heroSubtitle="Premium custom deck building and home renovation services for Lithia Springs families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "deck builder lithia springs ga"
      ]}
      services={[
        "Custom Deck Building",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Home Renovation",
        "Flooring Installation",
        "Interior Painting",
        "Custom Carpentry",
        "Outdoor Living Spaces"
      ]}
      neighborhoods={[
        "Lithia Springs",
        "Douglasville",
        "Austell",
        "Villa Rica Road Area",
        "Lee Road",
        "Thornton Road",
        "Riverside Parkway",
        "Factory Shoals Road"
      ]}
      testimonials={[
        {
          quote: "First Class built us a beautiful deck that's perfect for family gatherings. Quality work and professional team!",
          author: "Sandra H.",
          location: "Lithia Springs"
        },
        {
          quote: "Our new deck is exactly what we envisioned. They handled permits and delivered exceptional results!",
          author: "Kevin & Lisa M.",
          location: "Lithia Springs"
        },
        {
          quote: "Best deck builder in Lithia Springs. Fair pricing, quality materials, and completed on time!",
          author: "James T.",
          location: "Douglasville"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default LithiaSprings;
