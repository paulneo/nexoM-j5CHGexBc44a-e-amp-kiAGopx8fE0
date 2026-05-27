---
title: Qué es BIM en construcción y por qué importa
published: 2026-05-26
updatedAt: 2026-05-26
draft: false
featured: false
description: 'BIM es mucho más que un modelo 3D: es una metodología que coordina diseño, costos, plazos y operación de un edificio en un mismo modelo digital.'
category: arquitectura
formato: concepto
nivel: basico
tags:
  - bim
  - software-construccion
  - arquitectura
image: /_uploads/que-es-bim-en-construccion.webp
author: jean-paul
aiAssisted: true
faq:
  - q: ¿Cuál es la diferencia entre BIM y CAD?
    a: 'CAD (Computer-Aided Design) es dibujo asistido por computadora: líneas, polígonos y planos sin información detrás. BIM (Building Information Modeling) es un modelo paramétrico donde cada elemento tiene datos asociados (material, costo, espesor, fabricante). Si en CAD una pared es una línea, en BIM es un objeto que sabe que es una pared con esa estructura, ese aislamiento y esa función.'
  - q: ¿Qué software se usa para BIM?
    a: Los más comunes son Autodesk Revit (estándar de facto en muchos países), Graphisoft ArchiCAD (popular en Europa y Latinoamérica), Bentley MicroStation/OpenBuildings, Allplan de Nemetschek y Tekla Structures para estructuras de acero. Para coordinación se usan Navisworks y Solibri; para modelado de instalaciones, Magicad o Linear.
  - q: ¿Es obligatorio usar BIM?
    a: 'En muchos países lo es para proyectos de obra pública. Reino Unido, Singapur, los países nórdicos, España y Chile entre otros, exigen BIM en proyectos públicos por encima de cierto monto. En el sector privado depende del cliente: las constructoras grandes y los desarrolladores serios suelen exigirlo, mientras que en obra pequeña sigue siendo opcional.'
  - q: ¿Para qué dimensiones de BIM (4D, 5D, 6D, 7D) sirven?
    a: '3D es el modelo geométrico. 4D agrega el tiempo: el modelo se asocia al cronograma y se puede simular la secuencia de obra. 5D suma costos: cambios en el modelo recalculan presupuesto. 6D incorpora sostenibilidad (energía, materiales). 7D es operación y mantenimiento del edificio una vez construido. En la práctica, los proyectos rara vez superan 5D.'
  - q: ¿Cuánto cuesta implementar BIM en una empresa pequeña?
    a: La licencia anual de Revit ronda los 2.500-3.000 USD por usuario; ArchiCAD es similar. A eso hay que sumar formación (cursos de 40-80 horas por persona), una computadora capaz de mover modelos pesados (>16 GB RAM, GPU dedicada) y un protocolo BIM interno. Para una empresa de 5 personas, la inversión inicial suele estar entre 20.000 y 40.000 USD, recuperable en 1-2 años si hay flujo constante de proyectos.
sources:
  - title: ISO 19650 — Organization and digitization of information about buildings
    author: International Organization for Standardization
  - title: BIM Handbook
    author: Chuck Eastman, Paul Teicholz, Rafael Sacks, Ghang Lee
  - title: Guía BIM para gestores públicos
    author: PlanBIM Chile, Ministerio de Vivienda y Urbanismo
related:
  - tipos-de-planos-arquitectonicos
  - que-es-un-plano-arquitectonico
  - tipos-de-estructuras-en-construccion
reviewedBy: jean-paul
---

**BIM** son las siglas de **Building Information Modeling** — Modelado
de Información de Construcción. Es una metodología (no un software) que
representa un edificio como un modelo digital donde cada elemento tiene
información asociada: geometría, materiales, costos, fabricantes,
relaciones con otros elementos.

Decir "BIM" y pensar en "un modelo 3D" es como decir "internet" y pensar
en "correo electrónico". El 3D es una parte, pero BIM es mucho más:
es una forma de coordinar diseño, presupuesto, plazos y operación de un
edificio sobre un mismo modelo vivo.

## La diferencia que importa: CAD vs BIM

En **CAD** dibujás líneas. Una pared es dos líneas paralelas con una
zona rellena en el medio. Si querés saber el área, medís con el cursor;
si querés saber el material, lo leés en una tabla aparte; si cambia el
proyecto, dibujás de nuevo.

En **BIM**, una pared es un objeto que **sabe que es una pared**. Sabe
su espesor, sus capas (mampuesto, aislamiento, revoque), su altura, su
material, su fabricante, su costo y a qué planta pertenece. Si la
cambiás en planta, cambia en alzado, en sección, en la tabla de
cantidades, en el presupuesto y en el cronograma — todo de forma
sincronizada.

Esa es la verdadera ventaja de BIM: una única fuente de verdad para
todos los actores del proyecto.

## Las dimensiones de BIM

Es habitual leer "BIM 4D, 5D, 6D, 7D". Cada dimensión agrega un tipo
de información al modelo:

