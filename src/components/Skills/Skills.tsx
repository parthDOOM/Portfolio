import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import { Skill } from '../../types';
import AnimatedBackground from '../AnimatedBackground';
import './Skills.css';

const Skills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState<string>('web');
  const [hasMainAnimated, setHasMainAnimated] = useState(() => {
    return sessionStorage.getItem('skills-main-animated') === 'true';
  });

  useEffect(() => {
    if (isInView && !hasMainAnimated) {
      setHasMainAnimated(true);
      sessionStorage.setItem('skills-main-animated', 'true');
    }
  }, [isInView, hasMainAnimated]);

  useEffect(() => {
    const handleBeforeUnload = () => {
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
  const totalProjects = 50; 
  const problemsSolved = "1500+";
  const topRating = "2100+";

  const categories = [
    { id: 'web', title: 'Web Development' },
    { id: 'programming', title: 'Languages' },
    { id: 'ml', title: 'AI & ML' },
    { id: 'tools', title: 'Tools' }
  ];

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
    const animationKey = `skill-animated-${skill.name}`;
    const [hasAnimated, setHasAnimated] = React.useState(() => {
      return sessionStorage.getItem(animationKey) === 'true';
    });

    React.useEffect(() => {
      if (parentAnimated && !hasAnimated) {
        const timer = setTimeout(() => {
          setHasAnimated(true);
          sessionStorage.setItem(animationKey, 'true');
        }, index * 50);
        return () => clearTimeout(timer);
      }
    }, [parentAnimated, hasAnimated, index, animationKey]);

    return (
      <div
        className="skill-item"
        style={{
          opacity: hasAnimated ? 1 : 0,
          transform: hasAnimated ? 'translateX(0)' : 'translateX(-20px)',
          transition: hasAnimated ? 'none' : `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`
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
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{problemsSolved}</span>
            <span className="stat-label">Solved</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{topRating}</span>
            <span className="stat-label">Top Rating</span>
          </div>
        </motion.div>

        {/* Tab Selector */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <div className="active-skills-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="skills-list-active"
            >
              {skillsByCategory[activeCategory]?.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  index={index}
                  parentAnimated={true}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;