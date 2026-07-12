# Adi Nata — Personal Portfolio

Next.js App Router portfolio for projects, experience, and resume.

## Stack

- Next.js 16 (App Router, React Server Components)
- TypeScript
- Tailwind CSS
- Deployed with a standalone Next.js output (Docker-friendly)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint (`eslint .`) |
| `npm run format` | Format with Prettier |

## Environment

Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Used for canonical metadata, sitemap, and robots. Defaults to `https://adinata.dev`.

## Deploy

Build produces a standalone server under `.next/standalone` (`output: 'standalone'` in `next.config.mjs`). You can also deploy to Vercel with the default Next.js settings.
