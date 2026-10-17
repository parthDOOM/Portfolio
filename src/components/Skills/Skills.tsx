import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import { Skill } from '../../types';
import './Skills.css';

const categories: { id: Skill['category']; title: string }[] = [
  { id: 'programming', title: 'Languages' },
  { id: 'ml', title: 'AI, ML & Data' },
  { id: 'web', title: 'Web Development' },
  { id: 'tools', title: 'Cloud & Tools' },
];

const Skills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-groups">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="skill-group"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <h3 className="skill-group-title">{category.title}</h3>
              <ul className="skill-chips">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <li key={skill.name} className="skill-chip">
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
