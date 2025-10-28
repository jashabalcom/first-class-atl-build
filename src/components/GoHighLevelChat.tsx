import { useEffect } from "react";

const GoHighLevelChat = () => {
  useEffect(() => {
    // GoHighLevel Chat Widget Configuration
    // To activate: Replace 'YOUR_LOCATION_ID' with your actual GHL Location ID
    // Find this in: GHL Settings > Sites > Chat Widget
    
    const GHL_LOCATION_ID = "YOUR_LOCATION_ID"; // TODO: Replace with your GHL Location ID
    
    // Only load if location ID is configured
    if (GHL_LOCATION_ID && GHL_LOCATION_ID !== "YOUR_LOCATION_ID") {
      const script = document.createElement("script");
      script.src = `https://widgets.leadconnectorhq.com/loader.js`;
      script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
      script.setAttribute("data-widget-id", GHL_LOCATION_ID);
      script.async = true;
      
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return null; // This component doesn't render anything visible
};

export default GoHighLevelChat;
