#!/usr/bin/env node
/**
 * Normaliza las subidas del CMS antes de cada build.
 *
 * Sveltia CMS a veces (cache de browser, config viejo en sesiones largas)
 * sube imágenes a `src/content/_uploads/` y escribe rutas `/_uploads/foo.webp`
 * en el frontmatter de los posts. Esa carpeta NO se sirve en producción —
 * Vercel solo sirve lo que está bajo `public/`.
 *
 * Este script se ejecuta antes de `astro build` y:
 *   1. Mueve todo lo que haya en src/content/_uploads/ a public/images/posts/
 *   2. Reescribe cualquier `image: /_uploads/...` en posts y drafts a
 *      `image: /images/posts/...`
 *
 * Es idempotente: si no hay nada que mover, sale sin tocar nada. Cero
 * efecto si el editor ya guardó la imagen en el lugar correcto.
 *
 * Engánchalo al pipeline editando el script "build" del package.json:
 *   "build": "node scripts/normalize-uploads.mjs && astro build && pagefind --site dist"
 */

import { existsSync, readdirSync, renameSync, mkdirSync, statSync, readFileSync, writeFileSync, rmdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const UPLOADS_DIR = resolve(root, 'src/content/_uploads')
const TARGET_DIR = resolve(root, 'public/images/posts')
const CONTENT_DIRS = [
  resolve(root, 'src/content/posts'),
  resolve(root, 'src/content/drafts'),
]

let movedCount = 0
let rewrittenCount = 0

// 1. Mover archivos
if (existsSync(UPLOADS_DIR)) {
  mkdirSync(TARGET_DIR, { recursive: true })
  for (const name of readdirSync(UPLOADS_DIR)) {
    const src = join(UPLOADS_DIR, name)
    if (!statSync(src).isFile()) continue
    const dest = join(TARGET_DIR, name)
    renameSync(src, dest)
    movedCount++
  }
  try {
    rmdirSync(UPLOADS_DIR)
  } catch {
    // ignore — carpeta puede no estar vacía si quedó algo no-archivo
  }
}

// 2. Reescribir frontmatter
for (const dir of CONTENT_DIRS) {
  if (!existsSync(dir)) continue
  for (const name of readdirSync(dir)) {
    if (!name.endsWith('.md')) continue
    const file = join(dir, name)
    const content = readFileSync(file, 'utf8')
    if (!content.includes('/_uploads/')) continue
    const rewritten = content.replace(/image:\s*\/_uploads\//g, 'image: /images/posts/')
    if (rewritten !== content) {
      writeFileSync(file, rewritten, 'utf8')
      rewrittenCount++
    }
  }
}

if (movedCount || rewrittenCount) {
  console.log(`[normalize-uploads] ${movedCount} archivo(s) movido(s), ${rewrittenCount} post(s) reescrito(s)`)
} else {
  console.log('[normalize-uploads] sin uploads pendientes')
}
