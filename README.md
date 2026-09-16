# Sentinel — Innovation & Security

Cinematic 16:9 security hero (video), then a generated Capabilities grid and Footer. Built for the Scroll Sites marketplace, iframe-ready.

- `npm run dev` / `npm run build` → `dist/` (`BASE=/repo-name/` for GitHub Pages)

## Live URLs
- Vercel (primary): https://sentinel-scroll-site.vercel.app
- GitHub Pages (mirror): https://husnainkhushid.github.io/sentinel-scroll-site/

Both deploy on push to `main`. Vercel uses the Vite preset with no config; the Pages workflow sets `BASE`.

## For the coding agent
Section resources live in the marketplace workspace under `02-sections/sentinel/`. Section ids: `01-hero 02-capabilities 03-footer` (`data-section` attributes). The page posts `{ source:'scroll-site', type:'sections'|'section' }` to a parent frame and accepts `{ type:'scrollTo', id }`.
