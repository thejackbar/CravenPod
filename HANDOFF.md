# Cravenpod, Claude Code Handoff Brief

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
- **One landing page** (`index.html`), hero, featured article, upcoming pieces, about
- **One published article** (`posts/fulham-fc-2024-25-financial-analysis/index.html`), an interactive 11-section financial deep-dive on Fulham's FY25 accounts, with a Squad Cost Ratio calculator, peer benchmark, relegation scenarios, and more

The articles are built as **single-file HTML dashboards**: no framework, no build step. Just open in a browser.

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

The site has a "Frosted Touch" aesthetic: dark layered atmosphere, translucent glass panels, soft diffused shadows, rounded corners, gradient accents. Modern but tactile. The previous editorial / newsprint cream palette has been retired. The canonical implementation is in `index.html`; new pages and articles should adopt the same tokens and patterns.

### Colour palette (CSS variables in `:root`)

```css
/* base atmosphere */
--bg-0: #06070f;             /* deepest layer */
--bg-1: #0a0d1c;             /* mid layer */
--bg-2: #0e1226;             /* lift layer */

/* glass surfaces */
--glass:              rgba(255,255,255,0.05);  /* default panel */
--glass-strong:       rgba(255,255,255,0.09);  /* hover / lifted */
--glass-edge:         rgba(255,255,255,0.10);  /* hairline borders */
--glass-edge-strong:  rgba(255,255,255,0.20);  /* hover borders */

/* text */
--ink:      #f5f6fa                  /* primary text */
--ink-soft: rgba(245,246,250,0.78)   /* secondary text */
--ink-mute: rgba(245,246,250,0.55)   /* labels, metadata */

/* brand accents */
--accent:      #ff3b67                  /* primary accent (warm crimson) */
--accent-deep: #cc0033                  /* deeper crimson for solid blocks */
--accent-glow: rgba(255,59,103,0.40)    /* halo / glow shadow colour */
--gold:        #d4af6e
--aqua:        #6ec3d4
--violet:      #9d8bff

/* shadows */
--shadow-sm: 0 4px 16px rgba(0,0,0,0.32);
--shadow-md: 0 14px 44px rgba(0,0,0,0.44);
--shadow-lg: 0 32px 80px -20px rgba(0,0,0,0.58);

/* radius scale */
--r-sm:   10px;
--r-md:   16px;
--r-lg:   22px;
--r-pill: 999px;
```

### Body atmosphere

The `body` carries a fixed multi-layer radial gradient on top of `--bg-0`, with a low-opacity SVG grain overlay via `body::before`. Frosted glass panels are layered above this, picking up the colour wash through `backdrop-filter: blur(...)`. Don't override the body background on inner sections, the atmosphere should bleed through.

```css
body {
  background-color: var(--bg-0);
  background-image:
    radial-gradient(ellipse 1100px 700px at 8% -8%,  rgba(157,139,255,0.22) 0%, transparent 60%),
    radial-gradient(ellipse  900px 760px at 94% 10%, rgba(204,0,51,0.20)    0%, transparent 60%),
    radial-gradient(ellipse 1100px 900px at 50% 108%,rgba(110,195,212,0.11) 0%, transparent 70%),
    linear-gradient(180deg, #06070f 0%, #0a0d1c 35%, #0d1124 100%);
  background-attachment: fixed;
}
```

### Glass panel pattern

Reuse this recipe for any card, sticky bar, footer panel, or content surface:

```css
.glass-panel {
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  border-radius: var(--r-lg);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
          backdrop-filter: blur(20px) saturate(140%);
  box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(255,255,255,0.06);
}
.glass-panel:hover { border-color: var(--glass-edge-strong); }
```

The inset top highlight is what sells the "lit edge" glass look — keep it. Always include both `-webkit-backdrop-filter` and `backdrop-filter` for Safari support.

### Typography (all Google Fonts)

- **Bricolage Grotesque** (variable, opsz 12..96, wdth 75..100, wght 200..800): display sans for headlines, big numbers, the logo. No italic faces — emphasis is conveyed by weight contrast (e.g. surrounding text at 800, emphasis word at 300) plus a gradient text clip.
- **Inter Tight** (regular + italic, weights 400–700): body text, italic descriptors (taglines, captions, marquee items), buttons.
- **JetBrains Mono** (weights 400/500/700): monospace for kicker labels, metadata, technical micro-copy. Always uppercase, letter-spacing `0.15em` to `0.3em`.

