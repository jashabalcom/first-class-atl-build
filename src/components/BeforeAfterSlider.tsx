import { useState, useRef, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, alt = "Before and after comparison" }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setHasInteracted(true);
    calculatePosition(e.clientX);
  }, [calculatePosition]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    calculatePosition(e.clientX);
  }, [isDragging, calculatePosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    setHasInteracted(true);
    calculatePosition(e.touches[0].clientX);
  }, [calculatePosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    calculatePosition(e.touches[0].clientX);
  }, [isDragging, calculatePosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-xl select-none ${isDragging ? 'cursor-ew-resize' : 'cursor-ew-resize'}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* After Image (bottom layer) */}
      <img
        src={afterImage}
        alt={`${alt} - After`}
        loading="lazy"
        decoding="async"
        width={800}
        height={600}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
      />
      
      {/* Before Image (top layer with clip) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - Before`}
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-150 ${isDragging ? 'scale-110' : 'hover:scale-105'}`}>
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-accent"></div>
            <div className="w-0.5 h-6 bg-accent"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold pointer-events-none">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-accent/90 text-white px-3 py-1 rounded text-sm font-semibold pointer-events-none">
        AFTER
      </div>

      {/* Drag hint - hidden after first interaction */}
      {!hasInteracted && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded text-xs pointer-events-none opacity-70 transition-opacity duration-300">
          Drag to compare
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
