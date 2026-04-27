import React, { useRef } from 'react';
import '../styles/AboutMe.css';
import profileImage from '../assets/Zidane.jpeg';
import RotatingText from '../component/RotatingText';
import Reveal from './Reveal';

const AboutMe = () => {
  const sectionRef = useRef(null);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        <Reveal as="div" className="about-content">
          <div className="about-image-wrapper">
            <div className="image-glow"></div>
            <img src={profileImage} alt="Zidane Ali Athalla" className="about-image" />
            <div className="experience-badge">
              <span className="badge-number">5+</span>
              <span className="badge-text">Projects<br/>Experiences</span>
            </div>
          </div>
          
          <div className="about-text-content">
            <div className="section-header">
              <h2 className="section-title">Hi! I'm <span className="highlight">Zidane</span></h2>
            </div>
            
            <div className="about-description">
              <p className="lead-text">
                I am a 6th-semester student at IPB University majoring in Software Engineering Technology, with hands-on experience in front-end development and UI/UX design, building responsive user-friendly interfaces that feel as good as they look.
              </p>
              
              <p className="lead-text">
                Through active organizational involvement, I have sharpened my teamwork, communication, and creativity skills that translate directly into how I collaborate on real-world products.
              </p>
              
              <p className="lead-text">
                I am passionate about continuously developing my expertise in UI/UX, front-end development, data visualization, and graphic design.
              </p>
            </div>

            <div className="about-ready">
              <div className="about-ready-pill" role="note" aria-label="I'm ready for rotating skills">
                <span className="about-ready-label">I'm ready for</span>
                <RotatingText
                  texts={['UI/UX Design', 'Front-End Development', 'Data Visualization', 'Graphic Design']}
                  mainClassName="about-ready-rotating"
                  staggerFrom="last"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  splitLevelClassName="about-ready-split"
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="characters"
                  auto
                  loop
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