**Bricolage Grotesque tops out at 800.** Don't use `font-weight: 900`. **Never use default system fonts.** If adding a font weight or axis, update the Google Fonts URL.

### Key design moves

- **Body gradient atmosphere**: violet + crimson + aqua radial blobs on a deep charcoal-blue base, fixed-attached so it stays put on scroll
- **SVG grain**: `body::before` at 0.18 opacity adds tactility without muddying the dark field
- **Frosted glass panels**: every card / sticky bar / footer surface uses the glass-panel recipe
- **Crimson gradient on emphasis**: the linear-gradient `#ff3b67 → #ff7a8a → #ffb1a6` clipped to text is the brand emphasis. Reserve it for one or two phrases per page
- **Pill buttons**: `.btn-primary` (filled accent + glow shadow), `.btn-ghost` (glass surface). See `index.html` for the canonical classes
- **Editorial numbering**: sections still prefixed with `§ 01`, `§ 02` in monospace (carried over from the editorial era)
- **Asymmetric layouts**: grids are rarely 50/50. Use 1.4fr/1fr or 2fr/1fr to create visual tension
- **Hairline borders**: `1px solid var(--glass-edge)` on cards, never thick borders

### Mobile design rules

**Never use negative margins on top-level sections.** A previous bug had `margin: 0 -40px` on full-bleed coloured sections which caused 40px of horizontal overflow on mobile. These sections (`.rev-container`, `.peer-container`, `.scr-section`, `.khan-section`, `.verdict`) are siblings of the main content, not children, they span the viewport naturally.

**Reveal animations don't play well with Chart.js.** Any element containing a canvas that Chart.js measures cannot have `transform: translateY()` applied. Keep `.reveal` off chart containers.

**Backdrop-filter on iOS Safari**: works, but layering many translucent panels can hurt scroll FPS on older devices. If a page has more than ~10 frosted panels in view at once, consider trimming to fewer larger panels rather than many small ones.

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
- 2025/26 is "shadow year", data collected, no enforcement
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
- **British spelling and punctuation.** "Analyse" not "analyze", "centre" not "center". **Never use em-dashes.** Use commas, full stops, parentheses, or colons for asides instead. This applies to all article prose, headlines, pull quotes, and captions.
- **Dry, slightly warm.** Not chirpy, not snarky. The voice of a football-literate friend explaining the books over a pint.
- **Numbers woven in, not stacked.** Rather than "£194.8m revenue, £166.5m wages, £39m loss", write "Revenue climbed to £194.8m, but wages followed at £166.5m, the gap producing a £39m loss."
- **Headlines are declarative, not cryptic.** "The balance sheet: stronger than it looks." Not "A tale of two sides." Tell the reader what they're about to learn.
- **Pull quotes and dropcaps used sparingly** for rhythm.
- **No exclamation marks** except in direct quotes.
- **Cockney/Fulham local colour** is fine in moderation, the site is rooted in place. "By the Thames", "Craven Cottage", "the cottagers" all appropriate.

### Mandatory: run `/humanizer` on every article

Before any article is published or updated, the article prose **must** be passed through the `/humanizer` skill. This strips the standard AI tells: negative parallelisms, rule-of-three padding, persuasive-authority tropes like "the uncomfortable truth is", vague "structural problem dressed up as X" phrasing, and so on. The humanizer should also strip every em-dash, since em-dashes are banned site-wide (see voice rules above).

---

## 9. What to do next (prioritised ideas)

### Immediate housekeeping
1. **Add `robots.txt` and `sitemap.xml`**: basic SEO hygiene for a fresh site
2. **Add proper Open Graph images**: currently no `og:image` defined. Design a 1200×630 card for both the landing page and the dashboard article
3. **Favicon**: need an SVG + PNG fallback. A simple monogram "C" with crimson offset matching the site logo would fit
4. **Analytics**: ✅ GoatCounter is live. **Every new page must include this snippet before `</body>`:**
   ```html
   <script data-goatcounter="https://cravenpod.goatcounter.com/count"
           async src="//gc.zgo.at/count.js"></script>
   ```
   Dashboard: `cravenpod.goatcounter.com`
5. **Homepage sync**: **whenever a new post is published, `index.html` must be updated to include it** so readers can find it from the home page. Add the post to the relevant category section (Match Previews, Match Reviews, Finances, Team News, FFCW, Transfers, etc.) with title, dek, date, and link to `/posts/<slug>/`.

