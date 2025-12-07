import LocationPageTemplate from "@/components/LocationPageTemplate";

const AvondaleEstates = () => {
  return (
    <LocationPageTemplate
      city="Avondale Estates"
      metaTitle="Avondale Estates Home Renovation Contractor | Kitchen, Bathroom GA"
      metaDescription="Avondale Estates renovation contractor. Kitchen remodeling, bathroom remodel, residential renovation. Licensed since 2000. 678-671-6336."
      heroHeadline="Avondale Estates' Trusted Home Renovation & Remodeling Expert"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, and home renovation for Avondale Estates families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "avondale estates home renovation contractor",
        "bathroom remodel avondale estates",
        "avondale estates residential home renovation",
        "avondale estates kitchen remodeling contractor"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Home Renovation",
        "Custom Carpentry",
        "Flooring Installation",
        "Interior Painting",
        "Deck Building",
        "Basement Finishing"
      ]}
      neighborhoods={[
        "Avondale Estates",
        "Downtown Avondale",
        "North Avondale",
        "South Avondale",
        "Decatur",
        "Scottdale",
        "Clarkston",
        "Pine Lake"
      ]}
      testimonials={[
        {
          quote: "First Class transformed our Avondale Estates Tudor kitchen beautifully. They respected our home's historic character!",
          author: "Elizabeth M.",
          location: "Downtown Avondale"
        },
        {
          quote: "Our bathroom remodel is stunning. Professional team, quality materials, and completed on schedule. Highly recommend!",
          author: "Robert & Jane K.",
          location: "Avondale Estates"
        },
        {
          quote: "Best home renovation contractor for Avondale Estates. They understood our vision and delivered exceptional results!",
          author: "William T.",
          location: "North Avondale"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default AvondaleEstates;
