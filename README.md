# InnoLite Technologies — Marketing Website

A premium single-page marketing site for **InnoLite Technologies**, a hands-on tech
training company in Madurai, Tamil Nadu. Crisp white, bold orange energy, cool navy anchor.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS v3** (custom theme in `tailwind.config.js`)
- **Framer Motion** — scroll reveals, hero motion, card hovers (all respect `prefers-reduced-motion`)
- **Lucide React** — icons (explicitly registered for a lean bundle)
- **React Router DOM v6**

## Getting Started

```bash
npm install
npm run dev      # dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project Structure

```
public/                 logo.svg, logo-dark.svg, favicon.svg (placeholders — see below)
src/
├── components/
│   ├── layout/         Navbar, Footer
│   ├── sections/       Hero, HeroVisual, LogoTicker, About, Courses, Stats,
│   │                   WhyChooseUs, HowItWorks, Testimonials, Contact
│   └── ui/             Button, Badge, CourseCard, FeatureCard, AnimatedCounter,
│                       SectionHeader, Icon
├── data/site.js        Centralized content: courses, features, steps, testimonials,
│                       contact info, nav links, image URLs, technologies
├── App.jsx             Section composition
├── main.jsx            Entry (BrowserRouter)
└── index.css           Tailwind layers + design tokens + marquee keyframes
```

## Design System

Colors, fonts (Poppins / Inter / Space Grotesk), spacing, and radii follow the brand
spec. Tokens live in `tailwind.config.js` and `src/index.css`.

| Token        | Value     |
| ------------ | --------- |
| `orange`     | `#F47920` |
| `navy`       | `#1A2B4A` |
| `navy-dark`  | `#0D1A2E` |

## ⚠️ Logo Placeholders

The real logo PNGs were not provided, so `public/logo.svg` and `public/logo-dark.svg`
are **branded SVG placeholders** that approximate the InnoLite wordmark.

**To use the official assets:** drop `logo.png` / `logo-dark.png` into `public/` and update
the `<img src="...">` references in `src/components/layout/Navbar.jsx` and `Footer.jsx`.

## Notes

- Images load from the Unsplash CDN; tech logos load from the Devicon CDN (with a graceful
  hide-on-error fallback). No local image assets required beyond the logos.
- The contact form is client-side only — it validates input and shows a success state but is
  not wired to a backend. Connect it to your email service / form endpoint in
  `src/components/sections/Contact.jsx`.
- The Google Maps embed points to Anna Nagar, Madurai.
```

```
```
*Built for InnoLite Technologies — Madurai, Tamil Nadu. Innovating Intelligence. Delivering Excellence.*

# innoliteweb
