import satori from "satori";
import fs from "node:fs";
import path from "node:path";
import { html } from "satori-html";
import type { ReactNode } from "react";
import sharp from "sharp";

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
  logoRed: "#B43842", // MG logo red (from Logo.tsx)
  logoGray: "#E6E6E6", // MG logo light gray (from Logo.tsx)
};

// Tunable layout + typography values. Everything here is easy to tweak; sizes
// are multiplied by SCALE for retina output.
const CONFIG = {
  padding: 64 * SCALE,
  patternSize: 200 * SCALE, // background grid cell size
  fadeRadius: 32 * 16 * SCALE, // radial fade radius (rem-ish -> px)

  // Right-hand house photo
  house: {
    sourceResize: 500 * SCALE, // rasterized source resolution
    width: 400 * SCALE, // displayed width
    rightOffset: -20 * SCALE, // css `right` (negative bleeds off-canvas)
    borderRadius: 12 * SCALE,
  },

  // Left lockup: overall column
  lockupMaxWidth: 560 * SCALE,

  // MG logo mark
  logo: {
    rasterWidth: 450 * SCALE, // rasterized source resolution
    width: 340 * SCALE, // displayed width
    marginBottom: 32 * SCALE,
  },

  // "MICHIANA"
  michiana: {
    fontSize: 70 * SCALE,
    fontWeight: 600,
    letterSpacing: "0.18em",
    marginBottom: 16 * SCALE,
  },

  // "GROUP" row (word flanked by red rules)
  group: {
    fontSize: 50 * SCALE,
    fontWeight: 500,
    letterSpacing: "0.2em",
    textPadding: 20 * SCALE, // horizontal gap between word and rules
    ruleHeight: 3 * SCALE,
    marginBottom: 32 * SCALE,
  },

  // "POST BUILD SERVICES"
  tagline: {
    fontSize: 30 * SCALE,
    fontWeight: 500,
    letterSpacing: "0.18em",
  },
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
      .resize(CONFIG.house.sourceResize)
      .jpeg()
      .toBuffer()
  ).toString("base64");
  const imageDataUrl = `data:image/jpeg;base64,${imageBase64}`;

  // MG logo mark (paths copied from src/components/Logo.tsx), rasterized via
  // sharp for pixel-perfect fidelity instead of relying on satori inline SVG.
  const logoSvg = `<svg viewBox="0 0 639 369" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M454.5 0C521.44 0 580.053 35.6505 612.391 89H552.028C527.251 63.7 492.709 48 454.5 48C416.305 48 381.775 63.6877 357 88.9707V27.8379C385.289 10.1945 418.704 0 454.5 0Z" fill="${COLORS.logoGray}" />
    <path d="M454.5 321C404.08 321 359.637 293.661 336 253V27.2598H288L169.209 135.334L48 27.2598H0V358H48V92.9414L169.791 199.666L288 92.2402L287.5 253C314.698 320.979 376.809 369 454.5 369C477.472 369 499.463 364.799 519.749 357.128V304.423C500.364 314.992 478.134 321 454.5 321Z" fill="${COLORS.logoRed}" />
    <path d="M638.354 200C633.027 264.042 594.993 318.792 541 347.504V290.097C555.08 278.55 566.807 264.241 575.358 248H443V200H638.354Z" fill="${COLORS.logoGray}" />
    <path d="M163 282.26V358.76H180.5V282.26H204.5V265.76H180.5V237.76H163V265.76H135V282.26H163Z" fill="${COLORS.logoGray}" />
  </svg>`;

  const logoBase64 = (
    await sharp(Buffer.from(logoSvg))
      .resize(CONFIG.logo.rasterWidth)
      .png()
      .toBuffer()
  ).toString("base64");
  const logoDataUrl = `data:image/png;base64,${logoBase64}`;

  const PADDING = CONFIG.padding;

  // Scale dimensions
  const scaledWidth = WIDTH * SCALE;
  const scaledHeight = HEIGHT * SCALE;

  // Left edge (x) of the right-hand house photo. The lockup is centered
  // horizontally in the region between the image's left edge (x=0) and this.
  const houseLeftEdge =
    scaledWidth - CONFIG.house.rightOffset - CONFIG.house.width;

  // letter-spacing adds trailing space after the final glyph, making the text
  // box wider than the visible text. Trim that trailing amount (one
  // letter-spacing unit, in px) so the GROUP rules align with MICHIANA's ends.
  const michianaTrailingTrim =
    parseFloat(CONFIG.michiana.letterSpacing) * CONFIG.michiana.fontSize;

  // Generate grid pattern lines (satori doesn't support SVG patterns)
  const patternSize = CONFIG.patternSize;
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
  const fadeRadius = CONFIG.fadeRadius;

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
            position: absolute;
            left: 0;
            top: 0;
            width: ${houseLeftEdge}px;
            height: 100%;
            align-items: center;
            justify-content: center;
          "
      >
        <div
          style="
              display: flex;
              flex-direction: column;
              align-items: center;
              max-width: ${CONFIG.lockupMaxWidth}px;
            "
        >
          <img
            src="${logoDataUrl}"
            alt="Michiana Group logo"
            style="
                width: ${CONFIG.logo.width}px;
                margin-bottom: ${CONFIG.logo.marginBottom}px;
              "
          />

          <span
            style="
                font-size: ${CONFIG.michiana.fontSize}px;
                font-weight: ${CONFIG.michiana.fontWeight};
                line-height: 1;
                color: ${COLORS.logoRed};
                letter-spacing: ${CONFIG.michiana.letterSpacing};
                margin-right: -${michianaTrailingTrim}px;
                margin-bottom: ${CONFIG.michiana.marginBottom}px;
              "
          >
            MICHIANA
          </span>

          <div
            style="
                display: flex;
                align-items: center;
                width: 100%;
                margin-bottom: ${CONFIG.group.marginBottom}px;
              "
          >
            <div
              style="
                  display: flex;
                  flex-grow: 1;
                  height: ${CONFIG.group.ruleHeight}px;
                  background-color: ${COLORS.logoRed};
                "
            ></div>
            <span
              style="
                  font-size: ${CONFIG.group.fontSize}px;
                  font-weight: ${CONFIG.group.fontWeight};
                  color: ${COLORS.logoGray};
                  letter-spacing: ${CONFIG.group.letterSpacing};
                  padding: 0 ${CONFIG.group.textPadding}px;
                "
            >
              GROUP
            </span>
            <div
              style="
                  display: flex;
                  flex-grow: 1;
                  height: ${CONFIG.group.ruleHeight}px;
                  background-color: ${COLORS.logoRed};
                "
            ></div>
          </div>

          <span
            style="
                font-size: ${CONFIG.tagline.fontSize}px;
                font-weight: ${CONFIG.tagline.fontWeight};
                color: ${COLORS.logoGray};
                letter-spacing: ${CONFIG.tagline.letterSpacing};
              "
          >
            POST BUILD SERVICES
          </span>
        </div>
      </div>

      <img
        src="${imageDataUrl}"
        alt="House"
        style="
              position: absolute;
              top: ${PADDING}px;
              right: ${CONFIG.house.rightOffset}px;
              width: ${CONFIG.house.width}px;
              height: ${scaledHeight}px;
              bottom: 0;
              object-fit: cover;
              border-radius: ${CONFIG.house.borderRadius}px;
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
