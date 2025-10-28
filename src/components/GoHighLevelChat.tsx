import { useEffect } from "react";

const GoHighLevelChat = () => {
  useEffect(() => {
    // GoHighLevel Chat Widget Configuration
    // To activate: Replace 'YOUR_LOCATION_ID' with your actual GHL Location ID
    // Find this in: GHL Settings > Sites > Chat Widget
    
    const GHL_LOCATION_ID = "69001e4b61260772ee842619";
    
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
  }, []);

  return null; // This component doesn't render anything visible
};

export default GoHighLevelChat;
