{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # KlubPro Website Functional Scope and Design Specification\
\
## Objective\
\
Create a modern KlubPro website aligned with the BetterStats frontend architecture, design quality and SEO sophistication.\
\
KlubPro should feel like a premium grassroots sports operations platform.\
\
Primary positioning:\
\
The operating system for grassroots sport.\
\
## Final Technology Stack\
\
Frontend:\
\
- React\
\
- Vite\
\
- Tailwind CSS\
\
- React Router\
\
Deployment:\
\
- Docker\
\
- nginx:alpine\
\
- Nginx Proxy Manager\
\
- docker-shared-net\
\
- Static SPA deployment\
\
No backend required.\
\
No API required.\
\
No database required.\
\
## Deployment Architecture\
\
Source path:\
\
/srv/docker/klubpro/website\
\
Global Compose:\
\
/srv/docker/docker-compose.yaml\
\
Public domain:\
\
https://www.klubpro.com\
\
Public DNS:\
\
www.klubpro.com\
\
    -> 161.8.220.179\
\
NPM routing:\
\
www.klubpro.com\
\
    -> klubpro-website:80\
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
nginx:alpine runtime:\
\
- serve built dist files\
\
- support SPA routing\
\
The runtime image must contain:\
\
- nginx\
\
- built static assets only\
\
## Required Files\
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
  index.html\
\
  llms.txt\
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
Service:\
\
klubpro-website\
\
Container port:\
\
80\
\
Compose snippet:\
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
nginx.conf must:\
\
- support React Router refreshes\
\
- support SPA fallback routing\
\
- serve static assets efficiently\
\
- include caching for assets\
\
- include practical security headers\
\
Fallback behaviour must support:\
\
- /\
\
- /contact\
\
- /privacy-policy\
\
## Functional Scope\
\
Routes/pages:\
\
- /\
\
- /contact\
\
- /privacy-policy\
\
No API routes required.\
\
## Homepage Scope\
\
Homepage must include:\
\
1. Hero\
\
2. Problem statement\
\
3. Product modules\
\
4. Availability and communication\
\
5. Team selection\
\
6. Social media graphics\
\
7. Sponsor promotion\
\
8. Multi-sport support\
\
9. Backstory\
\
10. Testimonial\
\
11. Pricing/enquiry CTA\
\
12. Footer\
\
## Contact Page Scope\
\
The contact page uses a mailto workflow.\
\
Recipient:\
\
info@klubpro.com\
\
Fields:\
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
The form should generate a populated mailto link.\
\
Also display:\
\
info@klubpro.com\
\
No backend submission processing required.\
\
## Privacy Policy Scope\
\
Provide:\
\
/privacy-policy\
\
If no full legal copy exists, generate:\
\
- reasonable placeholder policy\
\
- clearly marked as requiring legal review\
\
## BetterStats Alignment\
\
The website should align visually and technically with BetterStats:\
\
- dark sports-tech aesthetic\
\
- premium frontend polish\
\
- sophisticated SEO\
\
- Open Graph metadata\
\
- Twitter metadata\
\
- JSON-LD\
\
- llms.txt\
\
- responsive React frontend\
\
- Tailwind-based design system\
\
- dashboard-inspired UI\
\
## Tailwind Theme Direction\
\
Use:\
\
navy:\
\
  950: #070b14\
\
  900: #0d1117\
\
  800: #131c2e\
\
  700: #1a2540\
\
  600: #243352\
\
accent:\
\
  DEFAULT: #16c784\
\
  dark: #0fa36a\
\
  light: #4dd9a0\
\
klub:\
\
  blue: #2f8cff\
\
amber:\
\
  sport: #f59e0b\
\
Fonts:\
\
display:\
\
- Geist\
\
- Barlow Condensed\
\
- Oswald\
\
body:\
\
- Geist\
\
- Inter\
\
mono:\
\
- JetBrains Mono\
\
## Design Characteristics\
\
Use:\
\
- dark navy backgrounds\
\
- strong typography\
\
- condensed display headings\
\
- dashboard cards\
\
- team selection mockups\
\
- availability widgets\
\
- sponsor graphics\
\
- social media graphic previews\
\
- smooth transitions\
\
- mobile-first layouts\
\
## SEO Scope\
\
Include:\
\
- title\
\
- description\
\
- keywords\
\
- canonical URL\
\
- Open Graph tags\
\
- Twitter/X tags\
\
- favicon\
\
- apple touch icon\
\
- JSON-LD\
\
- llms.txt reference\
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
Do not include:\
\
- fake pricing\
\
- fake integrations\
\
- fake social links\
\
- fake customer numbers\
\
## Content Themes To Preserve\
\
Preserve:\
\
- Taking sports clubs to the next level\
\
- Availability\
\
- Team selection\
\
- Social media graphics\
\
- Sponsor promotion\
\
- Club communication\
\
- Volunteer fatigue reduction\
\
- Community engagement\
\
- Backstory from amateur cricket club needs\
\
## Approved Testimonial\
\
Use:\
\
"We've been a KlubPro user right from the start. It saves us hours of time in tracking availability and doing team selection and the graphics generated by KlubPro has totally transformed the club's image on Social Media. Our sponsors love KlubPro."\
\
Attribution:\
\
Tristram Fletcher, President of Applecross Cricket Club\
\
## Supported Sports\
\
Display:\
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
## README Requirements\
\
README must include:\
\
- local development\
\
- npm install\
\
- npm run dev\
\
- npm run build\
\
- Docker build\
\
- Docker Compose configuration\
\
- nginx.conf explanation\
\
- NPM proxy setup\
\
- deployment path\
\
- route refresh explanation\
\
- troubleshooting notes\
\
## Acceptance Criteria\
\
The project is acceptable when:\
\
- npm install works\
\
- npm run build works\
\
- Docker image builds successfully\
\
- nginx serves the built SPA\
\
- Homepage loads at /\
\
- Contact page loads at /contact\
\
- Privacy page loads at /privacy-policy\
\
- Contact form generates populated mailto email\
\
- NPM proxies successfully to klubpro-website:80\
\
- SEO metadata exists\
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