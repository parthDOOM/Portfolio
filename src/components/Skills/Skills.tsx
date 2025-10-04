import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import { Skill } from '../../types';
import AnimatedBackground from '../AnimatedBackground';
import './Skills.css';

const Skills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasMainAnimated, setHasMainAnimated] = useState(() => {
    // Check if the main skills section was previously animated
    return sessionStorage.getItem('skills-main-animated') === 'true';
  });

  useEffect(() => {
    if (isInView && !hasMainAnimated) {
      setHasMainAnimated(true);
      // Persist the main animation state
      sessionStorage.setItem('skills-main-animated', 'true');
    }
  }, [isInView, hasMainAnimated]);

  // Clear animation state on page refresh/reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Clear all skills-related animation states on page unload
      Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith('skill-animated-') || key === 'skills-main-animated') {
          sessionStorage.removeItem(key);
        }
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Calculate statistics
  const totalSkills = skills.length;
  // const totalProjects = skills.reduce((sum, skill) => sum + skill.projects - 1, 0);
  const totalProjects = 53;

  const expertSkills = skills.filter(skill => skill.level >= 4).length;

  const categoryTitles = {
    web: 'Web Development',
    programming: 'Programming Languages',
    ml: 'Machine Learning',
    tools: 'Tools & Technologies'
  };

  const getExperienceLabel = (level: number) => {
    switch (level) {
      case 5: return 'Expert';
      case 4: return 'Proficient';
      case 3: return 'Comfortable';
      case 2: return 'Learning';
      case 1: return 'Beginner';
      default: return 'Learning';
    }
  };

  const getExperienceColor = (level: number) => {
    switch (level) {
      case 5: return 'var(--accent-primary)';
      case 4: return 'var(--accent-secondary)';
      case 3: return 'var(--accent-success)';
      case 2: return 'var(--accent-warning)';
      case 1: return 'var(--text-secondary)';
      default: return 'var(--text-secondary)';
    }
  };

  const SkillBar: React.FC<{ skill: Skill; index: number; parentAnimated: boolean }> = ({ skill, index, parentAnimated }) => {
    // Use a persistent key based on skill name to track animation state
    const animationKey = `skill-animated-${skill.name}`;
    const [hasAnimated, setHasAnimated] = React.useState(() => {
      // Check if this skill was previously animated
      return sessionStorage.getItem(animationKey) === 'true';
    });

    React.useEffect(() => {
      if (parentAnimated && !hasAnimated) {
        // Add a small delay based on index to create staggered effect
        const timer = setTimeout(() => {
          setHasAnimated(true);
          // Persist the animation state
          sessionStorage.setItem(animationKey, 'true');
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [parentAnimated, hasAnimated, index, animationKey]);

    return (
      <div
        className="skill-item"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? 'translateX(0)' : 'translateX(-20px)',
          transition: hasAnimated ? 'none' : `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
        }}
      >
        <div className="skill-header">
          <span className="skill-name">{skill.name}</span>
          <div className="skill-meta">
            <span 
              className="skill-level"
              style={{ color: getExperienceColor(skill.level) }}
            >
              {getExperienceLabel(skill.level)}
            </span>
            <span className="skill-projects">{skill.projects} projects</span>
          </div>
        </div>
        <div className="skill-experience">
          <span className="experience-time">{skill.experience}</span>
          <div className="skill-dots">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={`skill-dot ${dot <= skill.level ? 'active' : ''} ${hasAnimated ? 'animated' : ''}`}
                style={{
                  transform: hasAnimated ? 'scale(1)' : 'scale(0)',
                  transition: hasAnimated ? 'none' : `transform 0.3s ease ${(index * 0.1 + dot * 0.1)}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="skills section" ref={ref}>
      <AnimatedBackground 
        particleCount={30} 
        particleColor="#f97316" 
        connectionColor="#fb923c" 
      />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={hasMainAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={hasMainAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <motion.div
          className="skills-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={hasMainAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat-item">
            <span className="stat-number">{totalSkills}+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{totalProjects}+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{expertSkills}</span>
            <span className="stat-label">Expert Level</span>
          </div>
        </motion.div>

        <div className="skills-grid">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={hasMainAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 + 0.3 }}
            >
              <h3 className="category-title">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              <div className="skills-list">
                {categorySkills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    parentAnimated={hasMainAnimated}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;