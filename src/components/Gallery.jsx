import '../styles/Gallery.css';
import Masonry from '../component/Masonry';
import Reveal from './Reveal';

import g1 from '../assets/Gallery Asset/Gallery1.jpeg';
import g2 from '../assets/Gallery Asset/Gallery2.jpeg';
import g3 from '../assets/Gallery Asset/Gallery3.jpeg';
import g4 from '../assets/Gallery Asset/Gallery4.jpeg';
import g5 from '../assets/Gallery Asset/Gallery5.jpeg';
import g6 from '../assets/Gallery Asset/Gallery6.jpeg';
import g7 from '../assets/Gallery Asset/Gallery7.jpeg';
import g8 from '../assets/Gallery Asset/Gallery8.jpeg';

const items = [
  { id: '1', img: g1, url: g1 },
  { id: '2', img: g2, url: g2 },
  { id: '3', img: g3, url: g3 },
  { id: '4', img: g4, url: g4 },
  { id: '5', img: g5, url: g5 },
  { id: '6', img: g6, url: g6 },
  { id: '7', img: g7, url: g7 },
  { id: '8', img: g8, url: g8 }
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <Reveal as="div" className="gallery-container">
        <h2 className="section-title">
          Photo <span className="heading-accent">Gallery</span>
        </h2>
        <p className="section-subtitle">
          A small collection of moments and Experiences
        </p>

        <div className="gallery-masonry">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>
      </Reveal>
    </section>
  );
}

