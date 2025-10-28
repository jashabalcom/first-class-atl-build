import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

const BlogTeaser = () => {
  const featuredPost = blogPosts.find((post) => post.featured);

  if (!featuredPost) return null;

  return (
    <section className="py-8 bg-[#FDFBF7] border-t border-b border-accent/10">
      <div className="container">
        <Link 
          to={`/blog/${featuredPost.slug}`}
          className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 group"
        >
          {/* Thumbnail */}
          <div className="flex-shrink-0 w-full md:w-32 h-32 overflow-hidden rounded-lg">
            <img
              src={featuredPost.featuredImage}
              alt={featuredPost.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-serif text-xl md:text-2xl text-accent tracking-wide">
                From Our Design Studio
              </span>
              <span className="text-xs text-muted-foreground px-2 py-1 bg-accent/5 rounded-full">
                {featuredPost.category}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {featuredPost.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-1 md:line-clamp-2">
              {featuredPost.excerpt}
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0 flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
            <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
              Read More
            </span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BlogTeaser;