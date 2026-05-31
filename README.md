# Nexus Digital — Performance Marketing & AI Agency

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock)](https://greensock.com/gsap)

A high-conversion landing page for a performance marketing and AI automation agency. Built with modern frontend tooling and smooth scroll-driven animations.

## 🚀 Live Demo

**https://lavidaylabolsa.github.io/marketing-digital**

---

## ✨ Features

| Section | Description |
|---------|-------------|
| **Hero** | Interactive canvas particle network with mouse-reactive physics |
| **Stats Bar** | Animated counters (€2M+ managed, 50+ tools, etc.) |
| **Services** | 4 core offerings — Paid Media, CRO & Funnels, Marketing Automation, AI-Powered Analytics |
| **Integrations** | Infinite-scroll carousel with 50+ real marketing tool logos (react-icons) |
| **Experience** | Client showcase with real brands (Bit2Me, Pepperstone) + fictional portfolio companies |
| **Workflow** | 3-step process cards — Audit → Setup → Scale with tool tags |
| **Funnel Showcase** | Scroll-triggered GSAP reveal of real campaign results |
| **Testimonials** | Client quotes with dark cinematic styling |
| **FAQ** | Animated accordion with common objections |
| **Contact** | Lead capture form with validation |
| **Final CTA** | Closing call-to-action section |

---

## 🛠 Tech Stack

- **Framework:** React 19 + Vite 7
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 3.4 + custom animations
- **Animation:** GSAP 3.15 (ScrollTrigger, staggers) + Lenis smooth scroll
- **Icons:** react-icons (Simple Icons, Font Awesome, Lucide)
- **Charts:** Recharts (where applicable)

---

## 🏁 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
├── public/               # Static assets (images, logos, favicons)
├── src/
│   ├── components/       # Reusable components (Navbar, Footer, CanvasParticles...)
│   ├── hooks/            # Custom hooks (useCountUp, useLenis, useScrollReveal)
│   ├── pages/
│   │   └── Home.tsx      # Single-page landing (all sections)
│   ├── App.tsx           # Root component with Lenis provider
│   ├── main.tsx          # Entry point
│   └── index.css         # Tailwind directives + custom styles
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#1E40AF` (blue-800) |
| Accent | `#F59E0B` (amber-500) |
| Dark bg | `#0F172A` (slate-900) |
| Light bg | `#F8FAFC` (slate-50) |
| Text primary | `#1E293B` (slate-800) |
| Text muted | `#64748B` (slate-500) |

---

## 📄 License

MIT — Built for client presentation.
