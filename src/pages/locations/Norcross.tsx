import LocationPageTemplate from "@/components/LocationPageTemplate";

const Norcross = () => {
  return (
    <LocationPageTemplate
      city="Norcross"
      metaTitle="Norcross Home Renovation Contractor | Kitchen, Bathroom Remodel GA"
      metaDescription="Expert Norcross home renovation services. Kitchen remodel, bathroom remodel, home renovation. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Expert Home Renovation Services for Norcross Homeowners"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, and home renovation services for Norcross families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "bathroom remodel norcross",
        "home renovation company norcross",
        "kitchen remodel norcross"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Home Renovation",
        "Flooring Installation",
        "Interior & Exterior Painting",
        "Custom Carpentry",
        "Basement Finishing",
        "Deck Building"
      ]}
      neighborhoods={[
        "Historic Norcross",
        "Peachtree Corners",
        "Technology Park",
        "Holcomb Bridge Area",
        "Jimmy Carter Boulevard",
        "Beaver Ruin Area",
        "Brook Hollow",
        "Amberfield",
        "Wyngate"
      ]}
      testimonials={[
        {
          quote: "Our Norcross kitchen remodel is beautiful. First Class delivered quality work on time and on budget. Very professional team!",
          author: "Helen P.",
          location: "Historic Norcross"
        },
        {
          quote: "They transformed our outdated bathroom into a spa-like retreat. Excellent craftsmanship and attention to detail!",
          author: "John & Mary S.",
          location: "Peachtree Corners"
        },
        {
          quote: "Best home renovation company in Norcross. They handled our whole-home update seamlessly. Highly recommend!",
          author: "David L.",
          location: "Technology Park"
        }
      ]}
      heroImage="bathroom"
    />
  );
};

export default Norcross;
