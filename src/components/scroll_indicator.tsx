import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [hideRedLine, setHideRedLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');

      if (!homeSection || !aboutSection) {
        return;
      }

      const scrollPosition = window.scrollY;
      const aboutSectionTop = aboutSection.offsetTop;

      // Hide red line after first scroll
      if (scrollPosition > 50) {
        setHideRedLine(true);
      }

      // Calculate where the about section actually starts (accounting for negative margin and border radius)
      const aboutSectionVisualTop = aboutSectionTop - 80; // accounting for negative margin

      // Hide when the scroll text would hit the about section
      if (scrollPosition >= aboutSectionVisualTop - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Initial check with a slight delay to ensure layout is settled
    const initialCheck = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initialCheck);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'clamp(20px, 5vh, 40px)',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        pointerEvents: 'none',
      }}
    >
      <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 'clamp(10px, 2vw, 12px)', letterSpacing: '0.1em' }}>
        SCROLL
      </span>
      {!hideRedLine && (
        <div
          style={{
            width: '1px',
            height: 'clamp(30px, 5vh, 40px)',
            backgroundColor: '#d63030',
            animation: 'scrollLine 2s ease-in-out infinite',
          }}
        />
      )}
      <style>{`
        @keyframes scrollLine {
          0%, 100% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            transform: translateY(20px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
