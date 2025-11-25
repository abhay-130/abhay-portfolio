import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the path (URL) changes, scroll the window to the top (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;