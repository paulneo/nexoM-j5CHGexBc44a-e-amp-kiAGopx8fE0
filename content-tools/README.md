# Nexo Mundial — Flujo editorial con IA

Este directorio es el "back-office" del blog. Aquí viven los briefs (temas a redactar)
y los prompts de IA. Está fuera de `src/` porque no se publica: es solo herramienta de
producción.

## Estructura

```
content-tools/
  briefs/        Outlines y temas pendientes (uno por sprint o mes)
  prompts/       Prompts versionados para la IA
```

## Flujo editorial completo

```
┌──────────────────────────────────────────────────────────────────────┐
│ 1. Idear         briefs/2026-05.md   (humano)                        │
│                  Lista 10–20 temas con keywords e intent              │
├──────────────────────────────────────────────────────────────────────┤
│ 2. Outline       npm run ai:outline -- "tipos de cimentacion"        │
│                  → content-tools/briefs/outlines/<slug>.md            │
│                  Humano revisa y aprueba                              │
├──────────────────────────────────────────────────────────────────────┤
│ 3. Borrador      npm run ai:draft -- outlines/<slug>.md              │
│                  → src/content/drafts/<slug>.md (draft: true)         │
│                  NUNCA va a /posts/ automáticamente                   │
├──────────────────────────────────────────────────────────────────────┤
│ 4. Revisión      Humano: leer, corregir, fact-check, añadir           │
│                  experiencia propia, fuentes, imágenes                │
├──────────────────────────────────────────────────────────────────────┤
│ 5. Meta SEO      npm run ai:meta -- src/content/drafts/<slug>.md     │
│                  → propone title/description/FAQ/related              │
│                  Humano aprueba                                       │
├──────────────────────────────────────────────────────────────────────┤
│ 6. Promover      npm run promote -- <slug>                           │
│                  Mueve drafts/ → posts/, valida frontmatter, draft:false │
├──────────────────────────────────────────────────────────────────────┤
│ 7. Publicar      git commit + push → Vercel deploy                    │
└──────────────────────────────────────────────────────────────────────┘
```

## Reglas que la IA NO puede violar

1. La IA **no publica**. Siempre escribe a `src/content/drafts/`, nunca a `posts/`.
2. La IA **no inventa fuentes**. Si no tiene fuente, lo dice.
3. La IA **no inventa cifras técnicas** (resistencias, dimensiones, normativas).
   Si no las tiene, deja un `[VERIFICAR]` para que el humano lo complete.
4. Todo borrador IA llega con `aiAssisted: true` en el frontmatter.
5. Para promoverlo a `posts/`, debe tener `reviewedBy` apuntando a un autor real.

## Variables de entorno

Crear `.env` en la raíz (ver `.env.example`):

```
ANTHROPIC_API_KEY=sk-ant-...
```
