---
title: Qué es la resistencia del hormigón (f'c)
published: 2026-05-26
updatedAt: 2026-05-26
draft: false
featured: false
description: f'c es la resistencia característica del hormigón a compresión a 28 días. Qué significa, cómo se mide, qué valores se usan y qué factores la afectan en obra.
category: ingenieria-basica
formato: concepto
nivel: basico
tags:
  - hormigon
  - ensayos
  - resistencia
image: /images/posts/que-es-la-resistencia-del-hormigon-fc.webp
author: jean-paul
aiAssisted: true
faq:
  - q: ¿Cuál es la diferencia entre f'c y fck?
    a: Son notaciones distintas para el mismo concepto. f'c es la convención americana (ACI), basada en probetas cilíndricas. fck es la convención europea (Eurocódigo), también sobre cilindros estándar. Algunas normas europeas también dan resistencia sobre probeta cúbica (fck,cube). Para un mismo hormigón, la resistencia cúbica es aproximadamente 1.25 veces la cilíndrica.
  - q: ¿En qué unidades se expresa f'c?
    a: En kg/cm² (sistema tradicional latinoamericano) o en MPa (sistema internacional SI). La conversión aproximada es 1 MPa ≈ 10.2 kg/cm². Un hormigón H21 en sistema SI equivale a 210 kg/cm² en sistema tradicional. Los planos modernos en Latam suelen indicar las dos.
  - q: ¿Por qué se mide a los 28 días?
    a: Porque a los 28 días el hormigón ha desarrollado entre el 85% y el 95% de su resistencia final, y porque ese plazo es lo suficientemente corto como para tomar decisiones de obra y suficientemente largo como para que el resultado sea representativo. La resistencia sigue creciendo lentamente después, pero el aporte adicional ya no se considera en el cálculo estructural.
  - q: ¿Qué valor de f'c se usa para una casa común?
    a: Para vivienda unifamiliar de uno o dos pisos suele bastar f'c = 210 kg/cm² (21 MPa) para columnas y vigas, y 175 kg/cm² (17.5 MPa) para zapatas y elementos secundarios. En edificios de más pisos o zonas sísmicas se usan 280 kg/cm² (28 MPa) en estructura y hasta 350 kg/cm² (35 MPa) en elementos críticos. Lo define el cálculo estructural, no la costumbre del barrio.
  - q: ¿Qué pasa si el hormigón no alcanza la resistencia especificada?
    a: El ingeniero estructural debe evaluar si el déficit compromete la seguridad. Las opciones van desde aceptar el elemento (si la diferencia es pequeña y hay margen en el cálculo), reforzarlo (fibras de carbono, perfiles externos) o demolerlo y rehacerlo. Aceptar un hormigón fuera de especificación sin verificación es ilegal en obras formales y peligroso siempre.
sources:
  - title: Tecnología del concreto
    author: Adam M. Neville
  - title: ACI 318 — Requisitos de Reglamento para Concreto Estructural
    author: American Concrete Institute
  - title: Eurocódigo 2 — Proyecto de estructuras de hormigón
    author: Comité Europeo de Normalización
related:
  - que-es-el-hormigon-armado
  - como-se-calcula-el-cubicaje-de-hormigon
  - tipos-de-estructuras-en-construccion
reviewedBy: jean-paul
---

La **resistencia del hormigón** — escrita como **f'c** en la convención
americana o **fck** en la europea — es la propiedad que define cuánta
compresión puede soportar el material antes de fallar. Es el dato más
importante del hormigón en cualquier proyecto estructural y aparece en
todos los planos: H21, H25, H30, H35... cada uno indica un valor
distinto de resistencia.

Entender qué significa ese número, cómo se obtiene y qué lo afecta es
fundamental para cualquier persona involucrada en obra, incluso si no
es quien dosifica el hormigón.

## Qué significa f'c exactamente

f'c es la **resistencia característica a compresión** del hormigón
medida sobre probetas estándar (cilindros de 15 cm de diámetro por 30
cm de altura en la norma ACI; cilindros 15×30 o cubos 15×15×15 en
Eurocódigo) **a los 28 días de edad**.

Dos conceptos importantes en esa definición:

- **Característica**: no es el promedio, es un valor estadístico
  garantizado. Concretamente, es el valor que el 95% de las muestras
  debe superar. Esto deja margen para variabilidad natural del material
  sin que el lote completo se rechace.
- **A compresión**: el hormigón resiste bien la compresión y muy mal la
  tracción. Por eso se combina con acero (armadura) en el hormigón
  armado. f'c describe solo la parte de compresión.

## Unidades y notaciones

| Notación | Sistema | Unidad | Origen |
|---|---|---|---|
| f'c | Americano (ACI) | kg/cm² o MPa | Probetas cilíndricas |
| fck | Europeo (Eurocódigo) | MPa | Probetas cilíndricas |
| fck,cube | Europeo | MPa | Probetas cúbicas |
| H + número | Latam | kg/cm² o MPa | Designación comercial |

**Conversión rápida**: 1 MPa equivale aproximadamente a 10.2 kg/cm².
En obra se usa el redondeo a 10 para cálculos rápidos:

- H17 = 175 kg/cm² ≈ 17 MPa
- H21 = 210 kg/cm² ≈ 21 MPa
- H25 = 245 kg/cm² ≈ 24.5 MPa
- H28 = 280 kg/cm² ≈ 28 MPa
- H35 = 350 kg/cm² ≈ 35 MPa

La resistencia cúbica es aproximadamente **1.25 veces la cilíndrica**.
Por eso un mismo hormigón se etiqueta C25/30 en Europa: 25 MPa cilíndrica,
30 MPa cúbica.

## Valores típicos por elemento

No todos los elementos del mismo edificio usan el mismo hormigón. La
selección depende del tipo de carga y de la exposición ambiental:

| Elemento / uso | f'c típico |
|---|---|
| Hormigón de limpieza (pobre) | 140 kg/cm² (14 MPa) |
| Zapatas y elementos secundarios | 175-210 kg/cm² |
| Columnas y vigas, vivienda común | 210 kg/cm² (21 MPa) |
| Columnas y vigas, edificios medianos | 280 kg/cm² (28 MPa) |
| Núcleos y columnas, edificios altos | 350-420 kg/cm² (35-42 MPa) |
| Hormigones especiales (de alta performance) | 500-800 kg/cm² (50-80 MPa) |

Estos son **órdenes de magnitud habituales**. El valor exacto lo define
el cálculo estructural según las cargas, la exposición ambiental y la
normativa local.

## Cómo se mide f'c

La medición sigue un procedimiento estandarizado:

1. **Toma de muestra**: durante el hormigonado se toma una muestra del
   camión que llega a obra (o del mezclado).
2. **Llenado de probetas**: se llenan moldes cilíndricos o cúbicos en
   capas, compactando con varilla o vibrador, según la norma.
3. **Curado**: las probetas se mantienen en condiciones controladas
   (temperatura, humedad) durante 28 días.
4. **Rotura**: una prensa hidráulica aplica carga creciente sobre la
   probeta hasta que falla. La carga máxima dividida por el área de
   la sección da la resistencia.
5. **Reporte**: el laboratorio emite un certificado con los resultados
   y los compara con el f'c especificado.

Es habitual romper algunas probetas antes (3, 7, 14 días) para
monitorear cómo evoluciona la resistencia. A los 7 días suele tenerse
el 65-75% de la resistencia de 28 días.

## Factores que afectan la resistencia

La resistencia del hormigón depende de muchos factores, y la mayoría
están bajo control humano:

### Relación agua / cemento (a/c)

Es el factor **más importante**. Cuanto menos agua use el hormigón
para una cantidad dada de cemento, mayor resistencia. La relación a/c
típica está entre 0.40 y 0.60: por debajo de 0.40 es difícil de
trabajar; por encima de 0.60 la resistencia cae rápidamente.

### Calidad y proporción de agregados

Agregados limpios, bien graduados y de buena dureza dan hormigones más
resistentes. Agregados con arcilla, limo o material orgánico debilitan
el hormigón.

### Tipo de cemento

Cementos de alta resistencia inicial (tipo I-HE en ASTM, CEM I 52.5 N
en EN 197) producen hormigones más resistentes en menos tiempo, a
mayor costo.

### Curado

El curado es **clave** y se subestima en obra. Mantener el hormigón
húmedo durante los primeros 7 días puede aumentar la resistencia
final en un 20-30% respecto del mismo hormigón mal curado. Lo
contrario también es cierto: un hormigón excelente puede quedar muy
por debajo de lo esperado si se cura mal.

### Temperatura ambiente

Bajas temperaturas (<5°C) detienen la hidratación. Altas temperaturas
(>30°C) aceleran el fraguado pero pueden generar fisuras por
contracción. Las plantas modernas adaptan la dosificación a la
temperatura del día.

:::warning
Recibir hormigón sin **certificado de la planta** ni control en obra
es jugar a ciegas. El camión puede llegar con menos cemento del
solicitado, más agua de la admisible o agregados de mala calidad. Las
probetas son baratas comparadas con un elemento estructural que falla.
Toda obra formal debe romper probetas de cada vertido importante.
:::

## En resumen

f'c (o fck) es la resistencia característica del hormigón a compresión
a 28 días, medida sobre probetas estándar. Se expresa en kg/cm² o en
MPa según la región. Para una vivienda común se usan 175-210 kg/cm²;
edificios medianos llegan a 280 kg/cm²; obras especiales superan
350 kg/cm². El valor exacto lo define el cálculo estructural, no la
costumbre.

La resistencia real que se logra en obra depende de la relación
agua/cemento, los agregados, el cemento, el curado y la temperatura.
Cualquier obra seria mide su hormigón con probetas y compara contra el
certificado de la planta. Lo que sale del camión no siempre es lo que
se firmó.

Para profundizar leé sobre el [hormigón armado](/posts/que-es-el-hormigon-armado/),
[cómo se calcula el cubicaje](/posts/como-se-calcula-el-cubicaje-de-hormigon/)
para pedirle a la planta, o los [tipos de estructuras](/posts/tipos-de-estructuras-en-construccion/)
que usan distintos f'c según su solicitación.
