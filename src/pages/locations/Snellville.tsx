import LocationPageTemplate from "@/components/LocationPageTemplate";

const Snellville = () => {
  return (
    <LocationPageTemplate
      city="Snellville"
      metaTitle="Snellville Deck Builder & Home Renovation Contractor GA"
      metaDescription="Expert Snellville deck installer and home renovation services. Custom deck building and outdoor living spaces. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Snellville's Trusted Deck Builder & Home Renovation Expert"
      heroSubtitle="Premium custom deck building, outdoor living spaces, and home renovation services for Snellville families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "deck installer snellville"
      ]}
      services={[
        "Custom Deck Building",
        "Outdoor Living Spaces",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Whole-Home Renovation",
        "Flooring Installation",
        "Interior & Exterior Painting",
        "Basement Finishing"
      ]}
      neighborhoods={[
        "Downtown Snellville",
        "Stone Mountain Area",
        "Grayson",
        "South Snellville",
        "Centerville Highway Area",
        "Lenora Church Road",
        "Highway 78 Corridor",
        "Five Forks Area",
        "Scenic Highway"
      ]}
      testimonials={[
        {
          quote: "First Class built us an incredible deck that's perfect for family cookouts. Quality craftsmanship and professional service!",
          author: "Jennifer H.",
          location: "Downtown Snellville"
        },
        {
          quote: "Our outdoor living space is now our favorite part of the house. They understood our vision and delivered beyond expectations!",
          author: "Mark & Lisa T.",
          location: "Grayson"
        },
        {
          quote: "Best deck builder in Snellville. Fair pricing, excellent communication, and beautiful results. Highly recommend!",
          author: "Robert M.",
          location: "Five Forks Area"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Snellville;
