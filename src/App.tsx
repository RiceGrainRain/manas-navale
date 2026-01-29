import { useEffect, useState } from 'react'
import LiquidEther from './components/liquid_ether'
import { StaggeredMenu } from './components/staggered_menu'
import HomeSection from './components/home_section'
import AboutSection from './components/about_section'
import WorkExperienceSection from './components/work_experience_section'


function App() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setParallaxOffset(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workExperiences = [
    {
      id: 0,
      company: 'AIG',
      position: 'App Security Intern',
      image: '/src/assets/AIG.jpg',
      description: "Like I mentioned before, I got my start in computer science through Linux, so I was always a little aware of the cybersecurity side of it. I did tons of CTFs and cybersecurity competitions to learn as much as I could about the field. With my latest internship, I was finally able to formally enter the world of security. I worked on the application security team and saw firsthand how security is handled at a large company. I initially started by automating AppSec workflows with Python and Bash, while also doing pentesting training for internal applications. As I got more involved, I began running penetration tests on nonprod systems and working with application teams to communicate findings and support remediation. I also spent time documenting vulnerabilities and exploring LLM use cases for DevSecOps. Overall, the experience gave me a clearer picture of how security operates inside a large organization and what it looks like to support engineers without slowing development down."
    },
    {
      id: 1,
      company: 'TAMU',
      position: 'Machine Learning Research Assistant',
      image: '/src/assets/TAMU.jpg',
      description: 'As a computer engineering student at Texas A&M, I get the pleasure of working with hardware. That interest carried over into my work on autonomous drones, where I focused on how software, sensors, and physical systems interact in the real world. I worked on path planning by combining machine learning with more traditional algorithms, using sensor data like LiDAR, IMU, and GPS to help drones navigate cluttered environments. A big part of the work was testing and iteration. Things that looked good in simulation often behaved differently once noise, delays, and imperfect data were introduced. Working through those gaps taught me how important it is to design systems that can handle uncertainty, not just ideal conditions.'
    },
    {
      id: 2,
      company: 'UNT',
      position: 'Computational Neuroscience Research Assistant',
      image: '/src/assets/UNT.jpg',
      description: 'My first experience working in a formal team. In this project, I helped build VEGS, a virtual environment grocery store used for computational neuroscience research. I remember my first contribution was upgrading the controls to use FPS-style camera and movement. Shortly after, I was told by the project lead that the change was unnecessary and incompatible with the VR control scheme.That moment stuck with me. It forced me to step back and understand the goals of the project beyond just improving controls. From there, I focused on building features that supported the research itself, working in Unity to help create a stable, realistic environment and contributing to data workflows used to process neuroimaging results. Overall, this experience taught me how to take feedback, align my work with user and research needs, and contribute effectively within a multidisciplinary team.'
    }
  ];

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

      <HomeSection parallaxOffset={parallaxOffset} />
      <AboutSection />
      <WorkExperienceSection workExperiences={workExperiences} />
    </div>
  )
}

export default App
