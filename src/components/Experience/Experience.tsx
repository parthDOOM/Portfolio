import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { experiences } from '../../data/portfolioData';
import AnimatedBackground from '../AnimatedBackground';
import './Experience.css';

const Experience: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section id="experience" className="experience section" ref={ref}>
      <AnimatedBackground 
        particleCount={30} 
        particleColor="#f97316" 
        connectionColor="#fb923c" 
      />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My journey through internships and collaborative roles
        </motion.p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            >
              <div className="experience-dot" />
              <div className="experience-content card-glass">
                <div className="experience-header">
                  <div className="experience-title-area">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta-area">
                    <div className="experience-duration">
                      <Calendar size={14} />
                      {exp.duration}
                    </div>
                    <div className="experience-location">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="experience-description">
                  {exp.description.map((bullet: string, i: number) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="experience-technologies">
                  {exp.technologies.map((tech: string) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.certificateUrl && (
                  <motion.a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-certificate-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Award size={16} />
                    View Internship Certificate
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;