# Prompt — Generar metadata SEO de un artículo

Lee el artículo Markdown que se te pasa a continuación y devuelve **únicamente**
un bloque YAML con metadatos SEO sugeridos. No reescribas el artículo.

## Devuelve este YAML exacto

```yaml
title_options:
  - "..."   # 3 alternativas, 50-65 caracteres, con la keyword principal
  - "..."
  - "..."
description: "..."   # 140-160 caracteres, incluye keyword + beneficio
faq:
  - q: "..."
    a: "..."
  # 3-5 FAQs basadas en preguntas reales del tema
related_suggestions:
  - slug: "..."
    reason: "..."
  # 3-5 sugerencias de posts a enlazar (puedes proponer slugs nuevos)
internal_links:
  - anchor: "..."
    target_slug: "..."
  # 2-4 oportunidades de enlazar dentro del cuerpo a otros posts
ogImage_alt: "..."   # texto alt sugerido para la imagen OG
schema_extras:
  speakable: ["..."]   # selectores o secciones aptas para voice search (opcional)
```

## Reglas

- Los títulos alternativos deben ser **diferentes en ángulo**, no parafraseos
  triviales.
- La description debe vender el clic sin clickbait.
- Las FAQs deben corresponder a preguntas que un usuario realmente haría en
  Google sobre este tema (no inventadas para rellenar).
- `related_suggestions` puede sugerir slugs que aún no existen — son hints
  para futuros artículos.

## Artículo

{{article}}
