import { useState, useEffect } from "react";
import { Sparkles, RefreshCw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import DOMPurify from "dompurify";

interface AIRecommendationsProps {
  projectType: string;
  message: string;
  city?: string;
  timeline?: string;
  onComplete?: () => void;
}

const RECS_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/project-recommendations`;

export function AIRecommendations({
  projectType,
  message,
  city,
  timeline,
  onComplete,
}: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    setRecommendations("");

    try {
      const resp = await fetch(RECS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ projectType, message, city, timeline }),
      });

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get recommendations");
      }

      if (!resp.body) {
        throw new Error("No response body");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              fullContent += content;
              setRecommendations(fullContent);
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      setIsLoading(false);
      onComplete?.();
    } catch (err) {
      console.error("AI recommendations error:", err);
      const errorMessage = err instanceof Error ? err.message : "Failed to generate recommendations";
      setError(errorMessage);
      setIsLoading(false);
      
      if (errorMessage.includes("Rate limit")) {
        toast.error("Too many requests. Please wait a moment and try again.");
      } else {
        toast.error("Couldn't generate recommendations. You can still continue.");
      }
    }
  };

  useEffect(() => {
    fetchRecommendations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatContent = (content: string) => {
    // Convert markdown headers and formatting to styled HTML
    const html = content
      .replace(/## (.+)/g, '<h3 class="text-lg font-semibold text-foreground mt-6 mb-3 first:mt-0">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\n- /g, '\n• ')
      .replace(/\n(\d+)\. /g, '\n$1. ')
      .replace(/\n/g, '<br />');
    
    // Sanitize to prevent XSS from AI-generated content
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ['h3', 'strong', 'br'],
      ALLOWED_ATTR: ['class']
    });
  };

  if (error && !recommendations) {
    return (
      <div className="bg-muted/30 rounded-lg p-6 text-center space-y-4">
        <p className="text-muted-foreground">{error}</p>
        <Button variant="outline" onClick={fetchRecommendations} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
          <div>
            <span className="text-sm font-medium text-foreground">AI-Powered Insights</span>
            <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Beta
            </span>
          </div>
        </div>
        {!isLoading && (
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchRecommendations}
            className="gap-1 text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className="h-3 w-3" />
            Regenerate
          </Button>
        )}
      </div>

      <div className="bg-muted/30 rounded-lg p-6 min-h-[200px]">
        {isLoading && !recommendations ? (
          <div className="flex flex-col items-center justify-center h-[200px] gap-3">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
            <p className="text-sm text-muted-foreground animate-pulse">
              Generating personalized recommendations...
            </p>
          </div>
        ) : (
          <div
            className="prose prose-sm max-w-none text-foreground [&_h3]:text-primary [&_strong]:text-foreground"
            dangerouslySetInnerHTML={{ __html: formatContent(recommendations) }}
          />
        )}
        {isLoading && recommendations && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5" />
        )}
      </div>

      <p className="text-xs text-muted-foreground text-center">
        These suggestions are AI-generated based on your project details. Your consultation will provide customized guidance.
      </p>
    </div>
  );
}
