import LocationPageTemplate from "@/components/LocationPageTemplate";

const CandlerPark = () => {
  return (
    <LocationPageTemplate
      city="Candler Park"
      metaTitle="Candler Park Home Renovation Contractor | Kitchen, Bathroom Remodel GA"
      metaDescription="Expert Candler Park home renovation services. Kitchen remodel, bathroom remodel for historic homes. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Candler Park Kitchen & Bathroom Renovation Experts"
      heroSubtitle="Premium kitchen remodeling and bathroom renovations for Candler Park's beautiful historic homes. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "kitchen remodel candler park",
        "bathroom remodel candler park"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Historic Home Renovation",
        "Whole-Home Renovation",
        "Custom Carpentry",
        "Flooring Installation",
        "Interior Painting",
        "Deck Building"
      ]}
      neighborhoods={[
        "Candler Park",
        "Lake Claire",
        "Druid Hills",
        "Little Five Points",
        "Inman Park",
        "Poncey-Highland",
        "Virginia-Highland",
        "Freedom Park Area"
      ]}
      testimonials={[
        {
          quote: "First Class remodeled our Candler Park bungalow kitchen while preserving its character. Beautiful modern updates with vintage charm!",
          author: "Emma T.",
          location: "Candler Park"
        },
        {
          quote: "Our bathroom renovation exceeded expectations. They understood our home's historic details and worked around them beautifully!",
          author: "Jason & Amy K.",
          location: "Candler Park"
        },
        {
          quote: "Best kitchen remodeler for Candler Park homes. Professional, respectful of our historic home, and stunning results!",
          author: "Nicole R.",
          location: "Lake Claire"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default CandlerPark;
