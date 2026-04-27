import React, { useEffect, useState } from 'react';
import { Trophy, Award, Calendar, ExternalLink } from 'lucide-react';
import { achievements, competitiveProgramming } from '../../data/portfolioData';
import './Achievements.css';

const Achievements: React.FC = () => {
  const [codeforcesRating, setCodeforcesRating] = useState<string>('Loading...');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const icpcImages = [
    { src: '/assets/ICPC2024.jpg', alt: 'ICPC 2024' },
    { src: '/assets/ICPC2025.jpg', alt: 'ICPC 2025' },
  ];

  useEffect(() => {
    fetch('https://codeforces.com/api/user.info?handles=Dark__Seith')
      .then((response) => response.json())
      .then((data) => {
        if (data.result && data.result[0]) {
          const user = data.result[0];
          setCodeforcesRating(`Max: ${user.maxRating} (${user.maxRank})`);
        }
      })
      .catch(() => {
        setCodeforcesRating('Max: 1400+');
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % icpcImages.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [icpcImages.length]);

  const cpProfiles = competitiveProgramming.map((profile) =>
    profile.platform === 'Codeforces' ? { ...profile, rating: codeforcesRating } : profile
  );

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <h2 className="section-title">Achievements & Recognition</h2>

        <p className="section-subtitle">
          Recognition in competitive programming and professional development
        </p>

        <div className="icpc-highlight">
          <div className="icpc-content">
            <div className="icpc-text">
              <h3 className="icpc-title">ICPC Amritapuri Regional Onsite 2024 and 2025</h3>
              <p className="icpc-description">
                Represented my college at the ICPC Regional Amritapuri Onsite in both years, tackling complex
                problems as a team under strict contest constraints.
              </p>
              <a
                href="/assets/2025-ICPC Asia Amritapuri Multisite RC 2024-Parthiv Jasoliya-PLACE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="icpc-certificate"
              >
                <Award size={18} />
                View Certificate
              </a>
            </div>

            <div className="icpc-gallery">
              {icpcImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`icpc-gallery-image ${index === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="cp-section">
          <h3 className="subsection-title">Competitive Programming</h3>
          <div className="cp-grid">
            {cpProfiles.map((profile) => (
              <a
                key={profile.platform}
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-card"
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
              </a>
            ))}
          </div>
        </div>

        <div className="achievements-grid">
          <h3 className="subsection-title">Other Achievements</h3>
          <div className="achievements-list">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="achievement-card">
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
                    <span className={`achievement-category ${achievement.category}`}>{achievement.category}</span>

                    {achievement.link && achievement.link !== '#' && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-link-button"
                      >
                        <Award size={14} />
                        View Certificate
                      </a>
                    )}

                    {achievement.certificates &&
                      achievement.certificates.map((cert) => (
                        <a
                          key={cert.url}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="achievement-link-button secondary"
                        >
                          <Award size={14} />
                          {cert.label}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
