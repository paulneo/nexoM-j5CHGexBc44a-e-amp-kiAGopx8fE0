# Imágenes en Nexo Mundial — guía rápida

## Stack

```
┌────────────────────────────┐
│ Cloudinary (CDN + storage) │  → cloud name: dvgtbgwa6
└─────────────┬──────────────┘
              │ URL optimizada (AVIF/WebP auto)
              ▼
┌────────────────────────────┐
│ Netlify (HTML)             │  → texto/posts
└────────────────────────────┘
```

Las imágenes viven en Cloudinary (no en el repo). Los posts solo guardan el
**public_id** del archivo. Al servir la página, el helper `src/lib/images.ts`
genera la URL Cloudinary con las transformaciones correctas según el contexto
(hero gigante, card mediana, card pequeña, OG).

## Cómo agregar una imagen a un post

### Paso 1 — Subir a Cloudinary

1. Abre `cloudinary.com/console/media_library`.
2. Arrastra la imagen al panel (o "Upload" → "Browse").
3. **Recomendado**: ponla dentro de la carpeta `posts/`.
4. Cuando se sube, Cloudinary asigna un **Public ID**. Por defecto es el nombre
   del archivo sin extensión. Ejemplo:
   - Subes `cover-cimentacion.jpg` a la carpeta `posts` → public_id es `posts/cover-cimentacion`.

### Paso 2 — Pegar el public_id en el frontmatter

En el `.md` del post:

```yaml
---
title: "..."
image: posts/cover-cimentacion   # solo el public_id, sin extensión, sin URL
...
---
```

**Importante**: NO pongas la URL completa de Cloudinary. Solo el public_id.
El helper se encarga del resto. Esto es lo que hace que migrar a otro CDN
en el futuro sea cambiar una variable de entorno, no reescribir 500 posts.

### Paso 3 — Listo

Astro genera al build:
- Hero: 1920×800 AVIF/WebP automático
- Card mediana: 1000×625
- Card pequeña: 800×500
- OG (compartir): 1200×630
- Srcset responsive con varios anchos

## Tamaños recomendados al subir

| Tipo de imagen | Tamaño original sugerido |
|---|---|
| Cover de post (horizontal) | **1920 × 1080** o más grande |
| Imagen interior del post | **1200 × 800** o más grande |
| Logo, iconos | **512 × 512** SVG si es posible |

Cloudinary se encarga de reducir y optimizar. Subir grande es mejor que subir
chico — siempre puedes pedir tamaño menor, pero no agrandar uno chico.

## Cómo se ven las URLs generadas

Si en tu frontmatter pones `image: posts/cover-cimentacion`, el helper genera
(por ejemplo) para una card pequeña:

```
https://res.cloudinary.com/dvgtbgwa6/image/upload/c_fill,w_600,h_375,q_auto,f_auto/posts/cover-cimentacion
```

Las transformaciones:
- `c_fill` — recorta para llenar el aspect ratio sin distorsión
- `w_600,h_375` — dimensiones
- `q_auto` — calidad automática según el contenido
- `f_auto` — formato automático (AVIF a Chrome, WebP a Safari, JPEG a viejos)

## Tipos de referencia aceptadas en `image:`

El sistema es flexible — acepta cualquiera de estos formatos:

| Frontmatter | Comportamiento |
|---|---|
| `image: posts/cover-cimentacion` | Pasa por Cloudinary (recomendado) |
| `image: cover-cimentacion` | También Cloudinary (sin folder) |
| `image: https://...` | URL externa, se usa tal cual |
| `image: ./cover.jpg` | Archivo local junto al `.md` (raro) |
| `image:` (vacío) | Fallback: gradiente + icono de la categoría |

## Si todavía no tienes la imagen

**No pongas el campo `image`**. El sistema renderiza automáticamente un
placeholder bonito con el color y el icono de la categoría (azul para
arquitectura, naranja para construcción, ámbar para maquinaria, etc.). Se ve
profesional incluso sin foto real.

## Migrar a Cloudflare R2 (futuro)

El día que llegues al 80% del límite de Cloudinary (te avisa por email),
migrar es:

1. **Copiar imágenes** de Cloudinary a Cloudflare R2 (script o manual).
2. **Activar Cloudflare Images** en tu cuenta Cloudflare ($5/mes).
3. **Cambiar variables de entorno** (en Netlify panel):
   ```
   PUBLIC_IMG_PROVIDER=cloudflare
   PUBLIC_CLOUDFLARE_ACCOUNT_HASH=tu_hash
   ```
4. **Redeploy**. Listo.

Cero cambios en los posts. El helper detecta el nuevo provider y genera URLs
de Cloudflare automáticamente.

## Bancos de imágenes gratuitos para covers

Si necesitas fotos pero no quieres tomarlas tú:

- [Unsplash](https://unsplash.com) — fotos de obra, maquinaria, planos
- [Pexels](https://pexels.com) — alternativa similar
- [Pixabay](https://pixabay.com) — más amplio

Búsquedas concretas que funcionan bien para tu nicho:
- *construction site*, *foundation*, *concrete pour*
- *excavator*, *backhoe loader*, *bulldozer*
- *architectural blueprint*, *floor plan*, *technical drawing*
- *steel reinforcement*, *rebar*, *scaffolding*
