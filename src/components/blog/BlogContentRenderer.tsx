import { ReactNode } from "react";
import DropCap from "./DropCap";
import PullQuote from "./PullQuote";
import Callout from "./Callout";
import ImageWithCaption from "./ImageWithCaption";
import StatsGrid from "./StatsGrid";
import Divider from "./Divider";
import InlineImage from "./InlineImage";

interface BlogContentRendererProps {
  content: string;
}

const BlogContentRenderer = ({ content }: BlogContentRendererProps) => {
  const parseContent = (text: string): ReactNode[] => {
    const elements: ReactNode[] = [];
    let currentIndex = 0;
    let key = 0;

    // Enhanced markdown patterns
    const patterns = {
      dropcap: /\[dropcap\](.*?)\[\/dropcap\]/gs,
      pullquote: /\[pullquote\](.*?)\[\/pullquote\]/gs,
      callout: /\[callout type="(.*?)"\](.*?)\[\/callout\]/gs,
      image: /\[image:(.*?)\](.*?)\[\/image\]/gs,
      stats: /\[stats\](.*?)\[\/stats\]/gs,
      divider: /\[divider\]\*\*\*\[\/divider\]/g,
      inlineImage: /\[inline-image position="(.*?)" width="(.*?)"\](.*?)\[\/inline-image\]/gs,
    };

    const segments: Array<{ index: number; length: number; element: ReactNode }> = [];

    // Find all special patterns
    let match;

    // Dropcap
    while ((match = patterns.dropcap.exec(text)) !== null) {
      segments.push({
        index: match.index,
        length: match[0].length,
        element: <DropCap key={`dropcap-${key++}`}>{match[1]}</DropCap>,
      });
    }

    // Pull quotes
    patterns.pullquote.lastIndex = 0;
    while ((match = patterns.pullquote.exec(text)) !== null) {
      segments.push({
        index: match.index,
        length: match[0].length,
        element: <PullQuote key={`quote-${key++}`}>{match[1]}</PullQuote>,
      });
    }

    // Callouts
    patterns.callout.lastIndex = 0;
    while ((match = patterns.callout.exec(text)) !== null) {
      segments.push({
        index: match.index,
        length: match[0].length,
        element: (
          <Callout key={`callout-${key++}`} type={match[1] as any}>
            {match[2]}
          </Callout>
        ),
      });
    }

    // Images with captions
    patterns.image.lastIndex = 0;
    while ((match = patterns.image.exec(text)) !== null) {
      segments.push({
        index: match.index,
        length: match[0].length,
        element: (
          <ImageWithCaption key={`image-${key++}`} src={match[1]} caption={match[2]} />
        ),
      });
    }

    // Stats grids
    patterns.stats.lastIndex = 0;
    while ((match = patterns.stats.exec(text)) !== null) {
      const stats = match[1].split("|");
      segments.push({
        index: match.index,
        length: match[0].length,
        element: <StatsGrid key={`stats-${key++}`} stats={stats} />,
      });
    }

    // Dividers
    patterns.divider.lastIndex = 0;
    while ((match = patterns.divider.exec(text)) !== null) {
      segments.push({
        index: match.index,
        length: match[0].length,
        element: <Divider key={`divider-${key++}`} />,
      });
    }

    // Inline images
    patterns.inlineImage.lastIndex = 0;
    while ((match = patterns.inlineImage.exec(text)) !== null) {
      segments.push({
        index: match.index,
        length: match[0].length,
        element: (
          <InlineImage
            key={`inline-${key++}`}
            src={match[3]}
            position={match[1] as "left" | "right"}
            width={match[2]}
          />
        ),
      });
    }

    // Sort segments by index
    segments.sort((a, b) => a.index - b.index);

    // Build final output
    segments.forEach((segment) => {
      // Add text before this segment
      if (currentIndex < segment.index) {
        const textBefore = text.slice(currentIndex, segment.index);
        elements.push(
          <div
            key={`text-${key++}`}
            className="font-cormorant text-[19px] leading-[1.8] text-foreground/90"
            dangerouslySetInnerHTML={{ __html: textBefore.replace(/\n/g, "<br/>") }}
          />
        );
      }
      elements.push(segment.element);
      currentIndex = segment.index + segment.length;
    });

    // Add remaining text
    if (currentIndex < text.length) {
      const remainingText = text.slice(currentIndex);
      elements.push(
        <div
          key={`text-${key++}`}
          className="font-cormorant text-[19px] leading-[1.8] text-foreground/90"
          dangerouslySetInnerHTML={{ __html: remainingText.replace(/\n/g, "<br/>") }}
        />
      );
    }

    return elements;
  };

  return <div className="space-y-6">{parseContent(content)}</div>;
};

export default BlogContentRenderer;
