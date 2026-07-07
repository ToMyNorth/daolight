// scripts/generate-og-image.mjs
// Generates a professional 1200×630 og-default.png using sharp + inline SVG.
// Run: node scripts/generate-og-image.mjs
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "og-default.png");

const svg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%"   stop-color="#6366f1" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#818cf8"/>
      <stop offset="100%" stop-color="#c084fc"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Decorative circles -->
  <circle cx="120"  cy="120" r="220" fill="#6366f1" fill-opacity="0.06"/>
  <circle cx="1080" cy="520" r="180" fill="#c084fc" fill-opacity="0.06"/>
  <circle cx="960"  cy="100" r="100" fill="#38bdf8" fill-opacity="0.05"/>

  <!-- Divider line -->
  <line x1="480" y1="200" x2="720" y2="200" stroke="url(#accent)" stroke-width="3" stroke-linecap="round"/>

  <!-- Logo mark: trigram-inspired bars -->
  <g transform="translate(600,130)" text-anchor="middle">
    <rect x="-40" y="-10" width="80" height="8"  rx="4" fill="#818cf8"/>
    <rect x="-40" y="4"   width="34" height="8"  rx="4" fill="#818cf8"/>
    <rect x="6"   y="4"   width="34" height="8"  rx="4" fill="#818cf8"/>
    <rect x="-40" y="18"  width="80" height="8"  rx="4" fill="#818cf8"/>
  </g>

  <!-- Site name -->
  <text x="600" y="250" text-anchor="middle"
        font-family="Inter, system-ui, sans-serif" font-size="72" font-weight="800"
        fill="#f8fafc" letter-spacing="-2">Dao Light</text>

  <!-- Tagline -->
  <text x="600" y="305" text-anchor="middle"
        font-family="Inter, system-ui, sans-serif" font-size="26" font-weight="400"
        fill="#94a3b8" letter-spacing="0.5">Ancient Eastern Wisdom, Powered by AI</text>

  <!-- Feature pills -->
  <g transform="translate(600,380)" text-anchor="middle"
     font-family="Inter, system-ui, sans-serif" font-size="17" font-weight="600">
    <!-- I Ching pill -->
    <rect x="-320" y="-18" width="140" height="38" rx="19" fill="#818cf8" fill-opacity="0.15" stroke="#818cf8" stroke-opacity="0.4" stroke-width="1"/>
    <text x="-250" y="4" fill="#a5b4fc">I Ching</text>
    <!-- Tarot pill -->
    <rect x="-140" y="-18" width="120" height="38" rx="19" fill="#c084fc" fill-opacity="0.15" stroke="#c084fc" stroke-opacity="0.4" stroke-width="1"/>
    <text x="-80" y="4" fill="#d8b4fe">Tarot</text>
    <!-- Horoscope pill -->
    <rect x="0" y="-18" width="140" height="38" rx="19" fill="#fbbf24" fill-opacity="0.15" stroke="#fbbf24" stroke-opacity="0.4" stroke-width="1"/>
    <text x="70" y="4" fill="#fcd34d">Horoscope</text>
    <!-- Five Elements pill -->
    <rect x="180" y="-18" width="160" height="38" rx="19" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1"/>
    <text x="260" y="4" fill="#7dd3fc">Five Elements</text>
  </g>

  <!-- Bottom URL bar -->
  <rect x="0" y="570" width="1200" height="60" fill="#0f172a" fill-opacity="0.7"/>
  <text x="600" y="608" text-anchor="middle"
        font-family="Inter, system-ui, sans-serif" font-size="20" font-weight="500"
        fill="#64748b">daolight.ai</text>
</svg>
`);

await sharp(svg)
  .resize(1200, 630)
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(OUT);

console.log(`✅  Generated ${OUT}`);
