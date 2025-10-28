import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "kitchen", label: "Kitchens" },
    { id: "bathroom", label: "Bathrooms" },
    { id: "basement", label: "Basements" },
    { id: "commercial", label: "Commercial" },
    { id: "exterior", label: "Exterior" },
  ];

  return (
    <>
      <Header />
      <MobileCallBar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                We're on a Roll... Check Out Our Work
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Real projects. Real transformations. Explore our portfolio of completed renovations and build-outs across Atlanta.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="border-b bg-background sticky top-14 md:top-16 z-40">
          <div className="container py-3 md:py-4">
            <div className="relative">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter.id)}
                    className="whitespace-nowrap snap-start flex-shrink-0 min-h-[44px] px-4"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
              {/* Gradient fade indicators */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background via-background to-transparent pointer-events-none md:hidden" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background via-background to-transparent pointer-events-none md:hidden" />
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <GalleryGrid filter={activeFilter} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Ready for Your Before & After?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Let's create the next stunning transformation together. Get your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link to="/residential" className="w-full sm:w-auto">
                  <Button variant="cta" size="lg" className="w-full sm:w-auto h-12">Get Your Free Quote</Button>
                </Link>
                <a href="tel:678-671-6336" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-12">Call 678-671-6336</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
