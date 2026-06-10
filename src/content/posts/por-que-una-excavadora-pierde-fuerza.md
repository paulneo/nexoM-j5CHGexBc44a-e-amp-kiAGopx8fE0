---
title: "Por qué una excavadora pierde fuerza: 8 causas hidráulicas"
published: 2026-06-11
updatedAt: 2026-06-11
draft: true
featured: false
description: "Una excavadora que pierde fuerza al cargar es síntoma de 8 problemas hidráulicos posibles. Te los ordenamos por probabilidad y costo: del más barato al más caro."
category: maquinaria-pesada
formato: guia
nivel: intermedio
tags:
  - troubleshooting
  - excavadora
  - perdida-de-fuerza
  - diagnostico
  - hidraulica
image: /images/posts/por-que-una-excavadora-pierde-fuerza.webp
author: jean-paul
reviewedBy: jean-paul
aiAssisted: true
faq:
  - q: "¿Por qué la pluma sube vacía bien pero con peso se queda?"
    a: "Es el síntoma clásico de FUGA INTERNA — generalmente en sellos del pistón del cilindro de la pluma. Sin carga, la bomba entrega caudal suficiente para vencer la mínima resistencia y mover el pistón. Con carga, la presión sube y el aceite empieza a pasar por la fuga interna (de un lado del pistón al otro) en vez de empujarlo. Te quedás colgado. El diagnóstico definitivo es con prueba de presión — el cilindro se prueba 'embotellado' (bloqueado mecánicamente) y se mide cuánta presión retiene. Si cae rápido, sellos rotos."
  - q: "¿Cómo sé si el problema es el motor diésel o el sistema hidráulico?"
    a: "Hay 3 indicadores. UNO: revisá si el motor pierde RPM bajo carga. Si la excavadora 'apaga' o tiembla cuando subís pluma con peso, el motor puede estar débil. SI mantiene RPM normal pero la pluma se queda, es 100% hidráulico. DOS: la temperatura del aceite hidráulico — si sube anormalmente (>80°C), hay fugas internas generando calor. TRES: el caudal en pruebas con manómetro. Si el motor está OK pero el caudal cae, es la bomba hidráulica. La prueba definitiva la hace un mecánico con manómetro conectado a la lumbrera correcta."
  - q: "¿Cuánto tiempo puedo seguir operando con la excavadora con pérdida de fuerza?"
    a: "Depende de la causa. Si es ACEITE VIEJO o FILTRO SATURADO, podés operar normalmente 1-2 semanas mientras programás el cambio. Si es FUGA INTERNA EN BOMBA, cada hora extra acelera el daño — el desgaste se acelera porque la bomba trabaja más para compensar la pérdida. Si es FUGA INTERNA EN CILINDRO, podés operar pero con riesgo de seguridad (la pluma cargada cae sola). En general: cualquier pérdida de fuerza progresiva (peor cada día) = parar y diagnosticar. Pérdida estable que no empeora = operar 1-2 semanas mientras programás reparación."
  - q: "¿La válvula de seguridad principal se puede ajustar uno mismo?"
    a: "NO. La válvula de seguridad principal (VSP) de una JCB JS330 está fijada de fábrica a 343 bar máximo. Subirla manualmente parece atractivo si la máquina pierde fuerza, pero aumenta riesgo de rotura catastrófica de mangueras, cilindros o la bomba misma. Además, si la presión cae bajo 319 bar (el valor 'fijada' del manual), eso ya es síntoma de problema interno — no se arregla subiendo el setting, hay que diagnosticar y reparar la causa. El ajuste de VSP es trabajo de taller con manómetro calibrado y conocimiento del valor exacto."
sources:
  - title: "Service Manual JS330 - Sección E - Localización de averías"
    author: "JCB Service"
    year: 2004
related:
  - como-detectar-fugas-hidraulicas-en-una-excavadora
  - filtros-hidraulicos-excavadora-tipos-cambio
  - como-funciona-la-bomba-hidraulica-de-una-excavadora
  - aceite-hidraulico-excavadora-tipos-viscosidad
---

La pérdida de fuerza es **el síntoma más reportado** por operadores
de excavadora en obra. Algo cambió: la pluma cargada que antes subía
sin problema, ahora se queda colgada o sube lentísima. El cazo no
arranca como antes. Tirás de palancas y la máquina "no responde
igual". ¿Qué pasó?

Casi siempre es **un problema hidráulico**. El manual oficial JCB
dedica todo un capítulo a localización de averías por pérdida de
fuerza. Te paso las **8 causas reales** que cita, ordenadas por
probabilidad (de más común a menos común) y por costo de reparación
(del más barato al más caro). Para diagnóstico real en obra, este es
el orden lógico de revisión.

## Las 8 causas en orden

### 1. Aceite hidráulico contaminado o degradado (la más común)

