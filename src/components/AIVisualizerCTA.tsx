import { Link } from "react-router-dom";
import { Wand2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIVisualizerCTAProps {
  variant?: "compact" | "gallery";
}

const AIVisualizerCTA = ({ variant = "compact" }: AIVisualizerCTAProps) => {
  if (variant === "gallery") {
    return (
      <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border border-accent/20 rounded-xl p-6 md:p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
            <Wand2 className="w-7 h-7 text-accent" />
          </div>
        </div>
        <h3 className="font-playfair text-xl md:text-2xl font-bold mb-2">
          Visualize Your Own Space
        </h3>
        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
          Like what you see? Upload a photo of your room and see what your remodel could look like with AI.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Free • Instant Results • No Sign-Up Required</span>
        </div>
        <Link to="/room-visualizer">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Wand2 className="w-4 h-4 mr-2" />
            Try AI Room Visualizer
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border border-accent/20 rounded-lg p-4 md:p-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Wand2 className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="font-medium text-foreground">
              See your remodel before we start!
            </p>
            <p className="text-sm text-muted-foreground">
              Try our free AI Room Visualizer
            </p>
          </div>
        </div>
        <Link to="/room-visualizer">
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
            <Sparkles className="w-4 h-4 mr-1" />
            Try Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AIVisualizerCTA;
