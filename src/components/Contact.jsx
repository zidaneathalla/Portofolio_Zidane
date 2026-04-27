import { useState } from 'react';
import '../styles/Contact.css';
import Reveal from './Reveal';

const DEVICON =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xojybzeb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Reveal as="div" className="contact-container">
        <h2 className="section-title">
          Let&apos;s build something <span className="heading-accent">iconic.</span>
        </h2>
        <p className="section-subtitle">
          Currently accepting new projects. Send me a message and let's discuss how we can work together.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3 className="contact-label">Phone</h3>
              <p className="contact-value">+62 813-8758-5957</p>
              <button className="copy-btn" onClick={() => navigator.clipboard.writeText('+62 813-8758-5957')}>
                Copy
              </button>
            </div>

            <div className="contact-item">
              <h3 className="contact-label">Email</h3>
              <p className="contact-value">zidaneaathalla@gmail.com</p>
              <button className="copy-btn" onClick={() => navigator.clipboard.writeText('zidaneaathalla@gmail.com')}>
                Copy
              </button>
            </div>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/zidaneaath"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-link--icon"
                aria-label="LinkedIn"
              >
                <img
                  src={`${DEVICON}/linkedin/linkedin-original.svg`}
                  alt=""
                  width={28}
                  height={28}
                  decoding="async"
                />
              </a>
              <a
                href="https://www.instagram.com/zidaneaath"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-link--icon"
                aria-label="Instagram"
              >
                <img
                  src="https://cdn.simpleicons.org/instagram/ffffff"
                  alt=""
                  width={28}
                  height={28}
                  decoding="async"
                />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </Reveal>

      <footer className="portfolio-footer">
        <p>© 2026 Zidane Athalla. All rights reserved.</p>
      </footer>
    </section>
  );
}
