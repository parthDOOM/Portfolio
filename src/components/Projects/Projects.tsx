import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Github, Download, X } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import AnimatedBackground from '../AnimatedBackground';
import './Projects.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasMainAnimated, setHasMainAnimated] = useState(() => {
    // Check if the main projects section was previously animated
    return sessionStorage.getItem('projects-main-animated') === 'true';
  });

  React.useEffect(() => {
    if (isInView && !hasMainAnimated) {
      setHasMainAnimated(true);
      // Persist the main animation state
      sessionStorage.setItem('projects-main-animated', 'true');
    }
  }, [isInView, hasMainAnimated]);

  // Clear animation state on page refresh/reload
  React.useEffect(() => {
    const handleBeforeUnload = () => {
      // Clear all projects-related animation states on page unload
      Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith('project-animated-') || key === 'projects-main-animated') {
          sessionStorage.removeItem(key);
        }
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  const ProjectCard: React.FC<{ project: Project; index: number; parentAnimated: boolean }> = ({ project, index, parentAnimated }) => {
    const animationKey = `project-animated-${project.title}`;
    const [hasAnimated, setHasAnimated] = React.useState(() => {
      return sessionStorage.getItem(animationKey) === 'true';
    });
    const [shouldAnimate, setShouldAnimate] = React.useState(false);

    React.useEffect(() => {
      if (parentAnimated && !hasAnimated) {
        const timer = setTimeout(() => {
          setShouldAnimate(true);
          setTimeout(() => {
            setHasAnimated(true);
            sessionStorage.setItem(animationKey, 'true');
          }, 500 + (index * 50));
        }, index * 50);
        return () => clearTimeout(timer);
      }
    }, [parentAnimated, hasAnimated, index, animationKey]);

    return (
      <div
        className="project-card"
        style={{
          opacity: hasAnimated || shouldAnimate ? 1 : 0,
          transform: hasAnimated || shouldAnimate ? 'translateY(0)' : 'translateY(30px)',
          transition: hasAnimated ? 'none' : `opacity 0.5s ease, transform 0.5s ease`,
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          if (hasAnimated) {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.transition = 'transform 0.2s ease';
            const projectLinks = e.currentTarget.querySelector('.project-links') as HTMLElement;
            if (projectLinks) {
              projectLinks.style.opacity = '1';
              projectLinks.style.transform = 'scale(1)';
            }
          }
        }}
        onMouseLeave={(e) => {
          if (hasAnimated) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.transition = 'transform 0.2s ease';
            const projectLinks = e.currentTarget.querySelector('.project-links') as HTMLElement;
            if (projectLinks) {
              projectLinks.style.opacity = '0';
              projectLinks.style.transform = 'scale(0.8)';
            }
          }
        }}
        onClick={() => setSelectedProject(project)}
      >
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div
              className="project-links"
              style={{
                opacity: 0,
                transform: 'scale(0.8)',
                transition: 'opacity 0.2s ease, transform 0.2s ease'
              }}
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ transition: 'transform 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ transition: 'transform 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
              )}
              {project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{ transition: 'transform 0.2s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            {project.featured && (
              <span className="featured-badge">Featured</span>
            )}
          </div>
          
          <p className="project-description">{project.description}</p>
          
          <div className="project-tech">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-more">+{project.technologies.length - 3}</span>
            )}
          </div>
        </div>
      </div>
    );
  };



  const ProjectModal: React.FC<{ project: Project }> = ({ project }) => (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={() => setSelectedProject(null)}
        >
          <X size={24} />
        </button>
        
        <div className="modal-image">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="modal-info">
          <div className="modal-header">
            <h2 className="modal-title">{project.title}</h2>
            {project.featured && (
              <span className="featured-badge">Featured</span>
            )}
          </div>
          
          <p className="modal-description">{project.fullDescription}</p>
          
          <div className="modal-tech">
            <h4>Technologies Used:</h4>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="modal-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button primary"
              >
                <ExternalLink size={18} />
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button secondary"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button secondary"
              >
                <Download size={18} />
                Download
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="projects section" ref={ref}>
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
          Featured Projects
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={hasMainAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A showcase of my work spanning web development, mobile apps, and innovative solutions
        </motion.p>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={hasMainAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`filter-button ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured ({projects.filter(p => p.featured).length})
          </button>
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              parentAnimated={hasMainAnimated}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;