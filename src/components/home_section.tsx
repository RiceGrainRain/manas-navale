import DecryptedText from './decrypted_text';
import ScrollIndicator from './scroll_indicator';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface HomeSectionProps {
  parallaxOffset: number;
}

export default function HomeSection({ parallaxOffset }: HomeSectionProps) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '0 clamp(20px, 8vw, 8vw)',
        zIndex: 1,
      }}
    >
      <div
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(80px, 12vw, 160px)',
            fontWeight: '700',
            lineHeight: '0.9',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            color: 'white',
          }}
        >
          <DecryptedText text="MANAS"
            speed={40}
            maxIterations={40}
            sequential={false}
            revealDirection="center"
            animateOn="both"
            className="text-reveal" />
        </h1>
        <h1
          style={{
            fontSize: 'clamp(80px, 12vw, 160px)',
            fontWeight: '700',
            lineHeight: '0.9',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '-0.03em',
            color: 'white',
          }}
        >
          <DecryptedText text="NAVALE"
            speed={40}
            maxIterations={40}
            sequential={false}
            revealDirection="center"
            animateOn="both"
            className="text-reveal" />
        </h1>

        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: 'clamp(16px, 3vw, 24px)', marginTop: 'clamp(20px, 4vw, 32px)', fontSize: 'clamp(28px, 5vw, 36px)' }}>
          <a
            href="https://github.com/RiceGrainRain"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#d63030')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/manas-navale"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'white',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#d63030')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:navalemanas19@gmail.com"
            style={{
              color: 'white',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#d63030')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
