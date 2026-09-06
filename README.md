# VeyorLabs — Secure Static Startup Landing Page

> **Production-ready, ultra-fast, and secure static landing page for VeyorLabs.**  
> VeyorLabs is an early-stage technology startup exploring innovative solutions for education, learning, and the next generation of learners.

---

## 1. Architectural Overview

VeyorLabs is built as a **hardened, pure static website** — strictly not a web application:
- **Zero User Accounts**: No login, sign-up, session tracking, database, or authentication mechanisms.
- **Zero Email Harvesting**: No newsletter forms, notify-me lead forms, or server-side mail processors. Inquiries occur via standard, encrypted mailto links (`mailto:hello@veyorlabs.com`).
- **Zero Trackers or Cookies**: No Google Analytics, no session replay scripts, no tracking pixels, no telemetry.
- **Zero Secrets**: Pure client-side static artifacts with no environment credentials or secret keys exposed to browsers.
- **Static Hosting Target**: High-speed edge CDN deployment (Vercel, Netlify, or Cloudflare Pages) coupled with domain registration managed via GoDaddy DNS.

```text
Visitor Browser
      ↓ (HTTPS + HSTS)
Edge CDN / Static Hosting (Vercel / Netlify / Cloudflare Pages)
      ↓ (Strict CSP + Security Headers)
Static HTML / CSS / TypeScript Assets
```

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
│   ├── _headers            # Cloudflare Pages / Netlify security headers & cache rules
│   ├── favicon.svg         # Geometric modern vector logo mark
│   ├── robots.txt          # Web crawler index rules & sitemap reference
│   ├── site.webmanifest    # Clean PWA manifest (zero permissions requested)
│   └── sitemap.xml         # Canonical XML sitemap for https://veyorlabs.com
├── src/
│   ├── components/
│   │   ├── About.tsx       # About VeyorLabs (authentic startup posture)
│   │   ├── ComingSoon.tsx  # Luminous "Something New Is Coming" feature
│   │   ├── Contact.tsx     # Direct mailto link, clipboard helper, conditional socials
│   │   ├── EducationFocus.tsx # 6 core exploratory tracks
│   │   ├── Footer.tsx      # Standardized footer links, notice, copyright
│   │   ├── Hero.tsx        # Hero section with dual scroll CTAs
│   │   ├── Logo.tsx        # SVG brand mark & monogram
│   │   ├── Navbar.tsx      # Responsive sticky glassmorphism navigation
│   │   └── WhatWeAreExploring.tsx # 3 foundational exploratory cards
│   ├── config/
│   │   └── site.ts         # Single source of truth for email, copy, and links
│   ├── App.tsx             # Root page assembler with accessibility landmarks
│   ├── index.css           # Tailwind base styles, glassmorphism, focus states
│   └── main.tsx            # React root mount
├── netlify.toml            # Netlify build & security headers config
├── vercel.json             # Vercel edge security headers & asset caching
├── tailwind.config.js      # Palette, animations, and typography tokens
├── postcss.config.js       # PostCSS plugins
├── tsconfig.json           # Strict TypeScript configuration
└── package.json            # Minimal dependencies
```

---

## 4. Local Development

### Prerequisites
- Node.js 18+ (tested on Node v24 LTS)
- npm 9+

### Commands

```bash
# Install dependencies
npm install

# Start local development server (with HMR)
npm run dev

