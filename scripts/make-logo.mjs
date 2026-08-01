import { createRequire } from "module";
const require = createRequire("C:/Users/moham/montifood/");
const sharp = require("sharp");

const IN = "C:/Users/moham/Downloads/WhatsApp Image 2026-06-13 at 16.13.48.jpeg";
const OUT = "C:/Users/moham/nexolary/public/nexolary-logo-v2.png";

// A pixel counts as background only if it is grayish (low saturation) AND not
// bright — the brushed-metal sheen tops out around luminance ~125, while the
// logo is either saturated blue/cyan or bright white glow, and the gray tagline
// is lighter gray (≈140). Combined with edge-seeded flood fill (connectivity),
// this removes the metal panel without creeping into the logo.
const GRAY_SPREAD = 30; // max(r,g,b) - min(r,g,b) allowed for "gray"
const MAX_LUMA = 138; // brightness ceiling for background

const { data, info } = await sharp(IN)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: W, height: H } = info;
const ch = info.channels; // 4
const idx = (x, y) => (y * W + x) * ch;

console.log("dims:", W, "x", H, "channels:", ch);
const corners = [
  [0, 0],
  [W - 1, 0],
  [0, H - 1],
  [W - 1, H - 1],
];
for (const [x, y] of corners) {
  const i = idx(x, y);
  console.log(`corner ${x},${y}:`, data[i], data[i + 1], data[i + 2]);
}

const isBg = (i) => {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const luma = 0.299 * r + 0.587 * g + 0.114 * b;
  return max - min <= GRAY_SPREAD && luma <= MAX_LUMA;
};

// Flood fill from every border pixel; a pixel joins the background only if it is
// connected to the edge AND passes the absolute grayscale/brightness test.
const visited = new Uint8Array(W * H);
const stack = [];

const pushSeed = (x, y) => {
  const p = y * W + x;
  if (!visited[p] && isBg(p * ch)) {
    visited[p] = 1;
    stack.push(p);
  }
};
for (let x = 0; x < W; x++) {
  pushSeed(x, 0);
  pushSeed(x, H - 1);
}
for (let y = 0; y < H; y++) {
  pushSeed(0, y);
  pushSeed(W - 1, y);
}

let removed = 0;
while (stack.length) {
  const p = stack.pop();
  const x = p % W;
  const y = (p - x) / W;
  const i = p * ch;
  data[i + 3] = 0; // transparent
  removed++;
  const neighbors = [
    [x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1],
  ];
  for (const [nx, ny] of neighbors) {
    if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
    const np = ny * W + nx;
    if (visited[np]) continue;
    const ni = np * ch;
    if (isBg(ni)) {
      visited[np] = 1;
      stack.push(np);
    }
  }
}
console.log("removed bg pixels:", removed, `(${((removed / (W * H)) * 100).toFixed(1)}%)`);

// Erase the watermark sparkle in the far bottom-right corner of the mockup.
// The logo lockup sits in the upper-left/centre and never reaches this region.
for (let y = Math.floor(H * 0.74); y < H; y++) {
  for (let x = Math.floor(W * 0.88); x < W; x++) {
    data[(y * W + x) * ch + 3] = 0;
  }
}

// Bounding box of remaining opaque pixels (alpha > 24)
let minX = W, minY = H, maxX = 0, maxY = 0;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (data[(y * W + x) * ch + 3] > 24) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
const pad = 12;
minX = Math.max(0, minX - pad);
minY = Math.max(0, minY - pad);
maxX = Math.min(W - 1, maxX + pad);
maxY = Math.min(H - 1, maxY + pad);
const cw = maxX - minX + 1;
const cytmp = maxY - minY + 1;
console.log("logo crop box:", minX, minY, cw, cytmp);

// Pull the cropped logo into its own raw buffer so we can drop the tagline.
const crop = await sharp(data, { raw: { width: W, height: H, channels: ch } })
  .extract({ left: minX, top: minY, width: cw, height: cytmp })
  .raw()
  .toBuffer();
const ca = (x, y) => crop[(y * cw + x) * ch + 3];

// Everything left of the divider is the emblem (leave it fully intact); the
// wordmark + tagline live to the right of it.
const divider = Math.min(cw - 1, Math.round(cytmp * 1.08));
const rightW = cw - divider;
const thr = Math.max(8, Math.round(rightW * 0.02));

// Per-row opaque count on the text side only.
const rowCount = new Array(cytmp).fill(0);
for (let y = 0; y < cytmp; y++) {
  let c = 0;
  for (let x = divider; x < cw; x++) if (ca(x, y) > 24) c++;
  rowCount[y] = c;
}

// Find the bottom of the first opaque band (the wordmark); the gap below it
// marks the start of the small tagline row.
let inWord = false, low = 0, eraseFromY = cytmp;
for (let y = 0; y < cytmp; y++) {
  if (rowCount[y] > thr) {
    inWord = true;
    low = 0;
  } else if (inWord) {
    low++;
    if (low >= 2) {
      eraseFromY = y - low + 1;
      break;
    }
  }
}
console.log("erasing tagline on text side from y =", eraseFromY, "of", cytmp);

// Erase the tagline (text side only — emblem on the left is preserved).
for (let y = eraseFromY; y < cytmp; y++) {
  for (let x = divider; x < cw; x++) crop[(y * cw + x) * ch + 3] = 0;
}

// Re-crop to trim the empty space the tagline left behind (right + bottom).
let aX = cw, aY = cytmp, bX = 0, bY = 0;
for (let y = 0; y < cytmp; y++) {
  for (let x = 0; x < cw; x++) {
    if (ca(x, y) > 24) {
      if (x < aX) aX = x;
      if (x > bX) bX = x;
      if (y < aY) aY = y;
      if (y > bY) bY = y;
    }
  }
}
const p2 = 10;
aX = Math.max(0, aX - p2);
aY = Math.max(0, aY - p2);
bX = Math.min(cw - 1, bX + p2);
bY = Math.min(cytmp - 1, bY + p2);
const fw = bX - aX + 1;
const fh = bY - aY + 1;
console.log("final crop box:", aX, aY, fw, fh);

await sharp(crop, { raw: { width: cw, height: cytmp, channels: ch } })
  .extract({ left: aX, top: aY, width: fw, height: fh })
  .png()
  .toFile(OUT);
console.log("wrote", OUT);

// Favicon: extract the emblem (left square of the lockup), pad to a square on
// transparency. Next.js auto-serves app/icon.png.
const m = await sharp(OUT).metadata();
const emblemW = Math.min(m.width, Math.round(m.height * 0.98));
await sharp(OUT)
  .extract({ left: 0, top: 0, width: emblemW, height: m.height })
  .resize(224, 224, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({
    top: 16, bottom: 16, left: 16, right: 16,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile("C:/Users/moham/nexolary/app/icon.png");
console.log("wrote app/icon.png (favicon)");