### Content pipeline (already teased in "What's cooking")
1. **The Riverside Stand, in full**: architectural + financial story of the new stand
2. **The Silva years**: tactical retrospective on manager Marco Silva
3. **Player trading: how Fulham became net-positive**: transfer strategy breakdown
4. **The Khan sports empire**: Fulham's place in Khan's wider sports holdings

### Structural improvements
1. **Article template**: extract the dashboard's CSS into a shared stylesheet (`/assets/article.css`) so future articles don't duplicate 1000+ lines
2. **Navigation system**: as the archive grows, the landing page's single-card featured section needs to become a proper article listing
3. **RSS feed**: readers of long-form sites love RSS. Generate `/feed.xml`
4. **Dark mode toggle**: CSS variables are already structured for it; just needs a toggle with `prefers-color-scheme` as default
5. **Reading time calculator**: currently hardcoded "~15 min read". Should be computed from article word count
6. **Print stylesheet**: the dashboard is substantial. A print-optimised version would be a nice touch
7. **`_redirects` or nginx rule**: add 301 redirects from `/posts/xxx.html` → `/posts/xxx/` for robustness

### Bigger moves
1. **Convert to Astro or 11ty**: if the archive grows past 5-10 articles, a static site generator will be worth the refactor. Astro would preserve the "islands" of interactivity in the dashboard perfectly
2. **Typography refinement**: consider adding `opsz` variable font settings for Fraunces at different sizes (optical sizing on for large display, off for body)
3. **Server config for caching**: since articles are static HTML with CDN-loaded assets, aggressive browser caching with far-future expiry on `/posts/*` would be ideal
4. **Dashboard data separation**: the financial numbers are currently hardcoded in the HTML. Extracting them to a JSON file makes updating easier when new accounts drop

### Content quality
1. **Fact-check peer benchmarks**: the peer ratio bars in the dashboard use illustrative figures. Getting real Deloitte Football Money League figures would strengthen the piece
2. **Embed a source section**: list every linked source at the bottom of the dashboard for rigour
3. **Correction log**: if financial figures get revised, a public correction log adds credibility

---

## 10. Facts and sourcing (READ THIS BEFORE WRITING ANY MATCH CONTENT)

**Never invent facts. Ever.** This includes:
- Player names, lineups, and substitutions
- Goalscorers, assists, or who took specific shots
- Quotes from managers or players
- Match incidents (yellow cards, fouls, specific minute events)
- League positions, points totals, goal difference, fixtures
- Historical results

If you don't know it, search the web for it. If you can't find it on a working source, **stop and ask the user** rather than guessing. Made-up facts are worse than admitting uncertainty.

### Verified working sources (use these first)

These have been tested and return real, scrapable content:

- **fotmob.com**: confirmed lineups, substitutions with minutes, player ratings, match facts (e.g. `https://www.fotmob.com/matches/<slug>/<id>`)
- **sports.yahoo.com** / **ca.sports.yahoo.com**: post-match articles with manager quotes
- **fulhamfc.com**: official press conferences and match reports
- **vavel.com**: match coverage and post-match analysis
- **sportsmole.co.uk**: predicted lineups and team news
- **sofascore.com**: match stats and lineups (often loads via JS so verify content actually returned)
- **westlondonsport.com**: Fulham coverage with quotes
- **soccernet.ng**: useful for Iwobi-related stories
- **fulhamish.co.uk**: fan-site coverage with reasonable detail

### Known blocked / unreliable sources

- **wikipedia.org / wikimedia.org**: returns 403 hostname_blocked in this environment. Don't rely on it for league tables despite it being the "obvious" choice; use the Premier League's own pages or a working football site instead.
- **bbc.co.uk/sport**: has historically returned restricted content; verify before depending on it
- **theguardian.com**: same caveat

### Workflow when writing a match piece

1. Get the confirmed lineup from fotmob.com first (search "<home> vs <away> fotmob")
2. Get manager quotes from sports.yahoo.com or the club's own site
3. Get league context (current position, points, GD) by asking the user, league tables move quickly and any cached source will be out of date
4. Cross-reference at least two sources for any specific incident (goal, save, sub minute) before writing it
5. If unsure about any fact, **ask the user before publishing**: they will confirm or correct

### Voice when uncertain

When the data is light, write tighter and more factual rather than padding with invented narrative colour. "Fulham had spells in the first half" is better than "Between the sixth and fortieth minute Fulham were the better side" if you can't verify the precise window. Avoid manufactured hot-takes about manager personalities ("Silva's media management is impeccable"), they read as filler.

---

## 10b. Match Preview research playbook

