import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";

/**
 * Post-build pass over the prerendered HTML in `dist/client`:
 *
 *  1. Inlines the (small) stylesheet(s) into a <style> tag so the initial
 *     render is not blocked on a separate CSS request.
 *  2. Empties the stylesheet entry in TanStack's hydration manifest so the
 *     client router doesn't re-inject a <link> for CSS we've already inlined
 *     (which would otherwise re-download it after hydration).
 *  3. Preloads the Latin Inter subset — the only subset the English content
 *     actually uses — so the font downloads in parallel with everything else
 *     instead of being discovered only after the CSS is parsed.
 *
 * Runs after `vite build` (see the `build` script in package.json).
 */
const CLIENT_DIR = path.resolve("dist/client");
const ASSETS_DIR = path.join(CLIENT_DIR, "assets");

const STYLESHEET_RE =
  /<link\b[^>]*\brel="stylesheet"[^>]*\bhref="\/assets\/([^"]+\.css)"[^>]*>/g;

async function main() {
  const [clientEntries, assetFiles] = await Promise.all([
    readdir(CLIENT_DIR),
    readdir(ASSETS_DIR),
  ]);

  const htmlFiles = clientEntries.filter((f) => f.endsWith(".html"));
  const latinFont = assetFiles.find((f) =>
    /^inter-latin-wght-normal-.*\.woff2$/.test(f),
  );

  for (const file of htmlFiles) {
    const htmlPath = path.join(CLIENT_DIR, file);
    let html = await readFile(htmlPath, "utf8");

    let inlined = 0;
    for (const match of [...html.matchAll(STYLESHEET_RE)]) {
      const css = await readFile(path.join(ASSETS_DIR, match[1]), "utf8");
      html = html.replace(match[0], `<style>${css}</style>`);
      inlined += 1;
    }

    // Drop the CSS asset from the hydration manifest (e.g. `css:$R[8]=[...]`)
    // so the client doesn't re-request the now-inlined stylesheet.
    html = html.replace(/\bcss:(\$R\[\d+\])=\[[^\]]*\]/g, "css:$1=[]");

    if (latinFont) {
      // `crossorigin` must be present so the preload matches the CORS font
      // fetch triggered by @font-face (otherwise the browser fetches twice).
      const preload = `<link rel="preload" href="/assets/${latinFont}" as="font" type="font/woff2" crossorigin="anonymous">`;
      html = html.replace("<head>", `<head>${preload}`);
    }

    await writeFile(htmlPath, html);
    console.log(
      `[optimize-html] ${file}: inlined ${inlined} stylesheet(s)` +
        (latinFont ? ", preloaded latin font" : ""),
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
