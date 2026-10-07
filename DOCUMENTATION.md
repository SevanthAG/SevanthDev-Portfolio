# Sevanth A G — Portfolio Documentation

A responsive single-page portfolio built with React, TypeScript, Tailwind CSS v4, and Framer Motion,
styled as a Minecraft-inspired blocky/pixel world (grass, dirt, stone and sky) while keeping the
content and structure of a professional developer portfolio.

---

## Design system (Minecraft-inspired)

All theme values live in `src/styles/globals.css`:

- **Fonts** — `Silkscreen` (pixel) for headings, navigation, buttons and labels; `Inter` for body copy.
  Headings pick up the pixel font from a base rule; use the `font-body` utility to opt out.
- **Raw palette** — `--mc-*` tokens for grass, forest, dirt, stone, charcoal, beige, sky, gold and warm off-white.
- **Semantic tokens** — `--surface`, `--border`, `--ink`, `--ink-muted`, `--accent`, `--gold`… exposed to Tailwind
  via `@theme inline`, so components use utilities such as `bg-surface`, `text-ink-muted`, `border-line` and the
  palette follows the active theme automatically. `.dark` on `<html>` swaps every token for the night palette.
- **Pixel primitives** — `.pixel-panel`, `.pixel-slot`, `.pixel-btn`, `.pixel-chip`, `.pixel-kicker`,
  `.terrain-strip`, `.pixel-texture`, `.pixel-lift`, plus the fixed `WorldBackground` layers (`.world__*`).
- **Living world** — `useWorldPhase` writes `--world-warm/dusk/night` (0-1) while you scroll, and three tint
  layers fade between day → afternoon → sunset → night. Each theme sets its own maximum strength, the tints are
  light enough that heading contrast stays above 10:1, and only the background is affected — panels stay opaque.
- **One journey** — every section carries a waypoint number (`step="03"`) in its kicker plus a faint pixel-art
  `SectionMotif`, so the sections read as places in one world rather than unrelated cards.
- **Item inspection** — skills are inventory slots; hovering, focusing or tapping one reveals its description and
  where it is actually used. There are deliberately no proficiency percentages.
- **Hidden discoveries** — three optional secrets (the wandering companion on the spawn ground, a diggable footer
  block, and typing `grass` anywhere) award advancement toasts. None of them block, cover or interrupt normal use,
  and the toasts announce politely and auto-dismiss.
- **Reduced motion** — `prefers-reduced-motion: reduce` disables smooth scrolling and shortens CSS
  animations, and `useReveal` skips the scroll-triggered fade entirely so content is simply visible
  (nothing waits to be animated in). Particle bursts are suppressed; advancement toasts still announce.
- **Theme bootstrap** — a small inline script in `index.html` applies the saved theme before first paint so the
  world never flashes, and the toggle persists the choice in `localStorage`.

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | React 19 + TypeScript               |
| Build Tool   | Vite 8                              |
| Styling      | Tailwind CSS v4                     |
| Animations   | Framer Motion                       |
| Icons        | Lucide React                        |
| Routing      | React Router DOM v7                 |
| Linting      | Oxlint                              |

---

## Project Structure

