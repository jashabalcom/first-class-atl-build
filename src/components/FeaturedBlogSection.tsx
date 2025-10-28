import { Link } from "react-router-dom";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import AnimatedSection from "@/components/AnimatedSection";

const FeaturedBlogSection = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  if (featuredPosts.length === 0) return null;

  return (
    <AnimatedSection delay={250}>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Insights & Guides
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get valuable tips, cost guides, and design inspiration from Atlanta's construction experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button size="lg" variant="outline">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default FeaturedBlogSection;
