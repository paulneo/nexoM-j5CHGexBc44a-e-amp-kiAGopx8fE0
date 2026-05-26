#!/usr/bin/env node
/**
 * Genera un outline de artículo a partir de un tema.
 *
 * Uso:
 *   npm run ai:outline -- "tipos de cimentación en construcción"
 *
 * Salida:
 *   content-tools/briefs/outlines/<slug>.md
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { createClient, MODEL, buildSystemPrompt, slugify, logUsage, handleApiError } from './lib/anthropic.mjs'

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Uso: npm run ai:outline -- "tema del artículo"')
  process.exit(1)
}

const tema = args.join(' ')
const slug = slugify(tema)
const outDir = path.join('content-tools', 'briefs', 'outlines')
const outPath = path.join(outDir, `${slug}.md`)

const client = await createClient()
const system = await buildSystemPrompt('outline')

try {
  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    system,
    messages: [
      {
        role: 'user',
        content: `Tema solicitado: ${tema}\n\nGenera el outline siguiendo exactamente la estructura indicada en las instrucciones del sistema.`,
      },
    ],
  })

  const text = response.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n')

  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(outPath, text)

  logUsage(response.usage)
  console.log(`Outline creado: ${outPath}`)
} catch (e) {
  handleApiError(e)
}
