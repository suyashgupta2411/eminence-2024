import React, { useEffect, useRef } from "react";

const AnimatedText = () => {
  const subtitleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.animation = "smoothTyping 3.5s steps(40) forwards";
    }

    const showSubtitle = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = 1;
      }
    }, 3500); // Updated to match the animation duration

    return () => clearTimeout(showSubtitle); // Clean up to prevent memory leaks
  }, []);

  return (
    <div>
      <h1 ref={textRef} className="playwrite-cu-unique">
        Eminence 2024
      </h1>
      <p ref={subtitleRef} className="subtitle">
        The Divya Singhal's birth anniversary gala
      </p>
    </div>
  );
};

export default AnimatedText;
