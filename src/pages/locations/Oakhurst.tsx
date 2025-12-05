import LocationPageTemplate from "@/components/LocationPageTemplate";

const Oakhurst = () => {
  return (
    <LocationPageTemplate
      city="Oakhurst"
      metaTitle="Oakhurst Home Renovation Contractor | Custom Cabinetry, Kitchen, Bathroom GA"
      metaDescription="Expert Oakhurst home renovation services. Custom cabinetry, kitchen remodel, bathroom remodel. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Oakhurst's Premier Custom Cabinetry & Home Renovation Expert"
      heroSubtitle="Premium custom cabinetry, kitchen remodeling, and bathroom renovations for Oakhurst families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "oakhurst custom cabinetry",
        "kitchen remodel oakhurst",
        "bathroom remodel oakhurst"
      ]}
      services={[
        "Custom Cabinetry",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Whole-Home Renovation",
        "Custom Carpentry",
        "Flooring Installation",
        "Interior Painting",
        "Deck Building"
      ]}
      neighborhoods={[
        "Oakhurst",
        "Decatur",
        "East Lake",
        "Kirkwood",
        "Winnona Park",
        "Glennwood Estates",
        "Medlock Park",
        "Great Lakes"
      ]}
      testimonials={[
        {
          quote: "First Class built custom cabinets that perfectly fit our Oakhurst bungalow. Quality craftsmanship and beautiful design!",
          author: "Michelle P.",
          location: "Oakhurst"
        },
        {
          quote: "Our kitchen remodel transformed our home. They understood Oakhurst style and delivered a beautiful, functional space!",
          author: "Brian & Susan R.",
          location: "Oakhurst"
        },
        {
          quote: "Beautiful bathroom renovation with custom cabinetry. Professional team and exceptional attention to detail!",
          author: "Karen T.",
          location: "Decatur"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Oakhurst;
