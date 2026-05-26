{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # CLAUDE.md - KlubPro Website Rebuild Directives\
\
## Goal\
\
Build a modern KlubPro website that visually and technically aligns with the BetterStats frontend architecture and design quality.\
\
KlubPro should feel like a sibling platform to BetterStats, but with its own positioning and identity:\
\
"The operating system for grassroots sport."\
\
The website must preserve and modernise the existing KlubPro messaging and functionality themes.\
\
## Final Confirmed Architecture\
\
Use:\
\
- React\
\
- Vite\
\
- Tailwind CSS\
\
- React Router\
\
- Static frontend only\
\
- nginx:alpine runtime container\
\
- Docker Compose deployment\
\
- Nginx Proxy Manager reverse proxy\
\
- mailto-based contact workflow\
\
Do not use:\
\
- FastAPI\
\
- Express\
\
- Node backend\
\
- SMTP\
\
- server-side APIs\
\
- database\
\
- CMS\
\
- SSR\
\
- server actions\
\
- Next.js\
\
- external form services\
\
The final application is a static React SPA.\
\
## Deployment Paths\
\
Project source:\
\
/srv/docker/klubpro/website\
\
Global Docker Compose:\
\
/srv/docker/docker-compose.yaml\
\
## Public Domain Architecture\
\
DNS:\
\
www.klubpro.com\
\
    -> 161.8.220.179\
\
Nginx Proxy Manager:\
\
www.klubpro.com\
\
    -> klubpro-website:80\
\
SSL is terminated entirely by Nginx Proxy Manager.\
\
The website container itself must not manage:\
\
- SSL\
\
- certificates\
\
- HTTPS redirects\
\
## Docker Architecture\
\
Use a multi-stage Docker build.\
\
### Stage 1\
\
Node build stage:\
\
- npm install\
\
- npm run build\
\
### Stage 2\
\
Runtime:\
\
- nginx:alpine\
\
- copy dist/ into /usr/share/nginx/html\
\
The final runtime container must contain:\
\
- nginx\
\
- static built assets only\
\
## Required Files\
\
Generate:\
\
/srv/docker/klubpro/website\
\
  package.json\
\
  vite.config.js\
\
  tailwind.config.js\
\
  postcss.config.js\
\
  Dockerfile\
\
  nginx.conf\
\
  README.md\
\
  llms.txt\
\
  index.html\
\
  /public\
\
    og-image.png\
\
  /src\
\
    main.jsx\
\
    App.jsx\
\
    styles.css\
\
    /components\
\
    /pages\
\
    /data\
\
## Docker Compose Service\
\
Expected Compose snippet:\
\
klubpro-website:\
\
  build:\
\
    context: /srv/docker/klubpro/website\
\
  container_name: klubpro-website\
\
  restart: unless-stopped\
\
  networks:\
\
    - docker-shared-net\
\
## nginx Requirements\
\
The nginx configuration must support React Router SPA refreshes.\
\
Refreshing these routes must work:\
\
- /\
\
- /contact\
\
- /privacy-policy\
\
nginx.conf must include SPA fallback logic equivalent to:\
\
try_files $uri $uri/ /index.html;\
\
nginx should also:\
\
- serve compressed assets if available\
\
- include long cache headers for static assets\
\
- include basic security headers where practical\
\
## BetterStats Frontend Alignment\
\
KlubPro should visually and technically align with BetterStats.\
\
Target characteristics:\
\
- modern SaaS quality\
\
- dark sports-tech visual language\
\
- premium frontend polish\
\
- sophisticated SEO metadata\
\
- structured JSON-LD\
\
- Open Graph support\
\
- llms.txt\
\
- clean React component architecture\
\
- responsive mobile-first design\
\
- strong typography\
\
- dashboard-inspired UI\
\
KlubPro should feel like:\
\
- a sibling product to BetterStats\
\
- same maturity level\
\
- same frontend quality\
\
But with:\
\
- club operations positioning\
\
- volunteer management focus\
\
- multi-sport identity\
\
- team management workflows\
\
## Design System\
\
Use a BetterStats-inspired Tailwind design system.\
\
### Colours\
\
navy:\
\
  950: '#070b14'\
\
  900: '#0d1117'\
\
  800: '#131c2e'\
\
  700: '#1a2540'\
\
  600: '#243352'\
\
accent:\
\
  DEFAULT: '#16c784'\
\
  dark: '#0fa36a'\
\
  light: '#4dd9a0'\
\
klub:\
\
  blue: '#2f8cff'\
\
amber:\
\
  sport: '#f59e0b'\
\
### Fonts\
\
display:\
\
- Geist\
\
- Barlow Condensed\
\
- Oswald\
\
- sans-serif\
\
body:\
\
- Geist\
\
- Inter\
\
- system-ui\
\
- sans-serif\
\
mono:\
\
- JetBrains Mono\
\
- monospace\
\
Use the same Google Fonts loading pattern as BetterStats.\
\
## Product Positioning\
\
Primary headline:\
\
The operating system for grassroots sport.\
\
Primary subheading:\
\
Availability, team selection, social media graphics and sponsor promotion in one modern platform for volunteer-run clubs.\
\
Core phrase:\
\
Taking sports clubs to the next level.\
\
## Existing Content To Preserve\
\
Preserve and modernise the meaning of:\
\
- Availability - Team Selection - Social Media Graphics - Sponsor Promotion\
\
- Track player availability\
\
- Easily and intelligently select your teams\
\
- Automatically generate pro-level graphics ready for posting to your club's social media pages\
\
- Actively promote your club's sponsors\
\
- Spreadsheets are so last century\
\
- The future of your club is now\
\
Core themes:\
\
- player availability\
\
- team selection\
\
- social media graphics\
\
- sponsor promotion\
\
- volunteer fatigue reduction\
\
- club communication\
\
- community engagement\
\
- grassroots sport\
\
- multi-sport support\
\
- backstory from amateur cricket club needs\
\
## Homepage Sections\
\
Required homepage sections:\
\
1. Header\
\
2. Hero\
\
3. Club operations problem\
\
4. Product module cards\
\
5. Availability and communication\
\
6. Team selection\
\
7. Social media graphics\
\
8. Sponsor promotion\
\
9. Multi-sport support\
\
10. Backstory\
\
11. Testimonial\
\
12. Pricing / enquiry CTA\
\
13. Final contact CTA\
\
14. Footer\
\
## Navigation\
\
Desktop navigation:\
\
- Features\
\
- Graphics\
\
- Sports\
\
- Backstory\
\
- Contact\
\
CTA button:\
\
Get started\
\
## Routes\
\
Use React Router.\
\
Required routes:\
\
- /\
\
- /contact\
\
- /privacy-policy\
\
## Contact Page\
\
Build a BetterStats-style Contact page.\
\
Use mailto only.\
\
Do not build:\
\
- backend contact processing\
\
- API endpoints\
\
- SMTP integration\
\
### Heading\
\
Contact Us\
\
### Intro\
\
Please complete the form below or email us directly.\
\
### Form Fields\
\
- First Name\
\
- Last Name\
\
- Email Address\
\
- Sport\
\
- Club Name\
\
- Club Role\
\
- Subject\
\
- Message\
\
### Sport Options\
\
- Cricket\
\
- Soccer (Association Football)\
\
- Australian Rules Football (AFL)\
\
- Hockey\
\
- Rugby Union\
\
- Rugby League\
\
- Netball\
\
### Club Role Options\
\
- President\
\
- Committee Member\
\
- Captain, Coach or Chairman of Selectors\
\
- Player\
\
- Member\
\
- Other\
\
### Submit Behaviour\
\
Generate a properly encoded mailto link to:\
\
info@klubpro.com\
\
Mailto subject:\
\
KlubPro website enquiry: [submitted subject]\
\
Mailto body must include:\
\
- First Name\
\
- Last Name\
\
- Email Address\
\
- Sport\
\
- Club Name\
\
- Club Role\
\
- Message\
\
Also show direct email:\
\
info@klubpro.com\
\
## SEO Metadata\
\
Title:\
\
KlubPro - Sports Club Management Platform for Grassroots Clubs\
\
Description:\
\
KlubPro helps grassroots and amateur sports clubs manage player availability, team selection, social media graphics, sponsor promotion and club communication.\
\
Keywords:\
\
sports club management, team selection software, player availability, grassroots sport, cricket club software, sports club sponsors, social media graphics, club management platform\
\
Canonical:\
\
https://www.klubpro.com/\
\
OG image:\
\
https://www.klubpro.com/og-image.png\
\
Locale:\
\
en_AU\
\
## Structured Data\
\
Add JSON-LD for:\
\
- Organization\
\
- WebSite\
\
- SoftwareApplication\
\
Organization:\
\
- name: KlubPro\
\
- url: https://www.klubpro.com/\
\
- email: info@klubpro.com\
\
- areaServed: Australia\
\
SoftwareApplication:\
\
- name: KlubPro\
\
- applicationCategory: SportsApplication\
\
- operatingSystem: Web\
\
Do not invent:\
\
- pricing\
\
- integrations\
\
- customer counts\
\
- social links\
\
- AI functionality\
\
- sponsors\
\
## Testimonial\
\
Use only this testimonial:\
\
"We've been a KlubPro user right from the start. It saves us hours of time in tracking availability and doing team selection and the graphics generated by KlubPro has totally transformed the club's image on Social Media. Our sponsors love KlubPro."\
\
Attribution:\
\
Tristram Fletcher, President of Applecross Cricket Club\
\
## Supported Sports\
\
Show:\
\
- Cricket\
\
- Football\
\
- Australian Rules Football\
\
- Rugby Union\
\
- Rugby League\
\
- Hockey\
\
- Netball\
\
## llms.txt\
\
Generate /llms.txt containing:\
\
- product overview\
\
- target users\
\
- core features\
\
- supported sports\
\
- contact email\
\
- canonical website URL\
\
## README Requirements\
\
README must include:\
\
- local development instructions\
\
- npm install\
\
- npm run dev\
\
- npm run build\
\
- Docker build instructions\
\
- Docker Compose snippet\
\
- nginx.conf explanation\
\
- NPM configuration\
\
- route refresh explanation\
\
- deployment path\
\
- testing instructions\
\
## Acceptance Criteria\
\
The project is complete when:\
\
- npm install works\
\
- npm run build works\
\
- Docker image builds successfully\
\
- nginx serves the built site\
\
- / loads homepage\
\
- /contact loads mailto contact page\
\
- /privacy-policy loads correctly\
\
- React Router refreshes work\
\
- metadata exists\
\
- JSON-LD exists\
\
- llms.txt exists\
\
- no backend exists\
\
- no secrets are required\
\
- no fake claims are present}