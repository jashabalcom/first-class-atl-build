import LocationPageTemplate from "@/components/LocationPageTemplate";

const Decatur = () => {
  return (
    <LocationPageTemplate
      city="Decatur"
      metaTitle="Decatur Home Renovation Contractor | Kitchen, Bathroom, Deck Builders GA"
      metaDescription="Decatur home renovation contractor. Kitchen remodel, bathroom renovation, deck builders, flooring, painting. Licensed since 2000. 678-671-6336."
      heroHeadline="Your Decatur Home Deserves Expert Renovation—Done Right, On Time"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, deck building, and painting services for Decatur families. Licensed, bonded, and DBE/MBE certified with 20+ years serving Metro Atlanta."
      primaryKeywords={[
        "painting decatur ga",
        "deck builders in decatur ga",
        "decatur bathroom renovation contractor",
        "decatur residential home renovation",
        "home renovation decatur ga",
        "kitchen remodel decatur ga",
        "flooring installation decatur ga"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Deck Building",
        "Interior & Exterior Painting",
        "Flooring Installation",
        "Home Renovation",
        "Custom Carpentry",
        "Basement Finishing"
      ]}
      neighborhoods={[
        "Downtown Decatur",
        "Oakhurst",
        "Winnona Park",
        "Glennwood Estates",
        "Great Lakes",
        "Medlock Park",
        "Forrest Hills",
        "Lenox Place",
        "MAK Historic District"
      ]}
      testimonials={[
        {
          quote: "Our Decatur bungalow kitchen is now the heart of our home. First Class understood our vision and executed it perfectly. Amazing transformation!",
          author: "Michelle P.",
          location: "Downtown Decatur"
        },
        {
          quote: "Professional painting job inside and out. They prepped meticulously and the finish is flawless. Our Decatur home looks brand new!",
          author: "James & Linda W.",
          location: "Oakhurst"
        },
        {
          quote: "The deck they built is exactly what we wanted—beautiful craftsmanship and perfect for entertaining. Highly recommend for Decatur homeowners!",
          author: "Chris T.",
          location: "Winnona Park"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Decatur;
