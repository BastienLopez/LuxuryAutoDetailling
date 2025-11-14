import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// This script reads PNG/JPG images from public/img and generates
// WebP variants and two sizes (600w and 1200w) next to the originals.

const publicImgDir = path.join(process.cwd(), 'public', 'img');

async function processImage(file) {
  const inputPath = path.join(publicImgDir, file);
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);

  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  try {
    const img = sharp(inputPath);
    // ensure output directory exists (it's public/img)

    // sizes to emit
    const sizes = [600, 1200];

    for (const size of sizes) {
      const outWebp = path.join(publicImgDir, `${name}-${size}.webp`);
      await img.resize({ width: size }).webp({ quality: 80 }).toFile(outWebp);
    }

    // also create a full-size webp
    const outFullWebp = path.join(publicImgDir, `${name}.webp`);
    await img.webp({ quality: 85 }).toFile(outFullWebp);

    console.log(`Optimized ${file}`);
  } catch (err) {
    console.error(`Failed processing ${file}:`, err);
  }
}

async function main() {
  if (!fs.existsSync(publicImgDir)) {
    console.error('public/img directory not found.');
    process.exit(1);
  }

  const files = fs.readdirSync(publicImgDir);
  for (const file of files) {
    await processImage(file);
  }
}

main();
