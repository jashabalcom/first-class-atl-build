import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Wand2, Download, ArrowRight, ArrowLeft, Loader2, ImageIcon, Sparkles, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "./BeforeAfterSlider";

const ROOM_TYPES = [
  { id: "kitchen", label: "Kitchen", icon: "🍳" },
  { id: "bathroom", label: "Bathroom", icon: "🛁" },
  { id: "basement", label: "Basement", icon: "🏠" },
  { id: "living-room", label: "Living Room", icon: "🛋️" },
];

const STYLE_OPTIONS: Record<string, { id: string; label: string; description: string }[]> = {
  kitchen: [
    { id: "modern", label: "Modern", description: "Clean lines, white cabinets, waterfall counters" },
    { id: "transitional", label: "Transitional", description: "Classic meets contemporary" },
    { id: "farmhouse", label: "Farmhouse", description: "Shaker cabinets, apron sink, wood accents" },
    { id: "contemporary", label: "Contemporary", description: "Bold colors, unique backsplash, mixed metals" },
  ],
  bathroom: [
    { id: "spa-like", label: "Spa-Like", description: "Natural materials, soaking tub, serene" },
    { id: "modern-minimalist", label: "Modern Minimalist", description: "Floating vanity, frameless glass" },
    { id: "traditional", label: "Traditional", description: "Classic fixtures, tile patterns" },
    { id: "luxury", label: "Luxury", description: "Marble, gold accents, statement lighting" },
  ],
  basement: [
    { id: "entertainment", label: "Entertainment Room", description: "Wet bar, theater seating" },
    { id: "home-office", label: "Home Office Suite", description: "Built-in desks, professional space" },
    { id: "guest-suite", label: "Guest Suite", description: "Bedroom, bathroom combo" },
    { id: "recreation", label: "Recreation Room", description: "Open layout, game area" },
  ],
  "living-room": [
    { id: "modern", label: "Modern", description: "Clean lines, minimalist, airy" },
    { id: "cozy", label: "Cozy", description: "Warm tones, plush textures, fireplace" },
    { id: "mid-century", label: "Mid-Century", description: "Iconic furniture, organic shapes" },
    { id: "contemporary", label: "Contemporary", description: "Statement pieces, bold artwork" },
  ],
};

interface RoomVisualizerToolProps {
  onComplete?: () => void;
}

const RoomVisualizerTool = ({ onComplete }: RoomVisualizerToolProps) => {
  const [step, setStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedRoomType, setSelectedRoomType] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Image must be less than 10MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string);
      setStep(2);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string);
      setStep(2);
    };
    reader.readAsDataURL(file);
  }, []);

  const generateVisualization = async () => {
    if (!uploadedImage || !selectedRoomType || !selectedStyle) {
      toast.error("Please complete all steps first");
      return;
    }

    setIsGenerating(true);
    setStep(4);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/room-visualizer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            imageBase64: uploadedImage,
            roomType: selectedRoomType,
            style: selectedStyle,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate visualization");
      }

      if (data.generatedImage) {
        setGeneratedImage(data.generatedImage);
        toast.success("Your room visualization is ready!");
        onComplete?.();
      } else {
        throw new Error("No image was generated");
      }
    } catch (error) {
      console.error("Visualization error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to generate visualization");
      setStep(3);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `room-visualization-${selectedRoomType}-${selectedStyle}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Image downloaded!");
  };

  const resetTool = () => {
    setStep(1);
    setUploadedImage(null);
    setSelectedRoomType("");
    setSelectedStyle("");
    setGeneratedImage(null);
  };

  const currentStyles = selectedRoomType ? STYLE_OPTIONS[selectedRoomType] : [];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                step >= s
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {s}
            </div>
            {s < 4 && (
              <div
                className={`w-12 h-1 mx-1 transition-all ${
                  step > s ? "bg-accent" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Upload Photo */}
      {step === 1 && (
        <Card className="border-2 border-dashed border-muted-foreground/30 hover:border-accent/50 transition-colors">
          <CardContent className="p-8 md:p-12">
            <div
              className="flex flex-col items-center justify-center text-center cursor-pointer"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Upload className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-2">Upload Your Room Photo</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Take a photo of your current room and see what it could look like after a professional remodel
              </p>
              <Button variant="cta" size="lg" className="gap-2">
                <ImageIcon className="w-5 h-5" />
                Choose Photo
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                or drag and drop an image here
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Select Room Type */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-semibold mb-2">What type of room is this?</h3>
            <p className="text-muted-foreground">Select the room type to get the best design options</p>
          </div>

          {uploadedImage && (
            <div className="max-w-md mx-auto mb-8">
              <img
                src={uploadedImage}
                alt="Uploaded room"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ROOM_TYPES.map((room) => (
              <Card
                key={room.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedRoomType === room.id
                    ? "ring-2 ring-accent bg-accent/5"
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedRoomType(room.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{room.icon}</div>
                  <p className="font-semibold">{room.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={() => setStep(1)} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              variant="cta"
              disabled={!selectedRoomType}
              onClick={() => setStep(3)}
              className="gap-2"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Select Style */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-semibold mb-2">Choose Your Dream Style</h3>
            <p className="text-muted-foreground">Select the design aesthetic you'd love to see</p>
          </div>

          <RadioGroup
            value={selectedStyle}
            onValueChange={setSelectedStyle}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {currentStyles.map((style) => (
              <Label
                key={style.id}
                htmlFor={style.id}
                className={`cursor-pointer rounded-lg border-2 p-6 transition-all hover:shadow-lg ${
                  selectedStyle === style.id
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <RadioGroupItem value={style.id} id={style.id} className="mt-1" />
                  <div>
                    <p className="font-semibold text-lg">{style.label}</p>
                    <p className="text-muted-foreground text-sm">{style.description}</p>
                  </div>
                </div>
              </Label>
            ))}
          </RadioGroup>

          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={() => setStep(2)} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              variant="cta"
              disabled={!selectedStyle}
              onClick={generateVisualization}
              className="gap-2"
            >
              <Wand2 className="w-4 h-4" />
              Generate Visualization
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 && (
        <div className="space-y-8">
          {isGenerating ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Sparkles className="w-12 h-12 text-accent animate-spin" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-2">Creating Your Vision...</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Our AI is transforming your room into your dream {selectedRoomType.replace('-', ' ')}. This may take 15-30 seconds.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-accent">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generating visualization...</span>
              </div>
            </div>
          ) : generatedImage ? (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-playfair font-semibold mb-2">Your Room Transformation</h3>
                <p className="text-muted-foreground">
                  Drag the slider to compare before and after
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl">
                <BeforeAfterSlider
                  beforeImage={uploadedImage!}
                  afterImage={generatedImage}
                  alt={`${selectedRoomType} ${selectedStyle} visualization`}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button variant="outline" onClick={downloadImage} className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Image
                </Button>
                <Button variant="outline" onClick={resetTool} className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Try Another Room
                </Button>
                <Link to="/contact">
                  <Button variant="cta" className="gap-2 w-full sm:w-auto">
                    Get a Real Quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <Card className="bg-accent/5 border-accent/20 mt-8">
                <CardContent className="p-6 text-center">
                  <h4 className="font-playfair text-xl font-semibold mb-2">Love This Vision?</h4>
                  <p className="text-muted-foreground mb-4">
                    Let's make it real! Schedule a free consultation and get a detailed quote for your remodel.
                  </p>
                  <Link to="/book">
                    <Button variant="cta" size="lg">
                      Book Free Consultation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default RoomVisualizerTool;