A long-form match preview is a substantial single-file HTML article (8 sections, ~1,300 lines) that takes 4-6 hours of careful research and writing if every fact is verified. **Don't skip the verification, padding with invented detail breaks the trust this site is built on.**

### Section anatomy (canonical order)

| § | Section | Type | What it contains |
|---|---------|------|------------------|
| 00 | Masthead + Match Hero | Static | Date, time (UK + global), TV, venue, both teams' record, probability bar, dramatic hero image |
| 01 | Form Guide | Static | Last 5-6 PL results both sides, narrative paragraph, W/D/L dot row |
| 02 | Race Infographic | Static | 5-column standings table for the relevant race (top-4 / Europe / relegation), highlighted row for Fulham, projected row for "if win", callout cards |
| 03 | Key Stats | Static | Three comparison cards (goals scored / conceded / clean sheets) with proportional bars, side-by-side top scorers list, Fulham strengths panel |
| 04 | Head to Head | Static | Summary tally (W/D/L), home/away fortress callout if relevant, last 6 meetings with coloured result borders |
| 05 | Team News | Static | Side-by-side predicted XIs in formation lines, full injury list per side with badge severity (Out / Doubt / Suspended) |
| 06 | Tactical Battles | Static | Four 1v1 / unit-vs-unit duels with prose explanation |
| 07 | Interactive | localStorage | Match poll, score predictor, pick your XI on a pitch |
| 08 | Verdict + Footer + JS | Static + JS | Predicted score, single IIFE for poll/predictor/selector + scroll reveal |

### Pre-writing data to gather (in order)

Before opening the editor, run searches and confirm the following. Every number below should appear somewhere in the article and every one of them must be sourced.

**League state**
- Both teams' current PL position, points, W/D/L, GD (statmuse, soccerstats.com, premierleague.com)
- Position and points of the 3-4 teams immediately around Fulham (for the race infographic)

**Recent form**
- Last 5-6 PL results for both sides, with scorelines (espn.com/soccer match reports, fotmob, premierleague.com fixtures)
- Note H/A and any clean-sheet or scoring streaks

**Season totals**
- Goals scored / conceded / GD (statmuse "goals scored by team in PL 2025-26")
- Clean sheets per team (myfootballfacts.com is reliable for season-long counts)
- Top 3 scorers per team with goal totals (espn.com team stats page)
- Top assister per team if it's a notable stat
- xG / xGA only if you find it from understat.com or fotmob — don't guess from per-game averages

**Head to head**
- All-time PL W/D/L (sportsmole, 11v11.com)
- Home / away fortress stat (e.g. "Arsenal 24W 7D 0L at home vs Fulham" — sportsmole carries these well)
- Last 5-6 meetings with scorelines and any standout context (first win in N years, etc.)
- Reverse fixture from the current season: confirm scoreline + scorer

