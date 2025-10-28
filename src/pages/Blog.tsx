import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import BlogCard from "@/components/BlogCard";
import BlogCategories from "@/components/BlogCategories";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import AnimatedSection from "@/components/AnimatedSection";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-[hsl(var(--editorial-cream))]">
      <Helmet>
        <title>Construction Blog - Expert Tips & Guides | First Class Construction Atlanta</title>
        <meta
          name="description"
          content="Get expert construction advice, remodeling tips, cost guides, and design inspiration from Atlanta's licensed contractors. Kitchen, bathroom, basement, and commercial project insights."
        />
        <meta
          name="keywords"
          content="construction blog, remodeling tips, Atlanta contractors, kitchen remodeling guide, bathroom renovation, basement finishing, commercial renovation"
        />
        <link rel="canonical" href="https://www.firstclassconstructionatlanta.com/blog" />
      </Helmet>

      <Header />

      {/* Hero Section with Featured Post - Magazine Style */}
      {featuredPost && (
        <section className="py-16 md:py-24 bg-[hsl(var(--editorial-cream))]">
          <div className="container max-w-7xl">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-balance">
                  Construction Insights & Expert Guides
                </h1>
                <p className="font-cormorant text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  Practical advice, cost breakdowns, and design inspiration from Atlanta's
                  licensed construction professionals
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="grid md:grid-cols-5 gap-0 bg-card rounded-sm overflow-hidden shadow-2xl border border-[hsl(var(--editorial-border))]">
                <div className="relative md:col-span-3 aspect-[16/10] md:aspect-auto md:h-full overflow-hidden">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="md:col-span-2 p-10 flex flex-col justify-center">
                  <span className="font-inter text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4">
                    Featured Article
                  </span>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="font-cormorant text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="group inline-flex items-center gap-2 font-inter text-sm uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
                  >
                    Read Full Article 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <AnimatedSection delay={200}>
        <section className="py-8 border-b border-[hsl(var(--editorial-border))] bg-card/50 sticky top-16 z-40">
          <div className="container max-w-6xl">
            <BlogCategories
              categories={blogCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Blog Posts Grid */}
      <AnimatedSection delay={300}>
        <section className="py-16 bg-[hsl(var(--editorial-cream))]">
          <div className="container max-w-6xl">
            <div className="mb-12">
              <h2 className="font-playfair text-3xl font-bold">
                {selectedCategory ? `${selectedCategory} Articles` : "All Articles"}
              </h2>
              <p className="font-inter text-sm uppercase tracking-wider text-muted-foreground mt-2">
                {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
              </p>
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <AnimatedSection key={post.slug} delay={index * 50}>
                    <BlogCard {...post} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-16 bg-card border-t border-[hsl(var(--editorial-border))]">
        <div className="container max-w-4xl text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-cormorant text-xl text-muted-foreground mb-8 leading-relaxed">
            Get expert guidance and a detailed estimate from Atlanta's trusted construction team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:678-671-6336">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-sm font-inter tracking-wide hover:bg-accent/90 transition-colors">
                Call 678-671-6336
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-3 border-2 border-accent text-accent rounded-sm font-inter tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors">
                Request Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default Blog;
