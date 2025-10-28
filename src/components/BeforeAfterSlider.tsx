import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, alt = "Before and after comparison" }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState([50]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-xl group">
      {/* After Image (bottom layer) */}
      <img
        src={afterImage}
        alt={`${alt} - After`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before Image (top layer with clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition[0]}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition[0]}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-accent"></div>
            <div className="w-0.5 h-6 bg-accent"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-accent/90 text-white px-3 py-1 rounded text-sm font-semibold">
        AFTER
      </div>

      {/* Slider Control */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 opacity-0 group-hover:opacity-100 transition-opacity">
        <Slider
          value={sliderPosition}
          onValueChange={setSliderPosition}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
