#!/usr/bin/env node
/**
 * Genera public/og-default.png (1200x630) — la imagen de fallback que se
 * muestra al compartir páginas del sitio que no tienen su propia imagen.
 *
 * Combina:
 *   - public/logo-mark.png (el símbolo cuadrado)
 *   - Wordmark "Nexo Mundial"
 *   - Tagline "Conocimiento técnico, explicado simple."
 *   - Una línea de categorías al pie
 *
 * Si cambia el logo o cualquier texto, edita este script y corré:
 *   node scripts/generate-og-default.mjs
 */

import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const W = 1200
const H = 630
const TEAL = '#0E7C66'
const DARK = '#1a1a1a'
const MUTED = '#666666'
const LOGO_SIZE = 180
const LOGO_TOP = 90

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="white"/>

  <!-- Top accent line -->
  <rect x="0" y="0" width="${W}" height="8" fill="${TEAL}"/>

  <!-- Wordmark "Nexo Mundial" -->
  <text x="600" y="${LOGO_TOP + LOGO_SIZE + 90}"
        font-family="Helvetica, Arial, sans-serif"
        font-size="76"
        font-weight="800"
        fill="${DARK}"
        text-anchor="middle"
        letter-spacing="-2">Nexo Mundial</text>

  <!-- Tagline -->
  <text x="600" y="${LOGO_TOP + LOGO_SIZE + 145}"
        font-family="Helvetica, Arial, sans-serif"
        font-size="28"
        font-weight="400"
        fill="${MUTED}"
        text-anchor="middle">Conocimiento técnico, explicado simple.</text>

  <!-- Categories line at bottom -->
  <text x="600" y="555"
        font-family="Helvetica, Arial, sans-serif"
        font-size="18"
        font-weight="700"
        fill="${TEAL}"
        text-anchor="middle"
        letter-spacing="4">ARQUITECTURA · CONSTRUCCIÓN · MAQUINARIA · INGENIERÍA</text>
</svg>
`.trim()

const logoBuffer = await sharp(resolve(root, 'public', 'logo-mark-light.png'))
  .resize(LOGO_SIZE, LOGO_SIZE, { fit: 'inside', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .toBuffer()

await sharp(Buffer.from(svg))
  .composite([
    {
      input: logoBuffer,
      top: LOGO_TOP,
      left: Math.round((W - LOGO_SIZE) / 2),
    },
  ])
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(resolve(root, 'public', 'og-default.png'))

console.log('✓ public/og-default.png generado (1200x630)')
