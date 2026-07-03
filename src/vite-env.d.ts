/// <reference types="vite/client" />

type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  format: string;
};

declare module "*as=metadata" {
  const metadata: ImageMetadata;
  export default metadata;
}

declare module "*?blurhash" {
  const blurhash: string;
  export default blurhash;
}
