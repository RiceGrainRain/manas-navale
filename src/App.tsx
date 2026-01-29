import { useEffect, useState, useRef } from 'react'
import LiquidEther from './components/liquid_ether'
import DecryptedText from './components/decrypted_text'
import ScrollIndicator from './components/scroll_indicator'
import { StaggeredMenu } from './components/staggered_menu'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


function App() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setParallaxOffset(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for About section fade-in
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
    <div style={{ overflowY: 'auto', height: '100vh', scrollBehavior: 'smooth' }}>
      <LiquidEther
        colors={['#020202', '#1a0505', '#2d0a0a', '#4a0f0f', '#661414', '#8b1a1a', '#b02020', '#d63030', '#ff4444', '#ff6666']}
        style={{ backgroundColor: '#020202', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      />
      <StaggeredMenu
        isFixed={true}
        colors={['#ffffffff', '#ffffff', '#ffffff']}
        accentColor="#d63030"
        menuButtonColor="#ffffff"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        items={[
          { label: 'Home', ariaLabel: 'Go to Home', link: '#home' },
          { label: 'About', ariaLabel: 'Go to About', link: '#about' },
          { label: 'Work', ariaLabel: 'Go to Work', link: '#work' },
          { label: 'Projects', ariaLabel: 'Go to Contact', link: '#contact' }
        ]}
        socialItems={[
          { label: 'GitHub', link: 'https://github.com/RiceGrainRain' },
          { label: 'LinkedIn', link: 'https://linkedin.com/in/manas-navale' },
        ]}
      />

      {/* Home Section */}
      <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '80px', zIndex: 5 }}>
        <div style={{ transform: `translateY(${parallaxOffset}px)`, transition: 'transform 0.1s linear' }}>
          <div style={{
            fontSize: 'clamp(80px, 12vw, 160px)',
            fontWeight: '700',
            lineHeight: '0.9',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
            marginBottom: '60px',
          }}>
            <DecryptedText
              text="MANAS"
              className=""
              encryptedClassName=""
              animateOn="both"
              style={{
                color: 'white',
                display: 'block',
              }}
            />
            <DecryptedText
              text="NAVALE"
              className=""
              encryptedClassName=""
              animateOn="both"
              style={{
                color: 'white',
                display: 'block',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
          <a
            href="https://github.com/RiceGrainRain"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = '#d63030';
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = 'white';
            }}
          >
            <FaGithub size={32} color="white" style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} />
          </a>
          <a
            href="https://linkedin.com/in/manas-navale"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = '#d63030';
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = 'white';
            }}
          >
            <FaLinkedin size={32} color="white" style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} />
          </a>
          <a
            href="mailto:navalemanas19@gmail.com"
            aria-label="Email"
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = '#d63030';
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) icon.style.color = 'white';
            }}
          >
            <FaEnvelope size={32} color="white" style={{ cursor: 'pointer', transition: 'color 0.3s ease' }} />
          </a>
        </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* About Section */}
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

          <div
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.85)',
              fontWeight: '300',
              maxWidth: '700px',
              paddingLeft: '32px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '2px',
                height: aboutVisible ? '100%' : '0%',
                backgroundColor: '#d63030',
                transition: 'height 1s ease 0.4s',
              }}
            />
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
    </div>
  )
}

export default App
