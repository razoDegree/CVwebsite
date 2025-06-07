import React, { createContext, useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export const ScrollbarContext = createContext();

const SmoothScroll = ({ children }) => {
  const scrollArea = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    if (scrollArea.current) {
      scrollbarRef.current = Scrollbar.init(scrollArea.current, {
        damping: 0.03, 
        alwaysShowTracks: false, 
      });

      return () => {
        if (scrollbarRef.current) scrollbarRef.current.destroy();
      };
    }
  }, []);

  return (
    <ScrollbarContext.Provider value={scrollbarRef}>
      <div ref={scrollArea} style={{ height: "100vh", overflow: "hidden" }}>
        {children}
      </div>
    </ScrollbarContext.Provider>
  );
};

export default SmoothScroll;
