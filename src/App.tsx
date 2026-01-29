import LiquidEther from './components/liquid_ether'
import DecryptedText from './components/decrypted_text'
import { StaggeredMenu } from './components/staggered_menu'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa'


function App() {
  return (
    <>
      <LiquidEther
        colors={['#020202', '#1a0505', '#2d0a0a', '#4a0f0f', '#661414', '#8b1a1a', '#b02020', '#d63030', '#ff4444', '#ff6666']}
        style={{ backgroundColor: '#020202' }}
      />
      <StaggeredMenu
        isFixed={true}
        colors={['#4a0f0f', '#661414', '#8b1a1a']}
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
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 5 }}>
        <DecryptedText
          text="Hi, I'm Manas Navale"
          className="text-white text-6xl font-bold"
          encryptedClassName="text-white text-6xl font-bold"
          animateOn="both"
          parentClassName="pointer-events-auto"
        />
        <button
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
          View My Work
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
    </>
  )
}

export default App
