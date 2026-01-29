import { useRef, useEffect, useState } from 'react';

export default function AboutSection() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#000000',
        zIndex: 10,
        padding: '120px 40px 80px',
        borderRadius: '50% 50% 0 0 / 80px 80px 0 0',
        marginTop: '-80px',
        transform: aboutVisible ? 'translateY(0)' : 'translateY(30px)',
        opacity: aboutVisible ? 1 : 0,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div ref={contentRef} style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: '14px',
            fontWeight: '400',
            letterSpacing: '0.2em',
            marginBottom: '48px',
            textTransform: 'uppercase',
            opacity: aboutVisible ? 1 : 0,
            transform: aboutVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          <span style={{ color: '#d63030', display: 'inline-block', animation: aboutVisible ? 'countUp 0.6s ease 0.3s backwards' : 'none' }}>01</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}> - About Me</span>
        </h2>

        <div style={{
          fontSize: 'clamp(16px, 2vw, 18px)',
          lineHeight: '1.8',
          color: 'rgba(255, 255, 255, 0.85)',
          fontWeight: '300',
          position: 'relative',
          paddingLeft: '24px',
          borderLeft: aboutVisible ? '2px solid #d63030' : '2px solid transparent',
          transition: 'border-color 0.8s ease 0.4s',
        }}>
          <p style={{
            marginBottom: '24px',
            opacity: aboutVisible ? 1 : 0,
            transform: aboutVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.5s',
          }}>
            I am a software engineer driven by curiosity and a love for learning.
          </p>

          <p style={{
            marginBottom: '24px',
            opacity: aboutVisible ? 1 : 0,
            transform: aboutVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.7s',
          }}>
            I actually got into software engineering by complete accident. A friend broke my brand new laptop, my parents were not buying a replacement, and I ended up with a $100 machine that could not even run Windows. So I installed Linux. I began distro hopping out of curiosity, experimenting with different setups to understand how Linux actually works, and eventually landed on Arch Linux. Setting up Arch back then felt genuinely difficult with no prior background, but looking back now, it seems simple. That early challenge pushed me to understand systems instead of just using them.
          </p>

          <p style={{
            opacity: aboutVisible ? 1 : 0,
            transform: aboutVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.9s',
          }}>
            That curiosity carried into hackathons, where I started out doing frontend work and gradually expanded into fullstack development, security, and research. Since then, I have been involved in all kinds of development and am always hungry to learn more.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
