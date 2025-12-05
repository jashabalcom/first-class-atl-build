import LocationPageTemplate from "@/components/LocationPageTemplate";

const PowderSprings = () => {
  return (
    <LocationPageTemplate
      city="Powder Springs"
      metaTitle="Powder Springs Deck Builder & Home Renovation Contractor GA"
      metaDescription="Expert Powder Springs deck builder and home renovation services. Custom deck construction. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Powder Springs' Trusted Deck Builder & Home Renovation Expert"
      heroSubtitle="Premium custom deck building and home renovation services for Powder Springs families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "deck builder powder springs ga"
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
        "Powder Springs",
        "Seven Springs",
        "Lost Mountain",
        "Macland Road Area",
        "Brownsville Road",
        "New Macland Road",
        "Austell-Powder Springs Road",
        "Hiram-Lithia Springs Road"
      ]}
      testimonials={[
        {
          quote: "First Class built us a gorgeous composite deck. Perfect for Georgia weather and looks amazing!",
          author: "Amanda K.",
          location: "Powder Springs"
        },
        {
          quote: "Quality deck construction from start to finish. Professional team and excellent communication throughout!",
          author: "David & Sarah M.",
          location: "Lost Mountain"
        },
        {
          quote: "Best deck builder in Powder Springs. Fair pricing, quality materials, and beautiful results!",
          author: "Michael T.",
          location: "Seven Springs"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default PowderSprings;
