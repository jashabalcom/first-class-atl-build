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
        <section className="relative py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                We're on a Roll... Check Out Our Work
              </h1>
              <p className="text-xl text-muted-foreground">
                Real projects. Real transformations. Explore our portfolio of completed renovations and build-outs across Atlanta.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="border-b bg-background sticky top-16 z-40">
          <div className="container py-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="whitespace-nowrap"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container">
            <GalleryGrid filter={activeFilter} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready for Your Before & After?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's create the next stunning transformation together. Get your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/residential">
                  <Button variant="cta" size="lg">Get Your Free Quote</Button>
                </Link>
                <a href="tel:678-671-6336">
                  <Button variant="outline" size="lg">Call 678-671-6336</Button>
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
