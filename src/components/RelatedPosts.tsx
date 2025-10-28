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
    <section className="py-12 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <h3 className="font-bold group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
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
