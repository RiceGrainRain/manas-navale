import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './projects_section.css';

interface Project {
  id: number;
  number: string;
  title: string;
  year: string;
  description: string;
  image: string;
  link: string;
  tags: { name: string; color: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "VAGABOND",
    year: "2026",
    description: "My latest project! Vagabond is a real-time AI incident copilot you built using Cloudflare Workers & Durable Objects that lets teams collaborate live during outages or security incidents, chat with an LLM, and generate structured incident artifacts together in one shared room. It combines WebSockets for instant sync, Cloudflare’s AI (a LLaMA-3.3 model) for both conversational and structured playbook outputs, and a modern React/TypeScript front end, all running on scalable edge infrastructure. What makes it unique is how it blends live collaboration, durable incident state, and AI assistance into a seamless tool that feels like a live incident command center rather than just another chat with a bot.",
    image: "/src/assets/vagabond.webp",
    link: "https://github.com/RiceGrainRain/cf_ai_vagabond/",
    tags: [
      { name: "Cloudflare Workers", color: "#F38020" },
      { name: "React", color: "#61DAFB" },
      { name: "Llama", color: "#FFFFFF" },
      { name: "Wrangler", color: "#DC2626" }
    ]
  },
  {
    id: 2,
    number: "02",
    title: "BIRDBOOK",
    year: "2025",
    description: "My latest hackathon win! BirdBook is a hackathon-built machine learning web app that lets users upload a photo of a bird and receive the predicted species, confidence score, and additional context, with each result saved into an interactive scrapbook. It combines a computer vision model with a modern Next.js and Tailwind frontend to make bird identification feel approachable rather than academic. What makes BirdBook unique is how it turns image classification into an engaging experience focused on learning and conservation, not just raw predictions.",
    image: "/src/assets/birdbook.jpg",
    link: "https://devpost.com/software/birdbook",
    tags: [
      { name: "TypeScript", color: "#3178C6" },
      { name: "Next.js", color: "#EAB308" },
      { name: "Flask", color: "#F38020" },
      { name: "Jinja2", color: "#B41717" },
      { name: "SQLite", color: "#003B57" },
      { name: "PyTorch", color: "#EE4C2C" }
    ]
  },
{
    id: 3,
    number: "03",
    title: "TECHNICIAN TERRY",
    year: "2024",
    description: "I've always enjoyed playing video games- with some of my favorites being Dark Souls 3, Baldur's Gate 3, and Last of Us 2. After the failure that was Gnome Quest(sequel otw), our indie game company, GROUNDBREAKING studios, made Technician Terry for the BIGMODE game jam. Technician Terry is a 2D puzzle-platformer where you play as Terry, an underpaid worker trying to power all the generators in a compound by managing cables and tools across 17 clever levels plus bonus SUPERMAX challenges.",
    image: "/src/assets/techterry.png",
    link: "https://neolog.itch.io/technician-terry",
    tags: [
      { name: "Godot", color: "#478CBF" }
    ]
  },
  {
    id: 4,
    number: "04",
    title: "VPOST",
    year: "2023",
    description: "Vpost is my first solo coding project and a Flutter-based app that helps users discover volunteering opportunities that match their interests and goals. It brings opportunity search into a mobile experience with a clean UI and personal focus, making community engagement feel easier and more fun for people just getting started with volunteering. What makes it special is how it combines my early mobile development skills with a real-world purpose, turning something I care about into a tool that helps others connect with meaningful ways to give back.",
    image: "/src/assets/vpost.jpg",
    link: "/projects/ethereal-portfolio",
    tags: [
      { name: "Flutter", color: "#02569B" },
      { name: "Dart", color: "#0175C2" }
    ]
  },
  {
    id: 5,
    number: "05",
    title: "FLASH NOTES",
    year: "2023",
    description: "Flash Notes is my first hackathon win. After spending most of our time building a rust game engine, my team pivoted towards the end of the hackathon to building Flash Notes. Flash Notes turns the notes you write into automatic study tests using GPT-3(this was a gpt wrapper way before gpt wrappers were popular), helping you quiz yourself without spending time making questions manually. ",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    link: "/projects/kinetic-data-viz",
    tags: [
      { name: "React", color: "#61DAFB" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "OpenAI", color: "#10A37F" }
    ]
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // If section hasn't entered viewport yet
      if (sectionTop > 0) {
        setActiveProject(0);
        return;
      }

      // If section has scrolled past viewport
      if (Math.abs(sectionTop) > sectionHeight - viewportHeight) {
        setActiveProject(projects.length - 1);
        return;
      }

      // Calculate progress based on how far section has scrolled up
      const scrollProgress = Math.abs(sectionTop) / (sectionHeight - viewportHeight);
      const newIndex = Math.floor(scrollProgress * projects.length);
      const clampedIndex = Math.min(Math.max(0, newIndex), projects.length - 1);

      setActiveProject(clampedIndex);
    };

    // Try multiple ways to find scroll container
    let scrollContainer = document.querySelector('div[style*="overflowY"]');

    // Fallback: find by checking actual overflow style
    if (!scrollContainer) {
      const divs = document.querySelectorAll('div');
      divs.forEach(div => {
        const style = window.getComputedStyle(div);
        if (style.overflowY === 'auto' && div.clientHeight === window.innerHeight) {
          scrollContainer = div;
        }
      });
    }

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  const handleImageClick = () => {
    window.location.href = projects[activeProject].link;
  };

  return (
    <section ref={sectionRef} id="projects-section" className="projects-section">
      <div className="projects-container">
        {/* Left Column - Text Panel */}
        <div className="projects-text-panel">
          <motion.div
            className="projects-section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <span className="section-number">03</span>
            <span className="section-text"> - PROJECTS</span>
          </motion.div>

          <motion.h2
            className="projects-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            viewport={{ once: true }}
          >
            MY FAVORITES
          </motion.h2>

          {/* Fixed editorial content block */}
          <div className="projects-content-block">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeProject].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="active-project-content"
              >
                {/* Index and Year */}
                <div className="project-meta">
                  <span className="project-index">{projects[activeProject].number}</span>
                  <span className="project-year">{projects[activeProject].year}</span>
                </div>

                {/* Bold Title */}
                <h3 className="project-main-title">{projects[activeProject].title}</h3>

                {/* Technology Tags */}
                <div className="project-tags">
                  {projects[activeProject].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="project-tag"
                      style={{
                        backgroundColor: `${tag.color}20`,
                        borderColor: tag.color,
                        color: tag.color
                      }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="project-body">
                  <p className="project-description">{projects[activeProject].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Inactive projects stacked below */}
          <div className="inactive-projects-list">
            {projects.map((project, index) => {
              if (index === activeProject) return null;
              return (
                <div key={project.id} className="inactive-project">
                  <span className="inactive-title">{project.title}</span>
                  <span className="inactive-year">{project.year}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column - Visual Panel */}
        <div className="projects-visual-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeProject].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="project-image-container"
              onMouseEnter={() => setHoveredImage(true)}
              onMouseLeave={() => setHoveredImage(false)}
              onClick={handleImageClick}
            >
              <motion.img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="project-image"
                animate={{
                  filter: hoveredImage ? 'grayscale(0%)' : 'grayscale(100%)',
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />
              <div className="image-overlay" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
