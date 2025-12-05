import LocationPageTemplate from "@/components/LocationPageTemplate";

const Brookhaven = () => {
  return (
    <LocationPageTemplate
      city="Brookhaven"
      metaTitle="Brookhaven Home Renovation Contractor | Kitchen, Bathroom, Deck GA"
      metaDescription="Expert Brookhaven home renovation services. Kitchen remodeling, bathroom remodel, deck building, basement finishing, painting. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Transform Your Brookhaven Home With Atlanta's Premier Contractor"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, deck building, and painting services for Brookhaven families. Licensed, bonded, and DBE/MBE certified with 20+ years serving Metro Atlanta."
      primaryKeywords={[
        "home renovation contractor brookhaven",
        "kitchen remodeling brookhaven",
        "bathroom remodel brookhaven ga",
        "deck builder brookhaven",
        "brookhaven painting contractor",
        "basement finishing brookhaven",
        "flooring installation brookhaven",
        "general contractor brookhaven ga"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Deck Building",
        "Basement Finishing",
        "Interior & Exterior Painting",
        "Flooring Installation",
        "Whole-Home Renovation",
        "Custom Carpentry"
      ]}
      neighborhoods={[
        "Historic Brookhaven",
        "Ashford Park",
        "Drew Valley",
        "Lynwood Park",
        "Brookhaven Fields",
        "Brookhaven Heights",
        "Town Brookhaven",
        "MARTA Brookhaven Area",
        "Oglethorpe University Area"
      ]}
      testimonials={[
        {
          quote: "Our Brookhaven kitchen is now the heart of our home. First Class understood the character of our historic Brookhaven home and delivered a beautiful modern update. Outstanding work!",
          author: "Lisa M.",
          location: "Historic Brookhaven"
        },
        {
          quote: "They built a gorgeous custom deck that's perfect for entertaining. Professional from start to finish and completed on schedule. Best contractor in Brookhaven!",
          author: "Tom & Karen S.",
          location: "Ashford Park"
        },
        {
          quote: "First Class transformed our outdated bathroom into a spa-like retreat. Impeccable craftsmanship and great communication throughout the project.",
          author: "Jennifer P.",
          location: "Drew Valley"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Brookhaven;
