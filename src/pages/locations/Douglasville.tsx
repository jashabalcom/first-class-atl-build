import LocationPageTemplate from "@/components/LocationPageTemplate";

const Douglasville = () => {
  return (
    <LocationPageTemplate
      city="Douglasville"
      metaTitle="Douglasville Home Renovation Contractor | Kitchen, Bathroom, Deck GA"
      metaDescription="Expert Douglasville home renovation services. Kitchen remodel, bathroom remodel, flooring installation, deck builder, painting contractors. Licensed Atlanta contractor since 2000. Call 678-671-6336."
      heroHeadline="Your Douglasville Home Transformation Starts Here"
      heroSubtitle="Premium kitchen remodeling, bathroom renovations, deck building, flooring installation, and painting services for Douglasville families. Licensed, bonded, and DBE/MBE certified since 2000."
      primaryKeywords={[
        "douglasville painting contractors",
        "kitchen remodel douglasville ga",
        "bathroom remodel douglasville ga",
        "flooring installation douglasville ga",
        "deck builder douglasville"
      ]}
      services={[
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Custom Deck Building",
        "Flooring Installation",
        "Interior & Exterior Painting",
        "Home Renovation",
        "Basement Finishing",
        "Custom Carpentry"
      ]}
      neighborhoods={[
        "Downtown Douglasville",
        "Chapel Hill",
        "Mirror Lake",
        "Stewart Mill",
        "Arbor Station",
        "Villa Rica Road Area",
        "Bright Star Road",
        "Fairburn Road Area",
        "Lee Road"
      ]}
      testimonials={[
        {
          quote: "First Class remodeled our Douglasville kitchen beautifully. Professional, on-time, and the quality is outstanding. Highly recommend!",
          author: "Sandra K.",
          location: "Chapel Hill"
        },
        {
          quote: "Our new deck is perfect for family gatherings. They handled everything from design to completion. Best contractor in Douglasville!",
          author: "Robert & Maria G.",
          location: "Mirror Lake"
        },
        {
          quote: "Excellent painting job inside and out. Fair pricing, professional team, and beautiful results. Will use again!",
          author: "William T.",
          location: "Stewart Mill"
        }
      ]}
      heroImage="kitchen"
    />
  );
};

export default Douglasville;
