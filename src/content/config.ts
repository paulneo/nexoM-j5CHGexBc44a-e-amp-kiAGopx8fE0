import { defineCollection, reference, z } from 'astro:content'

/**
 * Schema editorial de Nexo Mundial.
 *
 * Mantiene compatibilidad con los campos que ya consumen los layouts de Fuwari
 * (title, published, description, image, tags, category, draft) y añade los
 * campos nuevos (updatedAt, formato, nivel, aiAssisted, reviewedBy, sources,
 * faq, featured, author, related) como opcionales para no romper el build
 * mientras se migran los layouts.
 */

const FORMATOS = ['guia', 'concepto', 'comparativa', 'resumen', 'glosario', 'tutorial'] as const
const NIVELES = ['basico', 'intermedio', 'avanzado'] as const

const sourceSchema = z.object({
  title: z.string(),
  url: z.string().url().optional(),
  author: z.string().optional(),
  year: z.number().int().optional(),
})

const faqItemSchema = z.object({
  q: z.string(),
  a: z.string(),
})

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      // Campos existentes (compat con layouts Fuwari)
      title: z.string().min(10).max(80),
      published: z.date(),
      draft: z.boolean().default(false),
      description: z.string().min(50).max(180).optional(),
      image: z.string().optional(),
      tags: z.array(z.string()).default([]),
      category: z.string().optional(),

      // Editorial
      updatedAt: z.date().optional(),
      formato: z.enum(FORMATOS).default('guia'),
      nivel: z.enum(NIVELES).default('basico'),
      featured: z.boolean().default(false),
      lang: z.string().default('es'),

      // Autor (referencia a colección authors)
      author: reference('authors').optional(),

      // Transparencia IA
      aiAssisted: z.boolean().default(false),
      reviewedBy: reference('authors').optional(),

      // Fuentes y FAQs
      sources: z.array(sourceSchema).optional(),
      faq: z.array(faqItemSchema).optional(),

      // Interlinking manual (slugs de otros posts)
      related: z.array(z.string()).optional(),

      // SEO overrides
      seo: z
        .object({
          canonical: z.string().url().optional(),
          ogImage: z.string().optional(),
          noindex: z.boolean().default(false),
        })
        .optional(),

      // Cover estructurado opcional (si se prefiere a `image`)
      cover: z
        .object({
          src: image(),
          alt: z.string(),
          credit: z.string().optional(),
        })
        .optional(),
    }),
})

const authorsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().min(40).max(500),
      avatar: image().optional(),
      email: z.string().email().optional(),
      social: z
        .object({
          twitter: z.string().url().optional(),
          linkedin: z.string().url().optional(),
          github: z.string().url().optional(),
          web: z.string().url().optional(),
        })
        .optional(),
    }),
})

const glosarioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    aliases: z.array(z.string()).default([]),
    category: z.string().optional(),
    short: z.string().min(20).max(220),
    related: z.array(z.string()).optional(),
    sources: z.array(sourceSchema).optional(),
    updatedAt: z.date().optional(),
  }),
})

const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    order: z.number().int().default(99),
  }),
})

const tagsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
})

// Drafts comparten schema con posts: cuando promote-draft.mjs mueve el
// archivo a posts/, el frontmatter ya cumple las validaciones.
const draftsCollection = postsCollection

export const collections = {
  posts: postsCollection,
  drafts: draftsCollection,
  authors: authorsCollection,
  glosario: glosarioCollection,
  categories: categoriesCollection,
  tags: tagsCollection,
}
