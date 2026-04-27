import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../../data/portfolioData';
import './Footer.css';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: contactInfo.github,
      icon: <img src="/assets/github-142-svgrepo-com.svg" alt="GitHub" width={22} height={22} />,
    },
    {
      name: 'LinkedIn',
      url: contactInfo.linkedin,
      icon: <img src="/assets/linkedin-161-svgrepo-com.svg" alt="LinkedIn" width={22} height={22} />,
    },
    {
      name: 'Email',
      url: `mailto:${contactInfo.email}`,
      icon: (
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      name: 'Codeforces',
      url: contactInfo.codeforces,
      icon: <img src="/assets/codeforces-svgrepo-com.svg" alt="Codeforces" width={22} height={22} />,
    },
    {
      name: 'CodeChef',
      url: contactInfo.codechef,
      icon: <img src="/assets/codechef-svgrepo-com.svg" alt="CodeChef" width={22} height={22} />,
    },
    {
      name: 'LeetCode',
      url: contactInfo.leetcode,
      icon: <img src="/assets/leetcode-svgrepo-com.svg" alt="LeetCode" width={22} height={22} />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-top">
            <div className="footer-brand">
              <h3 className="footer-title">Let&apos;s Connect</h3>
              <p className="footer-subtitle">
                Always open to discussing new opportunities and interesting projects.
              </p>
            </div>

            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              <ArrowUpRight size={18} />
              <span>Back to top</span>
            </motion.button>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <div className="footer-social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                >
                  {link.icon}
                  <span className="footer-social-tooltip">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="footer-info">
              <p className="copyright">(c) 2026 Parthiv Jasoliya. Designed and built with care.</p>
              <p className="tech-stack">Built with React, TypeScript and Framer Motion</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
