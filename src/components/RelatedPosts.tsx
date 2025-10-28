import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface RelatedPostsProps {
  posts: BlogPost[];
  currentSlug: string;
}

const RelatedPosts = ({ posts, currentSlug }: RelatedPostsProps) => {
  const relatedPosts = posts.filter((post) => post.slug !== currentSlug).slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-16 bg-card/30 border-t border-[hsl(var(--editorial-border))]">
      <div className="container max-w-7xl">
        <h2 className="font-playfair text-4xl font-bold mb-12 text-center">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-card border-[hsl(var(--editorial-border))]">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <h3 className="font-playfair text-xl font-bold group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 font-inter text-xs uppercase tracking-wider text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime} min read
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
