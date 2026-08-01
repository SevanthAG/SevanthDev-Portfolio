# Sevanth A G — Portfolio Documentation

A modern, responsive single-page portfolio built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

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
│   │   ├── Navbar.tsx               # Sticky navigation bar
│   │   ├── Footer.tsx               # Page footer
│   │   ├── LoadingScreen.tsx        # Splash/loading animation
│   │   ├── ScrollProgressBar.tsx    # Scroll progress indicator at top
│   │   ├── ScrollToTop.tsx          # Floating scroll-to-top button
│   │   ├── ThemeToggle.tsx          # Dark/light theme toggle
│   │   └── NotFound.tsx             # 404 page
│   ├── sections/                    # Page sections (one per route section)
│   │   ├── Hero.tsx                 # Landing hero with photo, name, CTA
│   │   ├── About.tsx                # About me & education
│   │   ├── Skills.tsx               # Skills grouped by category
│   │   ├── Experience.tsx           # Work/internship experience
│   │   ├── Projects.tsx             # Project showcase
│   │   ├── Certifications.tsx       # Certificates earned
│   │   ├── Leadership.tsx           # Leadership & extracurricular roles
│   │   └── Contact.tsx              # Contact form & info
│   ├── data/
│   │   └── resume.ts                # All resume data (single source of truth)
│   ├── hooks/
│   │   └── useTheme.ts             # Dark/light theme hook
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   ├── styles/
│   │   └── index.css                # Tailwind imports + global styles
│   └── utils/
│       └── cn.ts                    # Class name utility
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

Colors are configured via Tailwind CSS classes. The dark theme background is set in `src/App.tsx` (line 54). Modify the gradient colors in each section file to match your preference.

---

## Deploying

The production build in `dist/` can be deployed to any static hosting platform:

- **Vercel** — drag and drop the `dist/` folder, or connect your Git repo
- **Netlify** — drag and drop the `dist/` folder
- **GitHub Pages** — push the `dist/` folder to a `gh-pages` branch

For a custom domain, update the `og:url` and `og:image` meta tags in `index.html`.
