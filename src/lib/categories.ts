/**
 * Metadata visual de las categorías. Centralizado para que cards, headers,
 * páginas de categoría y home usen los mismos colores e iconos.
 */

export type CategoryMeta = {
  slug: string
  label: string
  short: string          // versión corta para chips/kickers
  description: string
  icon: string           // nombre iconify
  bg: string             // tailwind bg class para fallback de cover
  text: string           // tailwind text class para iconos sobre el bg
  chip: string           // tailwind classes para el chip de categoría
  image?: string         // path a la imagen del card del home, fallback si no existe
}

export const CATEGORIES: Record<string, CategoryMeta> = {
  'arquitectura': {
    slug: 'arquitectura',
    label: 'Arquitectura',
    short: 'Arquitectura',
    description: 'Diseño, planos, urbanismo y conceptos arquitectónicos explicados de forma sencilla.',
    icon: 'material-symbols:architecture',
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-700 dark:text-blue-300',
    chip: 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30',
    image: '/images/categories/arquitectura.webp',
  },
  'construccion': {
    slug: 'construccion',
    label: 'Construcción',
    short: 'Construcción',
    description: 'Obra, materiales, técnicas constructivas, cimentación y estructuras.',
    icon: 'material-symbols:construction',
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    text: 'text-orange-700 dark:text-orange-300',
    chip: 'text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30',
    image: '/images/categories/construccion.webp',
  },
  'maquinaria-pesada': {
    slug: 'maquinaria-pesada',
    label: 'Maquinaria pesada',
    short: 'Maquinaria',
    description: 'Equipos, operación, comparativas y mantenimiento de maquinaria pesada.',
    icon: 'material-symbols:agriculture',
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-700 dark:text-amber-300',
    chip: 'text-amber-800 bg-amber-50 dark:text-amber-300 dark:bg-amber-900/30',
    image: '/images/categories/maquinaria-pesada.webp',
  },
  'ingenieria-basica': {
    slug: 'ingenieria-basica',
    label: 'Ingeniería básica',
    short: 'Ingeniería',
    description: 'Conceptos transversales de ingeniería civil, estructural y de suelos.',
    icon: 'material-symbols:engineering',
    bg: 'bg-violet-100 dark:bg-violet-900/30',
    text: 'text-violet-700 dark:text-violet-300',
    chip: 'text-violet-700 bg-violet-50 dark:text-violet-300 dark:bg-violet-900/30',
    image: '/images/categories/ingenieria-basica.webp',
  },
  'glosario-y-guias': {
    slug: 'glosario-y-guias',
    label: 'Glosario y guías',
    short: 'Glosario',
    description: 'Definiciones, términos del oficio y guías de referencia rápida.',
    icon: 'material-symbols:menu-book',
    bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'text-emerald-700 bg-emerald-50 dark:text-emerald-300 dark:bg-emerald-900/30',
    image: '/images/categories/glosario-y-guias.webp',
  },
}

export const CATEGORY_LIST: CategoryMeta[] = [
  CATEGORIES['arquitectura'],
  CATEGORIES['construccion'],
  CATEGORIES['maquinaria-pesada'],
  CATEGORIES['ingenieria-basica'],
  CATEGORIES['glosario-y-guias'],
]

export function getCategory(slug?: string): CategoryMeta | undefined {
  if (!slug) return undefined
  return CATEGORIES[slug]
}

export const FORMATO_LABEL: Record<string, string> = {
  'guia': 'Guía',
  'concepto': 'Concepto',
  'comparativa': 'Comparativa',
  'resumen': 'Resumen',
  'tutorial': 'Tutorial',
  'glosario': 'Glosario',
}
