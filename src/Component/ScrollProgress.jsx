import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Thin gold/blue bar across the top of the viewport showing how far down the
// page the reader is.
export default function ScrollProgress() {
  const bar = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) {
        bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    const settle = setTimeout(update, 120); // a new page changes the document height
    return () => {
      clearTimeout(settle);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return <div ref={bar} className="scroll-prog" aria-hidden="true" />;
}
