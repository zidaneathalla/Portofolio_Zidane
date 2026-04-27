# Quick Start Guide - Customization Cepat

## ⚡ 5 Langkah Cepat untuk Customization

### Langkah 1: Tambah Foto Anda

1. Siapkan foto Anda (PNG atau JPG, minimal 300x300px)
2. Rename ke: `profile.jpg`
3. Taruh di folder: `src/assets/`

Struktur folder Anda sekarang:
```
src/assets/
├── profile.jpg         ← Foto Anda yang baru
├── vite.svg
└── react.svg
```

---

### Langkah 2: Edit HeroSection.jsx

Buka file: `src/components/HeroSection.jsx`

**GANTI INI:**
```jsx
<div className="image-placeholder">
  <div className="placeholder-content">
    <span>📸 Your Portrait</span>
    <p>Add your photo here</p>
    <p className="small-text">Place: src/assets/your-photo.jpg</p>
  </div>
</div>
```

**DENGAN INI:**
```jsx
import profileImg from '../assets/profile.jpg';

// ... (di JSX, ganti section image-placeholder)

<div className="hero-image-wrapper">
  <img src={profileImg} alt="Zidane's Portrait" className="hero-image" />
</div>
```

**Tambahkan CSS di `src/styles/HeroSection.css`:**
```css
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}
```

---

### Langkah 3: Update About Section (Hero Text)

Buka: `src/components/HeroSection.jsx`

Cari ini:
```jsx
const fullText = "Hello!, I'm Open for Work and Collaboration!";
```

Ubah ke:
```jsx
const fullText = "Hello!, I'm Zidane - Ready for Internship!";
```

---

### Langkah 4: Edit Bio/Description

Masih di `HeroSection.jsx`, cari:
```jsx
<h2 className="hero-name">Hi! I'm Zidane</h2>
```

Ubah nama ke nama Anda.

Lalu cari section dengan paragraf, ubah menjadi:
```jsx
<p className="hero-description">
  Saya adalah mahasiswa Teknologi Teknik Panen semester 6 di IPB University
  yang passionate dalam front-end development dan UI/UX design.
</p>
<p className="hero-description">
  Saya memiliki pengalaman dalam membangun responsive user interfaces
  menggunakan React, HTML, CSS, dan JavaScript.
</p>
<p className="hero-description highlight">
  Siap untuk berkontribusi dalam proyek yang meaningful dan terus mengembangkan
  skill di UI/UX, front-end development, dan data visualization.
</p>
```

---

### Langkah 5: Update Projects

Buka: `src/components/Projects.jsx`

Ubah projects array. Contoh:

```javascript
const projects = [
  {
    id: 1,
    title: 'CIFOS Website',
    subtitle: 'UI/UX Design and Front End',
    description: 'Web-based restaurant management system dengan Figma design dan React implementation.',
    image: '🍽️',
    link: 'https://www.figma.com/design/your-project-link',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    subtitle: 'Full Stack Development',
    description: 'Platform e-commerce modern dengan fitur checkout dan payment gateway integration.',
    image: '🛍️',
    link: 'https://your-ecommerce-link.com',
  },
  {
    id: 3,
    title: 'Mobile App Design',
    subtitle: 'UI/UX and Prototype',
    description: 'Desain aplikasi mobile untuk startup dengan user research dan prototyping di Figma.',
    image: '📱',
    link: 'https://www.figma.com/your-mobile-link',
  },
];
```

---

## 📝 Contoh Isi Lengkap (Template)

### Template Hero Section
```jsx
// Bisa juga di edit langsung di HeroSection.jsx

Hi! I'm [Nama Anda]

Saya adalah mahasiswa [Program Studi] semester [X] di [Universitas] 
yang passionate dalam [bidang Anda].

Saya memiliki pengalaman dalam [skill utama], [skill2], dan [skill3]
dengan track record mengerjakan [jumlah] projects professional.

Saya aktif di organisasi dan memiliki skill collaboration yang kuat
serta komitmen untuk continuous learning.

Passion saya adalah [bidang spesifik], [bidang 2], dan [bidang 3].
```

### Template Deskripsi Projects
```
[Nama Project]
[Kategori: UI/UX, Front-End, Full Stack, dll]

[Deskripsi singkat 1-2 kalimat tentang project]
[Hasil/achievement dari project]
[Teknologi yang digunakan]
```

### Template Toolkit/Skills
Tambahkan skills Anda ke array:
```javascript
{ name: 'Figma', icon: '🎨' },
{ name: 'React', icon: '⚛️' },
{ name: 'TypeScript', icon: '📘' },
{ name: 'Tailwind CSS', icon: '🌊' },
{ name: 'Node.js', icon: '🟩' },
{ name: 'MongoDB', icon: '🍃' },
{ name: 'Git', icon: '🔧' },
```

---

## 🎨 Emoji untuk Projects

Popular emoji choices untuk projects:
- 🌐 Web Design
- 🖼️ UI/UX Project
- 📱 Mobile App
- 🛍️ E-Commerce
- 📊 Dashboard
- 🎮 Game Project
- 🔐 Security Project
- 🤖 AI Project
- 💻 Software
- 🎬 Video/Media

---

## 🔗 Update Contact Info

Buka: `src/components/Contact.jsx`

**Update Nomor:**
```jsx
<p className="contact-value">+62 813-8758-5957</p>
```
Ke:
```jsx
<p className="contact-value">+62 XXX-XXXX-XXXX</p>
```

**Update Email:**
```jsx
<p className="contact-value">zidaneaathalla@gmail.com</p>
```
Ke:
```jsx
<p className="contact-value">your-email@gmail.com</p>
```

**Update Social Media:**
```jsx
<a href="https://www.linkedin.com/in/zidaneaath" target="_blank">
  LinkedIn
</a>
<a href="https://www.instagram.com/zidaneaath" target="_blank">
  Instagram
</a>
```

---

## 🎯 Perubahan Warna (Opsional)

Jika ingin mengubah warna dari ungu ke warna lain:

1. Buka: `src/styles/globals.css`
2. Cari bagian `:root`
3. Ubah:

```css
:root {
  --primary-color: #667eea;      /* GANTI INI */
  --secondary-color: #764ba2;    /* DAN INI */
}
```

**Contoh Palet Warna:**

**Biru Modern:**
```css
--primary-color: #3b82f6;
--secondary-color: #2563eb;
```

**Hijau Muda:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
```

**Merah Energi:**
```css
--primary-color: #ef4444;
--secondary-color: #dc2626;
```

**Oranye Hangat:**
```css
--primary-color: #f97316;
--secondary-color: #ea580c;
```

---

## ✅ Checklist Sebelum Deploy

- [ ] Update nama dan foto di Hero Section
- [ ] Update bio/description dengan info Anda
- [ ] Tambahkan minimal 3 projects dengan link yang benar
- [ ] Update skills/toolkit sesuai dengan yang Anda kuasai
- [ ] Update kontak (email, nomor, social media)
- [ ] Test di mobile dan tablet
- [ ] Pastikan semua link berfungsi
- [ ] Check grammar dan typo
- [ ] Test form contact
- [ ] Lakukan deploy

---

## 🚀 Siap untuk Production!

Setelah semua di-customize, lakukan:

```bash
npm run build
```

Hasilnya akan ada di folder `dist/`. Siap untuk di-deploy ke:
- Vercel (https://vercel.com) - Recommended
- Netlify (https://netlify.com)
- GitHub Pages
- Heroku
- atau host lainnya

---

**Selamat! Portfolio Anda sudah siap untuk dijadikan reference saat melamar magang!** 🎉
