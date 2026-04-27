# Portfolio Website - React + Vite

Selamat datang di portfolio website Anda yang telah dibuat dengan **React** dan **Vite**! Website ini memiliki animasi hero section yang elegan dan responsif untuk semua device.

## 📋 Panduan Penggunaan & Customization

### 1. **Mengisi Hero Section**

File: `src/components/HeroSection.jsx`

Bagian Hero Section memiliki beberapa elemen yang dapat disesuaikan:

```jsx
const fullText = "Hello!, I'm Open for Work and Collaboration!";
```
- Ubah text ini sesuai dengan judul Anda

```jsx
<h2 className="hero-name">Hi! I'm Zidane</h2>
```
- Ganti nama Anda di sini

```jsx
<p className="hero-description">
  I am a 6th-semester student at IPB Vocational School majoring in Software
  Engineering Technology...
</p>
```
- Ubah deskripsi tentang Anda (bisa pindahkan ke beberapa paragraph)

**Menambah Foto:**
1. Letakkan foto Anda di folder: `src/assets/your-photo.jpg`
2. Edit `src/components/HeroSection.jsx` dan cari section `.image-placeholder`
3. Ganti dengan:
```jsx
<div className="hero-image-wrapper">
  <img 
    src="/your-photo.jpg" 
    alt="Your Name" 
    className="hero-image"
  />
</div>
```

Tambahkan CSS di `src/styles/HeroSection.css`:
```css
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
```

---

### 2. **Mengisi Bagian Projects**

File: `src/components/Projects.jsx`

Struktur project sudah ada default. Untuk mengedit atau menambah project:

```javascript
const projects = [
  {
    id: 1,
    title: 'CIFOS Website',
    subtitle: 'UI/UX Design and Front End',
    description: 'CIFOS is a web-based restaurant management system...',
    image: '🖼️',  // Ubah emoji atau ganti dengan image URL
    link: 'https://www.figma.com/design/...'  // Link ke project Anda
  },
  // Tambahkan project baru di sini
];
```

**Cara Menambah Project Baru:**
```javascript
{
  id: 5,
  title: 'Nama Project Anda',
  subtitle: 'Jenis Pekerjaan',
  description: 'Deskripsi singkat tentang project ini...',
  image: '✨',  // Gunakan emoji atau URL gambar
  link: 'https://link-ke-project-anda.com'
}
```

---

### 3. **Mengisi Bagian Toolkit/Skills**

File: `src/components/Toolkit.jsx`

List tools/skills yang Anda gunakan:

```javascript
const tools = [
  { name: 'Figma', icon: '🎨' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  // Tambahkan skills Anda di sini
];
```

**Menambah Skill Baru:**
```javascript
{ name: 'Vue.js', icon: '💚' },
{ name: 'TypeScript', icon: '📘' },
```

---

### 4. **Mengisi Bagian Contact**

File: `src/components/Contact.jsx`

Bagian contact sudah memiliki form interaktif. Ubah informasi kontak Anda:

```jsx
<p className="contact-value">+62 813-8758-5957</p>
```

Ganti dengan nomor Anda:
```jsx
<p className="contact-value">+62 XXX-XXXX-XXXX</p>
```

Ganti email:
```jsx
<p className="contact-value">your-email@gmail.com</p>
```

Ganti social media links:
```jsx
<a href="https://www.linkedin.com/in/your-username" target="_blank">
  LinkedIn
</a>
```

**Catatan tentang Form:**
Form saat ini hanya menampilkan alert. Untuk mengirim email, Anda bisa:
1. Menggunakan layanan seperti **Formspree**, **EmailJS**, atau **AWS SES**
2. Atau hubungkan dengan backend API Anda sendiri

---

## 🎨 Warna & Styling

File: `src/styles/globals.css` dan component-specific CSS files

**Warna Default:**
```css
:root {
  --primary-color: #667eea;      /* Ungu muda */
  --secondary-color: #764ba2;    /* Ungu tua */
  --text-dark: #1a202c;
  --text-light: #4a5568;
  --bg-light: #f8f9fa;
  --border-color: #e2e8f0;
}
```

**Mengubah Warna Utama:**
1. Buka `src/styles/globals.css`
2. Ubah nilai warna di bagian `:root`
3. Contoh mengubah primary color:
```css
:root {
  --primary-color: #FF6B6B;  /* Red */
  --secondary-color: #FF8787; /* Light Red */
}
```

---

## 📂 Struktur Project

```
porto/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx
│   │   ├── Projects.jsx
│   │   ├── Toolkit.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── HeroSection.css
│   │   ├── Projects.css
│   │   ├── Toolkit.css
│   │   └── Contact.css
│   ├── assets/          (Letakkan foto/gambar di sini)
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Cara Menjalankan

### Development Mode:
```bash
npm run dev
```
Buka browser di: `http://localhost:5173/`

### Build untuk Production:
```bash
npm run build
```
Hasil build ada di folder `dist/`

### Preview Build:
```bash
npm run preview
```

---

## 🔧 Instalasi Dependencies (Jika Diperlukan)

Jika Anda perlu menambah library baru:

```bash
npm install nama-package
```

Contoh:
```bash
npm install axios                    # HTTP client
npm install framer-motion            # Animation library
npm install react-router-dom         # Routing
npm install tailwindcss              # CSS framework
```

---

## 📱 Responsive Design

Portfolio ini sudah responsive untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

Untuk mengedit breakpoints, lihat media queries di CSS files.

---

## ✨ Features yang Sudah Ada

✅ Hero Section dengan typing animation
✅ Animated project cards dengan hover effects
✅ Toolkit section dengan floating icons
✅ Contact form dengan input validation
✅ Smooth scrolling
✅ Responsive design
✅ CSS animations dan transitions
✅ Modern UI dengan gradient colors

---

## 🎯 Tips Customization Lebih Lanjut

### 1. **Menambah Navigation Bar**
Buat file: `src/components/Navbar.jsx`
```jsx
export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#projects">Projects</a>
      <a href="#toolkit">Toolkit</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
```

### 2. **Menambah Section Baru**
1. Buat component baru di `src/components/NewSection.jsx`
2. Buat CSS di `src/styles/NewSection.css`
3. Import dan tambahkan di `src/App.jsx`

### 3. **Mengganti Animasi**
Semua animasi CSS ada di file `.css`. Anda bisa:
- Mengubah `animation-duration` untuk kecepatan
- Mengubah `@keyframes` untuk efek berbeda
- Menambah `transition` untuk smooth effects

---

## 📞 Support

Jika ada pertanyaan tentang React atau Vite:
- React Docs: https://react.dev/
- Vite Docs: https://vite.dev/
- MDN CSS Docs: https://developer.mozilla.org/

---

## 🎓 Untuk Keperluan Magang

Portfolio ini sudah siap untuk digunakan saat applying magang. Tips:

1. **Foto Professional**: Gunakan foto profesional yang jelas
2. **Deskripsi Ringkas**: Jelaskan skill dan pengalaman dengan singkat dan padat
3. **Project Real**: Tunjukkan project yang pernah Anda kerjakan
4. **Contact Valid**: Pastikan email dan nomor aktif
5. **SEO Ready**: Tambahkan meta tags di `index.html` untuk SEO

---

**Selamat membuat portfolio yang awesome!** 🚀

Last Updated: April 2026