```
myportfolio/
├── public/
│   ├── favicon.svg
│   └── profile-photo.jpeg          # Your professional photo
├── src/
│   ├── App.tsx                      # Root component with routing & loading screen
│   ├── main.tsx                     # Entry point
│   ├── components/                  # Reusable UI components
│   │   ├── Navbar.tsx               # Sticky blocky navigation bar
│   │   ├── Footer.tsx               # Page footer with terrain divider
│   │   ├── LoadingScreen.tsx        # "Loading world" splash screen
│   │   ├── ScrollProgressBar.tsx    # XP-style scroll progress bar
│   │   ├── ScrollToTop.tsx          # Floating scroll-to-top button
│   │   ├── ThemeToggle.tsx          # Day/night block toggle
│   │   ├── WorldBackground.tsx      # Fixed sky/clouds/hills/ground + phase tints
│   │   ├── SectionHeading.tsx       # Shared pixel section header + waypoint
│   │   ├── SectionMotif.tsx         # Faint per-section pixel-art watermark
│   │   ├── PlayerProfileCard.tsx    # Hero identity card
│   │   ├── ProjectPreview.tsx       # Generated pixel-art project preview
│   │   ├── AchievementProvider.tsx  # Advancement toasts for hidden discoveries
│   │   ├── EasterEggs.tsx           # Wandering companion + keyboard secret
│   │   └── NotFound.tsx             # 404 page
│   ├── sections/                    # Page sections (one per route section)
│   │   ├── Hero.tsx                 # Spawn area: name, CTAs, identity card
│   │   ├── About.tsx                # About me & education (info panels)
│   │   ├── Skills.tsx               # Inventory: inspectable item slots
│   │   ├── Projects.tsx             # Builds: the focus of the portfolio
│   │   ├── Experience.tsx           # Journey: work/internship as level progression
│   │   ├── Certifications.tsx       # Certificates earned
│   │   ├── Leadership.tsx           # Leadership & extracurricular roles
│   │   └── Contact.tsx              # Player-details panel & social links
│   ├── data/
│   │   ├── resume.ts                # All resume data (single source of truth)
│   │   └── skills.ts                # Skill descriptions, usage notes, block colours
│   ├── hooks/
│   │   ├── useTheme.ts              # Dark/light theme hook
│   │   ├── useReveal.ts             # Reveal-on-scroll observer
│   │   ├── useScrollProgress.ts     # Scroll progress for the XP bar
│   │   ├── useScrollSpy.ts          # Active section tracking for the navbar
│   │   ├── useWorldPhase.ts         # Day → night environmental progression
│   │   └── useAchievements.ts       # Hidden-discovery context
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   └── styles/
│       └── globals.css              # Theme tokens, pixel primitives, world layers
├── index.html                       # HTML entry with SEO meta tags
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript config
├── package.json                     # Dependencies & scripts
├── README.md
└── DOCUMENTATION.md                 # This file
```

---

## How to Run

### Prerequisites

- **Node.js** v18 or higher installed on your machine
- **npm** (comes with Node.js)

### 1. Install Dependencies

Open a terminal in the `myportfolio` folder and run:

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

This starts a local dev server — usually at **http://localhost:5173**. Open that URL in your browser. The page auto-reloads when you edit any source file.

### 3. Build for Production

```bash
npm run build
```

Compiles TypeScript and bundles the app into the `dist/` folder, ready for deployment.

### 4. Preview Production Build

```bash
npm run preview
```

Serves the production build locally so you can verify it before deploying.

### 5. Lint

```bash
npm run lint
```

Runs Oxlint to catch code issues.

---

## Customization

### Section Order

The home page runs Hero → About → Skills → **Projects** → Experience → Certifications → Leadership →
Contact, so the work is visible early. Section ids and the navbar order (`src/components/Navbar.tsx`) must stay in
sync when this changes.

### Skill Descriptions

The inspection tooltips read from **`src/data/skills.ts`**. Each entry has a factual one-line description of the
technology and, only where the portfolio already proves it, a `usage` note. Skills without evidence of use
intentionally show the description alone — do not add proficiency percentages.

### Project Screenshots

`ProjectPreview` draws a generated pixel-art scene plus the project monogram, so no image assets are needed.
`Project.image` in the resume data is currently unused; render it inside `ProjectPreview` if you add real
screenshots to `public/projects/`.

### Update Your Data

All portfolio content lives in a single file: **`src/data/resume.ts`**. Edit it to update:

- Name, title, summary
- Education history
- Skills & categories
- Work experience
- Projects
- Certifications
- Leadership & achievements
- Social links

### Update Profile Photo

Replace `public/profile-photo.jpeg` with your own photo. The Hero section will pick it up automatically.

### Change Colors / Theme

Every colour is a token in `src/styles/globals.css` — change a value once and the whole site follows:

- Block palette: the `--mc-*` values at the top of `:root` (grass, forest, dirt, stone, charcoal, beige, sky, gold).
- Day theme: the semantic block under `:root` (`--page`, `--surface`, `--ink`, `--accent`, `--btn-*`…).
- Night theme: the same token names under `.dark`.

The `.dark` class on `<html>` (added by the theme toggle, or by the inline script in `index.html` on first load)
is what switches the two palettes, including the world sky, terrain and ground gradients.

---

## Deploying

The production build in `dist/` can be deployed to any static hosting platform:

- **Vercel** — drag and drop the `dist/` folder, or connect your Git repo
- **Netlify** — drag and drop the `dist/` folder
- **GitHub Pages** — push the `dist/` folder to a `gh-pages` branch

For a custom domain, update the `og:url` and `og:image` meta tags in `index.html`.
