// ---------------------------------------------------------------------------
// All site content lives here so components stay presentational and the copy
// is easy to update in one place. Edit text, links and tags below.
// ---------------------------------------------------------------------------

const hexToRgb = (hex) => {
  const c = hex.replace('#', '')
  return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)]
}
const toHex = (n) => Math.round(n).toString(16).padStart(2, '0')

// Deepen a brand colour by blending it heavily toward the page background, so
// the cards read as muted, dark, tasteful tones — the brand hue is still clear
// but nothing is bright/neon enough to overload the eye.
export function shade(hex, t = 0.62) {
  const [r, g, b] = hexToRgb(hex)
  const m = (a, t2) => a * (1 - t2) + 8 * t2 // 8 ≈ the dark page background
  return `#${toHex(m(r, t))}${toHex(m(g, t))}${toHex(m(b, t))}`
}

// Pick a readable text ("ink") colour for a given solid background — dark ink
// on light/bright colours, white on darker ones.
export function inkFor(hex) {
  const [r, g, b] = hexToRgb(hex)
  const lum = 0.299 * r + 0.587 * g + 0.114 * b
  return lum > 150 ? '#0a1830' : '#ffffff'
}

export const PROFILE = {
  name: 'Jawad Noori',
  logo: '<Jawad/>',
  role: 'Aspiring Machine Learning Engineer',
  // Big greeting headline.
  headline: ["HI, I'M JAWAD"],
  headlineAccent: ['JAWAD'],
  // Secondary statement, shown beneath the badge in the same headline style.
  subhead: ['Building intelligent', 'systems that solve', 'real-world problems.'],
  subheadAccent: ['intelligent', 'real-world'],
  description:
    'Final-year Computer Science student at Brunel University London, passionate about data, models, and impactful technologies that create meaningful change.',
  contact: {
    linkedinUrl: 'https://www.linkedin.com/in/jawadnoori1/',
    email: 'jawadnoori1@outlook.com',
  },
}

// Hero call-to-action buttons (icon keys map to inline SVGs in Icons.jsx).
// `color` is each platform's brand colour, used to tint the glyph + hover glow.
export const HERO_LINKS = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/Jawadnoori1718', color: '#f0f6fc' },
  { label: 'LeetCode', icon: 'leetcode', href: 'https://leetcode.com/u/jawadnoori1/', color: '#ffa116' },
  { label: 'HackerRank', icon: 'hackerrank', href: 'https://www.hackerrank.com/profile/jawadnoori1', color: '#00ea64' },
  { label: 'Substack', icon: 'substack', href: 'https://jnoori.substack.com/', color: '#ff6719' },
]

