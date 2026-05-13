import '../styles/Toolkit.css';
import Reveal from './Reveal';

const DEVICON =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const tools = [
  { name: 'Figma', src: `${DEVICON}/figma/figma-original.svg` },
  { name: 'Python', src: `${DEVICON}/python/python-original.svg` },
  { name: 'HTML', src: `${DEVICON}/html5/html5-original.svg` },
  { name: 'CSS', src: `${DEVICON}/css3/css3-original.svg` },
  { name: 'JavaScript', src: `${DEVICON}/javascript/javascript-original.svg` },
  { name: 'TypeScript', src: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'Node.js', src: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: 'PHP', src: `${DEVICON}/php/php-original.svg` },
  { name: 'React', src: `${DEVICON}/react/react-original.svg` },
  { name: 'Tailwind', src: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Canva', src: `${DEVICON}/canva/canva-original.svg` },
  { name: 'CapCut', src: '/capcut-icon.svg' },
  { name: 'Unity', src: `${DEVICON}/unity/unity-original.svg` },
  { name: 'Blender', src: `${DEVICON}/blender/blender-original.svg` },
  { name: 'RStudio', src: `${DEVICON}/rstudio/rstudio-original.svg` },
  { name: 'NumPy', src: `${DEVICON}/numpy/numpy-original.svg` },
  { name: 'Pandas', src: `${DEVICON}/pandas/pandas-original.svg` },
  { name: 'Matplotlib', src: `${DEVICON}/matplotlib/matplotlib-original.svg` },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="toolkit-section">
      <Reveal as="div" className="toolkit-container">
        <h2 className="section-title">
          The <span className="heading-accent">Toolkit</span>
        </h2>
        <p className="section-subtitle">
          A curated set of tools I use to design, prototype, and ship polished digital experiences.
        </p>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="tool-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="tool-icon">
                <img
                  src={tool.src}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="tool-name">{tool.name}</h3>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