**Probabilidad**: muy alta (40-50% de los casos).
**Síntoma**: pérdida gradual de fuerza en semanas. Movimientos un
poco más lentos cada día.
**Por qué**: el aceite contaminado raya superficies internas de bomba
y cilindros. Las microralladuras causan **fugas internas
progresivas**. La capacidad del sistema baja un 1-2% cada semana
hasta volverse notable.
**Costo**: cambio de aceite completo + filtros = **USD 600-900** (set
JS330).
**Diagnóstico**: ¿cuándo cambiaste el aceite por última vez? Si fue
hace >2.000 horas o más de un año, empezá por acá. [Detalle completo
en el post de aceite
hidráulico](/posts/aceite-hidraulico-excavadora-tipos-viscosidad/).

### 2. Filtros saturados

**Probabilidad**: alta (15-20%).
**Síntoma**: pérdida brusca después de mucho uso continuo. El
indicador del filtro en rojo (válvula bypass abierta).
**Por qué**: filtro tapado = aceite no fluye normalmente. La bomba
no recibe caudal suficiente para mantener presión.
**Costo**: cambio del filtro principal + Plexus = **USD 200-400**.
**Diagnóstico**: mirar el indicador del filtro principal. Si está en
rojo, problema encontrado. [Detalle en el post de filtros
hidráulicos](/posts/filtros-hidraulicos-excavadora-tipos-cambio/).

### 3. Aceite con viscosidad incorrecta

**Probabilidad**: media-baja (5-8%).
**Síntoma**: la máquina arranca lenta y "calienta" — después de 30
min de operación recupera algo de fuerza pero nunca llega al máximo.
**Por qué**: si el aceite es demasiado viscoso (ej. ISO VG 68 en
zona templada), la bomba lucha contra la viscosidad. Si es muy
fluido (ISO VG 32 en zona caliente), hay fugas internas excesivas.
**Costo**: cambio de aceite al grado correcto = **USD 600-900**.
**Diagnóstico**: comparar el grado del aceite usado vs el del manual
(ISO VG 46 estándar para JCB JS330 en clima Latam normal).

### 4. Fuga externa significativa de aceite

**Probabilidad**: media (5-10%).
**Síntoma**: nivel del depósito bajo. Manchas de aceite alrededor de
la máquina.
**Por qué**: sin caudal suficiente, la bomba cavita (mezcla aire) y
pierde rendimiento.
**Costo**: reparación según fuga, **USD 50-500** (cambio de manguera,
sellos, conexiones). [Detalle en el post de detectar
fugas](/posts/como-detectar-fugas-hidraulicas-en-una-excavadora/).
**Diagnóstico**: nivel del depósito + inspección visual sistemática.

### 5. Válvula de control principal desgastada

**Probabilidad**: media-baja (5-7%).
**Síntoma**: pérdida de fuerza en **un movimiento específico** (solo
pluma, o solo balancín). El resto funciona normal.
**Por qué**: cada movimiento tiene su propio carrete en la válvula
principal. Si UN carrete está desgastado o agarrotado, ese
movimiento pierde fuerza, los otros no.
**Costo**: limpieza y revisión carrete = **USD 300-600**. Reemplazo
de válvula completa = **USD 2.000-4.000**.
**Diagnóstico**: probar cada movimiento por separado y ver cuál falla.

### 6. Fuga interna en cilindro hidráulico

**Probabilidad**: media-baja (5-7%).
**Síntoma**: el síntoma CLÁSICO — "la pluma vacía sube bien pero con
peso se queda". O la pluma cargada **baja sola** cuando soltás la
palanca.
**Por qué**: sellos del pistón del cilindro rotos. El aceite pasa de
un lado al otro del pistón internamente.
**Costo**: cambio de sellos de cilindro = **USD 200-500**. Cilindro
completo nuevo = **USD 3.000-8.000**. [Detalle en el post de
cilindros hidráulicos](/posts/cilindros-hidraulicos-excavadora-pluma-balancin-cazo/).
**Diagnóstico**: prueba de presión específica del cilindro
sospechoso.

### 7. Fuga interna en bomba hidráulica

**Probabilidad**: baja (3-5%).
**Síntoma**: pérdida de fuerza **en TODOS los movimientos**
simultáneamente. La máquina entera está más débil.
**Por qué**: la bomba tiene fugas internas (placa oblicua rayada,
pistones desgastados). Entrega menos caudal del especificado.
**Costo**: reparación de bomba = **USD 1.500-3.500**. Bomba nueva
JCB original = **USD 8.000-15.000**. [Detalle en el post de bomba
hidráulica](/posts/como-funciona-la-bomba-hidraulica-de-una-excavadora/).
**Diagnóstico**: prueba de caudal con manómetro de flujo. Trabajo de
taller especializado.

### 8. Válvula de seguridad principal mal calibrada

