#!/usr/bin/env node
/**
 * Genera un borrador de artículo a partir de un outline.
 *
 * Uso:
 *   npm run ai:draft -- content-tools/briefs/outlines/tipos-cimentacion.md
 *   npm run ai:draft -- content-tools/briefs/outlines/tipos-cimentacion.md --slug otro-slug
 *
 * Salida:
 *   src/content/drafts/<slug>.md
 *
 * El borrador SIEMPRE va a /drafts con `draft: true` y `aiAssisted: true`.
 * Hay que revisarlo manualmente y promoverlo con `npm run promote -- <slug>`.
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { createClient, MODEL, buildSystemPrompt, slugify, logUsage, handleApiError } from './lib/anthropic.mjs'

const args = process.argv.slice(2)
const positional = []
const flags = {}
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    const k = args[i].slice(2)
    flags[k] = args[i + 1] && !args[i + 1].startsWith('--') ? args[++i] : true
  } else {
    positional.push(args[i])
  }
}

if (positional.length === 0) {
  console.error('Uso: npm run ai:draft -- <ruta-al-outline.md> [--slug nombre-personalizado]')
  process.exit(1)
}

const outlinePath = positional[0]
const outlineContent = await fs.readFile(outlinePath, 'utf-8').catch((e) => {
  console.error(`No se pudo leer el outline: ${outlinePath}`)
  console.error(e.message)
  process.exit(1)
})

const slug = flags.slug || path.basename(outlinePath, path.extname(outlinePath))
const outDir = path.join('src', 'content', 'drafts')
const outPath = path.join(outDir, `${slug}.md`)

try {
  await fs.access(outPath)
  console.error(`Ya existe un borrador con ese slug: ${outPath}`)
  console.error('Borra el archivo o usa --slug otro-nombre.')
  process.exit(1)
} catch {
  // No existe, seguimos.
}

const client = await createClient()
const system = await buildSystemPrompt('draft')

console.error(`Generando borrador para slug "${slug}"...`)

try {
  // Streaming para artículos largos: mejor UX y evita timeouts en SDKs.
  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 12000,
    system,
    messages: [
      {
        role: 'user',
        content: `Outline aprobado para el artículo:\n\n${outlineContent}\n\nRedacta el artículo completo siguiendo las reglas de las instrucciones del sistema.`,
      },
    ],
  })

  let written = 0
  stream.on('text', (delta) => {
    written += delta.length
    if (written % 500 < delta.length) process.stderr.write('.')
  })

  const finalMessage = await stream.finalMessage()
  process.stderr.write('\n')

  const text = finalMessage.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n')

  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(outPath, text)

  logUsage(finalMessage.usage)
  console.log(`Borrador creado: ${outPath}`)
  console.log('')
  console.log('Próximos pasos:')
  console.log('  1. Revisa y edita el borrador (especialmente cualquier [VERIFICAR: ...]).')
  console.log(`  2. Genera meta SEO:  npm run ai:meta -- ${outPath}`)
  console.log(`  3. Cuando esté listo: npm run promote -- ${slug}`)
} catch (e) {
  handleApiError(e)
}
