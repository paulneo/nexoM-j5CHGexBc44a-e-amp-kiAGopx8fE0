# Brief — Camino a AdSense (mayo–julio 2026)

Plan editorial para llevar Nexo Mundial de 10 a 30 posts publicados y
postular a Google AdSense con un sitio que cumpla los requisitos de
contenido sustancial, valor original y E-E-A-T.

## Estado actual

**10 posts publicados** (al 2026-05-26):

| # | Slug | Categoría |
|---|------|-----------|
| 1 | `tipos-de-cimentacion-en-construccion` | construccion |
| 2 | `tipos-de-planos-arquitectonicos` | arquitectura |
| 3 | `que-es-un-plano-arquitectonico` | arquitectura |
| 4 | `que-es-el-hormigon-armado` | construccion |
| 5 | `como-se-calcula-el-cubicaje-de-hormigon` | construccion |
| 6 | `diferencia-entre-viga-y-columna` | ingenieria-basica |
| 7 | `tipos-de-suelo-en-ingenieria-civil` | ingenieria-basica |
| 8 | `que-es-una-excavadora` | maquinaria-pesada |
| 9 | `diferencia-retroexcavadora-cargador-frontal` | maquinaria-pesada |
| 10 | `errores-comunes-al-operar-maquinaria-pesada` | maquinaria-pesada |

**Glosario:** 10 entradas (bim, cimentacion, columna, dosificacion,
encofrado, hormigon-armado, plano, replanteo, viga, zapata).

**Distribución por categoría:**

- arquitectura: 2
- construccion: 3
- ingenieria-basica: 2
- maquinaria-pesada: 3
- glosario-y-guias: 0 posts (10 entradas de glosario)

## Meta

- **30 posts publicados** y **30 entradas de glosario** antes de postular a AdSense.
- Distribución equilibrada: 6 posts × 5 categorías mínimo.
- Cadencia sostenida demostrable: 2 posts/semana por 10 semanas.

## Backlog priorizado — los próximos 20 posts

### Tanda A — pillars y huecos del arranque (10 posts)

| # | Slug propuesto | Categoría | Formato | Prioridad |
|---|----------------|-----------|---------|-----------|
| 11 | `tipos-de-maquinaria-pesada-en-construccion` | maquinaria-pesada | guia | alta (pillar) |
| 12 | `tipos-de-estructuras-en-construccion` | ingenieria-basica | guia | alta (pillar) |
| 13 | `bulldozer-vs-motoniveladora` | maquinaria-pesada | comparativa | media |
| 14 | `que-es-una-zapata-de-cimentacion` | construccion | concepto | alta |
| 15 | `que-es-un-encofrado-y-tipos` | construccion | concepto | alta |
| 16 | `diferencia-entre-arquitectura-y-construccion` | arquitectura | comparativa | alta |
| 17 | `que-es-bim-en-construccion` | arquitectura | concepto | alta |
| 18 | `que-es-la-resistencia-del-hormigon-fc` | ingenieria-basica | concepto | alta |
| 19 | `mantenimiento-basico-de-maquinaria-pesada` | maquinaria-pesada | guia | media |
| 20 | `glosario-tecnico-construccion-30-terminos` | glosario-y-guias | glosario | alta (pillar) |

### Tanda B — comparativas y "cómo se" (10 posts)

| # | Slug propuesto | Categoría | Formato | Search intent |
|---|----------------|-----------|---------|---------------|
| 21 | `diferencia-entre-arquitecto-e-ingeniero-civil` | arquitectura | comparativa | informacional |
| 22 | `tipos-de-hormigon-y-para-que-sirve-cada-uno` | construccion | guia | informacional |
| 23 | `que-es-un-pilote-y-cuando-se-usa` | construccion | concepto | informacional |
| 24 | `como-leer-un-plano-arquitectonico` | arquitectura | tutorial | how-to |
| 25 | `tipos-de-gruas-en-construccion` | maquinaria-pesada | guia | informacional |
| 26 | `que-es-el-cemento-portland` | construccion | concepto | informacional |
| 27 | `diferencia-entre-obra-gruesa-y-obra-fina` | construccion | comparativa | informacional |
| 28 | `tipos-de-cubierta-de-techo` | arquitectura | guia | informacional |
| 29 | `que-es-replanteo-en-obra` | construccion | concepto | informacional |
| 30 | `diferencia-entre-vigueta-y-losa-prefabricada` | ingenieria-basica | comparativa | informacional |

## Cadencia (10 semanas)

| Semana | Posts | Acumulado |
|--------|-------|-----------|
| 1 (semana del 2026-05-26) | 11, 12, 14 | 13 |
| 2 | 15, 17, 18 | 16 |
| 3 | 16, 20 (glosario expandido) | 18 |
| 4 | 13, 19 | 20 |
| 5 | 21, 22 | 22 |
| 6 | 23, 24 | 24 |
| 7 | 25, 26 | 26 |
| 8 | 27, 28 | 28 |
| 9 | 29, 30 | 30 |
| 10 | Buffer / actualizar 2-3 posts viejos con cifras y FAQs | 30 |

A partir de la semana 10 → **postular a AdSense**.

## Criterios de calidad por post (no negociables)

Cada post debe cumplir, antes de marcarse `draft: false`:

- [ ] `title` entre 10 y 80 caracteres, con la keyword principal.
- [ ] `description` entre 50 y 180 caracteres, atractiva, con keyword.
- [ ] **Mínimo 1500 palabras** en el cuerpo (los AdSense friendly van entre 1500 y 3000).
- [ ] **3 a 6 FAQs** al final con respuestas reales (alimentan el JSON-LD FAQPage).
- [ ] **3 a 5 fuentes** verificables en `sources` (manual, normativa, libro o sitio oficial).
- [ ] `related: [...]` con 2-3 slugs de otros posts del sitio (interlinking).
- [ ] `tags` 3-5 (no más, ruido SEO).
- [ ] `aiAssisted` declarado con honestidad.
- [ ] `reviewedBy: jean-paul` (o autor que corresponda).
- [ ] Cover (`image:`) en 1600×900 o equivalente cuando se consiga el banco de imágenes.

## Lo que activa AdSense (prerrequisitos antes de aplicar)

- [x] Schema editorial tipado (zod).
- [x] BaseHead con SEO completo (canonical, og, twitter, robots).
- [x] Sitemap funcionando (`/sitemap-index.xml`).
- [x] Páginas legales: privacidad, contacto, términos, política IA.
- [x] Banner de cookies con Google Consent Mode v2.
- [ ] `/public/og-default.png` 1200×630 con branding (tarea #6).
- [ ] 30 posts publicados con criterios de calidad cumplidos.
- [ ] Tráfico orgánico mínimo: idealmente >100 visitas/día por 2 semanas.
- [ ] Dominio propio activo y SSL: `nexomundial.com` (ya configurado).
- [ ] No publicar contenido en otros idiomas que rompa el `lang: es`.

## Tracking interno

Marcar progreso en este archivo a medida que cada post se publica.
Actualizar la tabla de estado actual al inicio del documento cuando se
crucen los hitos de 15, 20, 25 y 30 posts.

## Lo que NO hacer

- No publicar posts cortos (<800 palabras) — Google los lee como thin content.
- No copiar contenido de Wikipedia, manuales u otros sitios. Reescribir SIEMPRE.
- No publicar sin revisión humana, ni siquiera cuando `aiAssisted: true`.
- No mezclar idiomas en un mismo artículo.
- No usar imágenes con derechos sin atribución o licencia clara.
- No aplicar a AdSense con menos de 25 posts evergreen ni sin tráfico real.
