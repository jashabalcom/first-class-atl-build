import { Link } from "react-router-dom";
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: number;
  featuredImage: string;
  featured?: boolean;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  category,
  publishDate,
  readTime,
  featuredImage,
  featured,
}: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group bg-card border-[hsl(var(--editorial-border))]">
      <Link to={`/blog/${slug}`}>
        <div className="relative aspect-[3/2] md:aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={featuredImage}
            alt={title}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {featured && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-inter text-xs tracking-wider">
              Featured
            </Badge>
          )}
        </div>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 font-inter text-xs uppercase tracking-wider text-muted-foreground mb-3">
            <span className="text-accent">{category}</span>
            <span className="text-[hsl(var(--editorial-border))]">•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime} min
            </div>
          </div>
          <h3 className="font-playfair text-2xl font-bold group-hover:text-accent transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="font-cormorant text-base text-muted-foreground line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <span className="font-inter text-sm uppercase tracking-wider text-accent group-hover:gap-2 inline-flex items-center gap-1 transition-all">
            Read Article
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;