# Open in your browser
http://localhost:5173
```

---

## 5. Production Build

To compile and optimize static assets for deployment:

```bash
npm run build
```

This compiles TypeScript (`tsc -b`) and bundles static assets into the `dist/` directory.

To preview the production bundle locally:
```bash
npm run preview
```

---

## 6. Deployment Guide

The static build in `dist/` can be deployed instantly to any edge static host.

### Option A: Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Framework preset will automatically be detected as **Vite**.
4. Output directory is set to `dist`.
5. Click **"Deploy"**.
6. The included `vercel.json` file automatically applies all HTTP security headers and Content Security Policy.

### Option B: Netlify
1. Sign in to [Netlify](https://netlify.com) and select **"Add new site"** > **"Import an existing project"**.
2. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Click **"Deploy site"**.
4. Headers in `netlify.toml` and `public/_headers` are applied immediately.

### Option C: Cloudflare Pages
1. Sign in to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages**.
2. Connect your Git repository.
3. Build configuration:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. The `public/_headers` file will configure the security headers.

---

## 7. GoDaddy DNS Configuration Instructions

To connect your custom domain (e.g., `veyorlabs.com`) purchased from GoDaddy to your static host while keeping domain registration at GoDaddy:

### Step 1: Add Custom Domain to Your Hosting Provider
- In **Vercel**: Go to Project Settings > **Domains** > Enter `veyorlabs.com` and `www.veyorlabs.com`.
- In **Netlify**: Go to Site Configuration > **Domain Management** > **Add a domain**.
- In **Cloudflare Pages**: Go to Custom Domains > **Set up a custom domain**.

Your provider will present DNS values (typically an `A` record IP address and a `CNAME` record).

### Step 2: Configure DNS in GoDaddy
1. Log in to [GoDaddy Domain Portfolio](https://dcc.godaddy.com/control/portfolio).
2. Click on `veyorlabs.com`, then click **DNS** (or **Manage DNS**).
3. Under the **DNS Records** tab, add or edit the following records:

#### Apex / Root Domain (`veyorlabs.com`):
| Type | Name | Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` *(if using Vercel; or provider IP)* | `1/2 Hour` or `Default` |

#### Subdomain (`www.veyorlabs.com`):
| Type | Name | Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `cname.vercel-dns.com` *(if using Vercel; or provider alias)* | `1/2 Hour` or `Default` |

> [!IMPORTANT]
> **Do not modify Nameservers** if you wish to keep DNS managed inside GoDaddy. Only add/edit the `A` and `CNAME` records.

### Step 3: SSL / HTTPS Verification
1. Allow 5 to 30 minutes for DNS propagation across global resolvers.
2. The hosting provider will automatically issue a free, auto-renewing **Let's Encrypt / DigiCert SSL certificate**.
3. Verify that HTTP automatically redirects to HTTPS by visiting `http://veyorlabs.com`.

---

## 8. Security Documentation & Headers

The static website applies defensive security headers via `vercel.json`, `netlify.toml`, and `public/_headers`:

| Header | Value | Purpose |
| :--- | :--- | :--- |
| **Content-Security-Policy** | `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;` | Restricts code execution, prevents malicious injection, restricts fonts and styles to safe whitelists. |
| **Strict-Transport-Security** | `max-age=63072000; includeSubDomains; preload` | Enforces HTTPS strictly for two years, including all subdomains and HSTS preload compatibility. |
| **X-Frame-Options** | `DENY` | Clickjacking defense: prevents embedding inside foreign iframes. |
| **frame-ancestors** (CSP) | `'none'` | Standards-compliant defense against iframe embedding. |
| **X-Content-Type-Options** | `nosniff` | Blocks MIME-type sniffing attacks. |
| **Referrer-Policy** | `strict-origin-when-cross-origin` | Prevents leakage of origin paths when navigating across origins. |
| **Permissions-Policy** | `camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()` | Disables access to sensitive browser APIs and disables FLoC tracking. |

### XSS & Sanitization Posture
- No use of `dangerouslySetInnerHTML`.
- All text strings and component states are strongly typed static React nodes.
- External links enforce `rel="noopener noreferrer"`.

---

## 9. Final Production Checklist

- [x] **No user authentication** (No login, sign up, passwords, or session tokens)
- [x] **No database** (Pure static front-end)
- [x] **No email collection forms** (No lead forms, newsletters, or tracking)
- [x] **Single-source email configuration** (`hello@veyorlabs.com` in `src/config/site.ts`)
- [x] **Responsive across all devices** (Mobile drawer, flexible grid, fluid typography)
- [x] **Strict Security Headers** (CSP, HSTS, X-Frame-Options, Permissions-Policy in `vercel.json` & `_headers`)
- [x] **Accessibility compliant** (Semantic HTML5, ARIA labels, high contrast, focus rings, reduced motion support)
- [x] **SEO optimized** (Meta descriptions, OpenGraph cards, Twitter cards, canonical tags, `robots.txt`, `sitemap.xml`)
- [x] **Zero console errors** (`npm run build` succeeds cleanly in under 1 second)
