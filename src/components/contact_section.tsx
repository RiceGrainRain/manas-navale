import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const fullText = "LET'S CONNECT";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setDisplayedText('');
            let index = 0;
            const interval = setInterval(() => {
              if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
              } else {
                clearInterval(interval);
              }
            }, 80);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen relative bg-white flex items-center justify-center px-8 md:px-16 py-20"
      style={{
        position: 'relative',
        borderRadius: '50% 50% 0 0 / 80px 80px 0 0',
        marginTop: '-80px',
        zIndex: 20,
      }}
    >
      <div className="max-w-7xl w-full">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-sm font-normal tracking-[0.2em] uppercase">
            <span className="text-[#d63030]">04</span>
            <span className="text-black/60"> - Contact</span>
          </span>
        </motion.div>

        {/* Main Title with Typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-black leading-tight tracking-tight"
          style={{ marginBottom: '2rem' }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h2>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl"
        >
          {/* Email */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/50 mb-3">Email</h3>
            <a
              href="mailto:navalemanas19@gmail.com"
              className="text-xl text-black hover:text-[#d63030] transition-colors duration-300 block break-all"
            >
              navalemanas19@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/50 mb-4">Social</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/RiceGrainRain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-black hover:text-[#d63030] transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/manas-navale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg text-black hover:text-[#d63030] transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/50 mb-3">Location</h3>
            <p className="text-xl text-black/80">Texas, USA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
