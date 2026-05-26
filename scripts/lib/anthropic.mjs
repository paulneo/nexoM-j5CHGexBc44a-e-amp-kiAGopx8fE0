import Anthropic from '@anthropic-ai/sdk'
import fs from 'node:fs/promises'
import path from 'node:path'

export const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6'

async function loadDotEnv() {
  try {
    const text = await fs.readFile('.env', 'utf-8')
    for (const raw of text.split('\n')) {
      const line = raw.trim()
      if (!line || line.startsWith('#')) continue
      const eq = line.indexOf('=')
      if (eq === -1) continue
      const key = line.slice(0, eq).trim()
      let value = line.slice(eq + 1).trim()
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      if (!process.env[key]) process.env[key] = value
    }
  } catch {
    // No .env, está bien — el usuario puede haber exportado las vars manualmente.
  }
}

export async function createClient() {
  await loadDotEnv()
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY no está definida.')
    console.error('Crea un .env en la raíz del proyecto (ver .env.example) o exporta la variable:')
    console.error('  export ANTHROPIC_API_KEY=sk-ant-...')
    process.exit(1)
  }
  return new Anthropic()
}

export async function buildSystemPrompt(scriptPromptName) {
  const editor = await fs.readFile(path.join('content-tools', 'prompts', 'system-editor.md'), 'utf-8')
  const specific = await fs.readFile(path.join('content-tools', 'prompts', `${scriptPromptName}.md`), 'utf-8')
  return [
    {
      type: 'text',
      text: `${editor}\n\n---\n\n${specific}`,
      cache_control: { type: 'ephemeral' },
    },
  ]
}

export function slugify(input) {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function logUsage(usage) {
  if (!usage) return
  const parts = [`input ${usage.input_tokens}`, `output ${usage.output_tokens}`]
  if (usage.cache_creation_input_tokens) parts.push(`cache write ${usage.cache_creation_input_tokens}`)
  if (usage.cache_read_input_tokens) parts.push(`cache read ${usage.cache_read_input_tokens}`)
  console.error(`[${MODEL}] ${parts.join(' · ')}`)
}

export function handleApiError(e) {
  if (e instanceof Anthropic.AuthenticationError) {
    console.error('Error: API key inválida o expirada.')
  } else if (e instanceof Anthropic.RateLimitError) {
    console.error('Error: rate limit alcanzado. Reintentar en unos minutos.')
  } else if (e instanceof Anthropic.APIError) {
    console.error(`Error API ${e.status}: ${e.message}`)
  } else {
    console.error(e)
  }
  process.exit(1)
}
