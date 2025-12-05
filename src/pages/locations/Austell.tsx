import LocationPageTemplate from "@/components/LocationPageTemplate";

const Austell = () => {
  return (
    <LocationPageTemplate
      city="Austell"
      metaTitle="Austell Custom Cabinetry & Flooring Installation Contractor GA"
      metaDescription="Expert Austell cabinetry and flooring installation services. Custom cabinets and floor installation. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Austell's Custom Cabinetry & Flooring Installation Experts"
      heroSubtitle="Premium custom cabinetry and flooring installation for Austell families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "k cabinetry austell ga",
        "floor installation company austell"
      ]}
      services={[
        "Custom Cabinetry",
        "Flooring Installation",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Home Renovation",
        "Interior Painting",
        "Custom Carpentry",
        "Deck Building"
      ]}
      neighborhoods={[
        "Austell",
        "Six Flags Area",
        "Mableton",
        "Lithia Springs",
        "Clarkdale",
        "Veterans Memorial Highway",
        "Bankhead Highway",
        "Maxham Road"
      ]}
      testimonials={[
        {
          quote: "First Class built custom cabinets that transformed our kitchen. Quality craftsmanship and beautiful design!",
          author: "Patricia M.",
          location: "Austell"
        },
        {
          quote: "Beautiful hardwood floors throughout our home. Professional installation and the floors look stunning!",
          author: "John & Mary K.",
          location: "Austell"
        },
        {
          quote: "Best flooring company in Austell. Fair pricing, quality work, and completed on schedule!",
          author: "Robert T.",
          location: "Six Flags Area"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Austell;
