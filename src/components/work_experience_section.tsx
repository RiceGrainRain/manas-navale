import { useRef, useEffect, useState } from 'react';
import WorkCard from './work_card';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  image: string;
  description: string;
}

interface WorkExperienceSectionProps {
  workExperiences: WorkExperience[];
}

export default function WorkExperienceSection({ workExperiences }: WorkExperienceSectionProps) {
  const [workVisible, setWorkVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWorkVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (workRef.current) {
      observer.observe(workRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={workRef}
      id="work"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#000000',
        zIndex: 10,
        padding: '120px 40px 80px',
        marginTop: '-300px',
        transform: workVisible ? 'translateY(0)' : 'translateY(30px)',
        opacity: workVisible ? 1 : 0,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '14px',
            fontWeight: '400',
            letterSpacing: '0.2em',
            marginBottom: '80px',
            textTransform: 'uppercase',
            opacity: workVisible ? 1 : 0,
            transform: workVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          <span style={{ color: '#d63030', display: 'inline-block', animation: workVisible ? 'countUp 0.6s ease 0.3s backwards' : 'none' }}>02</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}> - Work Experience</span>
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          height: '650px',
        }}>
          {workExperiences.map((work) => {
            const isExpanded = expandedCard === work.id;
            const isPeeking = expandedCard !== null && !isExpanded;

            // Circular carousel positioning
            let translateX = 0;
            let carouselPosition = 0; // -1 = left, 0 = center, 1 = right

            if (expandedCard !== null) {
              // Find which position this card should be in relative to expanded card
              const expandedIdx = workExperiences.findIndex(w => w.id === expandedCard);
              const currentIdx = workExperiences.findIndex(w => w.id === work.id);
              const totalCards = workExperiences.length;

              // Calculate circular distance
              let distance = currentIdx - expandedIdx;

              // Normalize to -1, 0, or 1 for 3 cards (circular)
              if (distance === 0) {
                carouselPosition = 0; // center
              } else if (distance === 1 || distance === -2) {
                carouselPosition = 1; // right
              } else {
                carouselPosition = -1; // left
              }
            } else {
              // No card expanded - show in original positions
              carouselPosition = workExperiences.findIndex(w => w.id === work.id) - 1;
            }

            // Set translateX based on position
            if (isExpanded) {
              translateX = 0;
            } else if (carouselPosition === -1) {
              translateX = -450; // left
            } else if (carouselPosition === 1) {
              translateX = 450; // right
            } else {
              translateX = 0; // center (when no card is expanded)
            }

            return (
              <WorkCard
                key={work.id}
                work={work}
                isExpanded={isExpanded}
                isPeeking={isPeeking}
                isVisible={workVisible}
                originalIndex={workExperiences.findIndex(w => w.id === work.id)}
                translateX={translateX}
                onClick={() => setExpandedCard(expandedCard === work.id ? null : work.id)}
              />
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .work-card:hover:not([data-expanded="true"]):not([data-peeking="true"]) .work-card-image {
          filter: grayscale(0%) !important;
          transform: scale(1.05) !important;
        }

        .work-card[data-peeking="true"]:hover {
          opacity: 0.8 !important;
        }

        .work-card:hover:not([data-peeking="true"]) .work-position,
        .work-card[data-expanded="true"] .work-position {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .work-card:hover:not([data-expanded="true"]):not([data-peeking="true"]) .work-text-container {
          transform: translateY(-20px) !important;
        }

        .work-text-container::-webkit-scrollbar {
          width: 6px;
        }

        .work-text-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .work-text-container::-webkit-scrollbar-thumb {
          background: rgba(214, 48, 48, 0.5);
          border-radius: 3px;
          transition: background 0.3s ease;
        }

        .work-text-container::-webkit-scrollbar-thumb:hover {
          background: rgba(214, 48, 48, 0.8);
        }

        .work-card:hover:not([data-expanded="true"]):not([data-peeking="true"]) .work-card-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%) !important;
        }

        .work-card[data-expanded="true"] .work-card-image {
          filter: grayscale(0%) !important;
          transform: scale(1.02) !important;
        }
      `}</style>
    </section>
  );
}
