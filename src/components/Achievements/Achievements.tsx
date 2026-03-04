import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Calendar, ExternalLink } from 'lucide-react';
import { achievements, competitiveProgramming } from '../../data/portfolioData';
import AnimatedBackground from '../AnimatedBackground';
import './Achievements.css';

const Achievements: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [codeforcesRating, setCodeforcesRating] = useState<string>('Loading...');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const icpcImages = ['/assets/ICPC2024.jpg', '/assets/ICPC2025.jpg'];

  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % icpcImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Fetch Codeforces rating
    fetch('https://codeforces.com/api/user.info?handles=Dark__Seith')
      .then(response => response.json())
      .then(data => {
        if (data.result && data.result[0]) {
          const user = data.result[0];
          setCodeforcesRating(`Max: ${user.maxRating} (${user.maxRank})`);
        }
      })
      .catch(error => {
        console.error('Error fetching Codeforces data:', error);
        setCodeforcesRating('Max: 1400+');
      });
  }, []);

  const cpProfiles = competitiveProgramming.map(profile => 
    profile.platform === 'Codeforces' 
      ? { ...profile, rating: codeforcesRating }
      : profile
  );

  return (
    <section id="achievements" className="achievements section" ref={ref}>
      <AnimatedBackground 
        particleCount={30} 
        particleColor="#14b8a6" 
        connectionColor="#5eead4" 
      />
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Recognition
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Recognition in competitive programming and professional development
        </motion.p>

        {/* ICPC Achievement Highlight */}
        <motion.div
          className="icpc-highlight"
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="icpc-content">
            <div className="icpc-text">
              <h3 className="icpc-title">ICPC Amritapuri Regional Onsite 2024 and 2025</h3>
              <p className="icpc-description">
                Represented my college at the ICPC Regional Amritapuri Onsite 2024 and 2025, one of the top competitive programming contests. It was a great experience tackling challenging problems and collaborating as a team under tight deadlines.
              </p>
              <motion.a
                href="/assets/2025-ICPC Asia Amritapuri Multisite RC 2024-Parthiv Jasoliya-PLACE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="icpc-certificate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Award size={18} />
                View Certificate
              </motion.a>
            </div>
            <div className="icpc-image">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={icpcImages[currentImageIndex]}
                  src={icpcImages[currentImageIndex]} 
                  alt={`ICPC ${2024 + currentImageIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Competitive Programming Platforms */}
        <motion.div
          className="cp-section"
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="subsection-title">Competitive Programming</h3>
          <div className="cp-grid">
            {cpProfiles.map((profile, index) => (
              <motion.a
                key={profile.platform}
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-card"
                initial={{ opacity: 0, y: 30 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="cp-icon">
                  <img src={profile.icon} alt={profile.platform} />
                </div>
                <div className="cp-info">
                  <h4 className="cp-platform">{profile.platform}</h4>
                  <p className="cp-rating">{profile.rating}</p>
                  <p className="cp-username">@{profile.username}</p>
                </div>
                <ExternalLink size={16} className="cp-link-icon" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Other Achievements */}
        <motion.div
          className="achievements-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="subsection-title">Other Achievements</h3>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="achievement-card"
                initial={{ opacity: 0, x: -30 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="achievement-icon">
                  <Trophy size={24} />
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                  <div className="achievement-meta">
                    <span className="achievement-date">
                      <Calendar size={14} />
                      {achievement.date}
                    </span>
                    <span className={`achievement-category ${achievement.category}`}>
                      {achievement.category}
                    </span>
                    
                    {/* Action buttons beside the tag */}
                    {achievement.link && achievement.link !== "#" && (
                      <motion.a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Award size={14} />
                        View Certificate
                      </motion.a>
                    )}
                    
                    {achievement.certificates && achievement.certificates.map((cert) => (
                      <motion.a
                        key={cert.url}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link-button secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Award size={14} />
                        {cert.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;