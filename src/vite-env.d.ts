/// <reference types="vite/client" />

type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  format: string;
};

declare module "*?format=avif&as=metadata" {
  const metadata: ImageMetadata;
  export default metadata;
}
