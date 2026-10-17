import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { contactInfo } from '../../data/portfolioData';
import './Contact.css';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const emptyForm = { name: '', email: '', subject: '', message: '' };

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState(emptyForm);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formStatus !== 'sending') setFormStatus('idle');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submitted to Netlify Forms; the static twin of this form lives in public/index.html
  // so Netlify can detect it at deploy time.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const body = new URLSearchParams(
      Array.from(new FormData(e.currentTarget).entries()).map(
        ([key, value]) => [key, String(value)] as [string, string]
      )
    );

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      setFormData(emptyForm);
      setFormStatus('sent');
    } catch {
      setFormStatus('error');
    }
  };

  const mailtoFallback = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Contact'
  )}&body=${encodeURIComponent(
    `Hi Parthiv,\n\n${formData.message}\n\n${formData.name}${formData.email ? ` (${formData.email})` : ''}`
  )}`;

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether it's a role, a collaboration or a question about something I've built, my inbox is open.
        </motion.p>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="contact-info-title">Reach me directly</h3>
            <p className="contact-info-description">
              Email is the fastest way to reach me — I usually reply within a couple of days.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${contactInfo.email}`} className="contact-method">
                <div className="contact-method-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-method-info">
                  <h4>Email</h4>
                  <p>{contactInfo.email}</p>
                </div>
              </a>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-info">
                  <h4>Location</h4>
                  <p>Surat, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Connect with me</h4>
              <div className="contact-social-links">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>

                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="form-honeypot" aria-hidden="true">
                <label>
                  Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={formStatus === 'sending'}
              >
                <Send size={18} />
                {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              <p className="form-status" role="status" aria-live="polite">
                {formStatus === 'sent' && "Thanks — your message is on its way. I'll get back to you soon."}
                {formStatus === 'error' && (
                  <>
                    Something went wrong sending that.{' '}
                    <a href={mailtoFallback}>Send it by email instead</a>.
                  </>
                )}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
