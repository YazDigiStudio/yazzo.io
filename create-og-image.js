// Script to generate the OG image (1200×630px) for social media sharing.
// Run once: node create-og-image.js
// Requires: npm install sharp

const sharp = require("sharp");
const path = require("path");

const WIDTH = 1200;
const HEIGHT = 630;

async function createOgImage() {
  const outputPath = path.join(__dirname, "public", "og-image.jpg");
  const logoPath = path.join(__dirname, "public", "logo1noBG.png");

  // Resize logo to fit nicely in the centre
  const resizedLogo = await sharp(logoPath)
    .resize(380, null, { fit: "inside" })
    .toBuffer();

  const logoMeta = await sharp(resizedLogo).metadata();
  const logoLeft = Math.round((WIDTH - logoMeta.width) / 2);
  const logoTop = 150;

  // Purple gradient background with tagline text (SVG → Sharp)
  const bgSvg = Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stop-color="#8B5CF6"/>
          <stop offset="50%"  stop-color="#7C3AED"/>
          <stop offset="100%" stop-color="#4C1D95"/>
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
      <text
        x="${WIDTH / 2}" y="430"
        font-family="Arial, Helvetica, sans-serif"
        font-size="52" font-weight="700"
        fill="rgba(255,255,255,0.92)"
        text-anchor="middle"
      >Own the Moment</text>
      <text
        x="${WIDTH / 2}" y="502"
        font-family="Arial, Helvetica, sans-serif"
        font-size="28"
        fill="rgba(255,255,255,0.60)"
        text-anchor="middle"
      >Discover local events &amp; dining · Helsinki 2026</text>
    </svg>
  `);

  await sharp(bgSvg)
    .composite([{ input: resizedLogo, top: logoTop, left: logoLeft }])
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  console.log(`OG image saved → ${outputPath}`);
  console.log(`Size: ${WIDTH}×${HEIGHT}px`);
}

createOgImage().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
