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
    <div className="min-h-screen pb-24 md:pb-0">
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

      {/* Hero Section with Featured Post */}
      {featuredPost && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container max-w-6xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Construction Insights & Expert Guides
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Practical advice, cost breakdowns, and design inspiration from Atlanta's
                  licensed construction professionals
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-video md:aspect-auto md:h-full">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-accent font-semibold text-sm uppercase tracking-wide">
                    Featured Article
                  </span>
                  <h2 className="text-3xl font-bold mt-2 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="text-accent font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    Read Full Article →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <AnimatedSection delay={200}>
        <section className="py-8 border-b bg-background sticky top-16 z-40">
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
        <section className="py-16 bg-background">
          <div className="container max-w-6xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">
                {selectedCategory ? `${selectedCategory} Articles` : "All Articles"}
              </h2>
              <p className="text-muted-foreground">
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
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get expert guidance and a detailed estimate from Atlanta's trusted construction team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:678-671-6336">
              <button className="px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-colors">
                Call 678-671-6336
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-3 border-2 border-background text-background rounded-lg font-semibold hover:bg-background hover:text-foreground transition-colors">
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
