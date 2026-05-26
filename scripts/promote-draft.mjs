#!/usr/bin/env node
/**
 * Promueve un borrador de /drafts a /posts.
 *
 * Uso:
 *   npm run promote -- tipos-cimentacion
 *   npm run promote -- src/content/drafts/tipos-cimentacion.md
 *
 * Validaciones:
 *   - title (10-80 chars)
 *   - description (50-180 chars)
 *   - category (en lista válida)
 *   - reviewedBy presente (humano debe haber revisado)
 *
 * Acciones:
 *   - draft: false
 *   - updatedAt: hoy
 *   - mueve drafts/<slug>.md → posts/<slug>.md
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

const VALID_CATEGORIES = [
  'arquitectura',
  'construccion',
  'maquinaria-pesada',
  'ingenieria-basica',
  'glosario-y-guias',
]

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Uso: npm run promote -- <slug-o-ruta-del-borrador>')
  process.exit(1)
}

let inputPath = args[0]
if (!inputPath.includes('/') && !inputPath.endsWith('.md')) {
  inputPath = path.join('src', 'content', 'drafts', `${inputPath}.md`)
}
if (!inputPath.endsWith('.md')) inputPath += '.md'

const slug = path.basename(inputPath, '.md')
const targetPath = path.join('src', 'content', 'posts', `${slug}.md`)

const raw = await fs.readFile(inputPath, 'utf-8').catch((e) => {
  console.error(`No se encontró el borrador: ${inputPath}`)
  console.error(e.message)
  process.exit(1)
})

const targetExists = await fs
  .access(targetPath)
  .then(() => true)
  .catch(() => false)
if (targetExists) {
  console.error(`Ya existe un post publicado con ese slug: ${targetPath}`)
  console.error('Borra el archivo o renombra el borrador antes de promover.')
  process.exit(1)
}

const parsed = matter(raw)
const fm = parsed.data
const errors = []

if (!fm.title || typeof fm.title !== 'string') {
  errors.push('title: falta o no es string')
} else if (fm.title.length < 10 || fm.title.length > 80) {
  errors.push(`title: debe tener 10-80 chars (actual: ${fm.title.length})`)
}

if (!fm.description || typeof fm.description !== 'string') {
  errors.push('description: falta — generala con `npm run ai:meta`')
} else if (fm.description.length < 50 || fm.description.length > 180) {
  errors.push(`description: debe tener 50-180 chars (actual: ${fm.description.length})`)
}

if (!fm.category) {
  errors.push('category: falta')
} else if (!VALID_CATEGORIES.includes(fm.category)) {
  errors.push(`category: "${fm.category}" no es válida. Válidas: ${VALID_CATEGORIES.join(', ')}`)
}

if (!fm.reviewedBy) {
  errors.push('reviewedBy: falta — un humano debe haber revisado el artículo antes de publicarlo')
}

if (!fm.author) {
  errors.push('author: falta')
}

if (errors.length > 0) {
  console.error(`No se puede promover ${inputPath}:\n`)
  for (const err of errors) console.error(`  - ${err}`)
  console.error('\nCorrige el frontmatter del borrador y vuelve a intentar.')
  process.exit(1)
}

const today = new Date()
const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

fm.draft = false
fm.updatedAt = todayStr
if (!fm.published) fm.published = todayStr

const out = matter.stringify(parsed.content, fm)

await fs.mkdir(path.dirname(targetPath), { recursive: true })
await fs.writeFile(targetPath, out)
await fs.unlink(inputPath)

console.log(`Promovido: ${inputPath} → ${targetPath}`)
console.log('Siguiente paso: git commit + push para publicar.')
