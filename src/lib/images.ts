/**
 * Helper agnóstico de provider para URLs de imágenes.
 *
 * Soporta tres providers (configurable vía PUBLIC_IMG_PROVIDER):
 *   - cloudinary  (activo por defecto)
 *   - cloudflare  (cuando migremos)
 *   - bunny       (alternativa barata)
 *
 * En el frontmatter de los posts solo se guarda el "public_id" / filename
 * de la imagen (sin URL larga ni provider). Así el día que migremos,
 * cambiamos PUBLIC_IMG_PROVIDER en .env y todas las URLs se regeneran
 * sin tocar un solo post.
 *
 * Ejemplos de `ref` aceptados:
 *   - "posts/cover-excavadora"        → public_id Cloudinary (genera URL CDN)
 *   - "cover-excavadora"              → public_id sin folder (genera URL CDN)
 *   - "https://res.cloudinary.com/..." → URL ya completa (passthrough)
 *   - "./cover.jpg"                    → path relativo local (passthrough)
 *   - "/static/cover.jpg"              → path absoluto local (passthrough)
 */

export type ImgOpts = {
    width?: number
    height?: number
    quality?: 'auto' | number
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png'
    crop?: 'fill' | 'fit' | 'scale' | 'limit' | 'thumb'
}

// Defaults del sitio. Las env vars (PUBLIC_*) sobreescriben si están definidas
// en .env. Esto permite que el sitio funcione out-of-the-box sin .env, y al
// mismo tiempo cambiar de provider en producción sin recompilar.
const DEFAULT_CLOUDINARY_CLOUD_NAME = 'dvgtbgwa6'

const PROVIDER = (import.meta.env.PUBLIC_IMG_PROVIDER || 'cloudinary') as
    | 'cloudinary'
    | 'cloudflare'
    | 'bunny'

const CLOUDINARY_CLOUD_NAME = (import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME as string | undefined) || DEFAULT_CLOUDINARY_CLOUD_NAME
const CLOUDFLARE_ACCOUNT_HASH = import.meta.env.PUBLIC_CLOUDFLARE_ACCOUNT_HASH as string | undefined
const BUNNY_PULL_ZONE = import.meta.env.PUBLIC_BUNNY_PULL_ZONE as string | undefined

export function isLocalPath(ref: string): boolean {
    return ref.startsWith('./') || ref.startsWith('../') || ref.startsWith('/')
}

export function isAbsoluteUrl(ref: string): boolean {
    return ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('data:')
}

/**
 * Devuelve true si `ref` se va a procesar por el CDN (no es local ni URL).
 */
export function isCdnRef(ref: string): boolean {
    return !!ref && !isLocalPath(ref) && !isAbsoluteUrl(ref)
}

/**
 * Genera la URL final de la imagen.
 *
 * Si `ref` es una URL completa o un path local, se devuelve tal cual.
 * Si es un public_id del CDN, se compone la URL con las transformaciones.
 */
export function img(ref: string | undefined | null, opts: ImgOpts = {}): string {
    if (!ref) return ''
    if (isLocalPath(ref) || isAbsoluteUrl(ref)) return ref

    const cleanRef = ref.replace(/^\/+/, '')

    switch (PROVIDER) {
        case 'cloudinary': {
            if (!CLOUDINARY_CLOUD_NAME) {
                console.warn('[images] PUBLIC_CLOUDINARY_CLOUD_NAME no está definida; devuelvo ref sin transformar.')
                return ref
            }
            const {
                width,
                height,
                quality = 'auto',
                format = 'auto',
                crop = 'fill',
            } = opts
            const parts: string[] = []
            parts.push(`c_${crop}`)
            if (width) parts.push(`w_${width}`)
            if (height) parts.push(`h_${height}`)
            parts.push(`q_${quality}`)
            parts.push(`f_${format}`)
            const transform = parts.join(',')
            return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transform}/${cleanRef}`
        }

        case 'cloudflare': {
            if (!CLOUDFLARE_ACCOUNT_HASH) {
                console.warn('[images] PUBLIC_CLOUDFLARE_ACCOUNT_HASH no está definida; devuelvo ref sin transformar.')
                return ref
            }
            const { width, height, quality = 85, format = 'auto', crop = 'fill' } = opts
            const params: string[] = []
            if (width) params.push(`w=${width}`)
            if (height) params.push(`h=${height}`)
            params.push(`format=${format === 'auto' ? 'auto' : format}`)
            params.push(`quality=${quality === 'auto' ? 85 : quality}`)
            if (crop === 'fill') params.push('fit=cover')
            else if (crop === 'fit') params.push('fit=contain')
            return `https://imagedelivery.net/${CLOUDFLARE_ACCOUNT_HASH}/${cleanRef}/${params.join(',')}`
        }

        case 'bunny': {
            if (!BUNNY_PULL_ZONE) {
                console.warn('[images] PUBLIC_BUNNY_PULL_ZONE no está definida; devuelvo ref sin transformar.')
                return ref
            }
            const { width, height, quality } = opts
            const params = new URLSearchParams()
            if (width) params.set('width', String(width))
            if (height) params.set('height', String(height))
            if (quality && quality !== 'auto') params.set('quality', String(quality))
            return `https://${BUNNY_PULL_ZONE}.b-cdn.net/${cleanRef}?${params.toString()}`
        }

        default:
            return ref
    }
}

// ─── Presets para casos comunes ──────────────────────────────────────────

/** Hero del post (cinemático ultra-ancho) */
export const heroImg = (ref: string | undefined | null) =>
    img(ref, { width: 1920, height: 800, crop: 'fill' })

/** Card grande (md) en grids 2-col */
export const cardImg = (ref: string | undefined | null) =>
    img(ref, { width: 800, height: 500, crop: 'fill' })

/** Card pequeña (sm) en grids 3-col */
export const cardImgSm = (ref: string | undefined | null) =>
    img(ref, { width: 600, height: 375, crop: 'fill' })

/** Open Graph (compartir en redes — Twitter/Facebook/WhatsApp) */
export const ogImg = (ref: string | undefined | null) =>
    img(ref, { width: 1200, height: 630, crop: 'fill' })

/** Placeholder borroso muy ligero (para lazy loading con blur) */
export const blurImg = (ref: string | undefined | null) =>
    img(ref, { width: 30, quality: 30, format: 'jpg' })

/** Srcset responsive — devuelve un srcset con varios anchos */
export function imgSrcset(ref: string | undefined | null, widths: number[] = [400, 600, 800, 1200, 1600]): string {
    if (!ref || isLocalPath(ref) || isAbsoluteUrl(ref)) return ''
    return widths
        .map(w => `${img(ref, { width: w, crop: 'fill' })} ${w}w`)
        .join(', ')
}
