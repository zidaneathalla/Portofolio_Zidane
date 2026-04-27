import { useEffect, useState } from 'react';
import '../styles/HeroSection.css';
import Aurora from './Aurora';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Aurora Background */}
      <Aurora 
        colorStops={['#89f7fe', '#66a6ff', '#89f7fe']}
        amplitude={1.2}
        blend={0.6}
        speed={1.0}
      />
      
      {/* Content Overlay */}
      <div className="hero-wrapper">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          {/* Portfolio Badge */}
          <div className="portfolio-badge">
            <span className="badge-dot"></span>
            <span>Portfolio</span>
          </div>

          {/* Animated Title */}
          <div className="animated-text-wrapper">
            <h1 className="animated-title">
              Hello!, I&apos;m Open for Work and{' '}
              <span className="heading-accent">Collaboration</span>!
            </h1>
          </div>

          {/* Description Section */}
          <div className="hero-description-section">
            <p className="hero-description">
              I'm Zidane Ali Athalla currently a Software Engineering student at IPB University Vocational School, passionate about crafting meaningful and user-focused digital experiences.
            </p>
          </div>

          {/* Call to Action */}
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              <span>Get in Touch</span>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1-imo1Px3_K6inz9t2_Pwnz4a3NRfGVKS?usp=sharing"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download CV</span>
              <span className="download-icon">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