**Probabilidad**: baja (2-3%).
**Síntoma**: pérdida súbita después de algún trabajo de
mantenimiento o reparación previa. El sistema completo pierde
presión.
**Por qué**: la VSP está fijada a 343 bar en la JS330. Si alguien
la aflojó o se desajustó por vibración, la presión máxima cae y la
máquina pierde fuerza proporcionalmente.
**Costo**: re-calibración con manómetro = **USD 100-200**.
**Diagnóstico**: prueba de presión en la lumbrera específica
indicada en el manual. NUNCA ajustar uno mismo (ver FAQ #4).

## El árbol de decisión simple

Para diagnóstico rápido en obra:

```
¿La pérdida es...
  ├── EN UN SOLO movimiento?
  │      → causa #5 (válvula) o #6 (cilindro específico)
  │
  ├── EN TODOS los movimientos, GRADUAL semanas?
  │      → causa #1 (aceite) o #2 (filtros)
  │
  ├── EN TODOS los movimientos, BRUSCA?
  │      → causa #4 (fuga externa) o #8 (VSP)
  │
  └── EN TODOS los movimientos, GRADUAL meses?
         → causa #7 (bomba en degradación)
```

## Pruebas que se pueden hacer en obra

Sin herramientas especializadas, en obra mismo:

**1. Test del nivel**: revisar nivel del depósito en frío. ¿Bajó? →
causa #4.

**2. Test del indicador del filtro**: mirar color del indicador. ¿En
rojo? → causa #2.

**3. Test de movimientos aislados**: operar UNO a la vez (solo pluma,
solo balancín, solo cazo). Detectar cuál pierde fuerza.

**4. Test de retención**: levantar pluma cargada, soltar palanca,
cronometrar cuánto tiempo se mantiene. Una excavadora sana mantiene
posición indefinidamente. Si baja 5 cm en 30 segundos → fuga interna
del cilindro (causa #6).

**5. Test de temperatura**: tocar el cuerpo de bomba y cilindros
después de 30 min de operación. Si están más calientes de lo normal
(>60°C al tacto, casi quemante), hay fricción interna anormal.

Si después de estos 5 tests no encontrás causa clara, hay que ir al
taller con manómetros calibrados.

## Cuándo es urgente parar (y cuándo no)

| Síntoma | Acción |
|---|---|
| Pluma cargada cae sola sin tocar palanca | **PARAR YA** (peligro de aplastamiento) |
| Indicador filtro en rojo | Cambiar filtro en 1-3 días |
| Pérdida brusca con ruido raro en bomba | **PARAR YA** (riesgo de daño total bomba) |
| Pérdida gradual sin ruidos | Programar mantenimiento en 1-2 semanas |
| Aceite muy oscuro o lechoso | Cambiar aceite + filtros en próximos días |
| Movimientos lentos pero estables | Operar normal + cambio preventivo programado |

## Costo total estimado por causa (Latam 2026)

Resumen económico para tomar decisión informada:

| Causa | Costo USD | Tiempo de reparación |
|---|---|---|
| 1. Aceite contaminado | 600-900 | 4-8 horas |
| 2. Filtros saturados | 200-400 | 2-4 horas |
| 3. Viscosidad incorrecta | 600-900 | 4-8 horas |
| 4. Fuga externa | 50-500 | 2-12 horas |
| 5. Válvula desgastada | 300-4.000 | 1-3 días |
| 6. Fuga interna cilindro | 200-8.000 | 1-2 días |
| 7. Bomba dañada | 1.500-15.000 | 2-5 días |
| 8. VSP descalibrada | 100-200 | 2-4 horas |

Tenelo a mano cuando un mecánico te dé presupuesto — sirve para saber
si lo que te cobran está en rango razonable.

## En resumen

Una excavadora que pierde fuerza tiene 8 causas hidráulicas posibles.
El 65-70% de los casos son las 2 primeras: **aceite contaminado y
filtros saturados**. Ambas son baratas de resolver (USD 200-900) y
fáciles de diagnosticar sin herramientas especializadas.

El diagnóstico ordenado salva plata. Empezá siempre por lo barato
(nivel, filtro, aceite) antes que asumir que se rompió la bomba (el
diagnóstico más caro). El árbol de decisión funciona: ¿afecta un
movimiento o todos? ¿gradual o brusco? Esas 2 preguntas filtran 80%
de las posibilidades.

Y la regla universal: **pérdida de fuerza progresiva = causa
progresiva**. Si esperás, empeora. Diagnosticar y reparar tempranos
es siempre 5-10 veces más barato que reparar la falla final en
cascada.

---

*Datos técnicos del **Manual de Servicio JCB JS330, Sección E -
Localización de averías - Pruebas de localización de averías**
(Publicación 9803/6543-1, JCB Service, 2004). Séptimo post de la
serie de hidráulica de excavadoras. Para profundizar en cada causa,
ya escribimos posts dedicados sobre [aceite](/posts/aceite-hidraulico-excavadora-tipos-viscosidad/),
[filtros](/posts/filtros-hidraulicos-excavadora-tipos-cambio/),
[bomba](/posts/como-funciona-la-bomba-hidraulica-de-una-excavadora/),
[cilindros](/posts/cilindros-hidraulicos-excavadora-pluma-balancin-cazo/) y
[detección de fugas](/posts/como-detectar-fugas-hidraulicas-en-una-excavadora/).*
