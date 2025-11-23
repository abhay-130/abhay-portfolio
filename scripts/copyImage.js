#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const src = process.argv[2];
if (!src) {
  console.error('Usage: node copyImage.js /absolute/path/to/image.jpg [newName.jpg]');
  process.exit(1);
}

const destDir = path.resolve(__dirname, '..', 'public', 'offline_images');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const fileName = process.argv[3] || path.basename(src);
const dest = path.join(destDir, fileName);

try {
  fs.copyFileSync(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
} catch (err) {
  console.error('Failed to copy file:', err.message);
  process.exit(1);
}
