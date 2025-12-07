import LocationPageTemplate from "@/components/LocationPageTemplate";

const Alpharetta = () => {
  return (
    <LocationPageTemplate
      city="Alpharetta"
      metaTitle="Alpharetta Home Renovation Contractor | Kitchen, Bathroom, Deck, Basement GA"
      metaDescription="Alpharetta home renovation contractor. Kitchen remodeling, bathroom remodel, deck builder, basement finishing. Licensed since 2000. 678-671-6336."
      heroHeadline="Your Alpharetta Home Deserves First Class Renovation"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, deck building, basement finishing, and custom cabinetry for Alpharetta families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "kitchen remodeling alpharetta",
        "bathroom remodel alpharetta ga",
        "alpharetta deck builder",
        "home renovations alpharetta",
        "custom cabinets alpharetta",
        "basement finishing alpharetta",
        "painting contractor alpharetta",
        "custom decks alpharetta ga",
        "flooring installers alpharetta",
        "interior painting contractors alpharetta ga",
        "commercial contractors alpharetta"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Deck Building",
        "Basement Finishing",
        "Custom Cabinetry",
        "Interior & Exterior Painting",
        "Flooring Installation",
        "Commercial Build-Outs"
      ]}
      neighborhoods={[
        "Downtown Alpharetta",
        "Windward",
        "Avalon",
        "Crabapple",
        "Milton",
        "Wills Park",
        "Webb Bridge",
        "Haynes Bridge",
        "Cogburn Road"
      ]}
      testimonials={[
        {
          quote: "Our Alpharetta kitchen is absolutely stunning. First Class delivered premium quality on time and on budget. The team was professional from start to finish!",
          author: "Lisa M.",
          location: "Windward"
        },
        {
          quote: "Beautiful custom deck overlooking our backyard. They handled everything from permits to final inspection. Highly recommend for Alpharetta homes!",
          author: "Mark & Susan D.",
          location: "Crabapple"
        },
        {
          quote: "Best basement finishing contractor in Alpharetta. Our kids now have the perfect hangout space. Professional, clean, and excellent communication!",
          author: "Brian T.",
          location: "Downtown Alpharetta"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Alpharetta;
