import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Typewriter({
  text,
  speed = 30,
  delay = 0,
  className = '',
  style = {}
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeoutId = setTimeout(() => {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isVisible, text, speed, delay]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {displayedText}
      {displayedText.length < text.length && (
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            marginLeft: '2px',
            animation: 'blink 1s infinite',
          }}
        />
      )}
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
