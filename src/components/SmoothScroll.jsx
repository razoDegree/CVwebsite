import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScroll = ({ children }) => {
  const scrollArea = useRef(null); // This points to the box (the div).

  useEffect(() => {
    if (scrollArea.current) {
      // Make the box scroll smoothly.
      const scrollbar = Scrollbar.init(scrollArea.current, {
        damping: 0.02, // Adjust this to control how smooth it feels.
      });

      // Clean up when the component is removed.
      return () => scrollbar.destroy();
    }
  }, []);

  return (
    <div ref={scrollArea} style={{ height: "100vh", overflow: "hidden" }}>
      {children}
    </div>
  );
};

export default SmoothScroll;
