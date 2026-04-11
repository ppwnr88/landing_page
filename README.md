# Wannarat Tools — Landing Page

A modern, dark-themed landing page showcasing browser-based developer utilities.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling
- **lucide-react** — icons

## Run locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
# Preview the production build
npm run preview
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### Option B — Git push (recommended)

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — no extra config needed

The `vercel.json` in the root handles SPA routing rewrites.

## Project structure

```
src/
  components/
    ToolCard.tsx      # Reusable tool card component
  data/
    tools.ts          # Tool definitions (title, url, icon, etc.)
  App.tsx             # Root layout & hero section
  main.tsx            # React entry point
  index.css           # Tailwind directives + global styles
```

## Adding a new tool

Edit `src/data/tools.ts` and add an entry:

```ts
{
  id: 'mytool',
  title: 'My Tool',
  description: 'What it does in one sentence',
  url: 'https://mytool.wannarat.cc',
  icon: 'LucideIconName',   // any icon from lucide-react
  accent: 'from-forest-800 to-forest-900',
}
```

Then import the icon in `src/components/ToolCard.tsx` and add it to `iconMap`.
