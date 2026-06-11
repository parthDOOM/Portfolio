import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Eye, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, contactInfo, heroHighlights } from '../../data/portfolioData';
import TypewriterText from '../TypewriterText';
import './Hero.css';

const Hero: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="hero-chip"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="hero-chip-dot" aria-hidden="true" />
            {personalInfo.status}
          </motion.span>

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <TypewriterText text={personalInfo.name} speed={100} delay={1000} />
          </motion.h1>
          
          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {personalInfo.title}
          </motion.h2>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personalInfo.subtitle}
          </motion.p>
          
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={18} />
              View Resume
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Get in Touch
            </motion.button>

            <div className="hero-social">
              <motion.a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="GitHub profile"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              
              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="LinkedIn profile"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="hero-highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {heroHighlights.map((highlight) => (
              <div key={highlight.label} className="hero-highlight">
                <span className="hero-highlight-value">{highlight.value}</span>
                <span className="hero-highlight-label">{highlight.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isAtTop && (
          <motion.button
            className="scroll-indicator"
            onClick={scrollToNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown size={24} />
            <span>Scroll to explore</span>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
