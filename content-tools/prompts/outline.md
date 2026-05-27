# Prompt — Generar outline de artículo

Genera un outline detallado para un artículo de Nexo Mundial sobre el tema:

**TEMA:** {{tema}}

## Devuelve un Markdown con esta estructura exacta

```markdown
# Outline: {{tema}}

## Search intent
[Una línea: qué busca el usuario que escribe esto en Google]

## Keyword principal
[1 keyword]

## Keywords secundarias
- [3-5 long-tails relacionadas]

## Categoría sugerida
[arquitectura | construccion | maquinaria-pesada | ingenieria-basica | glosario-y-guias]

## Formato
[guia | concepto | comparativa | resumen | tutorial]

## Nivel
[basico | intermedio | avanzado]

## Audiencia
[Una línea]

## Ángulo único
[Qué hace que este artículo sea mejor que los 3 primeros resultados de Google. Una idea concreta, no genérica.]

## Estructura propuesta (H2)

1. **[Título H2]** — [qué cubre, 1 línea]
2. **[Título H2]** — [...]
3. **[Título H2]** — [...]
   ...

## FAQs sugeridas (3-5)

- ¿…?
- ¿…?
- ¿…?

## Posts internos a enlazar (sugerencias)

- [slug-tentativo-1]: [por qué tiene sentido enlazarlo]
- [slug-tentativo-2]: [...]

## Datos / cifras que el editor humano debe verificar

- [Cosa concreta a chequear, p. ej. "resistencia mínima del hormigón estructural según norma local"]
- [...]

## Slug propuesto

[slug-en-kebab-case]
```

Sé específico. Un outline malo produce un artículo malo. Si el tema es ambiguo,
genera el outline para la interpretación más buscada en Google.
