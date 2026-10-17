import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import { experiences } from '../../data/portfolioData';
import './Experience.css';

const isCurrent = (duration: string) => /present/i.test(duration);

// Open on the current employer; fall back to the most recent role.
const defaultIndex = Math.max(0, experiences.findIndex((exp) => isCurrent(exp.duration)));

const Experience: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const selectTab = (index: number) => {
    setActiveIndex(index);
    const tab = tabRefs.current[index];
    tab?.focus();
    // On narrow screens the tab list scrolls sideways; keep the chosen tab in view.
    tab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const last = experiences.length - 1;
    const keyMap: Record<string, number> = {
      ArrowDown: activeIndex === last ? 0 : activeIndex + 1,
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowUp: activeIndex === 0 ? last : activeIndex - 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    };
    if (e.key in keyMap) {
      e.preventDefault();
      selectTab(keyMap[e.key]);
    }
  };

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where I've worked and what I shipped
        </motion.p>

        <motion.div
          className="experience-layout"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="experience-tabs" role="tablist" aria-label="Employers" aria-orientation="vertical">
            {experiences.map((exp, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={`${exp.company}-${exp.title}`}
                  ref={(el) => { tabRefs.current[index] = el; }}
                  type="button"
                  role="tab"
                  id={`experience-tab-${index}`}
                  aria-selected={selected}
                  aria-controls={`experience-panel-${index}`}
                  tabIndex={selected ? 0 : -1}
                  className={`experience-tab ${selected ? 'active' : ''}`}
                  onClick={() => selectTab(index)}
                  onKeyDown={handleTabKeyDown}
                >
                  {selected && (
                    <motion.span
                      className="experience-tab-indicator"
                      layoutId="experience-tab-indicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="experience-tab-company">
                    {exp.company}
                    {isCurrent(exp.duration) && <span className="experience-current">Now</span>}
                  </span>
                  <span className="experience-tab-meta">{exp.duration}</span>
                </button>
              );
            })}
          </div>

          {/* Every role is rendered into the same grid cell and only the selected one is
              shown, so the card always takes the height of the longest role and switching
              tabs never shifts the sections below. */}
          <div className="experience-panel">
            {experiences.map((exp, index) => {
              const selected = index === activeIndex;
              return (
                <motion.div
                  key={`${exp.company}-${exp.title}`}
                  className="experience-panel-item"
                  role="tabpanel"
                  id={`experience-panel-${index}`}
                  aria-labelledby={`experience-tab-${index}`}
                  hidden={!selected}
                  initial={false}
                  animate={selected ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="experience-panel-header">
                    <h3 className="experience-title">
                      {exp.title} <span className="experience-at">@ {exp.company}</span>
                    </h3>
                    <div className="experience-meta">
                      <span className="meta-item">
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                      <span className="meta-item">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="experience-bullets">
                    {exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="experience-footer">
                    <div className="experience-tech">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="experience-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.certificateUrl && (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-cert-btn"
                      >
                        <Award size={14} />
                        Certificate
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
