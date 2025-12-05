import LocationPageTemplate from "@/components/LocationPageTemplate";

const Midtown = () => {
  return (
    <LocationPageTemplate
      city="Midtown"
      metaTitle="Midtown Atlanta Renovation Contractor | Kitchen, Bathroom, Deck GA"
      metaDescription="Expert Midtown Atlanta renovation services. Kitchen remodeling, bathroom renovation, custom cabinetry, deck builder. Licensed contractor since 2000. Call 678-671-6336."
      heroHeadline="Midtown Atlanta's Premier Renovation Experts—Urban Living Perfected"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, custom cabinetry, and deck building for Midtown's sophisticated homeowners. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "midtown kitchen remodel",
        "midtown cabinetry",
        "midtown renovations",
        "midtown bathroom renovation",
        "kitchen remodeling midtown",
        "bathroom remodeling midtown",
        "deck builder midtown",
        "home renovation contractor midtown atlanta"
      ]}
      services={[
        "Kitchen Remodeling",
        "Custom Cabinetry",
        "Bathroom Renovation",
        "Custom Deck Building",
        "Condo Renovations",
        "High-Rise Remodeling",
        "Whole-Home Renovation",
        "Interior Painting"
      ]}
      neighborhoods={[
        "Ansley Park",
        "Piedmont Heights",
        "Midtown North",
        "Midtown South",
        "Home Park",
        "Atlantic Station",
        "West Midtown",
        "Underwood Hills",
        "Berkeley Park"
      ]}
      testimonials={[
        {
          quote: "Living in a Midtown high-rise, I was worried about logistics. First Class handled everything perfectly—coordinated with building management and delivered a stunning modern kitchen.",
          author: "Jennifer M.",
          location: "Viewpoint Midtown"
        },
        {
          quote: "Our custom cabinetry is exceptional. They designed storage solutions perfect for our Midtown condo. Beautiful work and professional team!",
          author: "David & Sarah L.",
          location: "Ansley Park"
        },
        {
          quote: "Best bathroom renovation contractor in Midtown. Fast, professional, and zero drama. The result is a sleek, spa-like space perfect for urban living.",
          author: "Michael T.",
          location: "Atlantic Station"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Midtown;
