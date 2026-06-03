import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'
import { getCollection } from 'astro:content'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// Resolved at module load time (build time). Points to <repo>/public/
const PUBLIC_DIR = fileURLToPath(new URL('../../public', import.meta.url))

/**
 * Decide if a post should be visible publicly.
 *
 * En DEV (pnpm dev) muestra TODO para que el editor pueda previsualizar
 * drafts, posts con fecha futura, y posts sin imagen cargada todavía.
 *
 * En PROD (pnpm build) aplica tres filtros que se combinan con AND:
 *  1. draft debe ser false
 *  2. published debe ser hoy o antes (los posts con fecha futura aparecen
 *     automáticamente cuando un rebuild se ejecuta tras esa fecha; ver
 *     .github/workflows/scheduled-rebuild.yml)
 *  3. image debe estar definida Y el archivo debe existir en /public/
 *     (excepto si es una URL externa tipo CDN, que se asume válida)
 */
export function isPostPublishable(data: any): boolean {
  if (!import.meta.env.PROD) return true

  if (data.draft === true) return false

  if (data.published && new Date(data.published) > new Date()) return false

  if (!data.image || typeof data.image !== 'string' || data.image.trim() === '') return false

  // Solo verificar existencia para paths locales. URLs externas (https://, http://)
  // se asumen válidas — no podemos verificarlas en build sin red.
  if (data.image.startsWith('/')) {
    const imagePath = PUBLIC_DIR + data.image
    if (!existsSync(imagePath)) return false
  }

  return true
}

export async function getSortedPosts() {
  const allBlogPosts = await getCollection('posts', ({ data }) => isPostPublishable(data))
  const sorted = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.data.published)
    const dateB = new Date(b.data.published)
    return dateA > dateB ? -1 : 1
  })

  for (let i = 1; i < sorted.length; i++) {
    sorted[i].data.nextSlug = sorted[i - 1].slug
    sorted[i].data.nextTitle = sorted[i - 1].data.title
  }
  for (let i = 0; i < sorted.length - 1; i++) {
    sorted[i].data.prevSlug = sorted[i + 1].slug
    sorted[i].data.prevTitle = sorted[i + 1].data.title
  }

  return sorted
}

export type Tag = {
  name: string
  count: number
}

export async function getTagList(): Promise<Tag[]> {
  const allBlogPosts = await getCollection('posts', ({ data }) => isPostPublishable(data))

  const countMap: { [key: string]: number } = {}
  allBlogPosts.map(post => {
    post.data.tags.map((tag: string) => {
      if (!countMap[tag]) countMap[tag] = 0
      countMap[tag]++
    })
  })

  // sort tags
  const keys: string[] = Object.keys(countMap).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  return keys.map(key => ({ name: key, count: countMap[key] }))
}

export type Category = {
  name: string
  count: number
}

export async function getCategoryList(): Promise<Category[]> {
  const allBlogPosts = await getCollection('posts', ({ data }) => isPostPublishable(data))
  const count: { [key: string]: number } = {}
  allBlogPosts.map(post => {
    if (!post.data.category) {
      const ucKey = i18n(I18nKey.uncategorized)
      count[ucKey] = count[ucKey] ? count[ucKey] + 1 : 1
      return
    }
    count[post.data.category] = count[post.data.category]
      ? count[post.data.category] + 1
      : 1
  })

  const lst = Object.keys(count).sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  })

  const ret: Category[] = []
  for (const c of lst) {
    ret.push({ name: c, count: count[c] })
  }
  return ret
}
