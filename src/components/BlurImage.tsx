import { blurhashToCssGradientString } from "@unpic/placeholder";

type BlurImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "loading"
> & {
  src: string;
  /** BlurHash string (see `?blurhash` import) used for the blur-up placeholder. */
  blurhash: string;
  /** Eager-load + high fetch priority for above-the-fold images. Defaults to lazy. */
  priority?: boolean;
};

/**
 * Plain <img> with a CSS blur-up placeholder (LQIP) rendered from a BlurHash.
 *
 * `@unpic/react`'s <Image> is a no-op for local (non-CDN) images, so we apply
 * the `@unpic/placeholder` output ourselves. The gradient is inlined at
 * render/prerender time, so the placeholder shows with no client-side JS and is
 * painted over once the real image decodes.
 */
export function BlurImage({
  blurhash,
  priority = false,
  style,
  ...props
}: BlurImageProps) {
  return (
    <img
      {...props}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={{
        backgroundImage: blurhashToCssGradientString(blurhash),
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        ...style,
      }}
    />
  );
}