**Team news**
- Confirmed absentees per side with reason and "Out" status
- Doubts with reason
- Source: club press conference write-ups (arsenal.com / fulhamfc.com), readarsenal.com / arseblog, sportsmole pre-match team news, premierinjuries.com
- For predicted XIs: cross-reference whoscored.com or fotmob predicted lineups against the latest reported XI from the club site or sky sports
- Verify any unfamiliar names against transfer history before assuming someone is at the club (e.g. Hincapié on loan from Leverkusen, Madueke from Chelsea, Bobb from Man City — all 2025-26 arrivals at Arsenal/Fulham that didn't exist last season)

**Match details**
- Kick-off time UK + ET / PT / CET / AEST conversions
- TV channel UK + brief mention of others
- Stadium name (don't say "Emirates Stadium" if Arsenal renamed it; check the club site)

### Verified sources for match previews

In addition to the sources in §10:

- **statmuse.com/fc**: best for one-line team-stat queries (goals conceded, clean sheets etc.)
- **myfootballfacts.com**: season-long clean-sheet tables that update through the year
- **understat.com/league/EPL/2025**: xG league table (note: the page itself is JS-rendered, so WebFetch may return empty content — use the search summary)
- **espn.com/soccer/team/stats/_/id/{id}/{slug}**: top-scorer lists for each team
- **soccerstats.com/latest.asp?league=england**: full table with GS/GC/GD in one fetch
- **whoscored.com**: predicted lineups (often automatic, sometimes lag injury news by a day, double-check)
- **arsenal.com/news/...**: press conference write-ups for Arsenal injury and team news
- **arseblog.com / readarsenal.com**: opinionated but well-sourced for Arsenal team news
- **sportsmole.co.uk**: recent meetings list often present in their head-to-head pages
- **11v11.com**: best for all-time historical home/away records vs a specific opponent

### Things to actively double-check

- **Player at the right club?** Multiple players moved between rivals in 2025/26 (Eze Crystal Palace → Arsenal, Madueke Chelsea → Arsenal, Bobb Man City → Fulham, Hincapié Leverkusen → Arsenal on loan). Predicted lineups from automated sources sometimes haven't caught up, and old training data is worse. When in doubt, search "<player> transfer 2025".
- **Is the player actually fit?** A predicted XI may include a name who has since picked up a knock. Cross-reference against the most recent press conference (today or yesterday).
- **Reverse fixture in the current season:** Always grab this — it gives you the obvious narrative hook for the verdict ("Arsenal won this 1-0 in October with five players who won't start on Saturday").

### Visual template specifics

- Use **`https://resources.premierleague.com/premierleague/badges/t{ID}.svg`** for club crests. Common IDs: Arsenal 3, Bournemouth 91, Brighton 36, Brentford 94, Chelsea 8, Crystal Palace 31, Everton 11, Fulham 54, Liverpool 14, Man City 43, Man United 1, Newcastle 4, Nott'm Forest 17, Spurs 6, West Ham 21
- The "Frosted Touch" hero treatment for an away team should layer **a relevant BBC News image** (palette-matching), backgrounded via `::before` with `filter: saturate(0.82) contrast(1.04) brightness(0.78); opacity: 0.55`, then a multi-layer dark `::after` gradient for text legibility
- Add the **opponent's primary colour** as a CSS variable in `:root` alongside `--fulham-green` (e.g. `--gunners: #db0007`, `--gunners-light: #ef4444`)
- Always include the **GoatCounter snippet** before `</body>`
- Always update **`index.html`** at the project root with the new article in the Match Previews category and bump the "Written pieces" hero stat
- Single IIFE handles all interactivity, **never** load external JS for these features

### Don'ts

- Don't invent xG figures. If you can't find them, omit xG from the article rather than guessing from per-game averages.
- Don't assume someone is fit because they were named in last week's XI.
- Don't write the front three for Arsenal as "Saka, Trossard, Gyökeres" by default — Arteta has at least four wingers and rotates aggressively in title-race weeks. Look at the most recent matchday.
- Don't say "x clean sheets in last y games" without two-source verification.
- Don't leave the predicted XI unverified — the credibility of the whole piece rides on it.

---

## 11. Technical gotchas to avoid

These are landmines I stepped on while building, don't repeat them.

1. **`maintainAspectRatio: false` on Chart.js**: this ignores the `height` attribute on `<canvas>`. Always wrap canvases in a div with a fixed height: `<div style="position: relative; height: 340px;"><canvas></canvas></div>`

2. **Never initialise Chart.js inside an element with `transform`**: the library can't measure dimensions correctly. Keep scroll-reveal animations off chart containers.

3. **Browser storage APIs don't work in some sandboxed HTML contexts**: if testing in an iframe, `localStorage` and `sessionStorage` may fail silently. Use in-memory JavaScript variables where possible.

4. **CDN failures silently break the dashboard**: Chart.js is loaded from `cdnjs.cloudflare.com`. If it fails to load, charts silently don't render. For robustness, consider self-hosting critical JS dependencies.

5. **Mobile Safari vs Chrome**: on older mobile Safari, `backdrop-filter` can cause rendering glitches. Not used currently but something to watch if added.

6. **The grain SVG noise filter is heavy on scroll**: `position: fixed` with an SVG filter can trigger repaint on some devices. If performance issues arise, replace with a pre-rendered noise PNG.

7. **Full-bleed sections with negative margins**: as mentioned above, don't use `margin: 0 -40px` on top-level sections. Width them naturally with 100% and use inner max-width containers.

---

## 12. Questions to ask me (the person running Claude Code)

Before making substantive changes, a fresh Claude Code session should clarify:

1. **Is this for the live site or a staging copy?** If live, be cautious about layout-breaking changes.
2. **Do we have a deploy pipeline?** (CI/CD? Manual scp? Docker container rebuild?) This dictates whether changes can be tested locally first.
3. **Is there a preferred commit style / branch strategy?** The editorial nature of the site suggests maybe small, semantic commits.
4. **What's the priority right now, new content, refactoring, or polish?** The ideas in Section 9 span all three.

---

## 13. First-run checklist for a new Claude Code session

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
