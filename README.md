# Khosroshah News

Persian/Farsi news website built with Next.js 15.

## Tech Stack

- Next.js 15 (App Router) + React 19
- Ant Design v5
- Tiptap rich text editor
- Swiper for sliders
- Vazirmatn Persian font

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4000](http://localhost:4000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 4000 (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Production server on port 3000 |
| `npm run lint` | ESLint |

## Project Structure

```
src/
├── app/
│   ├── (main)/          # Public pages (home, news, media, archive)
│   ├── admin/           # Admin panel with auth
│   ├── topics/[slug]/   # Topic pages
│   ├── sub-topics/[slug]/ # Sub-topic pages
│   ├── tags/[slug]/     # Tag pages
│   └── api/             # API routes (sitemap)
├── components/
│   ├── Admin/           # Admin UI (TopicSelector, TagSelector, DatePicker)
│   ├── Tiptap/          # Rich text editor
│   ├── navbar/          # Navigation + SearchModal
│   ├── Footer/          # Site footer
│   └── Leftside/        # Sidebar components
├── Styles/
│   ├── global.css       # Global styles
│   └── Font/            # Vazirmatn font files
└── img/                 # Static images
```



API URLs are "dammy" and hardcoded in source.
