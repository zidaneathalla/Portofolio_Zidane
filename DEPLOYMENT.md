# Deployment Guide - Deploy ke Production

Panduan lengkap untuk deploy portfolio Anda ke internet sehingga bisa diakses oleh siapa saja.

## 🚀 Opsi Deployment

### Opsi 1: Vercel (RECOMMENDED - Paling Mudah)

**Keuntungan:**
- Gratis untuk personal projects
- Deploy otomatis dari GitHub
- Performance bagus
- Custom domain support

**Langkah-langkah:**

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/porto.git
   git push -u origin main
   ```

2. **Daftar Vercel**
   - Buka https://vercel.com
   - Click "Sign Up"
   - Pilih "Continue with GitHub"

3. **Import Project**
   - Klik "Add New..."
   - Pilih "Project"
   - Pilih repository "porto"
   - Klik "Import"
   - Environment variables: (biarkan kosong untuk sekarang)
   - Klik "Deploy"

4. **Selesai!**
   Vercel akan memberikan URL seperti: `https://porto-xxxxxqw.vercel.app`

---

### Opsi 2: Netlify

**Keuntungan:**
- Gratis
- Drag & drop deploy option
- Form handling support
- CMS integration

**Langkah-langkah:**

1. **Build project**
   ```bash
   npm run build
   ```

2. **Daftar Netlify**
   - Buka https://netlify.com
   - Click "Sign up"
   - Pilih "GitHub" atau email

3. **Deploy**
   - Option A (Rekomendasi): Connect GitHub
     - Klik "New site from Git"
     - Pilih GitHub repo
     - Verify build command: `npm run build`
     - Publish directory: `dist`
     - Klik "Deploy"
   
   - Option B: Drag & Drop
     - Buka folder `dist` di file explorer
     - Drag ke area upload Netlify

4. **Selesai!**
   URL akan seperti: `https://porto-xxxxx.netlify.app`

---

### Opsi 3: GitHub Pages

**Keuntungan:**
- Gratis
- Terintegrasi dengan GitHub
- Mudah di-maintain

**Langkah-langkah:**

1. **Update vite.config.js**
   ```javascript
   export default {
     base: '/porto/',  // Sesuaikan dengan nama repo
   }
   ```

2. **Setup GitHub Actions**
   Buat file: `.github/workflows/deploy.yml`
   ```yaml
   name: Deploy

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages"
   git push
   ```

4. **Enable GitHub Pages**
   - Buka Settings repository
   - Pages
   - Source: Deploy from a branch
   - Branch: gh-pages, root folder
   - Save

5. **Selesai!**
   URL: `https://username.github.io/porto`

---

## 📝 Sebelum Deploy - Checklist

### 1. Update meta tags di `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Zidane's Portfolio | Front-End Developer</title>
    <meta name="description" content="Portfolio of Zidane, a 6th-semester student at IPB University specializing in front-end development and UI/UX design." />
    <meta name="keywords" content="portfolio, front-end, React, UI/UX, web developer" />
    <meta name="author" content="Zidane Athalla" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="Zidane's Portfolio" />
    <meta property="og:description" content="Front-End Developer & UI/UX Designer" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com" />
    
    <link rel="canonical" href="https://yourdomain.com" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 2. Buat `.env` file (jika diperlukan)
```
VITE_API_URL=https://api.yourdomain.com
VITE_GA_ID=your-google-analytics-id
```

### 3. Optimalkan Performance

**Minify CSS & JS:** Vercel/Netlify sudah otomatis
**Compress Images:** Gunakan tools seperti TinyPNG
**Lazy Loading:** Sudah built-in di React

### 4. Testing Sebelum Deploy

```bash
# Build
npm run build

# Preview hasil build (local)
npm run preview

# Buka http://localhost:4173
```

---

## 🔧 Troubleshooting Deployment

### Issue: 404 di GitHub Pages

**Solusi:**
```javascript
// vite.config.js
export default {
  base: '/porto/',  // Sesuaikan nama repo
}
```

### Issue: Environment Variables Tidak Terbaca

Untuk Vercel:
1. Project Settings → Environment Variables
2. Add variable dengan format: `VITE_NAMA_VARIABLE=value`

Untuk Netlify:
1. Site Settings → Build & Deploy → Environment
2. Edit variables

### Issue: Build gagal di CI/CD

Solusi:
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🌐 Custom Domain

### Menghubungkan Domain ke Vercel

1. Beli domain di:
   - Netlify
   - GoDaddy
   - Namecheap
   - atau registrar lain

2. Di Vercel:
   - Project Settings → Domains
   - Add domain
   - Ikuti instruksi update DNS

3. Update nameserver di registrar sesuai instruksi Vercel

4. Tunggu 24-48 jam untuk propagasi

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Buat account di https://analytics.google.com
2. Catat Measurement ID (G-XXXXXXXXXXXX)
3. Install library:
   ```bash
   npm install @react-ga/compat react-ga4
   ```

4. Setup di `src/main.jsx`:
   ```javascript
   import ReactGA from 'react-ga4';
   
   ReactGA.initialize('G-XXXXXXXXXXXX');
   ReactGA.send({ hitType: "pageview", page: "/" });
   ```

---

## 🔒 Security Tips

1. **Jangan commit secrets**
   - Gunakan `.env` untuk secrets
   - Add `.env` ke `.gitignore`

2. **HTTPS**
   - Vercel/Netlify otomatis HTTPS
   - Aman untuk mengirim data

3. **Form Security**
   - Validate input di frontend
   - Validate lagi di backend (jika ada)

---

## 📱 Test Sebelum Launch

**Desktop:**
- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓

**Mobile:**
- Chrome Mobile ✓
- Safari iOS ✓
- Samsung Internet ✓

**Tools:**
- Google Lighthouse
- PageSpeed Insights
- Mobile-Friendly Test

---

## ✨ Post-Deployment

1. **Monitor Performance**
   - Vercel Analytics: Projects Settings → Analytics
   - Google PageSpeed Insights

2. **Track Visitors**
   - Google Analytics
   - Built-in Vercel Analytics

3. **Update Content**
   - Buat perubahan di repository
   - Push ke main branch
   - Deploy otomatis terjadi

4. **Maintenance**
   - Check logs regularly
   - Update dependencies
   - Monitor form submissions

---

## 🎯 Next Steps

Setelah deploy:
1. Bagikan URL portfolio ke:
   - Email untuk apply magang
   - LinkedIn profile
   - GitHub profile
   - Portfolio website lain

2. Terus update portfolio dengan:
   - Project terbaru
   - Achievement baru
   - Pembelajaran dan skill

3. Monitor analytics untuk:
   - Siapa yang kunjungi
   - Berapa lama mereka stay
   - Link mana yang paling diklik

---

**Portfolio Anda sudah live di internet! 🎉**
