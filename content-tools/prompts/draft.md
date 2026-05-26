# Prompt — Redactar borrador de artículo

A partir del siguiente outline, escribe el artículo completo para Nexo Mundial.

## Outline

{{outline}}

## Requisitos

- **Longitud:** 1200-2000 palabras según el tema (más para guías pilar, menos
  para conceptos puntuales).
- **Frontmatter completo** según el schema de Nexo Mundial (ver más abajo).
- **Sigue el outline** pero puedes ajustar subtítulos si mejoras la lectura.
- **No escribas conclusión genérica.** Si cierras, que sea con un punto
  accionable o un puente al siguiente tema.
- **Marca `[VERIFICAR: ...]`** cualquier dato técnico que no tengas con
  certeza absoluta.
- **`aiAssisted: true`** siempre. **`draft: true`** siempre. **`reviewedBy`
  vacío** (lo añade el editor humano).

## Frontmatter requerido

```yaml
---
title: "..."                           # 50-65 caracteres
published: YYYY-MM-DD                  # fecha de hoy
draft: true                            # SIEMPRE true en borradores
description: "..."                     # 140-160 caracteres
category: arquitectura | construccion | maquinaria-pesada | ingenieria-basica | glosario-y-guias
tags: [...]                            # 2-5 tags en kebab-case
formato: guia | concepto | comparativa | resumen | tutorial
nivel: basico | intermedio | avanzado
author: jean-paul                      # placeholder, lo confirma el editor
aiAssisted: true
faq:
  - q: "..."
    a: "..."
sources: []                            # vacío salvo que tengas fuente cierta
related: []                            # lo completa el editor
---
```

## Estilo

- Empieza directo. Primera frase debe responder o adelantar la respuesta a la
  intención de búsqueda.
- Un H1 (igual al título del frontmatter), H2 para secciones principales.
- Párrafos cortos. Listas solo cuando enumeran de verdad.
- Negrita en términos técnicos clave la primera vez que aparecen.
- Si hay un dato comparativo, **usa una tabla Markdown**.
- Si hay riesgo de seguridad, **incluye un bloque `:::warning`**.

## Salida

Devuelve solamente el archivo Markdown completo (frontmatter + cuerpo). Nada más.
