import { encode } from "blurhash";
import sharp from "sharp";
import type { Plugin } from "vite";

const SUFFIX = "?blurhash";

/**
 * Vite plugin that resolves `import hash from "./image.jpg?blurhash"` to a
 * BlurHash string, computed at build time via sharp. Pair with
 * `@unpic/placeholder` at render time to produce a CSS blur-up placeholder
 * (LQIP) with no client-side JavaScript.
 */
export function blurhash(): Plugin {
  const cache = new Map<string, string>();

  return {
    name: "vite-plugin-blurhash",
    enforce: "pre",

    async resolveId(source, importer) {
      if (!source.endsWith(SUFFIX)) return null;
      const cleanSource = source.slice(0, -SUFFIX.length);
      const resolved = await this.resolve(cleanSource, importer, {
        skipSelf: true,
      });
      if (!resolved) return null;
      return `${resolved.id}${SUFFIX}`;
    },

    async load(id) {
      if (!id.endsWith(SUFFIX)) return null;
      const filePath = id.slice(0, -SUFFIX.length);
      this.addWatchFile(filePath);

      let hash = cache.get(filePath);
      if (!hash) {
        const { data, info } = await sharp(filePath)
          .raw()
          .ensureAlpha()
          .resize(64, 64, { fit: "inside" })
          .toBuffer({ resolveWithObject: true });

        hash = encode(
          new Uint8ClampedArray(data),
          info.width,
          info.height,
          4,
          3,
        );
        cache.set(filePath, hash);
      }

      return `export default ${JSON.stringify(hash)};`;
    },
  };
}
