import satori from "satori";
import fs from "node:fs";
import path from "node:path";
import { html } from "satori-html";
import type { ReactNode } from "react";
import sharp from "sharp";
import { BUSINESS_NAME } from "../src/lib/consts.ts";

const SCALE = 2;

const WIDTH = 1200;
const HEIGHT = 630;

// Color values from global.css dark mode
// These colors are a bit fucked up, need to correct
const COLORS = {
  background: "#171717",
  secondary: "#3d3d3d", // Slightly lighter gray (oklch(0.24 0 0))
  primary: "#333333", // Primary color (oklch(0.2 0 0))
  accent: "#fb6c2b", // Orange/red accent (oklch(0.55 0.2 31.33))
  textWhite: "#ebebeb", // White text (oklch(0.9219 0 0))
  textGray: "#b6b6b6", // Light gray text (oklch(0.7155 0 0))
  strokeWhite: "#ffffff", // stroke-white/10 - will use opacity attribute
};

// Load Inter (static instances; satori doesn't support variable or woff2 fonts)
const MediumFont = fs.readFileSync(
  path.resolve("./src/assets/fonts/Inter-Medium.ttf"),
);
const SemiBoldFont = fs.readFileSync(
  path.resolve("./src/assets/fonts/Inter-SemiBold.ttf"),
);
const BoldFont = fs.readFileSync(
  path.resolve("./src/assets/fonts/Inter-Bold.ttf"),
);

async function main() {
  // Load and process the house image
  // Read the image file directly from the assets directory
  const imagePath = path.resolve("./src/assets/img/house1.jpg");
  const img = sharp(imagePath);

  const imageBase64 = (
    await img
      .resize(500 * SCALE)
      .jpeg()
      .toBuffer()
  ).toString("base64");
  const imageDataUrl = `data:image/jpeg;base64,${imageBase64}`;

  const PADDING = 64 * SCALE;

  // Scale dimensions
  const scaledWidth = WIDTH * SCALE;
  const scaledHeight = HEIGHT * SCALE;

  // Generate grid pattern lines (satori doesn't support SVG patterns)
  const patternSize = 200 * SCALE;
  const gridLines: string[] = [];
  const startX = -scaledWidth / 2;
  const endX = scaledWidth / 2;
  const startY = -patternSize;
  const endY = scaledHeight + patternSize;

  // Generate vertical lines (from pattern path: M.5 200V.5)
  for (let x = startX; x <= endX; x += patternSize) {
    const baseX = x + 0.5;
    for (let y = startY; y <= endY; y += patternSize) {
      gridLines.push(
        `<line x1="${baseX}" y1="${y}" x2="${baseX}" y2="${y + patternSize}" />`,
      );
    }
  }

  // Generate horizontal lines (from pattern path: H200)
  for (let y = startY; y <= endY; y += patternSize) {
    const baseY = y + 0.5;
    for (let x = startX; x <= endX; x += patternSize) {
      gridLines.push(
        `<line x1="${x}" y1="${baseY}" x2="${x + patternSize}" y2="${baseY}" />`,
      );
    }
  }

  const gridPattern = gridLines.join("");

  // Calculate the radius for the radial fade effect
  const fadeRadius = 32 * 16 * SCALE;

  const markup = `
    <div
      style="
        display: flex;
        width: ${scaledWidth}px;
        height: ${scaledHeight}px;
        background-color: ${COLORS.background};
        position: relative;
        font-family: 'Inter', sans-serif;
        overflow: hidden;
        padding: ${PADDING}px ${PADDING}px;
      "
    >
      <svg
        style="
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
        "
      >
        <defs>
          <radialGradient id="fadeGradient" cx="60%" cy="30%" r="${(fadeRadius / Math.max(scaledWidth, scaledHeight)) * 100}%">
            <stop offset="0%" stop-color="${COLORS.background}" stop-opacity="0.2" />
            <stop offset="100%" stop-color="${COLORS.background}" stop-opacity="0.9" />
          </radialGradient>
        </defs>
        <!-- Grid pattern rendered directly (satori doesn't support SVG patterns) -->
        <g
          transform="translate(${scaledWidth / 2}, -1)"
          stroke="${COLORS.strokeWhite}"
          stroke-width="1"
          fill="none"
        >
          ${gridPattern}
        </g>
        <!-- Radial gradient overlay to fade grid at edges -->
        <rect
          width="100%"
          height="100%"
          fill="url(#fadeGradient)"
        />
      </svg>

      <div
        style="
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            max-width: ${700 * SCALE}px;
          "
      >
        <h1
          style="
              font-size: ${72 * SCALE}px;
              font-weight: 600;
              line-height: 1.1;
              color: ${COLORS.textWhite};
              margin-bottom: ${32 * SCALE}px;
              letter-spacing: -0.02em;
            "
        >
          ${BUSINESS_NAME}
        </h1>

        <p
          style="
              font-size: ${30 * SCALE}px;
              font-weight: 700;
              line-height: 1.5;
              color: ${COLORS.textWhite};
              margin-bottom: ${12 * SCALE}px;
        "
        >
          Michiana's trusted new-build cleaning partner
        </p>

        <p
          style="
              font-size: ${20 * SCALE}px;
              font-weight: 500;
              line-height: 1.5;
              color: ${COLORS.textGray};
              margin: 0;
            "
        >
          Specialized cleaning services for new build properties across
          Michiana. From construction cleanup to move-in ready perfection, we
          deliver immaculate results for residential and commercial spaces.
        </p>
      </div>

      <img
        src="${imageDataUrl}"
        alt="House"
        style="
              position: absolute;
              top: ${PADDING}px;
              right: -${SCALE * 20}px;
              width: ${400 * SCALE}px;
              height: ${scaledHeight}px;
              bottom: 0;
              object-fit: cover;
              border-radius: ${12 * SCALE}px;
              box-shadow: 0 ${4 * SCALE}px ${6 * SCALE}px rgba(0, 0, 0, 0.3);
            "
      />
    </div>
  `;

  const svg = await satori(html(markup) as ReactNode, {
    fonts: [
      {
        name: "Inter",
        data: MediumFont,
        style: "normal",
        weight: 500,
      },
      {
        name: "Inter",
        data: SemiBoldFont,
        style: "normal",
        weight: 600,
      },
      {
        name: "Inter",
        data: BoldFont,
        style: "normal",
        weight: 700,
      },
    ],
    width: scaledWidth,
    height: scaledHeight,
  });

  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

  const outDir = path.resolve("./public/og");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "site.png");
  fs.writeFileSync(outPath, pngBuffer);

  console.log(`Generated ${path.relative(process.cwd(), outPath)}`);
}

await main();
