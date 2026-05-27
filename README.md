# PortonyaVasko

RPG-themed personal portfolio for Vasco Yudha Nodyatama Sera, built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## Stack

- Next.js 15.1.6 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Inline SVG icons (no component libraries)

## Routes

| Route | Description |
| --- | --- |
| `/` | Homepage with the full RPG HUD (HeroHeader, StatBars, MissionCard, MinimapWidget, AchievementPopup, etc.). |
| `/about` | Coming-soon stub. |
| `/skills` | Coming-soon stub. |
| `/projects` | Coming-soon stub. |
| `/contact` | Coming-soon stub with a GitHub link plus LinkedIn / X / Email TBD chips. |

## Components

- `Stage` — full-desktop background container, mounts the homepage HUD
- `HeroHeader` — top-left identity card (name + class + level)
- `StatBars` — top-right EXP / MP / HP bars
- `FloorIndicator` — top-center floor label
- `AchievementPopup` — transient toast cycling 3 achievements
- `MissionCard` — floating mission tab + quest card
- `MinimapWidget` — bottom-left compass
- `SpeechBubble` — character dialogue bubble
- `LessonCard` — rotated training card
- `BottomNav` — sliding-pill router (Home / About / Skills / Projects / Contact)
- `ComingSoon` — shared stub-page card for non-home routes

## Project Structure

```
src/
  app/          # Next.js App Router (layout, page, globals.css, stub routes)
  components/   # 11 UI region components
public/
  assets/       # bg.jpg and other static assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The project's tmux convention runs the dev server on port 3001 to avoid collisions:

```bash
PORT=3001 npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deploy

This project deploys to Vercel as a static Next.js App Router site. Vercel
auto-detects the framework, so no `vercel.json` is required.

### Option A — Vercel CLI

```bash
npm i -g vercel        # install once
vercel login           # one-time
vercel                 # preview deploy (returns a preview URL)
vercel --prod          # production deploy
```

### Option B — Git import

1. Push the `main` branch to GitHub: `git push origin main`
2. Open [vercel.com/new](https://vercel.com/new) and import the
   `vaskoyudha/PortonyaVasko` repository.
3. Accept default Next.js framework settings; click **Deploy**.
4. Vercel issues a preview URL on first import and a production URL
   once you promote (or auto-promotes the production branch).

### Status

Deploy not yet executed from this workspace; URL TBD.
