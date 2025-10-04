import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Zap, Target, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import AnimatedBackground from '../AnimatedBackground';
import './About.css';

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Full-Stack Development",
      description: "MERN & WAMP stack expertise with modern frameworks and best practices"
    },
    {
      icon: <Zap size={24} />,
      title: "Problem Solving",
      description: "ICPC Regionalist with strong algorithmic thinking and optimization skills"
    },
    {
      icon: <Target size={24} />,
      title: "AI & Machine Learning",
      description: "Experience with neural networks, GANs, CNNs, and generative AI solutions"
    },
    {
      icon: <Heart size={24} />,
      title: "Passion for Innovation",
      description: "Always exploring new technologies and pushing the boundaries of what's possible"
    }
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <AnimatedBackground 
        particleCount={30} 
        particleColor="#f97316" 
        connectionColor="#fb923c" 
      />
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-text">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="about-description"
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="about-intro">
                {personalInfo.bio}
              </p>
              
              <p className="about-details">
                {personalInfo.fullBio}
              </p>

              <p className="about-conclusion">
                Explore my portfolio to see my projects, skills, and the passion I bring to advancing technology!
              </p>
            </motion.div>

            <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Resume
            </motion.a>
          </div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="profile-image-container">
              <motion.img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="image-backdrop" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="highlights-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="highlight-icon">
                {highlight.icon}
              </div>
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;