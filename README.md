# fired.vc — site

Single-page agentic venture studio site for **fired.vc**.

## Concepts woven into the site
From the three source documents:

- **Fired.VC Operating Plan** — full strategy + verticals + dividend model + 12-week sprint + LP/Fund I + sponsor tiers + manifesto.
- **NFX Network Effects Bible** — Growth Stack section (Embedded NFX, Viral, Reinforcement Defensibility, Screenless Distribution); the "Three-Person Unicorn" framing; the 35% distribution weighting in founder scoring; the 70% statistic.
- **FI Global Leaders Call** — the agentic shift, Mac Mini = team, 80/20 future-unicorns thesis, zero-to-one positioning, McKinsey/Accenture-disruption framing (used in thesis + LP objection handling).

## Sections
1. Hero — Fire yourself / Build / Own + headline stats
2. Manifesto block
3. Thesis (Three-Person Unicorn / Operator's Edge / Revenue not Exits)
4. Screenless Doctrine + live-feel terminal mockup
5. Founder Archetype + Rant Test + distribution-weighted scoring bars
6. NFX Growth Stack (four layers, animated reveal)
7. The Fired Sprint (12-week timeline)
8. The Model — comparison table + dividend mechanics card
9. Priority Verticals (Cohort Zero) — construction, healthcare ops, legal, logistics, insurance, CRE
10. LP brief + FAQ (objection handling lifted from plan §9)
11. Strategic Partner Tiers 1–5
12. "Fire Yourself" application form

## Tech
Pure HTML + CSS + a tiny vanilla JS. No build step. No frameworks. Drop into any static host (Vercel, Netlify, GoDaddy, GitHub Pages).

## Run locally
```bash
cd projects/fired-vc
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to Vercel
```bash
cd projects/fired-vc
vercel --prod
```

## Files
```
fired-vc/
├── index.html
├── css/style.css
├── js/main.js
├── assets/        # logos / hero imagery (optional)
└── README.md
```

## Next iterations to consider
- Replace the dummy form action with Formspree / Vercel form / Notion API
- Add a /lp protected route once the LP deck PDF exists
- Hook OpenClaw agents to auto-respond to applications and pre-score on the rubric
- Cohort Zero case studies once they exist
- Podcast embed once launched (per Plan §8 Phase 2)
