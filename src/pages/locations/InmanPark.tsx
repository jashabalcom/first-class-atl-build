import LocationPageTemplate from "@/components/LocationPageTemplate";

const InmanPark = () => {
  return (
    <LocationPageTemplate
      city="Inman Park"
      metaTitle="Inman Park Home Renovation Contractor | Deck Builder, Kitchen Remodel GA"
      metaDescription="Inman Park renovation contractor. Deck builder, kitchen remodel for historic Victorian homes. Licensed since 2000. 678-671-6336."
      heroHeadline="Inman Park's Premier Deck Builder & Kitchen Remodeling Expert"
      heroSubtitle="Premium deck building and kitchen remodeling for Inman Park's beautiful Victorian and historic homes. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "deck builder in inman park",
        "kitchen remodel in inman park"
      ]}
      services={[
        "Custom Deck Building",
        "Kitchen Remodeling",
        "Historic Home Renovation",
        "Bathroom Renovation",
        "Home Renovation",
        "Custom Carpentry",
        "Flooring Installation",
        "Interior Painting"
      ]}
      neighborhoods={[
        "Inman Park",
        "Old Fourth Ward",
        "Reynoldstown",
        "Cabbagetown",
        "Little Five Points",
        "Poncey-Highland",
        "Candler Park",
        "Sweet Auburn"
      ]}
      testimonials={[
        {
          quote: "First Class built us a deck that complements our Victorian home perfectly. They understood the historic aesthetic and delivered beautifully!",
          author: "Catherine M.",
          location: "Inman Park"
        },
        {
          quote: "Our Inman Park kitchen is now the heart of our home. Modern functionality with period-appropriate details. Stunning work!",
          author: "Steven & Laura P.",
          location: "Inman Park"
        },
        {
          quote: "Best deck builder for historic Atlanta homes. Professional, knowledgeable, and the craftsmanship is exceptional!",
          author: "Thomas R.",
          location: "Old Fourth Ward"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default InmanPark;
