import LocationPageTemplate from "@/components/LocationPageTemplate";

const LakeClaire = () => {
  return (
    <LocationPageTemplate
      city="Lake Claire"
      metaTitle="Lake Claire Home Renovation Contractor | Deck, Kitchen, Bathroom GA"
      metaDescription="Expert Lake Claire home renovation services. Deck builder, kitchen remodel, bathroom remodel. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Lake Claire's Trusted Deck Builder & Home Renovation Expert"
      heroSubtitle="Premium deck building, kitchen remodeling, and bathroom renovations for Lake Claire families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "deck builder in lake claire",
        "kitchen remodel in lake claire",
        "bathroom remodel in lake claire"
      ]}
      services={[
        "Custom Deck Building",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Whole-Home Renovation",
        "Custom Carpentry",
        "Flooring Installation",
        "Interior Painting",
        "Outdoor Living Spaces"
      ]}
      neighborhoods={[
        "Lake Claire",
        "Candler Park",
        "Druid Hills",
        "Poncey-Highland",
        "Virginia-Highland",
        "Emory Area",
        "Little Five Points",
        "Freedom Park Area"
      ]}
      testimonials={[
        {
          quote: "First Class built us a beautiful deck surrounded by Lake Claire's trees. Perfect outdoor living space for our family!",
          author: "Rebecca M.",
          location: "Lake Claire"
        },
        {
          quote: "Our Lake Claire kitchen remodel is stunning. They preserved our home's character while adding modern amenities!",
          author: "Daniel & Amy K.",
          location: "Lake Claire"
        },
        {
          quote: "Beautiful bathroom renovation that transformed our morning routine. Professional team and exceptional quality!",
          author: "Jennifer S.",
          location: "Lake Claire"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default LakeClaire;
