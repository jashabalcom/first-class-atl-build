import LocationPageTemplate from "@/components/LocationPageTemplate";

const EastLake = () => {
  return (
    <LocationPageTemplate
      city="East Lake"
      metaTitle="East Lake Home Renovation Contractor | Bathroom, Kitchen, Deck Builder GA"
      metaDescription="Expert East Lake home renovation services. Bathroom remodel, kitchen remodel, deck builder. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Premium Home Renovation Services for East Lake Residents"
      heroSubtitle="Expert bathroom renovations, kitchen remodeling, and deck building for East Lake families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "Bathroom remodel East Lake",
        "Kitchen remodel East Lake",
        "deck builder in east lake"
      ]}
      services={[
        "Bathroom Renovation",
        "Kitchen Remodeling",
        "Custom Deck Building",
        "Whole-Home Renovation",
        "Interior & Exterior Painting",
        "Flooring Installation",
        "Custom Carpentry",
        "Basement Finishing"
      ]}
      neighborhoods={[
        "East Lake",
        "East Lake Golf Club",
        "Kirkwood",
        "Oakhurst",
        "Decatur",
        "Memorial Drive Area",
        "Glenwood Road",
        "Second Avenue Area"
      ]}
      testimonials={[
        {
          quote: "Our East Lake bathroom is now a spa-like retreat. First Class delivered exceptional quality and finished on schedule!",
          author: "Lauren M.",
          location: "East Lake"
        },
        {
          quote: "Beautiful kitchen remodel that transformed our home. Professional team and excellent communication throughout!",
          author: "James & Christine K.",
          location: "East Lake"
        },
        {
          quote: "First Class built us a stunning deck perfect for Atlanta's weather. Quality craftsmanship and fair pricing!",
          author: "Robert S.",
          location: "East Lake Golf Club"
        }
      ]}
      heroImage="bathroom"
    />
  );
};

export default EastLake;
