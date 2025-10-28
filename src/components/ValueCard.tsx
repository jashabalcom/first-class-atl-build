import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => {
  return (
    <div className="group flex items-start gap-4 p-6 rounded-lg bg-card border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
        <Icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:rotate-6" />
      </div>
      <div>
        <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
