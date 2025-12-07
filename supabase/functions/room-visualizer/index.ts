import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ROOM_STYLE_PROMPTS: Record<string, Record<string, string>> = {
  kitchen: {
    modern: "Transform this kitchen into a modern remodel with clean white shaker cabinets, waterfall quartz countertops, stainless steel appliances, sleek pendant lighting, and a minimalist backsplash. Keep the room layout but update all finishes to a contemporary aesthetic with crisp lines.",
    transitional: "Redesign this kitchen in a transitional style blending traditional warmth with modern convenience. Add cream-colored cabinets with brass hardware, marble countertops, a subway tile backsplash, and elegant pendant lights. Balance classic details with contemporary functionality.",
    farmhouse: "Remodel this kitchen in modern farmhouse style with white shaker cabinets, a large apron-front sink, butcher block countertops, open shelving, rustic pendant lights, and shiplap accent walls. Add warm wood tones and vintage-inspired fixtures.",
    contemporary: "Transform this kitchen with bold contemporary design featuring two-tone cabinets, a dramatic waterfall island, statement lighting, geometric backsplash tiles, mixed metals, and high-end integrated appliances. Make it look like a designer showcase.",
  },
  bathroom: {
    "spa-like": "Transform this bathroom into a luxurious spa retreat with natural stone tiles, a freestanding soaking tub, frameless glass shower, floating wood vanity, plants, warm ambient lighting, and calming neutral colors. Create a serene, hotel-like atmosphere.",
    "modern-minimalist": "Redesign this bathroom in modern minimalist style with a floating vanity, frameless glass shower enclosure, large format wall tiles, LED mirror, wall-mounted fixtures, and clean geometric lines. Keep colors neutral with white, gray, and black accents.",
    traditional: "Remodel this bathroom in elegant traditional style with a classic pedestal sink or furniture-style vanity, subway tile wainscoting, clawfoot tub, chrome fixtures, decorative mirror frames, and timeless hex floor tiles. Add crown molding and warm lighting.",
    luxury: "Transform this bathroom into a luxury retreat with marble walls and floors, gold or brass fixtures, a statement chandelier, freestanding tub, spacious glass shower with rainfall head, high-end vanity with dual sinks, and elegant accessories.",
  },
  basement: {
    entertainment: "Convert this basement into an entertainment space with a wet bar, theater-style seating area, large TV wall, accent lighting, modern flooring, and a lounge area. Add built-in cabinetry and a sophisticated color scheme.",
    "home-office": "Transform this basement into a professional home office suite with built-in desks, custom shelving, good lighting, modern flooring, a meeting area, and organized storage. Create a productive yet comfortable work environment.",
    "guest-suite": "Redesign this basement as a comfortable guest suite with a cozy bedroom area, en-suite bathroom, sitting area, adequate storage, warm lighting, and stylish finishes. Make it feel like a boutique hotel room.",
    recreation: "Convert this basement into a recreation room with open layout, game area, comfortable seating, durable flooring, accent walls, good lighting, and storage for games and equipment. Make it fun and functional for the whole family.",
  },
  "living-room": {
    modern: "Transform this living room with modern design featuring clean-lined furniture, a minimalist color palette, large windows, contemporary art, sleek lighting fixtures, and luxurious textures. Create an open, airy feel with sophisticated style.",
    cozy: "Redesign this living room as a cozy retreat with plush seating, warm earth tones, layered textiles, a fireplace focal point, ambient lighting, built-in shelving, and inviting décor. Make it feel warm and welcoming.",
    "mid-century": "Remodel this living room in mid-century modern style with iconic furniture pieces, organic shapes, walnut wood accents, statement lighting, bold geometric patterns, and a curated collection of art and accessories.",
    contemporary: "Transform this living room with contemporary design featuring statement furniture, bold artwork, mixed textures, designer lighting, neutral base colors with accent pops, and sophisticated accessories. Create a magazine-worthy space.",
  },
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageBase64, roomType, style } = await req.json();

    if (!imageBase64 || !roomType || !style) {
      console.error("Missing required fields:", { hasImage: !!imageBase64, roomType, style });
      return new Response(
        JSON.stringify({ error: "Missing required fields: imageBase64, roomType, or style" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "API key not configured" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get the appropriate prompt
    const stylePrompts = ROOM_STYLE_PROMPTS[roomType];
    if (!stylePrompts) {
      console.error("Invalid room type:", roomType);
      return new Response(
        JSON.stringify({ error: `Invalid room type: ${roomType}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const prompt = stylePrompts[style];
    if (!prompt) {
      console.error("Invalid style for room type:", { roomType, style });
      return new Response(
        JSON.stringify({ error: `Invalid style: ${style} for room type: ${roomType}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log("Generating room visualization:", { roomType, style, promptPreview: prompt.substring(0, 50) });

    // Prepare the image URL for the API
    const imageUrl = imageBase64.startsWith('data:') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `${prompt} Maintain the same room dimensions and basic layout. Create a photorealistic, professional-quality rendering that shows what this space could look like after a complete remodel. Ultra high resolution.`
              },
              {
                type: "image_url",
                image_url: {
                  url: imageUrl
                }
              }
            ]
          }
        ],
        modalities: ["image", "text"]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service credits exhausted. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Failed to generate visualization" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log("AI response received successfully");

    // Extract the generated image
    const generatedImage = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    const textResponse = data.choices?.[0]?.message?.content;

    if (!generatedImage) {
      console.error("No image in AI response:", JSON.stringify(data).substring(0, 500));
      return new Response(
        JSON.stringify({ error: "No image was generated. Please try with a different photo." }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        generatedImage,
        description: textResponse || "Your room visualization is ready!"
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Error in room-visualizer function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error occurred" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
