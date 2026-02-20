# AETRIX 2026 — React + Vite + TypeScript

> Full-stack hackathon landing page built with **React 18 · Vite · TypeScript · Framer Motion · React Three Fiber**

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Animations | Framer Motion |
| 3D | React Three Fiber + Drei (Three.js) |
| Icons | Lucide React |
| Styling | CSS Modules |

---

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
# Follow prompts — done in 60 seconds
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repo
2. Go to vercel.com → New Project → Import your repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy** — live in ~30 seconds

### After deployment — making changes
```bash
# Edit any file, then:
git add .
git commit -m "your change"
git push

# Vercel auto-redeploys in ~30 seconds. Done.
```

---

## How to Update the Unstop Registration Link

When you get your Unstop link, open **`src/App.tsx`** and change line 12:

```ts
// BEFORE
export const UNSTOP_URL = 'COMING_SOON'

// AFTER
export const UNSTOP_URL = 'https://unstop.com/your-actual-link'
```

All 4 register buttons across the site update automatically.

---

## How to Edit Content

All hackathon data lives in **one file**: `src/lib/constants.ts`

| What to change | Where |
|---|---|
| Timeline dates & descriptions | `TIMELINE_ITEMS` |
| Calendar event dates | `CAL_EVENTS` |
| Domain names & descriptions | `DOMAINS` |
| Prize amounts | `PRIZES` (amounts in `Prizes.tsx`) |
| Schedule items | `DAY1_SCHEDULE` / `DAY2_SCHEDULE` |
| FAQ questions & answers | `FAQS` |
| Evaluation criteria | `EVAL_CRITERIA` |

---

## Project Structure

```
src/
├── App.tsx              ← Root + UNSTOP_URL config
├── main.tsx             ← Entry point
├── index.css            ← Global styles + design tokens
├── lib/
│   └── constants.ts     ← ALL event data (edit here)
├── hooks/
│   ├── useCountdown.ts  ← Hero countdown timer
│   └── useScrollReveal.ts
├── components/
│   ├── Loader.tsx       ← Loading screen
│   ├── Navbar.tsx       ← Navigation
│   └── Cursor.tsx       ← Custom cursor
└── sections/
    ├── Hero.tsx         ← 3D torus + countdown
    ├── About.tsx
    ├── Domains.tsx      ← Marquee + domain rows
    ├── Prizes.tsx       ← Prize cards
    ├── Timeline.tsx     ← Dual calendar + timeline list
    ├── Schedule.tsx     ← Day 1/2 tabbed schedule
    ├── Evaluation.tsx   ← Judging criteria
    ├── Register.tsx
    ├── FAQ.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

---

## Build for Production

```bash
npm run build
# Output in /dist — ready to host anywhere
```

---

**AETRIX 2026 · Science & Technical Committee · PDEU Gandhinagar**
