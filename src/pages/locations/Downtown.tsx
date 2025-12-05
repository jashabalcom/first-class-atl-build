import LocationPageTemplate from "@/components/LocationPageTemplate";

const Downtown = () => {
  return (
    <LocationPageTemplate
      city="Downtown Atlanta"
      metaTitle="Downtown Atlanta Renovation Contractor | Kitchen, Bathroom Remodel GA"
      metaDescription="Expert Downtown Atlanta home renovation services. Kitchen renovation, bathroom remodel for condos and lofts. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Downtown Atlanta Kitchen & Bathroom Renovation Specialists"
      heroSubtitle="Premium kitchen renovations and bathroom remodeling for Downtown Atlanta condos, lofts, and residences. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "kitchen renovation downtown",
        "bathroom remodel in downtown"
      ]}
      services={[
        "Kitchen Renovation",
        "Bathroom Remodeling",
        "Condo Renovations",
        "Loft Renovations",
        "Custom Cabinetry",
        "Flooring Installation",
        "Interior Painting",
        "Custom Carpentry"
      ]}
      neighborhoods={[
        "Downtown Atlanta",
        "Centennial Park",
        "Sweet Auburn",
        "Fairlie-Poplar",
        "South Downtown",
        "Castleberry Hill",
        "Five Points",
        "Georgia State Area",
        "Peachtree Center"
      ]}
      testimonials={[
        {
          quote: "First Class transformed our Downtown condo kitchen. They navigated building requirements seamlessly and delivered stunning results!",
          author: "Michelle P.",
          location: "Centennial Park"
        },
        {
          quote: "Our loft bathroom is now magazine-worthy. Professional team, quality materials, and excellent craftsmanship!",
          author: "Brian & Lisa S.",
          location: "Castleberry Hill"
        },
        {
          quote: "Best renovation contractor for Downtown Atlanta condos. They understood urban living and delivered a beautiful kitchen!",
          author: "David R.",
          location: "Five Points"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Downtown;
