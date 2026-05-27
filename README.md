# Nexo Mundial

Biblioteca digital de conocimiento técnico práctico sobre arquitectura,
construcción, maquinaria pesada e ingeniería básica. Conceptos del oficio
explicados sin tecnicismos innecesarios.

Sitio en producción: **[nexomundial.com](https://www.nexomundial.com/)**

---

## Stack

- **[Astro 4](https://astro.build)** — site generator estático
- **[Tailwind CSS](https://tailwindcss.com)** — estilos
- **[Pagefind](https://pagefind.app)** — buscador local indexado en build
- **[Decap CMS](https://decapcms.org)** — panel editorial tipo WordPress en `/admin/`
- **[Cloudinary](https://cloudinary.com)** — CDN de imágenes (cuenta `dvgtbgwa6`)
- **[Netlify](https://www.netlify.com)** — hosting + Identity (auth del CMS)
- **[Anthropic Claude API](https://www.anthropic.com/)** — asistencia editorial

---

## Quickstart

```bash
# 1. Instalar dependencias
pnpm install

# 2. Arrancar el servidor de desarrollo
pnpm dev

# Abrir http://localhost:4321/
```

Eso es todo. El sitio funciona out-of-the-box: las imágenes apuntan a
Cloudinary (cloud `dvgtbgwa6` por defecto), los scripts de IA son opcionales
(requieren `ANTHROPIC_API_KEY` en `.env`), y el admin local solo funciona en
producción (necesita Netlify Identity).

---

## Comandos

| Comando | Qué hace |
|---|---|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Dev server en `localhost:4321` con hot reload |
| `pnpm build` | Genera sitio estático en `dist/` (incluye Pagefind) |
| `pnpm preview` | Sirve el build de producción localmente |
| `pnpm new-post -- "Título"` | Crea un post nuevo en `src/content/posts/` |
| `pnpm new-post -- "Título" --draft` | Crea borrador en `src/content/drafts/` |
| `pnpm ai:outline -- "tema"` | Genera outline con IA (`ANTHROPIC_API_KEY`) |
| `pnpm ai:draft -- outline.md` | Genera borrador desde outline |
| `pnpm ai:meta -- post.md` | Sugiere metadata SEO de un post |
| `pnpm promote -- <slug>` | Promueve borrador a publicado (valida frontmatter) |
| `pnpm lint` | Lint con Biome |
| `pnpm format` | Formatea código |

---

## Cómo crear contenido

Tres formas válidas, **elige según el contexto**:

### A. Desde el panel web (recomendado para uso diario)

1. Ve a `https://tunexomundial.com/admin/`.
2. Login con email/password (Netlify Identity).
3. Click en "Artículos" → "New Artículo".
4. Llena el formulario (título, categoría, descripción, imagen, FAQs, cuerpo).
5. "Publish now" → commit automático → deploy en ~30s.

**Setup inicial del panel**: ver [`content-tools/admin.md`](./content-tools/admin.md)
— activar Netlify Identity, Git Gateway, obtener API key de Cloudinary.

### B. Con scripts IA + revisión manual (producción de muchos posts)

Flujo asistido por IA con revisión humana obligatoria:

```bash
# 1. Idea → outline
pnpm ai:outline -- "tipos de cimentación en construcción"
# → content-tools/briefs/outlines/tipos-de-cimentacion-en-construccion.md

# 2. Outline → borrador (siempre va a /drafts, nunca publica directo)
pnpm ai:draft -- content-tools/briefs/outlines/tipos-de-cimentacion-en-construccion.md
# → src/content/drafts/tipos-de-cimentacion-en-construccion.md

# 3. Editas, revisas, añades `reviewedBy: jean-paul` al frontmatter.

# 4. Sugerencias de metadata SEO
pnpm ai:meta -- src/content/drafts/tipos-de-cimentacion-en-construccion.md

# 5. Promover (valida frontmatter, mueve a /posts/)
pnpm promote -- tipos-de-cimentacion-en-construccion
```

Detalle del flujo: [`content-tools/README.md`](./content-tools/README.md)
y prompts versionados en [`content-tools/prompts/`](./content-tools/prompts/).

**Requiere** `ANTHROPIC_API_KEY` en `.env` ([crear key](https://console.anthropic.com/)).

### C. Crear el `.md` a mano

```bash
pnpm new-post -- "Mi nuevo artículo" --category construccion --formato guia
# → src/content/posts/mi-nuevo-articulo.md
```

Editas el frontmatter y el cuerpo en tu editor favorito.

---

## Estructura del proyecto

```
src/
  assets/                    Imágenes globales (logo, OG default)
  components/                Componentes Astro (PostCard, HeroPostCard, Navbar...)
  content/
    posts/                   Posts publicados (.md con frontmatter)
    drafts/                  Borradores (no se publican)
    glosario/                Entradas del glosario
    authors/                 Bios de autores
    categories/              Metadata de categorías
    config.ts                Schema Zod de cada colección
  layouts/                   MainGridLayout, Layout (HTML base)
  lib/
    categories.ts            Colores e iconos por categoría
    images.ts                Helper agnóstico de CDN (Cloudinary/Cloudflare/Bunny)
  pages/
    [...page].astro          Home + paginación
    about.astro              /about/
    admin/index.astro        Panel Decap CMS
    categorias/              /categorias/ y /categorias/[slug]/
    glosario/                /glosario/
    posts/[...slug].astro    Página de post individual
    rss.xml.ts, robots.txt.ts
public/
  admin/config.yml           Configuración del CMS (qué colecciones, qué campos)
  favicon.png
content-tools/               Herramientas editoriales (fuera de build)
  README.md                  Flujo editorial
  admin.md                   Setup del panel Decap
  imagenes.md                Guía Cloudinary + migración a Cloudflare
  briefs/                    Outlines de IA
  prompts/                   Prompts versionados (system, outline, draft, meta-seo)
scripts/                     CLI: new-post, ai-outline, ai-draft, ai-meta, promote
```

---

## Configuración

### Variables de entorno (`.env`)

Crea `.env` en la raíz copiando `.env.example`:

```env
# Scripts IA (opcional, solo si usas pnpm ai:*)
ANTHROPIC_API_KEY=sk-ant-...
ANTHROPIC_MODEL=claude-sonnet-4-6

# CDN de imágenes (opcional, hay default hardcoded)
PUBLIC_IMG_PROVIDER=cloudinary
PUBLIC_CLOUDINARY_CLOUD_NAME=dvgtbgwa6
```

En **producción** las mismas variables se configuran en el panel de
Netlify → Site → Environment variables.

### Identidad del sitio

`src/config.ts` controla: título, subtítulo, hue del tema (verde teal 170),
links del navbar, redes sociales del autor, licencia.

---

## Frontmatter de un post

```yaml
---
title: "Tipos de cimentación en construcción"      # 10-80 caracteres
published: 2026-05-07
updatedAt: 2026-05-07                              # opcional
draft: false
description: "Las cimentaciones..."                # 50-180 caracteres (SEO)
category: construccion                             # ver categorías válidas abajo
tags: [cimentacion, estructuras, obra]
formato: guia                                      # guia|concepto|comparativa|resumen|tutorial|glosario
nivel: basico                                      # basico|intermedio|avanzado
featured: true                                     # solo uno a la vez: hero de la home
image: posts/cover-cimentacion                     # public_id de Cloudinary, no URL
author: jean-paul
aiAssisted: false                                  # true muestra disclaimer al final
faq:
  - q: "¿Pregunta?"
    a: "Respuesta..."
sources:
  - { title: "ACI 318-19", url: "https://..." }
related:
  - que-es-el-hormigon-armado                      # slugs de otros posts
---
```

**Categorías válidas**: `arquitectura`, `construccion`, `maquinaria-pesada`,
`ingenieria-basica`, `glosario-y-guias`.

---

## Imágenes (Cloudinary)

Por defecto el sitio sirve imágenes desde Cloudinary CDN (cloud `dvgtbgwa6`).
**Las imágenes no van en el repo**: subes al panel Cloudinary, copias el
public_id, lo pegas en el frontmatter.

```yaml
image: posts/cover-cimentacion       # ← solo el public_id, sin URL ni extensión
```

El helper `src/lib/images.ts` genera la URL CDN correcta según el contexto
(hero 1920×800, card 800×500, OG 1200×630, etc.).

**Si todavía no tienes la imagen**: deja `image:` vacío. El sitio renderiza
un fallback con el icono y color de la categoría — se ve profesional.

Guía completa: [`content-tools/imagenes.md`](./content-tools/imagenes.md)
incluye instrucciones para migrar a Cloudflare R2 cuando crezca.

---

## Despliegue

El sitio deploya automáticamente en Netlify cuando se hace push a `main`.

**Configuración de Netlify**:

- Build command: `pnpm build`
- Publish directory: `dist`
- Node version: 18 o superior

**Variables de entorno** (panel Netlify → Site → Environment variables):

```
ANTHROPIC_API_KEY        (solo si usas scripts IA en CI, opcional)
PUBLIC_IMG_PROVIDER      cloudinary
PUBLIC_CLOUDINARY_CLOUD_NAME    dvgtbgwa6
```

**Features de Netlify activos**:

- Identity (auth del panel admin)
- Git Gateway (commits desde el CMS)

Detalle del setup: [`content-tools/admin.md`](./content-tools/admin.md).

---

## Documentación interna

| Archivo | Tema |
|---|---|
| [`content-tools/README.md`](./content-tools/README.md) | Flujo editorial completo con IA + revisión |
| [`content-tools/admin.md`](./content-tools/admin.md) | Setup y uso del panel Decap CMS |
| [`content-tools/imagenes.md`](./content-tools/imagenes.md) | Cloudinary + migración a Cloudflare R2 |
| [`content-tools/briefs/2026-05-arranque.md`](./content-tools/briefs/2026-05-arranque.md) | Roadmap de los primeros 20 artículos |

---

## Estado actual

- ✅ 10 posts seed publicados, 1 destacado
- ✅ 10 entradas de glosario
- ✅ 5 categorías con páginas dedicadas
- ✅ Panel admin Decap CMS en `/admin/`
- ✅ Cloudinary CDN integrado (helper agnóstico para migrar después)
- ✅ Scripts IA editoriales (`ai:outline`, `ai:draft`, `ai:meta`, `promote`)
- ✅ JSON-LD `Article` + `FAQPage`
- ✅ Pagefind buscador local
- ✅ TOC sticky + reading progress + posts relacionados
- ✅ Dark mode + responsive + animaciones on scroll

**Pendiente**:

- Páginas legales: privacidad, contacto, política editorial con uso de IA (necesarias para AdSense)
- Llegar a 25+ posts publicados (requisito mínimo para aprobar AdSense)
- OG image dinámico por post
- Interlinking automático del glosario en los posts

---

## Licencia

Código fuente: MIT (heredado del template [Fuwari](https://github.com/saicaca/fuwari)
con modificaciones profundas).

Contenido editorial: CC BY-NC-SA 4.0.
