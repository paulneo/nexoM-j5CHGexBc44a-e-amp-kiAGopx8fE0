#!/usr/bin/env node
/**
 * Sugiere metadata SEO (title alternativos, description, FAQs, related, internal links)
 * a partir de un artículo Markdown ya redactado.
 *
 * Uso:
 *   npm run ai:meta -- src/content/drafts/tipos-cimentacion.md
 *
 * Salida:
 *   YAML con sugerencias por stdout. Copia/pega en el frontmatter del post.
 *   Si pasas --save, también guarda un sidecar en <archivo>.meta.yaml.
 */

import fs from 'node:fs/promises'
import { createClient, MODEL, buildSystemPrompt, logUsage, handleApiError } from './lib/anthropic.mjs'

const args = process.argv.slice(2)
const positional = args.filter((a) => !a.startsWith('--'))
const save = args.includes('--save')

if (positional.length === 0) {
  console.error('Uso: npm run ai:meta -- <ruta-al-articulo.md> [--save]')
  process.exit(1)
}

const articlePath = positional[0]
const article = await fs.readFile(articlePath, 'utf-8').catch((e) => {
  console.error(`No se pudo leer el archivo: ${articlePath}`)
  console.error(e.message)
  process.exit(1)
})

const client = await createClient()
const system = await buildSystemPrompt('meta-seo')

try {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 3000,
    system,
    messages: [
      {
        role: 'user',
        content: `Artículo a analizar:\n\n${article}\n\nDevuelve únicamente el YAML con metadata SEO siguiendo la estructura indicada.`,
      },
    ],
  })

  const text = response.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n')

  process.stdout.write(text)
  if (!text.endsWith('\n')) process.stdout.write('\n')

  if (save) {
    const sidecar = `${articlePath}.meta.yaml`
    await fs.writeFile(sidecar, text)
    console.error(`Guardado en ${sidecar}`)
  }

  logUsage(response.usage)
} catch (e) {
  handleApiError(e)
}
