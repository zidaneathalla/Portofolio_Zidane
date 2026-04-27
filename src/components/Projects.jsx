import '../styles/Projects.css';
import Reveal from './Reveal';
import cifosImg from '../assets/CIFOS.png';
import mitrajasaImg from '../assets/Mita-Jasa.png';
import iquariumImg from '../assets/iQuarium.png';
import teralImg from '../assets/Teral.png';
import lfcImg from '../assets/Liverpool-Web-Design.png';
import guangdongImg from '../assets/Student-Exchange.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'CIFOS Website',
      subtitle: 'UI/UX Design and Front End',
      description: 'CIFOS is a web-based restaurant management system designed to support and simplify restaurant operations through a digital platform. The system allows restaurants to manage reservations, organize menu items, and share information with customers in a more efficient and structured way.',
      image: cifosImg,
      link: 'https://www.figma.com/design/2vX4dqcrHTpPJeq0nTGXEf/CIFOS-Website-Design',
    },
    {
      id: 2,
      title: 'Mitra Jasa Power Website',
      subtitle: 'UI/UX Design and Front End',
      description: 'Developed a company profile website for Mitra Jasa Power, a logistics company specializing in cargo and goods delivery, featuring a professional and user-friendly interface. Additionally, built an admin system to manage shipment data with real-time monitoring.',
      image: mitrajasaImg,
      link: 'https://www.figma.com/design/pYrFPryw9SfMIxviNkDYqr/Design-Web-PT-Mitra-Jasa-Power',
    },
    {
      id: 3,
      title: 'iQuarium',
      subtitle: 'UI/UX Design and Mobile App',
      description: 'Developed an Android-based application built using Android Studio, designed as a marketplace for buying and selling ornamental fish and aquarium equipment, while also providing informative content about various fish species.',
      image: iquariumImg,
      link: 'https://www.figma.com/design/dVW50ssPOJCiTsNyQ11K73/iQuarium',
    },
    {
      id: 4,
      title: 'Teral',
      subtitle: 'Designer and Developer',
      description: 'An interactive board and card game that integrates Unity-based card scanning technology to detect physical cards and trigger quiz challenges, creating a more immersive and engaging gameplay experience.',
      image: teralImg,
      link: 'https://www.youtube.com/watch?v=eU6VEsyJn1Y',
    },
    {
      id: 5,
      title: 'Liverpool Marketplace Website Design',
      subtitle: 'Web Design',
      description: 'Designed a marketplace website concept inspired by Liverpool, focusing on creating a clean, user-friendly interface and seamless shopping experience. This project was developed as part of an academic assignment, emphasizing UI/UX principles, responsive layout, and modern web design trends.',
      image: lfcImg,
      link: 'https://www.figma.com/design/FeOQCv2VwDB1pV0Z74G8HG/DESIGN-1?t=oahdgneIyckZRwzg-1',
    },
    {
      id: 6,
      title: 'Student Exchange Guangdong Construction Polytechnic',
      subtitle: 'International Experience',
      description: 'Selected as a fully funded student exchange participant, I attended a one-month program at Guangdong Construction Polytechnic, China, from October 13 to November 11, 2025. During the program, I completed various courses including Drones, Chinese Culture Experience, Chinese Architectural Culture, Chinese Language & Culture, Data Analysis & Visualization, Chinese Sports Culture, Chinese Music Culture, Motion Graphics Design, and 3D Modeling. This experience enhanced my technical knowledge, cross-cultural understanding, and adaptability in an international academic setting.',
      image: guangdongImg,
      link: 'https://drive.google.com/drive/folders/199mnHnbDktCaM96opJHYf8X1qx9JhEEX?usp=sharing',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <Reveal as="div" className="projects-container">
        <h2 className="section-title">Project Design and <span className="highlight">Experiences</span></h2>
        <p className="section-subtitle">
          A selection of design work, front-end builds, and meaningful experiences I have been part of.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card project-card-${index + 1}`}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image-img"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-link">Learn More →</div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
