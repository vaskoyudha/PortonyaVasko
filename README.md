# PortonyaVasko

Japanese idol-game UI replica built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## Stack

- Next.js 15.1.6 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Inline SVG icons (no component libraries)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/          # Next.js App Router (layout, page, globals.css)
  components/   # 9 UI region components
public/
  assets/       # bg.jpg and other static assets
```

## Components

- `Stage` — full-desktop background container
- `ProfileCard` — top-left avatar + stamina/rank bars
- `MissionCard` — floating mission tab + objective card
- `EventTile` — event preview tile
- `CurrencyPill` — gold + gem pill
- `IconStack` — menu / gift / notice icons
- `TopRight` — wraps CurrencyPill + IconStack with positioning
- `SpeechBubble` — character dialogue bubble
- `LessonCard` — bottom-right lesson card
- `BottomNav` — sliding-pill navigation
