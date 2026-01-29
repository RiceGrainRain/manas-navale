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
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
              }}
            >
              01 - About Me
            </h2>

            <Typewriter
              text="I'm a passionate software engineer with a deep interest in building elegant, performant web applications. With expertise in modern web technologies and a keen eye for design, I strive to create digital experiences that are both functional and beautiful. My journey in tech has been driven by curiosity and a constant desire to learn and push the boundaries of what's possible. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or working on side projects that challenge my skills and creativity."
              speed={20}
              style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.85)',
                fontWeight: '300',
                maxWidth: '700px',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
