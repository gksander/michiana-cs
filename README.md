# Michiana Group

Marketing site built with [TanStack Start](https://tanstack.com/start), statically prerendered to a fully static build.

## Project Structure

```text
/
├── public/                 # Static assets (favicon, generated OG image)
├── scripts/
│   └── generate-og.mts     # Build-time OG image generation (satori + sharp)
├── src/
│   ├── assets/             # Source images/fonts (optimized at build time)
│   ├── components/         # React components
│   ├── lib/                # Shared constants + utils
│   ├── routes/             # File-based routes
│   │   ├── __root.tsx      # Document shell, global head, styles/fonts
│   │   ├── index.tsx       # Home page (prerendered)
│   │   └── $.tsx           # Catch-all 404 (prerendered to 404.html)
│   ├── styles/global.css   # Tailwind v4 + theme
│   └── router.tsx          # Router setup
├── vite.config.ts          # Vite + TanStack Start (prerender) config
└── wrangler.jsonc          # Static assets deploy config (Cloudflare)
```

Routes live in `src/routes/`. The home page is prerendered to static HTML via TanStack Start's [static prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering). Images are optimized to AVIF at build time via `vite-imagetools`.

## Commands

All commands are run from the root of the project:

| Command        | Action                                                              |
| :------------- | :------------------------------------------------------------------ |
| `pnpm install` | Installs dependencies                                               |
| `pnpm dev`     | Starts the local dev server                                         |
| `pnpm build`   | Generates the OG image and builds the static site to `dist/client/` |
| `pnpm preview` | Preview the build locally                                           |
| `pnpm deploy`  | Build and deploy to Cloudflare via Wrangler                         |

## Deployment

`pnpm build` produces a fully static site in `dist/client/` (prerendered `index.html`, `404.html`, hashed assets, and `og/site.png`). This directory can be deployed to any static host. `wrangler.jsonc` is configured to serve it as static assets on Cloudflare.
