const vals = {
  "--background": [0.2046, 0, 0],
  "--foreground": [0.9219, 0, 0],
  "--primary": [0.2, 0, 0],
  "--primary-foreground": [0, 0, 0],
  "--secondary": [0.24, 0, 0],
  "--accent": [0.55, 0.2, 31.33],
  "--accent-foreground": [1, 0, 0],
  "--muted-foreground": [0.7155, 0, 0],
  "--border": [0.3715, 0, 0],
  "--input": [0.3715, 0, 0],
  "--ring": [0.7686, 0.1647, 70.0804],
};

function oklchToSrgb(L, C, h) {
  const hr = (h * Math.PI) / 180;
  const a = C * Math.cos(hr);
  const b = C * Math.sin(hr);

  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  let r = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let bl = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  const gamma = (x) => {
    const v = x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
    return Math.min(1, Math.max(0, v));
  };
  return [gamma(r), gamma(g), gamma(bl)];
}

function rgbToHsl(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

for (const [name, [L, C, h]] of Object.entries(vals)) {
  const [r, g, b] = oklchToSrgb(L, C, h);
  const [H, S, Lh] = rgbToHsl(r, g, b);
  const round = (n) => Math.round(n * 10) / 10;
  console.log(`${name}: hsl(${round(H)} ${round(S)}% ${round(Lh)}%);`);
}
