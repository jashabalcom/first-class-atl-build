import LocationPageTemplate from "@/components/LocationPageTemplate";

const Mableton = () => {
  return (
    <LocationPageTemplate
      city="Mableton"
      metaTitle="Mableton Deck Builder & Bathroom Remodeling Contractor GA"
      metaDescription="Mableton deck builder and bathroom remodeling. Custom decks and bath renovations. Licensed Atlanta contractor since 2000. 678-671-6336."
      heroHeadline="Mableton's Premier Deck Builder & Bathroom Renovation Expert"
      heroSubtitle="Premium custom deck building and bathroom remodeling for Mableton families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "deck builder mableton ga",
        "bathroom remodeling contractor mableton"
      ]}
      services={[
        "Custom Deck Building",
        "Bathroom Renovation",
        "Kitchen Remodeling",
        "Home Renovation",
        "Flooring Installation",
        "Interior Painting",
        "Custom Carpentry",
        "Outdoor Living Spaces"
      ]}
      neighborhoods={[
        "Mableton",
        "Austell",
        "Powder Springs",
        "Six Flags Area",
        "Riverside",
        "Floyd Road Area",
        "Nickajack Road",
        "Veterans Memorial Highway"
      ]}
      testimonials={[
        {
          quote: "First Class built us an amazing deck for entertaining. Quality materials and excellent craftsmanship. Highly recommend!",
          author: "Jennifer H.",
          location: "Mableton"
        },
        {
          quote: "Our bathroom renovation is beautiful. Professional team, fair pricing, and they finished on schedule!",
          author: "Marcus & Lisa T.",
          location: "Mableton"
        },
        {
          quote: "Best deck builder in Mableton. They handled everything from design to completion. Our backyard is transformed!",
          author: "Robert S.",
          location: "Riverside"
        }
      ]}
      heroImage="bathroom"
    />
  );
};

export default Mableton;
