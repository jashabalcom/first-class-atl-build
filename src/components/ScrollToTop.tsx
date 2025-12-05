import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to allow PageTransition to complete before scrolling
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 60);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
