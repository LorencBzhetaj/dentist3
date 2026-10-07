// Prepares brand + clinic images from the raw materials in .src-assets/.
// Run once with: node scripts/prepare-assets.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = ".src-assets";
const OUT = "public/images";
mkdirSync(`${OUT}/brand`, { recursive: true });
mkdirSync(`${OUT}/clinic`, { recursive: true });
mkdirSync(`${OUT}/cases`, { recursive: true });

// --- Logo -------------------------------------------------------------------
// The supplied logo already has a transparent background. Remove the faint
// low-alpha haze around the strokes, make solid pixels fully opaque and crop.
const { data, info } = await sharp(`${SRC}/1.webp`).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const clean = Buffer.from(data);
for (let i = 0; i < width * height; i++) {
  const a = clean[i * 4 + 3];
  if (a < 24) clean[i * 4 + 3] = 0;
  else if (a > 240) clean[i * 4 + 3] = 255;
}

// Light variant for dark backgrounds: near-black ink becomes off-white, the
// beige tooth outline keeps its colour.
const light = Buffer.from(clean);
for (let i = 0; i < width * height; i++) {
  const r = light[i * 4], g = light[i * 4 + 1], b = light[i * 4 + 2];
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  if (sat < 28 && Math.max(r, g, b) < 140) {
    light[i * 4] = 250; light[i * 4 + 1] = 247; light[i * 4 + 2] = 243;
  }
}

const raw = (buf) => sharp(buf, { raw: { width, height, channels: 4 } });

async function exportLogo(buf, name, region) {
  let img = raw(buf);
  if (region) img = img.extract(region);
  const png = await img.png().toBuffer();
  const trimmed = await sharp(png).trim({ threshold: 1 }).png({ compressionLevel: 9 }).toBuffer();
  const meta = await sharp(trimmed).metadata();
  await sharp(trimmed).toFile(`${OUT}/brand/${name}.png`);
  console.log(`${name}.png`, meta.width, "x", meta.height);
}

// Full logo (tooth + wordmark)
await exportLogo(clean, "logo", null);
await exportLogo(light, "logo-light", null);
// Wordmark only (SORÈR + DENTAL CLINIC), used in the compact navbar
// The beige tooth strokes reach into this box, so drop the saturated pixels.
const dropBeige = (buf) => {
  const out = Buffer.from(buf);
  for (let i = 0; i < width * height; i++) {
    const r = out[i * 4], g = out[i * 4 + 1], b = out[i * 4 + 2];
    if (Math.max(r, g, b) - Math.min(r, g, b) >= 28) out[i * 4 + 3] = 0;
  }
  return out;
};
const wordmark = { left: 120, top: 268, width: 1300, height: 440 };
await exportLogo(dropBeige(clean), "wordmark", wordmark);
await exportLogo(dropBeige(light), "wordmark-light", wordmark);

// Favicon / app icon: full logo on warm white, square
const iconSrc = await raw(clean).png().toBuffer();
const iconTrim = await sharp(iconSrc).trim({ threshold: 1 }).toBuffer();
await sharp(iconTrim)
  .resize(440, 440, { fit: "contain", background: { r: 250, g: 247, b: 243, alpha: 1 } })
  .extend({ top: 36, bottom: 36, left: 36, right: 36, background: { r: 250, g: 247, b: 243, alpha: 1 } })
  .png()
  .toFile("app/icon.png");

// --- Clinic photos --------------------------------------------------------------
// Originals are low resolution; keep native size (no upscaling).
await sharp(`${SRC}/2.webp`).jpeg({ quality: 86, mozjpeg: true }).toFile(`${OUT}/clinic/reception.jpg`);
await sharp(`${SRC}/3.webp`).jpeg({ quality: 86, mozjpeg: true }).toFile(`${OUT}/clinic/treatment-room.jpg`);

// Open Graph image 1200x630 from the reception (keeps the wall sign in frame)
await sharp(`${SRC}/2.webp`)
  .resize(1200, 630, { fit: "cover", position: "right" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${OUT}/og-image.jpg`);

// --- Clinical cases (already combined before/after, keep as-is) -------------------
await sharp(`${SRC}/4.webp`).jpeg({ quality: 86, mozjpeg: true }).toFile(`${OUT}/cases/case-01.jpg`);
await sharp(`${SRC}/5.webp`).jpeg({ quality: 86, mozjpeg: true }).toFile(`${OUT}/cases/case-02.jpg`);

console.log("done");
