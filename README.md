# Parinith Reddy — Portfolio

🔗 **Live Site:** [parinithmavurapu.vercel.app](https://parinithmavurapu.vercel.app)

A cinematic, dark-mode portfolio for an AI/ML engineer, built to showcase projects, skills, achievements, and research with polished motion and a modern editorial feel.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui + Radix UI |
| Routing | React Router |
| Icons | Lucide React |
| Deployment | Vercel / Netlify / GitHub Pages |

---

## Design

- Dark immersive visual system with high-contrast typography
- Animated section reveals and smooth page transitions
- Responsive portfolio grid with category filtering
- Project detail pages with image lightbox support
- Dedicated sections for skills, experience, achievements, and contact
- SEO-focused metadata components
- Accessible UI primitives and keyboard-friendly interactions

---

## Project Structure

```bash
portfolio-dark/
├── public/                     # Static assets, icons, project visuals
├── src/
│   ├── components/
│   │   ├── forms/              # Contact form
│   │   ├── layout/             # Shared layout, header, footer
│   │   ├── portfolio/          # Portfolio grid, cards, lightbox, filters
│   │   ├── sections/           # Hero, About, Skills, Projects, Contact, etc.
│   │   ├── seo/                # SEO metadata helpers
│   │   └── ui/                 # Reusable UI components
│   ├── data/                   # Portfolio/project content
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility helpers
│   ├── pages/                  # Route-level pages
│   ├── types/                  # Shared TypeScript types
│   ├── App.tsx                 # App shell
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## Customization

| File / Folder | What to change |
|---|---|
| `src/components/sections/Hero.tsx` | Name, headline, intro copy, CTA buttons |
| `src/components/sections/About.tsx` | Bio, story, personal summary |
| `src/components/sections/Skills.tsx` | Skill groups, tools, technologies |
| `src/components/sections/Projects.tsx` | Featured project list and highlights |
| `src/data/projects.ts` | Project content, stacks, links, images, categories |
| `src/components/sections/Experience.tsx` | Work experience, roles, timeline |
| `src/components/sections/Achievements.tsx` | Awards, metrics, milestones |
| `src/components/sections/Contact.tsx` | Email, LinkedIn, GitHub, contact details |
| `src/components/seo/SEOHead.tsx` | Title, description, social preview metadata |
| `src/index.css` | Theme variables, spacing, typography, visual tone |

---

## Features

- Responsive single-page portfolio experience
- Project filtering by category
- Lightbox-enabled project media
- Individual project detail views
- Smooth animated transitions
- Reusable component-driven structure
- SEO-ready page metadata
- Clean TypeScript-based architecture

---

## Deployment

Deployed on **Vercel** at [parinithmavurapu.vercel.app](https://parinithmavurapu.vercel.app).

### Steps to deploy

1. Push the project to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Deploy with default Vite settings — no extra configuration needed
4. Set your custom domain to `parinithmavurapu.vercel.app` in the Vercel project settings

---

## Performance Notes

- Vite provides fast local development and optimized production bundles
- Route-level and section-level component organization keeps the app maintainable
- Reusable UI primitives reduce duplication and improve consistency
- Static assets are served from `public/` for straightforward deployment
- Tailwind utility styling keeps the UI flexible and scalable

---

## License

MIT — free to use as a personal portfolio template.
