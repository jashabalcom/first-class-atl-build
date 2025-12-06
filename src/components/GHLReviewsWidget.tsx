import { useEffect, useRef } from "react";

const GHLReviewsWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the external script dynamically
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full mt-8">
      <iframe
        className="lc_reviews_widget"
        src="https://reputationhub.site/reputation/widgets/review_widget/aolw7GuGFLtbks1OI4n3"
        frameBorder={0}
        scrolling="no"
        style={{ minWidth: "100%", width: "100%" }}
        title="Google Reviews"
      />
    </div>
  );
};

export default GHLReviewsWidget;
