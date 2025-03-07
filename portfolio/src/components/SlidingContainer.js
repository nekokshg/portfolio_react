import React, { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";

const SlidingContainer = forwardRef(({ children }, ref) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          // Call the ref function when halfway through animation
          if (ref?.current) {
            ref.current(); 
          }
        }
      }
    );
  }, [ref]);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
});

export default SlidingContainer;
