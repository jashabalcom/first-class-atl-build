import LocationPageTemplate from "@/components/LocationPageTemplate";

const JohnsCreek = () => {
  return (
    <LocationPageTemplate
      city="Johns Creek"
      metaTitle="Johns Creek Home Renovation Contractor | Kitchen, Bathroom, Basement GA"
      metaDescription="Expert Johns Creek home renovation services. Kitchen remodeling, bathroom remodel, basement finishing, painting contractors. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Elevate Your Johns Creek Home With Premier Renovation Services"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, basement finishing, and painting services for Johns Creek families. Licensed, bonded, and DBE/MBE certified with 20+ years serving North Atlanta."
      primaryKeywords={[
        "kitchen remodeling johns creek",
        "bathroom remodel johns creek ga",
        "painting contractors johns creek",
        "home renovation contractor johns creek",
        "basement finishing johns creek",
        "johns creek painting contractor"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Interior & Exterior Painting",
        "Whole-Home Renovation",
        "Custom Carpentry",
        "Flooring Installation",
        "Home Additions"
      ]}
      neighborhoods={[
        "Country Club of the South",
        "St Ives",
        "River Club",
        "Thornhill",
        "Rivermont",
        "Bridgewater",
        "Shakerag",
        "Morton's Landing",
        "Medlock Bridge"
      ]}
      testimonials={[
        {
          quote: "Our Johns Creek kitchen remodel exceeded expectations. Premium finishes, excellent communication, and completed on schedule. First Class is truly first class!",
          author: "Patricia L.",
          location: "Country Club of the South"
        },
        {
          quote: "They transformed our unfinished basement into a beautiful entertainment space. Professional team and outstanding results. Highly recommend!",
          author: "Michael & Karen R.",
          location: "St Ives"
        },
        {
          quote: "Best painting contractors in Johns Creek. Attention to detail was incredible—every corner perfect. Will definitely use again!",
          author: "Steven M.",
          location: "River Club"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default JohnsCreek;
