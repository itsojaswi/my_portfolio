# 🌌 Ojaswi Khanal — Galaxy Portfolio

A stunning, galaxy-themed developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌟 **Live star field** — animated canvas with twinkling stars, nebulae, and shooting meteors
- 🪐 **Cursor glow** — subtle purple radial glow that follows your cursor (desktop)
- 🚀 **Smooth animations** — Framer Motion scroll reveals and staggered entrance effects
- ⌨️ **Type animation** — animated role cycling in hero section
- 🎨 **Galaxy color palette** — deep space violets, nebula cyans, stardust pinks
- 📱 **Fully responsive** — mobile-first design with collapsible nav
- ⚡ **Next.js 14 App Router** — modern React with TypeScript

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### 1. Clone / Download the project

```bash
# If downloaded as zip, extract it, then:
cd ojaswi-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### 4. Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ojaswi-portfolio/
├── app/
│   ├── globals.css        # Global styles + galaxy utilities
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── StarField.tsx      # Canvas star field animation
│   ├── CursorGlow.tsx     # Mouse cursor glow effect
│   ├── Navigation.tsx     # Sticky navbar with active tracking
│   ├── Hero.tsx           # Landing hero with type animation
│   ├── About.tsx          # About me with animated planet
│   ├── Experience.tsx     # Timeline of work experience
│   ├── Skills.tsx         # Tech skills with animated bars
│   ├── Projects.tsx       # Project showcase cards
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer
├── public/                # Static assets (add your photo here)
├── tailwind.config.ts     # Custom galaxy theme tokens
├── next.config.mjs
├── tsconfig.json
└── package.json
```

### Colors
Edit `tailwind.config.ts` → `theme.extend.colors.cosmos` to tweak the galaxy palette.

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next` | React framework |
| `tailwindcss` | Utility CSS |
| `framer-motion` | Animations |
| `react-intersection-observer` | Scroll triggers |
| `react-type-animation` | Hero typing effect |
