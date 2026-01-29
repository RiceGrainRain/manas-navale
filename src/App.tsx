import Dither from './components/dither'
import DecryptedText from './components/decrypted_text'
import { StaggeredMenu } from './components/staggered_menu'

function App() {
  return (
    <>
      <Dither />
      <StaggeredMenu
        isFixed={true}
        colors={['#450000', '#7f0000', '#bd0000']}
        accentColor="#bd0000"
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
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 5 }}>
        <DecryptedText
          text="Hi, I'm Manas Navale"
          className="text-white text-6xl font-bold"
          encryptedClassName="text-white text-6xl font-bold"
        />
      </div>
    </>
  )
}

export default App
