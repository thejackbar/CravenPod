# Cravenpod — Claude Code Handoff Brief

A long-form Fulham FC writing site, currently consisting of a landing page and one in-depth financial analysis. This document contains everything a fresh Claude Code session needs to pick up the project cleanly.

---

## 1. Quick start

```bash
# From your home machine, after pulling this repo onto the server:
cd /srv/docker/cravenpod/website
claude

# Inside Claude Code, start with:
> Read the entire HANDOFF.md file for project context, then wait for instructions.
```

---

## 2. What this is

**Cravenpod** is an editorial-style micro-site covering Fulham Football Club in long-form. It's independent, unaffiliated with the club, and built around the premise that football writing is better when it's slow-cooked rather than hot-taked.

Currently the site consists of:
- **One landing page** (`index.html`) — hero, featured article, upcoming pieces, about
- **One published article** (`posts/fulham-fc-2024-25-financial-analysis/index.html`) — an interactive 11-section financial deep-dive on Fulham's FY25 accounts, with a Squad Cost Ratio calculator, peer benchmark, relegation scenarios, and more

The articles are built as **single-file HTML dashboards** — no framework, no build step. Just open in a browser.

---

## 3. File & folder structure

```
/srv/docker/cravenpod/website/
│
├── index.html                      # Landing page (site home)
├── HANDOFF.md                      # This file
│
└── posts/
    └── fulham-fc-2024-25-financial-analysis/
        └── index.html              # The financial dashboard article
```

**Web server expectation:** the server is configured to serve `index.html` as the default document for any directory. So:
- `cravenpod.example.com/` → serves `index.html` (landing)
- `cravenpod.example.com/posts/fulham-fc-2024-25-financial-analysis/` → serves the article

**URLs are clean by design.** Never rename files away from `index.html` or introduce extensions in links. All internal links use trailing-slash directory URLs (e.g. `/posts/fulham-fc-2024-25-financial-analysis/`).

---

## 4. Design system (read this before making any visual changes)

The site has a deliberate editorial / newsprint aesthetic that should be preserved across new pages and articles.

### Colour palette (CSS variables in `:root`)

```css
--ink: #0a0a0a          /* primary text, dark sections */
--paper: #f4f1ea        /* default background — warm off-white */
--paper-dark: #e8e3d6   /* secondary background */
--accent: #cc0000       /* crimson — sparingly, for emphasis */
--accent-soft: #8b0000  /* deeper red for danger/red zones */
--gold: #b8935e         /* warm accent */
--ok: #2d5016           /* green signals */
--warn: #b8860b         /* amber signals */
--danger: #8b0000       /* red signals */
--rule: rgba(10,10,10,0.15)  /* hairlines */
--muted: rgba(10,10,10,0.6)  /* secondary text */
```

### Typography (all Google Fonts)

- **Fraunces** — display serif with variable italic. Used for headlines, pull quotes, and big numbers.
- **JetBrains Mono** — monospace. Used for kicker labels, metadata, technical micro-copy. Always uppercase, letter-spacing `0.15em` to `0.3em`.
- **Inter Tight** — body sans-serif. Used for regular paragraph text and UI.

**Never use default system fonts or Arial/Helvetica/Inter/Roboto defaults.** If adding a font weight, add it to the Google Fonts URL.

### Key design moves

- **Grain texture overlay** — SVG noise filter applied via `body::before` at 30% opacity
- **Radial gradient atmospheres** — subtle soft-focus colour washes positioned off-axis
- **Editorial numbering** — sections prefixed with `§ 01`, `§ 02`, etc. in monospace
- **Crimson punctuation** — the accent colour should appear sparingly as emphasis, never as a background flood
- **Italic display type** — Fraunces italic used for the emphasis word in headlines (as in "The *long way round*")
- **Asymmetric layouts** — grids are rarely 50/50. Use 1.4fr/1fr or 2fr/1fr to create visual tension
- **Hairline borders** — `1px solid var(--rule)` on cards, never thick borders

### Mobile design rules

**Never use negative margins on top-level sections.** A previous bug had `margin: 0 -40px` on full-bleed coloured sections which caused 40px of horizontal overflow on mobile. These sections (`.rev-container`, `.peer-container`, `.scr-section`, `.khan-section`, `.verdict`) are siblings of the main content, not children — they span the viewport naturally.

**Reveal animations don't play well with Chart.js.** Any element containing a canvas that Chart.js measures cannot have `transform: translateY()` applied. Keep `.reveal` off chart containers.

---

## 5. The dashboard article's anatomy

The financial dashboard at `/posts/fulham-fc-2024-25-financial-analysis/index.html` contains 11 sections, all with working interactivity. Before touching it, understand what's there:

| § | Section | Interactive? | What it does |
|---|---------|--------------|--------------|
| 01 | Story | ✓ Chart.js | Waterfall chart showing P&L breakdown |
| 02 | 3-Year Trends | ✓ Tabs + chart | Five metric tabs switch the bar chart |
| 03 | Revenue | ✓ Click + hover | Donut chart synced with clickable list |
| 04 | Costs | Static cards | 7-card risk/opportunity grid |
| 05 | Balance Sheet | ✓ Tabs | Animated bars for Assets / Liabilities / Equity |
| 06 | Peer Check | ✓ Scroll trigger | Wage-ratio bars animate in on viewport entry |
| 07 | SCR Calculator | ✓ Sliders + reset | Live ratio calculator with traffic-light gauge |
| 08 | Khan Factor | Static | Narrative on owner backing |
| 09 | Scenarios | ✓ Toggle | Three-way relegation impact comparison |
| 10 | Insights | Static cards | 8-card footnote details |
| 11 | Verdict | Static | Closing bottom line |

**External dependencies loaded from CDN:**
- Chart.js 4.4.0 (`cdnjs.cloudflare.com`) for waterfall, donut, and bar charts
- Google Fonts (Fraunces, JetBrains Mono, Inter Tight)

If the site is ever deployed to a location with restricted egress, these need to be bundled locally.

---

## 6. Key financial figures (for future articles / updates)

Store these for quick reference when writing related content. **These numbers come from the 2024/25 Companies House filing (year ended 30 June 2025).**

| Metric | 2024/25 | 2023/24 | YoY |
|--------|---------|---------|-----|
| Turnover | £194.8m | £181.6m | +7.3% |
| Total staff costs | £166.5m | £154.8m | +7.6% |
| Wage ratio | 85.4% | 85.2% | +0.2pp |
| Operating loss (pre-amortisation) | (£17.3m) | (£10.7m) | widened |
| Depreciation & amortisation | £63.2m | £58.8m | |
| Profit on player disposals | £41.0m | £32.7m | +25% |
| Net interest | £0.5m | £0.9m | |
| Loss for the year | (£39.0m) | (£32.2m) | widened |
| Cash at bank | £13.2m | £32.8m | down £19.6m |
| Player registrations (net) | £138.8m | £119.6m | up £19.2m |
| Net assets | £61.3m | £33.9m | nearly doubled |
| PL final position | 11th | 13th | up 2 |
| PL total attendance | 509,689 | 461,916 | +10.3% |
| Average attendance | 26,826 | 24,311 | |

**Owner/group context:**
- Parent: Fulham Football Leisure Limited (UK)
- Immediate: Cougar Holdco London Limited
- Ultimate: K2TR Family Holdings 2 Corporation (Mr Shahid Khan)
- During FY25: £145.2m shareholder loans converted to equity
- Post year-end: £62.7m additional funding committed
- Riverside Stand: £125m JPMorgan loan (SONIA+3.625%, 5yr term)

---

## 7. Premier League financial rules (current and future)

Critical context for any financial analysis article going forward.

### Current rules (until end of 2025/26 season)
**PSR (Profit & Sustainability Rules):** Max £105m loss over rolling 3-year period. Assessed retrospectively. Includes all spending.

### New rules (from 2026/27 onwards)
**SCR (Squad Cost Ratio):**
- Squad costs ≤ 85% of adjusted revenue (Green threshold)
- 30% buffer up to 115% allowed with financial levy (Amber)
- Above 115% → immediate points deduction (Red)
- Squad costs = player wages + head coach wages + amortised transfer fees + agent fees
- Adjusted revenue = football revenue + net profit on player sales
- Non-football costs (debt interest, stadium) excluded
- Assessed each March 1 on full-season forecasts
- 2025/26 is "shadow year" — data collected, no enforcement
- Financial levies begin 2027/28

**SSR (Sustainability and Systemic Resilience):**
- Liquidity Test with £85m stress-test adjustment
- Positive Equity Test: liabilities ÷ adjusted assets ≤ 90% (2026/27), 85% (2027/28), 80% (2028/29+)
- Assessed July 7 each year

