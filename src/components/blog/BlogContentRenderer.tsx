import { ReactNode } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import DropCap from "./DropCap";
import PullQuote from "./PullQuote";
import Callout from "./Callout";
import ImageWithCaption from "./ImageWithCaption";
import StatsGrid from "./StatsGrid";
import Divider from "./Divider";
import InlineImage from "./InlineImage";

// Configure DOMPurify to allow safe HTML elements for blog content
const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'b', 'i', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
                   'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'hr', 'img', 'table', 
                   'thead', 'tbody', 'tr', 'th', 'td', 'span', 'div', 'sup', 'sub'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
    ALLOW_DATA_ATTR: false,
  });
};

interface BlogContentRendererProps {
  content: string;
}

const BlogContentRenderer = ({ content }: BlogContentRendererProps) => {
  const parseContent = (text: string): ReactNode[] => {
    const elements: ReactNode[] = [];
    let currentIndex = 0;
    let key = 0;

    // Enhanced markdown patterns for custom shortcodes
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

    // Build final output - process remaining text through markdown
    segments.forEach((segment) => {
      // Add text before this segment
      if (currentIndex < segment.index) {
        const textBefore = text.slice(currentIndex, segment.index);
        const htmlContent = marked.parse(textBefore, { 
          breaks: true,
          gfm: true 
        }) as string;
        
        elements.push(
          <div
            key={`text-${key++}`}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlContent) }}
          />
        );
      }
      elements.push(segment.element);
      currentIndex = segment.index + segment.length;
    });

    // Add remaining text
    if (currentIndex < text.length) {
      const remainingText = text.slice(currentIndex);
      const htmlContent = marked.parse(remainingText, { 
        breaks: true,
        gfm: true 
      }) as string;
      
      elements.push(
        <div
          key={`text-${key++}`}
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlContent) }}
        />
      );
    }

    return elements;
  };

  return <div className="space-y-4">{parseContent(content)}</div>;
};

export default BlogContentRenderer;
