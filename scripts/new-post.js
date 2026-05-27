#!/usr/bin/env node
/**
 * Crea un nuevo post o borrador con el frontmatter completo de Nexo Mundial.
 *
 * Por default los posts nuevos arrancan como BORRADOR (draft: true). El editor
 * sube la imagen vía el CMS y cambia el toggle a false cuando el post está
 * listo para publicarse. Para forzar un post publicado de una pasá --published.
 *
 * Uso:
 *   npm run new-post -- "Tipos de cimentación en construcción"
 *   npm run new-post -- "Qué es una excavadora" --published
 *   npm run new-post -- "..." --category construccion --formato guia --nivel basico
 */

import fs from 'node:fs'
import path from 'node:path'

const VALID_CATEGORIES = [
  'arquitectura',
  'construccion',
  'maquinaria-pesada',
  'ingenieria-basica',
  'glosario-y-guias',
]
const VALID_FORMATOS = ['guia', 'concepto', 'comparativa', 'resumen', 'glosario', 'tutorial']
const VALID_NIVELES = ['basico', 'intermedio', 'avanzado']

function slugify(input) {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function today() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function parseArgs(argv) {
  const positional = []
  const flags = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a.startsWith('--')) {
      const key = a.slice(2)
      const next = argv[i + 1]
      if (!next || next.startsWith('--')) {
        flags[key] = true
      } else {
        flags[key] = next
        i++
      }
    } else {
      positional.push(a)
    }
  }
  return { positional, flags }
}

const { positional, flags } = parseArgs(process.argv.slice(2))

if (positional.length === 0) {
  console.error(`Error: falta el título del post.

Uso:
  npm run new-post -- "Título del artículo"            # arranca como borrador
  npm run new-post -- "Título" --published             # arranca publicado
  npm run new-post -- "Título" --category construccion --formato guia --nivel basico

Categorías válidas: ${VALID_CATEGORIES.join(', ')}
Formatos válidos:   ${VALID_FORMATOS.join(', ')}
Niveles válidos:    ${VALID_NIVELES.join(', ')}`)
  process.exit(1)
}

const title = positional.join(' ')
const slug = flags.slug || slugify(title)
// Default: borrador. Flag --published lo invierte para publicar de una.
const isDraft = !flags.published
const category = flags.category || ''
const formato = flags.formato || 'guia'
const nivel = flags.nivel || 'basico'

if (category && !VALID_CATEGORIES.includes(category)) {
  console.error(`Categoría inválida: ${category}. Válidas: ${VALID_CATEGORIES.join(', ')}`)
  process.exit(1)
}
if (!VALID_FORMATOS.includes(formato)) {
  console.error(`Formato inválido: ${formato}. Válidos: ${VALID_FORMATOS.join(', ')}`)
  process.exit(1)
}
if (!VALID_NIVELES.includes(nivel)) {
  console.error(`Nivel inválido: ${nivel}. Válidos: ${VALID_NIVELES.join(', ')}`)
  process.exit(1)
}

const targetDir = isDraft ? 'src/content/drafts' : 'src/content/posts'
const fullPath = path.join(targetDir, `${slug}.md`)

if (fs.existsSync(fullPath)) {
  console.error(`Ya existe: ${fullPath}`)
  process.exit(1)
}

const frontmatter = `---
title: "${title}"
published: ${today()}
draft: ${isDraft}
description: ""
image: ""
category: ${category}
tags: []
formato: ${formato}
nivel: ${nivel}
featured: false
author: jean-paul
aiAssisted: false
sources: []
faq: []
related: []
---

`

fs.mkdirSync(targetDir, { recursive: true })
fs.writeFileSync(fullPath, frontmatter)
console.log(`Creado: ${fullPath}`)
