# Riverbend Collision Works

**Grey Chair Digital portfolio demo** — a fictional Northern Kentucky collision center with conversion-focused pages, digital quote flow, and AI-assisted estimates.

> Demo site — not a real business.

## Live concept

- **Brand:** Riverbend Collision Works  
- **Location:** Covington, KY (Northern Kentucky / NKY)  
- **Built by:** [Grey Chair Digital](https://greychair.digital)

## Features

- Premium collision repair marketing pages
- Multi-step quote form with photo upload
- AI-powered damage guidance (Google Gemini)
- Responsive Tailwind UI
- Legal pages, 404 handling, and demo disclaimers

## Tech stack

- React 19 + TypeScript
- Vite
- React Router (hash routes)
- Tailwind CSS (CDN)
- Lucide React icons

## Getting started

### Prerequisites

- Node.js 18+
- Google Gemini API key (optional, for AI quote features)

### Install

```bash
git clone https://github.com/grey-chair-dev/riverbend-collision-demo.git
cd riverbend-collision-demo
npm install
```

Create `.env.local`:

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

## Project structure

```
riverbend-collision-demo/
├── components/       # Navbar, Footer
├── lib/brand.ts      # Single source of truth for demo branding
├── pages/            # Route pages (Home, Services, Quote, Legal, …)
├── services/         # Gemini integration
└── App.tsx           # Routes
```

## Branding

All business name, address, phone, and demo copy live in `lib/brand.ts`. Update that file to retheme the demo.

## Deployment

Static hosting (Vercel, Netlify, Cloudflare Pages, GitHub Pages):

```bash
npm run build
```

Deploy the `dist` folder.

## License

Private — Grey Chair Digital. All rights reserved.

## Contact

Questions about this demo: [greychair.digital](https://greychair.digital)
