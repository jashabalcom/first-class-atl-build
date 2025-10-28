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
      <section className="py-16 md:py-24 bg-[#FDFBF7]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-normal mb-6 text-foreground">
              Design Journal & Expert Guides
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Architectural insights and renovation wisdom from Atlanta's premier builders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="group">
                <span className="relative">
                  Explore All Articles
                  <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 transition-transform group-hover:scale-x-100" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default FeaturedBlogSection;