export const NAV_ITEMS = [
  { label: 'About', target: 'hero' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Education', target: 'education' },
  { label: 'Skills', target: 'skills' },
  { label: 'Organizations', target: 'organizations' },
  { label: 'Contact', target: 'contact' },
]

export const EXPERIENCE = [
  {
    role: 'AI Research Intern',
    org: 'Google DeepMind',
    logo: 'deepmind',
    url: 'https://deepmind.google/',
    color: '#4285f4', // Google DeepMind blue
    date: 'Jun 2026 – Aug 2026',
    location: 'Nottingham, UK',
    summary:
      'Working on AI-focused research and technical exploration in a rigorous learning environment.',
  },
  {
    role: 'TechOps Intern',
    org: 'Screen Share UK',
    logo: 'screenshare',
    url: 'https://screenshare.org.uk/',
    color: '#5b3df5', // Screen Share blue-violet
    date: 'Aug 2025 – Aug 2025',
    location: 'London, UK',
    summary:
      'Refurbished devices and supported digital inclusion for refugees across the UK.',
  },
  {
    role: 'Coding Coach Assistant',
    org: 'Jam Coding',
    logo: 'jam',
    url: 'https://www.jamcoding.com/',
    color: '#ee3e36', // Jam Coding red
    date: 'Oct 2024 – May 2025',
    location: 'London, UK',
    summary:
      'Supported students in understanding core programming concepts and problem solving.',
  },
]

// Each project links out to a live demo and its GitHub repo.
export const PROJECTS = [
  {
    name: 'Drift',
    art: 'globe',
    img: 'drift',
    summary:
      '3D globe visualising 60+ years of world development data with ML forecasting, clustering & correlation analysis.',
    demo: 'https://drift-jawad.vercel.app/',
    repo: 'https://github.com/Jawadnoori1718/Drift---World-Data-Intelligence-Platform',
  },
  {
    name: 'StreetPulse',
    art: 'map',
    img: 'streetpulse',
    summary:
      'Real-time crime & incident mapping with risk scoring, AI assistant and heatmaps across West London.',
    demo: 'https://street-pulse-urban-safety-intellige.vercel.app/',
    repo: 'https://github.com/Jawadnoori1718/streetpulse',
  },
  {
    name: 'BigBrother',
    art: 'robot',
    img: 'bigbrother',
    summary:
      'Turns any webcam into a programmable eye — open-vocabulary YOLO-World detection, zone counting and a plain-language rules engine, running fully offline on GPU.',
    repo: 'https://github.com/Jawadnoori1718/BigBrother---AI-Powered-Camera-Intelligence',
  },
  {
    name: 'PersianToken',
    art: 'dashboard',
    img: 'persiantoken',
    summary:
      'Measures the hidden "token tariff" Persian speakers pay — parallel-corpus tokenisation across major tokenisers, with bootstrapped confidence intervals on the extra cost and lost context.',
    repo: 'https://github.com/Jawadnoori1718/PersianToken',
  },
  {
    name: 'HillingOne',
    art: 'dashboard',
    img: 'hillingone',
    summary:
      'Agentic booking system for council spaces. AI agents handle conflicts, optimise usage and improve accessibility.',
    demo: 'https://hillingone.vercel.app/',
    repo: 'https://github.com/Jawadnoori1718/HillingOne---Smart-Booking-System',
  },
  {
    name: 'Robot Shape Drawing System',
    art: 'robot',
    img: 'robot',
    summary:
      'Robots read QR commands and draw precise geometric shapes with calibrated movement and control.',
    demo: 'https://www.brunel.ac.uk/computer-science/news-and-events/news/Empowering-the-Future-SwiftBots-and-Innovation-in-Computer-Science-Education',
    repo: 'https://github.com/Jawadnoori1718/Robot-Shape-Dawing',
  },
]

export const EDUCATION = [
  {
    school: 'Brunel University of London',
    crest: 'brunel',
    url: 'https://www.brunel.ac.uk/',
    color: '#002951', // Brunel Prussian Blue — exact brand colour
    solidBg: true,
    course: 'BSc Computer Science',
    date: 'Sep 2024 – Jun 2027',
    result: 'Predicted First Class Honours',
    modules: [
      'Artificial Intelligence',
      'Software Engineering',
      'Software Project Management',
      'Advanced Topics in CS',
      'Algorithms & Their Applications',
      'Network & Operating Systems',
      'Usability Engineering',
      'Discrete Mathematics',
      'Object-Oriented Programming',
      'Data & Information',
    ],
  },
  {
    school: 'Kingston College',
    crest: 'kingston',
    url: 'https://www.kingston-college.ac.uk/',
    color: '#00bcf2', // Kingston College cyan
    solidBg: true,
    course: 'Access to HE in Computing',
    date: 'Sep 2023 – Jun 2024',
    result: 'Grade: Distinctions',
    modules: [
      'Introductory Programming (C#)',
      'Computer Architecture (x86 Assembly)',
      'Computer Networking (TCP/IP)',
      'Web Development (HTML, CSS)',
      'Database Design',
      'Database Implementation (MS Access)',
      'System Analysis',
      'Computer Hardware',
      'Mathematics for Computing',
    ],
  },
]

export const SKILLS = [
  {
    group: 'Languages',
    icon: 'code',
    items: ['Java', 'Python', 'JavaScript', 'C#', 'HTML'],
  },
  {
    group: 'Frameworks & Libraries',
    icon: 'layers',
    items: [
      'React',
      'Spring Boot',
      'Tailwind CSS',
      'Bootstrap',
      'TensorFlow',
      'PyTorch',
      'D3.js',
      'Leaflet',
    ],
  },
  {
    group: 'Databases',
    icon: 'database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'H2', 'Pandas', 'NumPy'],
  },
  {
    group: 'Tools & Platforms',
    icon: 'terminal',
    items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Eclipse', 'Raspberry Pi'],
  },
]

// Brand logos for each skill. Devicon (colourful) for most; Simple Icons for a
// couple; `null` falls back to a small monogram badge (for marks with no logo).
const di = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`

export const SKILL_ICONS = {
  Python: di('python'),
  Java: di('java'),
  JavaScript: di('javascript'),
  TypeScript: di('typescript'),
  'C#': di('csharp'),
  HTML: di('html5'),
  SQL: null,
  'HTML CSS': di('html5'),
  React: di('react'),
  'Spring Boot': di('spring'),
  'Tailwind CSS': di('tailwindcss'),
  Bootstrap: di('bootstrap'),
  TensorFlow: di('tensorflow'),
  PyTorch: di('pytorch'),
  'D3.js': di('d3js'),
  JAX: null,
  Leaflet: 'https://cdn.simpleicons.org/leaflet',
  MySQL: di('mysql'),
  PostgreSQL: di('postgresql'),
  MongoDB: di('mongodb'),
  H2: null,
  Pandas: di('pandas'),
  NumPy: di('numpy'),
  Git: di('git'),
  GitHub: 'https://cdn.simpleicons.org/github/c9d1e6',
  'VS Code': di('vscode'),
  Docker: di('docker'),
  Figma: di('figma'),
  Eclipse: di('eclipse'),
  Linux: di('linux'),
  'Raspberry Pi': di('raspberrypi'),
}

// Order: row 1 — RAE, ACM, Code Your Future; row 2 — Internet Society, IEEE, BCS.
export const ORGANIZATIONS = [
  {
    name: 'Royal Academy of Engineering',
    tier: 'Engineering Leader',
    mark: 'rae',
    color: '#121214', // black
    url: 'https://raeng.org.uk/',
  },
  {
    name: 'ACM',
    tier: 'Member',
    mark: 'acm',
    color: '#0099d8', // ACM blue
    url: 'https://www.acm.org/',
  },
  {
    name: 'Code Your Future',
    tier: 'Member',
    mark: 'cyf',
    color: '#d6362a', // Code Your Future red
    url: 'https://codeyourfuture.io/',
  },
  {
    name: 'Internet Society',
    tier: 'UK Chapter Member',
    mark: 'isoc',
    color: '#15283f', // Internet Society navy
    url: 'https://www.internetsociety.org/',
  },
  {
    name: 'IEEE',
    tier: 'Student Member',
    mark: 'ieee',
    color: '#00629b', // IEEE blue
    url: 'https://www.ieee.org/',
  },
  {
    name: 'BCS, The Chartered Institute for IT',
    tier: 'Student Member',
    mark: 'bcs',
    color: '#2e9e33', // BCS green
    url: 'https://www.bcs.org/',
  },
]
