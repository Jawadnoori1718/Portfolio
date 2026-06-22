# Jawad Noori — Portfolio

A cinematic, space-themed single-page portfolio for an aspiring Machine Learning
engineer. Built with **React + Vite** and hand-crafted CSS/SVG — a live canvas
**starfield** with shooting stars, an animated **SVG workstation** hero (glowing
laptop + floating "live" AI panels), a looping typewriter, brand-coloured cards,
and a project-screenshot lightbox.

**Live:** https://jawadnoori.co.uk

## Tech stack

- **React 18** + **Vite** (fast dev server, optimised static build)
- Plain **CSS** (design tokens + every animation) — no UI framework
- Inline **SVG** + **Canvas** for the visuals (lightweight, crisp at any size)
- Scroll reveals via **IntersectionObserver**; fully responsive + `prefers-reduced-motion` aware

## Quick start

```bash
npm install      # install dependencies
npm run dev      # dev server (Vite prints a local URL, ~http://localhost:5173)
```

### Other commands

```bash
npm run build    # production build into /dist
npm run preview  # serve the production build locally
```

## Deploying

It's a static site, so host the contents of `/dist` anywhere (`base: './'` is set,
so it works at a domain root or a sub-path):

1. `npm run build`
2. Upload everything **inside** `dist/` (`index.html`, `assets/`, `favicon.svg`,
   `logos/`, `projects/`) to your web host's public folder.

## Project structure

```
.
├── index.html              # entry HTML + meta + Google Fonts
├── vite.config.js
├── public/                 # static assets copied as-is into the build
│   ├── favicon.svg
│   ├── logos/              # brand logos for experience / education / orgs
│   └── projects/           # project screenshots
└── src/
    ├── main.jsx            # React bootstrap
    ├── App.jsx             # page composition
    ├── data/content.js     # ← ALL text/links/colours live here
    ├── styles/index.css    # design tokens + every style & animation
    └── components/
        ├── Navbar.jsx          # sticky nav, mobile menu, active-section tracking
        ├── Starfield.jsx       # canvas stars (parallax, twinkle, shooting stars)
        ├── Hero.jsx            # headline, looping typewriter, links
        ├── Workstation.jsx     # SVG laptop + floating AI panels
        ├── Experience.jsx
        ├── Projects.jsx        # cards + screenshot lightbox
        ├── ProjectShot.jsx     # project image with SVG-art fallback
        ├── Lightbox.jsx        # zoom / pan / close image viewer
        ├── ProjectArt.jsx      # generated SVG art (fallback)
        ├── Education.jsx
        ├── Skills.jsx          # tech stack with brand icons
        ├── Organizations.jsx
        ├── Contact.jsx
        ├── Reveal.jsx          # scroll-reveal wrapper + section heading
        ├── BrandLogo.jsx       # logo image with emblem fallback
        └── Icons.jsx           # inline SVG icon set
```

## Editing content

Open **`src/data/content.js`** — every section (profile, hero links, experience,
projects, education, skills, organisations, contact) is a plain object/array.
Edit the text, links and brand colours there and the UI updates automatically.

- **Brand logos** live in `public/logos/<name>.png`; **project screenshots** in
  `public/projects/<name>.png`. Missing files fall back gracefully.
- All colours, fonts and radii are CSS variables at the top of
  `src/styles/index.css` (`:root`) — change them to re-skin the whole site.

## Author

**Jawad Noori** — aspiring Machine Learning engineer.

- Website: https://jawadnoori.co.uk
- GitHub: https://github.com/Jawadnoori1718
- LinkedIn: https://www.linkedin.com/in/jawadnoori1/
