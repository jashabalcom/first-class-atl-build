import LocationPageTemplate from "@/components/LocationPageTemplate";

const Smyrna = () => {
  return (
    <LocationPageTemplate
      city="Smyrna"
      metaTitle="Smyrna Home Renovation Contractor | Kitchen, Bathroom, Deck Builder GA"
      metaDescription="Expert Smyrna home renovation services. Kitchen remodeling, bathroom remodel, deck builder, painting contractor, retail build-outs. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Smyrna's Premier Home Renovation & Remodeling Experts"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, deck building, and painting services for Smyrna families. Licensed, bonded, and DBE/MBE certified with 20+ years serving Metro Atlanta."
      primaryKeywords={[
        "smyrna deck builder",
        "kitchen remodeling smyrna",
        "bathroom remodel smyrna",
        "home renovation contractor smyrna",
        "smyrna painting contractor",
        "retail store build outs new smyrna"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Deck Building",
        "Interior & Exterior Painting",
        "Retail Build-Outs",
        "Home Renovation",
        "Flooring Installation",
        "Custom Carpentry"
      ]}
      neighborhoods={[
        "Smyrna Market Village",
        "Vinings",
        "King Springs",
        "Belmont Hills",
        "Oakdale",
        "Covered Bridge",
        "Green Hills",
        "Smyrna Heights",
        "West Village"
      ]}
      testimonials={[
        {
          quote: "First Class built us a gorgeous deck that's perfect for entertaining. Professional team, excellent craftsmanship, and great communication throughout!",
          author: "Rachel P.",
          location: "Smyrna Market Village"
        },
        {
          quote: "Our Smyrna kitchen remodel exceeded expectations. Modern design, quality materials, and completed on schedule. Highly recommend!",
          author: "Kevin & Amy S.",
          location: "King Springs"
        },
        {
          quote: "Best painting contractor in Smyrna. Meticulous prep work and flawless finish. Our home looks amazing inside and out!",
          author: "Daniel M.",
          location: "Belmont Hills"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Smyrna;
