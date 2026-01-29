import { useState } from 'react'
import LiquidEther from './components/liquid_ether'
import DecryptedText from './components/decrypted_text'
import Typewriter from './components/typewriter'
import { StaggeredMenu } from './components/staggered_menu'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa'


function App() {
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <>
      <LiquidEther
        colors={['#020202', '#1a0505', '#2d0a0a', '#4a0f0f', '#661414', '#8b1a1a', '#b02020', '#d63030', '#ff4444', '#ff6666']}
        style={{ backgroundColor: '#020202' }}
      />
      {!showOverlay && (
        <StaggeredMenu
          isFixed={true}
          colors={['#ffffffff', '#ffffff', '#ffffff']}
          accentColor="#d63030"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#000000"
          changeMenuColorOnOpen={true}
          items={[
            { label: 'Home', ariaLabel: 'Go to Home', link: '#' },
            { label: 'About', ariaLabel: 'Go to About', link: '#about' },
            { label: 'Work', ariaLabel: 'Go to Work', link: '#work' },
            { label: 'Projects', ariaLabel: 'Go to Contact', link: '#contact' }
          ]}
          socialItems={[
            { label: 'GitHub', link: 'https://github.com/RiceGrainRain' },
            { label: 'LinkedIn', link: 'https://linkedin.com/in/manas-navale' },
          ]}
        />
      )}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 5 }}>
        <DecryptedText
          text="Hi, I'm Manas Navale"
          className="text-white text-6xl font-bold"
          encryptedClassName="text-white text-6xl font-bold"
          animateOn="both"
          parentClassName="pointer-events-auto"
        />
        <button
          onClick={() => setShowOverlay(true)}
          style={{
            marginTop: '32px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: '500',
            color: 'white',
            backgroundColor: '#000000',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '4px',
            cursor: 'pointer',
            pointerEvents: 'auto',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1a1a1a';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          Learn more
          <FaArrowRight size={14} />
        </button>
        <div style={{ display: 'flex', gap: '24px', marginTop: '24px', pointerEvents: 'auto' }}>
          <a href="https://github.com/RiceGrainRain" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={32} color="white" style={{ cursor: 'pointer' }} />
          </a>
          <a href="https://linkedin.com/in/manas-navale" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={32} color="white" style={{ cursor: 'pointer' }} />
          </a>
          <a href="mailto:navalemanas19@gmail.com" aria-label="Email">
            <FaEnvelope size={32} color="white" style={{ cursor: 'pointer' }} />
          </a>
        </div>
      </div>

      {/* Animated Black Overlay */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
          transform: showOverlay ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)',
          zIndex: 50,
          pointerEvents: showOverlay ? 'auto' : 'none',
          overflowY: 'auto',
        }}
      >
        {showOverlay && (
          <StaggeredMenu
            isFixed={true}
            colors={['#ffffffff', '#ffffff', '#ffffff']}
            accentColor="#d63030"
            menuButtonColor="#ffffff"
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen={true}
            items={[
              { label: 'Home', ariaLabel: 'Go to Home', link: '#', onClick: () => setShowOverlay(false) },
              { label: 'About', ariaLabel: 'Go to About', link: '#about' },
              { label: 'Work', ariaLabel: 'Go to Work', link: '#work' },
              { label: 'Projects', ariaLabel: 'Go to Contact', link: '#contact' }
            ]}
            socialItems={[
              { label: 'GitHub', link: 'https://github.com/RiceGrainRain' },
              { label: 'LinkedIn', link: 'https://linkedin.com/in/manas-navale' },
            ]}
          />
        )}
        <div
          style={{
            minHeight: '100vh',
            padding: '80px 40px',
            color: 'white',
            opacity: showOverlay ? 1 : 0,
            transition: 'opacity 0.5s ease 0.3s',
          }}
        >

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '14px',
                fontWeight: '400',
                letterSpacing: '0.2em',
                marginBottom: '48px',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: '#d63030' }}>01</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.86)' }}> About Me</span>
            </h2>

            <div
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.85)',
                fontWeight: '300',
                maxWidth: '700px',
                borderLeft: '2px solid #d63030',
                paddingLeft: '32px',
              }}
            >
              <p style={{ marginBottom: '24px' }}>
                I am a software engineer driven by curiosity and a love for learning how systems work.
              </p>

              <p style={{ marginBottom: '24px' }}>
                I actually got into software engineering by complete accident. A friend broke my brand new laptop, my parents were not buying a replacement, and I ended up with a $100 machine that could not even run Windows. So I installed Linux. I began distro hopping out of curiosity, experimenting with different setups to understand how Linux actually works, and eventually landed on Arch Linux. Setting up Arch back then felt genuinely difficult with no prior background, but looking back now, it seems simple. That early challenge pushed me to understand systems instead of just using them.
              </p>

              <p>
                That curiosity carried into hackathons, where I started out doing frontend work and gradually expanded into fullstack development, security, and research. Since then, I have been involved in all kinds of development and am always hungry to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
