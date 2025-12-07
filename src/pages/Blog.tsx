import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import BlogCard from "@/components/BlogCard";
import BlogCategories from "@/components/BlogCategories";
import { blogPosts as hardcodedPosts, blogCategories } from "@/data/blogPosts";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";

interface DatabasePost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  author: string;
  publish_date: string;
  category: string;
  tags: string[];
  featured_image: string | null;
  read_time: number;
  featured: boolean | null;
  meta_description: string | null;
  status: string;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [dbPosts, setDbPosts] = useState<DatabasePost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("status", "published")
          .order("publish_date", { ascending: false });

        if (error) throw error;
        setDbPosts(data || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Combine database posts with hardcoded posts (DB posts take priority)
  const allPosts = [
    ...dbPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt || "",
      content: post.content,
      author: post.author,
      publishDate: post.publish_date,
      category: post.category,
      tags: post.tags || [],
      featuredImage: post.featured_image || "/assets/kitchen-after.jpg",
      readTime: post.read_time,
      featured: post.featured || false,
      metaDescription: post.meta_description || "",
    })),
    ...hardcodedPosts.filter(
      (hp) => !dbPosts.some((dp) => dp.slug === hp.slug)
    ),
  ];

  const filteredPosts = selectedCategory
    ? allPosts.filter((post) => post.category === selectedCategory)
    : allPosts;

  const featuredPost = allPosts.find((post) => post.featured);

  return (
    <div className="min-h-screen pb-24 md:pb-0 bg-[hsl(var(--editorial-cream))]">
      <Helmet>
        <title>Construction Blog - Expert Tips & Guides | First Class Construction Atlanta</title>
        <meta
          name="description"
          content="Expert construction tips, cost guides & design inspiration from Atlanta's licensed contractors. Kitchen, bathroom & basement insights."
        />
        <meta
          name="keywords"
          content="construction blog, remodeling tips, Atlanta contractors, kitchen remodeling guide, bathroom renovation, basement finishing, commercial renovation"
        />
        <link rel="canonical" href="https://www.fcconstruct.com/blog" />
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
      <section 
        className="py-8 border-b border-[hsl(var(--editorial-border))] bg-card/50 sticky top-16 z-40 animate-fade-in"
        style={{ animationDelay: '200ms', animationFillMode: 'both' }}
      >
        <div className="container max-w-6xl">
          <BlogCategories
            categories={blogCategories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section 
        className="py-16 bg-[hsl(var(--editorial-cream))] animate-fade-in"
        style={{ animationDelay: '300ms', animationFillMode: 'both' }}
      >
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
                <div 
                  key={post.slug} 
                  className="animate-fade-in"
                  style={{ animationDelay: `${400 + index * 50}ms`, animationFillMode: 'both' }}
                >
                  <BlogCard {...post} />
                </div>
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
