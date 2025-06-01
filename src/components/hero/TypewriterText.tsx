
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  roles: string[];
}

const TypewriterText = ({ roles }: TypewriterTextProps) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  return (
    <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
        <span className="inline-block min-w-[350px] text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </span>
      </h2>
    </div>
  );
};

export default TypewriterText;
