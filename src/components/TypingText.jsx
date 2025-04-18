import React, { useState, useEffect } from 'react';

const TypingText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={`${className} inline-block`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText; 