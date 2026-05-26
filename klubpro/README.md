# KlubPro Website

Static React SPA for [www.klubpro.com](https://www.klubpro.com) — the operating system for grassroots sport.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router v6
- nginx:alpine (runtime container)
- Docker multi-stage build

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production Build

```bash
npm run build
```

Built output is written to `dist/`.

## Docker Build

```bash
docker build -t klubpro-website .
docker run -p 8080:80 klubpro-website
```

Visit `http://localhost:8080` to verify the built site.

## Docker Compose

Add to `/srv/docker/docker-compose.yaml`:

```yaml
klubpro-website:
  build:
    context: /srv/docker/klubpro/website
  container_name: klubpro-website
  restart: unless-stopped
  networks:
    - docker-shared-net
```

The container exposes port 80. SSL termination is handled entirely by Nginx Proxy Manager — the container does not manage certificates or HTTPS redirects.

## nginx Configuration

`nginx.conf` is copied into the runtime image at `/etc/nginx/conf.d/default.conf`. It:

- Listens on port 80
- Serves static files from `/usr/share/nginx/html`
- Includes **SPA fallback routing** via `try_files $uri $uri/ /index.html` — this ensures that React Router routes (`/contact`, `/privacy-policy`, etc.) work correctly on a hard refresh
- Applies long-lived cache headers for versioned static assets
- Enables gzip compression
- Adds basic security headers (X-Frame-Options, X-Content-Type-Options, etc.)

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/contact` | Contact (mailto form) |
| `/privacy-policy` | Privacy Policy |

All routes are handled client-side by React Router. nginx falls back to `index.html` for any unmatched path, allowing React Router to take over.

## Deployment Path

Production source: `/srv/docker/klubpro/website`

NPM routing: `www.klubpro.com → klubpro-website:80`

## Contact Form

The contact form at `/contact` generates a `mailto:` link to `info@klubpro.com`. No backend, no API, no SMTP — form data is encoded into the mailto URL and opened in the user's email client.

## Troubleshooting

**Page refresh returns 404:** Ensure `nginx.conf` is present and contains the SPA fallback `try_files $uri $uri/ /index.html`. Rebuild the Docker image after any nginx.conf change.

**Build fails:** Check Node version — this project targets Node 20. Run `node -v` to confirm.

**Fonts not loading in production:** Fonts are loaded from Google Fonts in `index.html`. Ensure outbound network access is available from the browser (not the container).
