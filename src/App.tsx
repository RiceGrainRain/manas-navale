import { useEffect, useState, useRef } from 'react'
import LiquidEther from './components/liquid_ether'
import DecryptedText from './components/decrypted_text'
import ScrollIndicator from './components/scroll_indicator'
import { StaggeredMenu } from './components/staggered_menu'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


function App() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
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

  // Intersection observer for Work section fade-in
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

      {/* Work Experience Section */}
      <section
        ref={workRef}
        id="work"
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#000000',
          zIndex: 10,
          padding: '120px 40px 80px',
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
            display: 'grid',
            gridTemplateColumns: expandedCard !== null ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            {workExperiences.map((work, index) => (
              <div
                key={work.id}
                onClick={() => setExpandedCard(expandedCard === work.id ? null : work.id)}
                className="work-card"
                data-expanded={expandedCard === work.id}
                style={{
                  position: 'relative',
                  height: expandedCard === work.id ? '500px' : '400px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  opacity: workVisible ? 1 : 0,
                  transform: workVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease ${0.3 + index * 0.1}s, transform 0.6s ease ${0.3 + index * 0.1}s, height 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,
                  display: expandedCard !== null && expandedCard !== work.id ? 'none' : 'block',
                }}
              >
                {/* Background Image */}
                <div
                  className="work-card-image"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${work.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: expandedCard === work.id ? 'grayscale(0%)' : 'grayscale(100%)',
                    transform: 'scale(1)',
                    transition: 'filter 0.3s ease, transform 0.3s ease',
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
                    transition: 'background 0.3s ease',
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '32px',
                    right: '32px',
                    color: 'white',
                  }}
                >
                  <div style={{
                    transform: expandedCard === work.id ? 'translateY(0)' : 'translateY(0)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="work-text-container">
                    <p
                      className="work-position"
                      style={{
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#d63030',
                        marginBottom: '8px',
                        transition: 'all 0.3s ease',
                        opacity: expandedCard === work.id ? 1 : 0,
                        transform: expandedCard === work.id ? 'translateY(0)' : 'translateY(10px)',
                      }}
                    >
                      {work.position}
                    </p>
                    <h3
                      style={{
                        fontSize: expandedCard === work.id ? '48px' : '32px',
                        fontWeight: '700',
                        transition: 'font-size 0.4s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        lineHeight: '1',
                        marginBottom: expandedCard === work.id ? '24px' : '0',
                      }}
                    >
                      {work.company}
                    </h3>
                    {expandedCard === work.id && (
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontWeight: '300',
                          maxWidth: '600px',
                          marginTop: '16px',
                          animation: 'fadeInUp 0.4s ease 0.1s backwards',
                        }}
                      >
                        {work.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
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

          .work-card:hover:not([data-expanded="true"]) {
            transform: translateY(-8px) !important;
          }

          .work-card:hover .work-card-image {
            filter: grayscale(0%) !important;
            transform: scale(1.05) !important;
          }

          .work-card:hover .work-position,
          .work-card[data-expanded="true"] .work-position {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .work-card:hover .work-text-container {
            transform: translateY(-20px) !important;
          }
        `}</style>
      </section>
    </div>
  )
}

export default App