| Dimensión | Qué agrega |
|---|---|
| **3D** | Geometría del edificio (lo visible). |
| **4D** | Tiempo: cronograma vinculado al modelo, secuencia de obra animada. |
| **5D** | Costos: cantidades del modelo conectadas a precios, presupuesto que se recalcula con cada cambio. |
| **6D** | Sostenibilidad: análisis energético, ciclo de vida, huella de carbono. |
| **7D** | Operación y mantenimiento (Facility Management): el modelo se entrega al operador del edificio. |

En la práctica, **la mayoría de proyectos opera entre 3D y 5D**. Las
dimensiones superiores son comunes en obra pública grande o en
proyectos con compromisos de sostenibilidad explícitos.

## Niveles de detalle (LOD)

No todo en el modelo está al mismo nivel de definición. Los **Levels
of Development** (LOD) son una escala de cuánta información tiene
cada elemento:

- **LOD 100**: símbolo o masa genérica. "Acá va una pared."
- **LOD 200**: geometría aproximada con datos básicos. "Pared de 20 cm
  de espesor."
- **LOD 300**: geometría definitiva, sin detalle constructivo. "Pared
  de mampostería confinada con bloque de 20 cm."
- **LOD 400**: lista para fabricación o construcción, con detalle
  completo. "Pared con cada bloque modelado, su mortero, sus armaduras
  de confinamiento."
- **LOD 500**: as-built, lo que realmente quedó construido (medido en
  obra).

Cada fase del proyecto requiere un LOD distinto: anteproyecto se mueve
en 100-200, proyecto ejecutivo en 300, fabricación e instalación en 400.

## Quién usa BIM y para qué

BIM no es solo una herramienta de arquitectos. Cada actor del proyecto
usa el modelo para algo distinto:

- **Arquitectos**: diseño, planos, visualizaciones, coordinación con
  cliente.
- **Ingenieros estructurales**: dimensionamiento, análisis de cargas,
  detallado de armaduras.
- **Ingenieros de instalaciones (MEP)**: trazado de redes eléctricas,
  hidráulicas, de aire acondicionado, sin choques con la estructura.
- **Constructora**: planificación de obra (4D), presupuesto (5D),
  control de avance, prefabricación.
- **Cliente / propietario**: visualización, decisiones informadas,
  recepción del modelo as-built para operar el edificio.
- **Facility Manager**: usa el modelo entregado para mantenimiento,
  reformas, gestión de espacios.

## Beneficios reales (no folleto comercial)

Los beneficios concretos que se miden en obras con BIM bien implementado:

- **Detección de interferencias antes de obra**: choques entre estructura
  e instalaciones se ven en pantalla, no cuando el plomero llega y no
  puede pasar el caño porque hay una viga en el medio.
- **Cantidades exactas**: las listas de materiales salen del modelo,
  no de mediciones manuales. Errores de presupuesto bajan.
- **Coordinación entre disciplinas**: arquitectura, estructura e
  instalaciones trabajan sobre el mismo archivo (o archivos federados).
  Los cambios se ven en tiempo real.
- **Documentación coherente**: si cambia el modelo, cambian los planos.
  Cero contradicciones entre vistas.
- **Prefabricación**: el modelo LOD 400 puede ir directo a fábrica para
  cortar acero, premoldear losas o armar instalaciones.

## Implementación realista en empresas pequeñas

Implementar BIM no es comprar Revit y abrirlo. Una transición razonable
en una empresa pequeña sigue estos pasos:

1. **Formación de un BIM Manager o referente interno** (alguien que
   entienda la metodología, no solo el software).
2. **Definición de estándares internos**: convenciones de nomenclatura,
   estructura de archivos, plantillas, librerías de componentes.
3. **Piloto en un proyecto pequeño**: aprender en una obra controlada
   antes de aplicar a un proyecto grande.
4. **Capacitación del equipo**: cursos formales más mentoría interna.
5. **Estandarización gradual**: incorporar BIM a todos los proyectos
   en un plazo de 1-2 años, no de un mes.

Saltarse pasos es la causa #1 de implementaciones fallidas: comprar
licencias, abrir el software y esperar resultados sin método produce
modelos malos, frustración y abandono.

:::tip
El error más común al "adoptar BIM" es tratarlo como un dibujo en 3D.
Si tu única tarea con Revit es producir los mismos planos 2D que hacías
antes en AutoCAD, gastaste el dinero y el tiempo sin obtener ninguno
de los beneficios reales. BIM exige cambiar **procesos**, no solo
herramientas.
:::

## En resumen

BIM es una metodología que representa un edificio como un modelo
digital con información asociada a cada elemento, no solo como un
dibujo. Sus dimensiones (3D geometría, 4D tiempo, 5D costo, 6D
sostenibilidad, 7D operación) cubren todo el ciclo de vida del
proyecto.

Bien implementado, mejora la coordinación, baja errores en obra,
acelera la documentación y permite prefabricación. Mal implementado
— como un AutoCAD caro — es una pérdida. La diferencia está en el
método, no en el software.

Si querés profundizar, leé sobre los [tipos de planos arquitectónicos](/posts/tipos-de-planos-arquitectonicos/)
que BIM genera de forma automática, o sobre [qué es un plano
arquitectónico](/posts/que-es-un-plano-arquitectonico/) que sigue siendo
el entregable final aún en flujos BIM.
