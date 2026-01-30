import { useEffect, useState } from 'react';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const projectsSection = document.getElementById('projects-section');
      const workSection = document.getElementById('work');

      if (!homeSection) {
        setIsVisible(false);
        return;
      }

      const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
      const scrollPosition = window.scrollY;

      // Check if we're in work or projects section
      if (workSection) {
        const workTop = workSection.offsetTop;
        if (scrollPosition >= workTop - window.innerHeight / 2) {
          setIsVisible(false);
          return;
        }
      }

      // Check if we're in the projects section
      if (projectsSection) {
        const projectsTop = projectsSection.offsetTop;

        if (scrollPosition >= projectsTop - window.innerHeight) {
          setIsVisible(false);
          return;
        }
      }

      // Hide if scrolled past home section or if scrolled at all
      if (scrollPosition > homeSectionBottom - 100 || scrollPosition > 100) {
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
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        pointerEvents: 'none',
      }}
    >
      <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', letterSpacing: '0.1em' }}>
        SCROLL
      </span>
      <div
        style={{
          width: '1px',
          height: '40px',
          backgroundColor: '#d63030',
          animation: 'scrollLine 2s ease-in-out infinite',
        }}
      />
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
