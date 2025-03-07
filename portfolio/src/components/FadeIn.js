import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const FadeIn = ({ children, delay = 0.03, duration = 0.4, trigger }) => {
  const textRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (startAnimation) {
      const chars = textRef.current.querySelectorAll("span.char");
      gsap.fromTo(
        chars,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: delay,
          duration: duration,
          ease: "power2.out",
        }
      );
    }
  }, [startAnimation, delay, duration]);

  // Function to start animation
  useEffect(() => {
    if (trigger) {
      setStartAnimation(true);
    }
  }, [trigger]);

  // Split text into spans while keeping spaces intact
  const text = children.split(/(\s+)/).map((char, index) => (
    <span
      key={index}
      className={char.trim() ? "char" : "space"}
      style={{ display: "inline-block", opacity: 0, whiteSpace: "pre" }}
    >
      {char}
    </span>
  ));

  return <span ref={textRef}>{text}</span>;
};

export default FadeIn;

