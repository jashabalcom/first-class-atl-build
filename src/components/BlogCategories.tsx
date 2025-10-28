import { Badge } from "@/components/ui/badge";

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const BlogCategories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: BlogCategoriesProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={selectedCategory === null ? "default" : "outline"}
        className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
        onClick={() => onSelectCategory(null)}
      >
        All Posts
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default BlogCategories;
