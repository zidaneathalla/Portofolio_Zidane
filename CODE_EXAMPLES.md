# Code Examples & Advanced Customization

Kumpulan contoh code untuk customization yang lebih advanced dari template portfolio Anda.

## 🎨 Mengubah Animasi

### Contoh 1: Ubah Kecepatan Typing Animation

File: `src/components/HeroSection.jsx`

**Default (50ms per karakter):**
```javascript
const typingSpeed = 50;
```

**Lebih cepat (25ms):**
```javascript
const typingSpeed = 25;
```

**Lebih lambat (100ms):**
```javascript
const typingSpeed = 100;
```

---

### Contoh 2: Ubah Duration Floating Animation

File: `src/styles/HeroSection.css`

**Default (6 detik):**
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}
```

**Ubah durasi di class yang menggunakan animasi:**
```css
.image-placeholder {
  animation: float 3s ease-in-out infinite;  /* 3s = lebih cepat */
}
```

---

### Contoh 3: Tambah Slide-In Delay ke Project Cards

File: `src/styles/Projects.css`

**Already implemented! Lihat:**
```css
.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
```

Untuk 5 card atau lebih, tambahkan:
```css
.project-card:nth-child(5) { animation-delay: 0.5s; }
.project-card:nth-child(6) { animation-delay: 0.6s; }
```

---

## 🎯 Menambah Komponen Baru

### Contoh: Tambah Education Section

**File baru: `src/components/Education.jsx`**
```jsx
import '../styles/Education.css';

export default function Education() {
  const education = [
    {
      school: 'IPB University',
      program: 'Software Engineering Technology',
      level: 'Vocational School (Semester 6)',
      year: '2024-2026',
      achievements: ['3.8 GPA', 'Dean\'s List'],
    },
    // Tambah education lainnya
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{edu.school}</h3>
                <p className="program">{edu.program}</p>
                <p className="level">{edu.level}</p>
                <p className="year">{edu.year}</p>
                <ul className="achievements">
                  {edu.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**File style: `src/styles/Education.css`**
```css
.education-section {
  padding: 100px 20px;
  background: white;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  animation: slideInLeft 0.8s ease-out backwards;
}

.timeline-marker {
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  margin-top: 5px;
  flex-shrink: 0;
}

.timeline-content {
  padding-bottom: 40px;
  border-left: 2px solid #e2e8f0;
  padding-left: 30px;
  margin-left: -30px;
}

.timeline-content h3 {
  color: #1a202c;
  margin-bottom: 5px;
}

.program {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 5px;
}

.level {
  color: #718096;
  font-size: 14px;
}

.year {
  color: #a0aec0;
  font-size: 13px;
  margin-bottom: 15px;
}

.achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.achievements li {
  color: #4a5568;
  font-size: 14px;
  margin: 5px 0;
}

.achievements li::before {
  content: "✓ ";
  color: #667eea;
  font-weight: bold;
  margin-right: 8px;
}

@media (max-width: 768px) {
  .timeline-item {
    gap: 20px;
  }
  
  .timeline-content {
    padding-left: 20px;
  }
}
```

**Tambah di `src/App.jsx`:**
```jsx
import Education from './components/Education'

function App() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Education />  {/* ← Tambahkan di sini */}
      <Toolkit />
      <Contact />
    </>
  )
}
```

---

## 🔗 Menambah Experience/Work Timeline

**Mirip Education, buat `src/components/Experience.jsx`:**

```jsx
export default function Experience() {
  const experiences = [
    {
      company: 'CIFOS Restaurant',
      role: 'UI/UX Designer & Front-end Developer',
      period: 'Mar 2024 - Sep 2024',
      description: 'Designed dan developed restaurant management system interface.',
      technologies: ['React', 'Figma', 'Tailwind CSS'],
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      period: 'Jan 2024 - Present',
      description: 'Develop responsive websites untuk various clients.',
      technologies: ['React', 'Next.js', 'MongoDB'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <h3>{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
              <div className="tech-tags">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 💬 Mengganti Form dengan EmailJS

Untuk mengirim email dari form, gunakan EmailJS:

**Install:**
```bash
npm install @emailjs/browser
```

**Update `src/components/Contact.jsx`:**
```jsx
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init("YOUR_PUBLIC_KEY");  // Get dari emailjs.com

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await emailjs.sendForm(
        'service_xxxxx',     // Service ID dari emailjs
        'template_xxxxx',    // Template ID dari emailjs
        formRef.current
      );
      alert('Email sent successfully!');
      formRef.current.reset();
    } catch (error) {
      alert('Failed to send email');
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

---

## 🎨 Menambah Dark Mode

**Buat toggle di HeroSection atau Navbar:**

```jsx
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  if (isDark) {
    document.documentElement.style.colorScheme = 'dark';
  } else {
    document.documentElement.style.colorScheme = 'light';
  }
}, [isDark]);

return (
  <button onClick={() => setIsDark(!isDark)}>
    {isDark ? '☀️' : '🌙'}
  </button>
);
```

**CSS Variables untuk dark mode (di `src/styles/globals.css`):**
```css
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #a78bfa;
    --text-dark: #f3f4f6;
    --bg-light: #1f2937;
  }
}
```

---

## 🔍 SEO Optimization

**Update meta tags di `index.html`:**

```html
<meta name="description" content="Portfolio of Zidane, Software Engineering student at IPB University specializing in front-end development." />
<meta name="keywords" content="portfolio, front-end, React, developer, Indonesia" />
<meta name="author" content="Zidane Athalla" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Open Graph untuk social sharing -->
<meta property="og:title" content="Zidane's Portfolio" />
<meta property="og:description" content="Front-End Developer & UI/UX Designer" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
```

---

## 📊 Tambah Navbar/Header

**File baru: `src/components/Navbar.jsx`**

```jsx
import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">ZA.</div>
        
        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('toolkit')}>Toolkit</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
```

**CSS:** `src/styles/Navbar.css`
```css
.navbar {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-size: 24px;
  font-weight: 700;
  color: #667eea;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-menu a {
  cursor: pointer;
  color: #1a202c;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-menu a:hover {
  color: #667eea;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .nav-menu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: white;
    padding: 1rem;
    display: none;
  }

  .nav-menu.active {
    display: flex;
  }
}
```

---

## 🎬 Menambah Scroll Animation untuk Section

```jsx
import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

// Usage dalam component:
const ref = useScrollAnimation();
return <section ref={ref} className="fade-in">...</section>;
```

---

## 🚀 Performance Optimization Tips

1. **Lazy load images:**
```jsx
<img src="..." loading="lazy" />
```

2. **Use React.memo untuk prevent re-renders:**
```jsx
export default React.memo(ProjectCard);
```

3. **Code splitting dengan React.lazy:**
```jsx
const Education = React.lazy(() => import('./components/Education'));
```

---

Semua contoh ini bisa dikombinasikan sesuai kebutuhan Anda! 🚀
