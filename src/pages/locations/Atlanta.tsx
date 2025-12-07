import LocationPageTemplate from "@/components/LocationPageTemplate";

const Atlanta = () => {
  return (
    <LocationPageTemplate
      city="Atlanta"
      metaTitle="General Contractor Atlanta GA | Construction Company Since 2000"
      metaDescription="Atlanta general contractor. Residential & commercial construction, kitchen remodeling, bathroom remodel. Licensed since 2000. 678-671-6336."
      heroHeadline="Metro Atlanta's Most Trusted General Contractor—Quality Work, On Time"
      heroSubtitle="Premier general construction services for residential and commercial projects across Metro Atlanta. Licensed, bonded, and DBE/MBE certified construction company with 20+ years building Atlanta."
      primaryKeywords={[
        "general contractor atlanta ga",
        "contractors atlanta ga",
        "construction companies atlanta ga",
        "general construction services",
        "construction firms in atlanta",
        "general contractor in atlanta area",
        "general contractors in atlanta",
        "atlanta home renovation contractor",
        "home renovation contractors atlanta",
        "best home renovation companies in atlanta"
      ]}
      services={[
        "General Construction Services",
        "Home Renovations",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Commercial Build-Outs",
        "Custom Carpentry",
        "Interior & Exterior Painting",
        "Flooring Installation",
        "Deck Building"
      ]}
      neighborhoods={[
        "Buckhead",
        "Midtown",
        "Decatur",
        "Sandy Springs",
        "Brookhaven",
        "Dunwoody",
        "Virginia Highland",
        "Grant Park",
        "Inman Park",
        "Old Fourth Ward",
        "East Atlanta",
        "Kirkwood"
      ]}
      testimonials={[
        {
          quote: "First Class Construction delivered exceptional quality on our home renovation. Professional team, clear communication, and outstanding results. Best general contractor in Atlanta!",
          author: "Michael & Sarah T.",
          location: "Buckhead"
        },
        {
          quote: "They transformed our 1950s Atlanta bungalow into a modern masterpiece. From permits to final inspection, everything was handled professionally. Highly recommend!",
          author: "Jennifer L.",
          location: "Virginia Highland"
        },
        {
          quote: "We've used First Class for both our home renovation and commercial office build-out. Consistent quality and reliability every time. The best construction company in Atlanta.",
          author: "David R.",
          location: "Midtown"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Atlanta;
