import LocationPageTemplate from "@/components/LocationPageTemplate";

const Dunwoody = () => {
  return (
    <LocationPageTemplate
      city="Dunwoody"
      metaTitle="Dunwoody Home Renovation Contractor | Kitchen, Bathroom, Basement GA"
      metaDescription="Expert Dunwoody home renovation services. Kitchen remodeling, bathroom remodel, basement finishing, deck building, painting. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Dunwoody's Trusted Home Renovation Experts—Excellence in Every Detail"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, basement finishing, and custom renovations for Dunwoody families. Licensed, bonded, and DBE/MBE certified with 20+ years serving North Atlanta."
      primaryKeywords={[
        "home renovation contractor dunwoody",
        "kitchen remodeling dunwoody ga",
        "bathroom remodel dunwoody",
        "basement finishing dunwoody",
        "deck builder dunwoody",
        "painting contractor dunwoody",
        "flooring installation dunwoody ga",
        "general contractor dunwoody"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Custom Deck Building",
        "Interior & Exterior Painting",
        "Flooring Installation",
        "Home Renovation",
        "Custom Carpentry"
      ]}
      neighborhoods={[
        "Dunwoody Village",
        "Georgetown",
        "Branches",
        "Dunwoody Club Forest",
        "Dunwoody North",
        "Winters Chapel",
        "Perimeter Center",
        "Tilly Mill",
        "Vermack"
      ]}
      testimonials={[
        {
          quote: "First Class did an amazing kitchen remodel for our Dunwoody home. From design to completion, everything was professional and on schedule. The quality exceeded our expectations!",
          author: "Michelle & David K.",
          location: "Georgetown"
        },
        {
          quote: "Our basement is now a beautiful entertainment space thanks to First Class. They handled everything—permits, waterproofing, finishing. Best contractor in Dunwoody!",
          author: "Brian T.",
          location: "Dunwoody Village"
        },
        {
          quote: "Professional painting job inside and out. They prepped meticulously and the finish is flawless. Highly recommend for any Dunwoody renovation project.",
          author: "Carol S.",
          location: "Branches"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Dunwoody;
