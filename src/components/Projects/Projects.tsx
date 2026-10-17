import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, Github, Download, X } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import './Projects.css';

type Filter = 'featured' | 'all';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible, onSelect }) => (
  <motion.div
    className="project-card"
    role="button"
    tabIndex={0}
    aria-label={`View details for ${project.title}`}
    initial={{ opacity: 0, y: 30 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    onClick={() => onSelect(project)}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect(project);
      }
    }}
  >
    <div className="project-image">
      <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
      <div className="project-overlay">
        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title} live`}
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
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title} source code`}
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
              onClick={(e) => e.stopPropagation()}
              aria-label={`Download ${project.title}`}
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

      <div className="project-tech-container">
        <div className="project-tech-scroll">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={24} />
        </button>

        <div className="modal-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="modal-info">
          <div className="modal-header">
            <h2 id="project-modal-title" className="modal-title">{project.title}</h2>
            {project.featured && (
              <span className="featured-badge">Featured</span>
            )}
          </div>

          <p id="project-modal-description" className="modal-description">{project.fullDescription}</p>

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
};

const featuredCount = projects.filter((project) => project.featured).length;

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Filter>('featured');
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const closeModal = React.useCallback(() => setSelectedProject(null), []);

  const filteredProjects = filter === 'featured'
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Things I've built across web, mobile, machine learning and hardware
        </motion.p>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            className={`filter-button ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
            aria-pressed={filter === 'featured'}
          >
            Featured ({featuredCount})
          </button>
          <button
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            aria-pressed={filter === 'all'}
          >
            All Projects ({projects.length})
          </button>
        </motion.div>

        <div className={`projects-grid ${filter === 'featured' ? 'is-featured' : ''}`}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isInView}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
