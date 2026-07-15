# Alex Morgan — Portfolio

A production-ready personal portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design** — Premium, minimal aesthetic inspired by Linear, Vercel, and Stripe
- **Dark/Light Mode** — Theme persistence with system preference support
- **Fully Responsive** — Optimized for all screen sizes
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized** — Open Graph, Twitter Cards, sitemap, robots.txt
- **PWA Ready** — Web manifest and icons
- **Animations** — Framer Motion micro-interactions throughout
- **Command Palette** — Press `Cmd+K` / `Ctrl+K` to search
- **Project Filtering** — Filter and search projects by category
- **Experience Filtering** — Filter work history by type

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Framer Motion
- Lucide React & React Icons
- next-themes

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
app/                  # Next.js App Router pages and layouts
components/
  ui/                 # Reusable UI primitives (shadcn-style)
  layout/             # Navbar, footer, scroll utilities
  sections/           # Page sections (hero, about, skills, etc.)
  shared/             # Shared components (animations, backgrounds)
  providers/          # Context providers (theme)
constants/            # Site config and navigation
data/                 # Content data (projects, experience, etc.)
hooks/                # Custom React hooks
lib/                  # Utilities and validations
types/                # TypeScript interfaces
public/               # Static assets
```

## Customization

All content is stored in `data/` and `constants/` files. Update these to personalize:

| File | Content |
|------|---------|
| `constants/site.ts` | Site metadata, SEO |
| `data/personal.ts` | Name, bio, stats, education |
| `data/skills.ts` | Skill categories and levels |
| `data/experience.ts` | Work history |
| `data/projects.ts` | Portfolio projects |
| `data/certifications.ts` | Certifications |
| `data/testimonials.ts` | Testimonials |
| `data/github.ts` | GitHub stats and repos |
| `data/blog.ts` | Blog posts |

Replace placeholder images in `public/images/` with your own assets. Add your resume PDF to `public/resume.pdf`.

## Deployment (Vercel)

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no extra configuration needed
4. Update `SITE_CONFIG.url` in `constants/site.ts` with your production domain

### Environment Variables

No environment variables are required for the base portfolio. Add any as needed for contact form integrations (e.g., Resend, Formspree).

## Performance

The site is optimized for Lighthouse scores:

- Server Components where possible
- Client Components only when interactivity is needed
- `next/image` for optimized images
- Lazy loading and code splitting
- Minimal JavaScript bundle

## License

MIT
