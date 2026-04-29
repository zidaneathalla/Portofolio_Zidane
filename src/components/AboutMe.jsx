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
                I am a 6th-semester Software Engineering Technology student at IPB University with hands-on experience in UI/UX design and front-end development. I specialize in creating responsive, user-centered interfaces that balance functionality and visual appeal using technologies like React, Next.js, HTML, JavaScript, etc.
              </p>

              <p className="lead-text">
                I have contributed to multiple projects, including a restaurant management system (CIFOS), a logistics company profile website (Mitra Jasa Power), an interactive Unity-based board and card game (Teral), and a marketplace platform for ornamental fish (iQuarium). Through these experiences, I have developed strong skills in translating user and client requirements into intuitive digital solutions.
              </p>
              
              <p className="lead-text">
                In addition to technical expertise, my involvement in organizations has strengthened my teamwork, communication, and creativity skills that I actively apply when collaborating on real-world products. I am passionate about continuously growing in UI/UX, front-end development, data analysis, data visualization, and graphic design.
              </p>
            </div>

            <div className="about-ready">
              <div className="about-ready-pill" role="note" aria-label="I'm ready for rotating skills">
                <span className="about-ready-label">I'm ready for</span>
                <RotatingText
                  texts={['UI/UX Design', 'Front-End Development', 'Data Visualization', 'Data Analyst', 'Graphic Design']}
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
