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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <Link to={`/blog/${slug}`}>
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Badge variant="secondary">{category}</Badge>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <time dateTime={publishDate}>{formatDate(publishDate)}</time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime} min read
            </div>
          </div>
          <h3 className="text-xl font-bold group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="px-0 gap-1">
            Read More →
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;