**UEFA rules (for clubs in European competitions):** 70% squad cost ratio cap (stricter than PL's 85%)

---

## 8. Voice and editorial tone

The writing voice is distinctive and should be consistent across all articles:

- **Plain English over jargon.** If a term needs defining, define it. Assume a smart reader who isn't a finance pro.
- **British spelling and punctuation.** "Analyse" not "analyze", "centre" not "center", em-dashes with spaces ( — ) for asides.
- **Dry, slightly warm.** Not chirpy, not snarky. The voice of a football-literate friend explaining the books over a pint.
- **Numbers woven in, not stacked.** Rather than "£194.8m revenue, £166.5m wages, £39m loss", write "Revenue climbed to £194.8m, but wages followed at £166.5m — the gap producing a £39m loss."
- **Headlines are declarative, not cryptic.** "The balance sheet: stronger than it looks." Not "A tale of two sides." Tell the reader what they're about to learn.
- **Pull quotes and dropcaps used sparingly** for rhythm.
- **No exclamation marks** except in direct quotes.
- **Cockney/Fulham local colour** is fine in moderation — the site is rooted in place. "By the Thames", "Craven Cottage", "the cottagers" all appropriate.

---

## 9. What to do next (prioritised ideas)

### Immediate housekeeping
1. **Add `robots.txt` and `sitemap.xml`** — basic SEO hygiene for a fresh site
2. **Add proper Open Graph images** — currently no `og:image` defined. Design a 1200×630 card for both the landing page and the dashboard article
3. **Favicon** — need an SVG + PNG fallback. A simple monogram "C" with crimson offset matching the site logo would fit
4. **Analytics** — add Plausible, Fathom, or similar privacy-respecting analytics. Avoid Google Analytics given the editorial tone

### Content pipeline (already teased in "What's cooking")
1. **The Riverside Stand, in full** — architectural + financial story of the new stand
2. **The Silva years** — tactical retrospective on manager Marco Silva
3. **Player trading: how Fulham became net-positive** — transfer strategy breakdown
4. **The Khan sports empire** — Fulham's place in Khan's wider sports holdings

### Structural improvements
1. **Article template** — extract the dashboard's CSS into a shared stylesheet (`/assets/article.css`) so future articles don't duplicate 1000+ lines
2. **Navigation system** — as the archive grows, the landing page's single-card featured section needs to become a proper article listing
3. **RSS feed** — readers of long-form sites love RSS. Generate `/feed.xml`
4. **Dark mode toggle** — CSS variables are already structured for it; just needs a toggle with `prefers-color-scheme` as default
5. **Reading time calculator** — currently hardcoded "~15 min read". Should be computed from article word count
6. **Print stylesheet** — the dashboard is substantial. A print-optimised version would be a nice touch
7. **`_redirects` or nginx rule** — add 301 redirects from `/posts/xxx.html` → `/posts/xxx/` for robustness

### Bigger moves
1. **Convert to Astro or 11ty** — if the archive grows past 5-10 articles, a static site generator will be worth the refactor. Astro would preserve the "islands" of interactivity in the dashboard perfectly
2. **Typography refinement** — consider adding `opsz` variable font settings for Fraunces at different sizes (optical sizing on for large display, off for body)
3. **Server config for caching** — since articles are static HTML with CDN-loaded assets, aggressive browser caching with far-future expiry on `/posts/*` would be ideal
4. **Dashboard data separation** — the financial numbers are currently hardcoded in the HTML. Extracting them to a JSON file makes updating easier when new accounts drop

### Content quality
1. **Fact-check peer benchmarks** — the peer ratio bars in the dashboard use illustrative figures. Getting real Deloitte Football Money League figures would strengthen the piece
2. **Embed a source section** — list every linked source at the bottom of the dashboard for rigour
3. **Correction log** — if financial figures get revised, a public correction log adds credibility

---

## 10. Technical gotchas to avoid

These are landmines I stepped on while building — don't repeat them.

1. **`maintainAspectRatio: false` on Chart.js** — this ignores the `height` attribute on `<canvas>`. Always wrap canvases in a div with a fixed height: `<div style="position: relative; height: 340px;"><canvas></canvas></div>`

2. **Never initialise Chart.js inside an element with `transform`** — the library can't measure dimensions correctly. Keep scroll-reveal animations off chart containers.

3. **Browser storage APIs don't work in some sandboxed HTML contexts** — if testing in an iframe, `localStorage` and `sessionStorage` may fail silently. Use in-memory JavaScript variables where possible.

4. **CDN failures silently break the dashboard** — Chart.js is loaded from `cdnjs.cloudflare.com`. If it fails to load, charts silently don't render. For robustness, consider self-hosting critical JS dependencies.

5. **Mobile Safari vs Chrome** — on older mobile Safari, `backdrop-filter` can cause rendering glitches. Not used currently but something to watch if added.

6. **The grain SVG noise filter is heavy on scroll** — `position: fixed` with an SVG filter can trigger repaint on some devices. If performance issues arise, replace with a pre-rendered noise PNG.

7. **Full-bleed sections with negative margins** — as mentioned above, don't use `margin: 0 -40px` on top-level sections. Width them naturally with 100% and use inner max-width containers.

---

## 11. Questions to ask me (the person running Claude Code)

Before making substantive changes, a fresh Claude Code session should clarify:

1. **Is this for the live site or a staging copy?** If live, be cautious about layout-breaking changes.
2. **Do we have a deploy pipeline?** (CI/CD? Manual scp? Docker container rebuild?) This dictates whether changes can be tested locally first.
3. **Is there a preferred commit style / branch strategy?** The editorial nature of the site suggests maybe small, semantic commits.
4. **What's the priority right now — new content, refactoring, or polish?** The ideas in Section 9 span all three.

---

## 12. First-run checklist for a new Claude Code session

When you (the human) bring this to Claude Code, try this opening prompt:

> Please read the `HANDOFF.md` file in full for complete project context. The site is live at `/srv/docker/cravenpod/website`. Before making any changes, tell me:
>
> 1. Your understanding of the current state
> 2. What you'd recommend as the first priority
> 3. Any questions about the design system or content direction
>
> Don't make any file edits yet. I'll review your recommendations first.

---

*Document version: 1.0 · Generated during handoff from Claude (web) to Claude Code. If you're reading this months later and some context feels stale, ask the project owner whether it still holds.*
