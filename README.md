# Veyora Labs — Education Technology Platform

> **Production-ready, ultra-fast, and secure website for Veyora Labs.**  
> Veyora Labs is an education technology company building intelligent, personalized, and connected solutions for students, parents, educators, schools, and educational institutions.

---

## 1. Company & Products Overview

Veyora Labs develops multiple technology products across the modern education ecosystem:

- **Zeleon Learn**: Personalized Online Tuition Platform designed for students from Grades 1 to 10 with 1-on-1 paid tutoring tailored to individual academic needs and pace.
- **MyBuddy Learn**: AI-Powered Learning Platform providing intelligent concept explanations, adaptive assistance, and interactive learning support.
- **Nuvexa**: Comprehensive Education ERP and Institution Management Platform connecting daily academic, administrative, and operational functions for schools and institutions.

---

## 2. Tech Stack

- **Framework**: React 19 + TypeScript (Strict mode enabled)
- **Bundler & Dev Server**: Vite 8 (Sub-second HMR, tree-shaking, static bundling)
- **Styling**: Tailwind CSS v3 (Custom dark theme, glowing ambient accents, glassmorphism, responsive utilities)
- **Icons**: Lucide React + custom inline SVG marks
- **Typography**: Inter & Plus Jakarta Sans via Google Fonts

---

## 3. Project Structure

```text
veyoralabs/
├── public/
│   ├── _headers               # Cloudflare Pages / Netlify security headers & cache rules
│   ├── favicon.svg            # Geometric modern vector logo mark
│   ├── robots.txt             # Web crawler index rules & sitemap reference
│   ├── site.webmanifest       # Clean PWA manifest (zero permissions requested)
│   ├── sitemap.xml            # Canonical XML sitemap for https://veyoralabs.net
│   └── 404.html               # Custom 404 fallback page
├── src/
│   ├── components/
│   │   ├── About.tsx          # About Veyora Labs & multi-product architecture
│   │   ├── Contact.tsx        # Direct mailto link, clipboard helper, conditional socials
│   │   ├── Footer.tsx         # Product links, navigation, contact, verified copyright
│   │   ├── Hero.tsx           # Hero section with connected ecosystem interactive canvas
│   │   ├── Logo.tsx           # SVG brand mark & monogram
│   │   ├── Navbar.tsx         # Responsive sticky glassmorphism navigation (Home, About, Products, Solutions, Vision, Contact)
│   │   ├── NotFound.tsx       # In-app 404 handler
│   │   ├── ProductCard.tsx    # Interactive product cards with abstract UI previews
│   │   ├── ProductDetailModal.tsx # Accessible deep-dive drawer/modal for products
│   │   ├── Products.tsx       # Dedicated Our Products section (Zeleon Learn, MyBuddy Learn, Nuvexa)
│   │   ├── Solutions.tsx      # Stakeholder ecosystem (Students, Parents, Educators, Institutions)
│   │   ├── Vision.tsx         # Strategic vision & 3-stage technology roadmap (NOW, NEXT, FUTURE)
│   │   └── WhyVeyora.tsx      # 6 core engineering & pedagogical principles
│   ├── config/
│   │   └── site.ts            # Single source of truth for products, copy, and links
│   ├── App.tsx                # Root page assembler with accessibility landmarks
│   ├── index.css              # Tailwind base styles, glassmorphism, focus states
│   └── main.tsx               # React root mount
├── netlify.toml               # Netlify build & security headers config
├── vercel.json                # Vercel edge security headers & asset caching
├── tailwind.config.js         # Palette, animations, and typography tokens
├── postcss.config.js          # PostCSS plugins
├── tsconfig.json              # Strict TypeScript configuration
└── package.json               # Dependencies and build scripts
```

---

## 4. Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Lint code quality
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```
