import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Project and Experiences' },
  { id: 'toolkit', label: 'Tool' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact Me' }
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map(l => document.getElementById(l.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.35, 0.5], rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button className="navbar-brand" onClick={() => handleClick('home')} aria-label="Go to Home">
          ZA.
        </button>

        <nav className="navbar-links" aria-label="Primary">
          {links.map(link => (
            <button
              key={link.id}
              className={`navbar-link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar-mobile" role="dialog" aria-label="Navigation menu">
          {links.map(link => (
            <button
              key={link.id}
              className={`navbar-mobile-link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

