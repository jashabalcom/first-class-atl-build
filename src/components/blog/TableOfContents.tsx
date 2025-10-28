import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCItem[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 bg-card p-6 rounded-sm border border-[hsl(var(--editorial-border))]">
      <h3 className="font-playfair text-lg font-semibold mb-4">In This Article</h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`font-inter text-sm cursor-pointer block py-1 transition-colors text-left w-full ${
                  activeId === heading.id
                    ? "text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground"
                } ${heading.level === 3 ? "pl-4" : ""}`}
              >
                {heading.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
