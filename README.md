# fired.vc — site

Single-page site for **Fired.VC**, a Toronto-based agentic venture studio (Sunil Sharma + Gilberto Gandra).

## Sources synthesized into this build

1. **Fired.VC Operating Plan** — canonical strategy, dividend model, 12-week sprint, founder archetype, verticals, sponsor tiers, manifesto.
2. **NFX Network Effects Bible** — Growth Stack (Embedded NFX → Viral → Reinforcement Defensibility → Screenless Distribution), Three-Person Unicorn framing, expertise NFX (#14), 70% statistic informing scoring weights.
3. **FI Global Leaders Call (Mar 2026)** — agentic shift, Mac Mini = team, 80/20 unicorn thesis, zero-to-one positioning.
4. **Anthropic "Founder's Playbook" (2026)** — Idea/MVP/Launch/Scale stages used as the operating manual section, Claude tool stack callouts, security review discipline, CLAUDE.md persistent context.
5. **Techstars Toronto Fund I deck** — credibility infrastructure: Sunil's track record (Techstars TO MD 7 yrs / 9 batches, FI Toronto Chapter Lead 11 yrs / 28 cohorts / 550+ companies, Extreme Venture Partners, Consul General), Brain Gain Corridor framing, Great Lakes geography ($6T GDP, $175B+ Toronto-Philly corridor), 5,000+ mentor network.

## Sections (top → bottom)

1. **Hero** — Toronto · Cohort One · Fund I · live operator dashboard mockup
2. **Credibility strip** — 550+ FI companies / 9 Techstars batches / $11B+ raised / 5,000+ mentors
3. **Manifesto**
4. **Thesis** — Three-Person Unicorn / Operator's Edge / Dividends
5. **Playbook** — Anthropic's Idea→MVP→Launch→Scale, mapped onto the Fired sprint with Claude tools at each stage
6. **Screenless Doctrine** + agent terminal mockup
7. **Founder Archetype** + Rant Test + distribution-weighted scoring rubric
8. **NFX Growth Stack** (4 layers)
9. **The Fired Sprint** — 12-week timeline
10. **The Model** — comparison table + dividend mechanics card
11. **Proof of Thesis** — 6 already-shipping agentic operator-founded companies (Carta Healthcare, Wordsmith, Duvo, Zingage, Cogent, GC AI)
12. **Priority Verticals** — Cohort Zero focus
13. **The Partners** — Sunil + Gilberto bios + Brain Gain Corridor block
14. **For Limited Partners** — Fund I terms + objection-handling FAQ + securities disclaimer
15. **Strategic Partner Tiers** 1–5
16. **Fire Yourself** application form
17. **Footer** + legal boilerplate

## Strategic notes (internal)

- Techstars Toronto deck used **for credibility patterns**, not as the operating strategy. Sunil's Techstars + FI tenure is presented as the personal track record behind Fired.VC, but the structure (dividends, agentic-first, 12-week sprint) belongs to the Fired plan, not to Techstars.
- Anthropic Playbook is **branded as the operating manual** for the sprint. The four stages give Fired's sprint a credible, externally-validated framework. We are explicit that we are not affiliated with Anthropic — we operate on their tooling.
- Proof Points companies are **reference cases**, not portfolio companies. Sourced from Anthropic's Playbook. Disclaimer in the section makes this explicit.

## Tech
Pure HTML + CSS + tiny vanilla JS. No build step.

## Run locally
```bash
cd projects/fired-vc
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy via Vercel
Vercel → New Project → import `brazilianin/fired-vc` → Framework "Other" → deploy.

## Files
```
fired-vc/
├── index.html
├── css/style.css
├── js/main.js
├── assets/preview-hero.png
├── assets/preview-full.png
└── README.md
```

## Open follow-ups
- Hook the application form to a real backend (Formspree, Notion, or a Cohort One OpenClaw agent that auto-scores against the rubric).
- Gated /lp PDF route once the Fund I PPM is ready (currently the legal boilerplate is generic).
- Cohort Zero case studies / logos as they close.
- Optional: replace stock-photo-style operator dashboard with screenshot of a real OpenClaw agent run.
