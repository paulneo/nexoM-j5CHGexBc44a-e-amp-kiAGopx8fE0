---
title: "Cómo funciona la bomba hidráulica de una excavadora"
published: 2026-06-07
updatedAt: 2026-06-07
draft: true
featured: false
description: "La bomba hidráulica es el corazón de toda excavadora. Cómo convierte la rotación del motor en presión de aceite, sus 3 tipos y por qué las máquinas serias usan pistones axiales."
category: maquinaria-pesada
formato: concepto
nivel: intermedio
tags:
  - bomba-hidraulica
  - pistones-axiales
  - excavadora
  - placa-oblicua
  - caudal-variable
image: /images/posts/como-funciona-la-bomba-hidraulica-de-una-excavadora.webp
author: jean-paul
reviewedBy: jean-paul
aiAssisted: true
faq:
  - q: "¿Por qué la bomba hidráulica tiene 'caudal variable'?"
    a: "Porque la excavadora necesita CANTIDADES DISTINTAS de aceite según la maniobra. Levantar la pluma vacía requiere poco caudal; moverla cargada con tierra requiere mucho más. Una bomba de caudal fijo siempre entrega el mismo aceite — desperdicio de energía cuando se necesita poco, falta cuando se necesita mucho. Una bomba de caudal variable ajusta su salida segundo a segundo según la demanda real. Resultado: 20-30% menos consumo de diésel y respuesta más precisa."
  - q: "¿Qué es la placa oblicua (swash plate) y por qué importa?"
    a: "Es el componente CLAVE de las bombas de pistones axiales de caudal variable. Es una placa plana inclinable dentro de la bomba contra la que apoyan los pistones mientras giran. Cuando la placa está vertical (sin inclinación), los pistones no se mueven hacia adentro y afuera — no hay bombeo. A medida que se inclina, los pistones empiezan a moverse y bombear más aceite. El regulador controla el ángulo de la placa según demanda. Es básicamente el acelerador interno de la bomba."
  - q: "¿Cuánto cuesta reparar o reemplazar una bomba hidráulica de excavadora?"
    a: "En Latam 2026, una bomba nueva original JCB para JS330 (o equivalente Cat, Komatsu) cuesta entre USD 8.000 y 15.000. Una bomba reconstruida certificada: USD 4.000 a 7.000. Mano de obra para reemplazo: USD 800-1.500. Una reparación menor (cambio de sellos, regulador) sin desmontar la bomba: USD 500-1.500. Por eso el mantenimiento preventivo del aceite (cambio cada 2.000 hrs) es ridículamente barato comparado con destruir la bomba por descuido."
  - q: "¿Cómo sé si mi bomba hidráulica está fallando?"
    a: "Cinco síntomas en orden de gravedad. UNO: la máquina pierde fuerza al cargar (la pluma sube lenta con peso). DOS: ruido nuevo en el compartimiento de la bomba (zumbido agudo o golpeteo). TRES: temperatura del aceite sube más de lo normal (>80 °C en operación estable). CUATRO: presión de servicio cae bajo el rango especificado al revisarla con manómetro. CINCO: viruta metálica visible en el filtro al cambiarlo — esto último es el SOS final. Si aparecen 2-3 síntomas juntos, parar y diagnosticar antes que sea catastrófico."
sources:
  - title: "Service Manual JS330 - Sección E - Funcionamiento de la bomba hidráulica"
    author: "JCB Service"
    year: 2004
related:
  - aceite-hidraulico-excavadora-tipos-viscosidad
  - que-es-un-sistema-hidraulico-en-una-excavadora
  - mantenimiento-basico-de-maquinaria-pesada
  - que-es-una-excavadora
---

Si el sistema hidráulico es la red sanguínea de la excavadora, la
**bomba hidráulica** es el corazón. Es el componente que convierte la
rotación mecánica del motor diésel en **presión de aceite**, y de esa
presión depende absolutamente todo: que la pluma suba, que el cazo
cierre, que las orugas avancen, que la cabina gire.

En el [post anterior sobre el sistema
hidráulico](/posts/que-es-un-sistema-hidraulico-en-una-excavadora/) la
mencioné como uno de los componentes. Acá entramos en detalle. Cómo
funciona realmente, qué tipos hay, por qué las excavadoras serias usan
**pistones axiales de caudal variable**, y qué dice el manual oficial
JCB sobre la JS330.

## La función en una frase

Una bomba hidráulica **agarra aceite del depósito a presión casi cero
y lo entrega al sistema a alta presión** (200-350 bar dependiendo de
la máquina). No "crea" presión — la presión aparece cuando ese aceite
encuentra resistencia en cilindros, válvulas y motores. La bomba
proporciona el caudal que, contra esa resistencia, genera la presión.

Es exactamente como el corazón humano: bombea sangre a presión baja
(80/120 mmHg en humanos) que después se encuentra con resistencia en
los capilares. La diferencia es que en una excavadora hablamos de
**350 bar = 350.000 mmHg**, unas 3.000 veces más que un corazón
humano. Por eso una bomba hidráulica de excavadora es una pieza tan
seria.

## Tipos de bombas hidráulicas

Hay 3 grandes familias, en orden de sofisticación creciente:

### 1. Bombas de engranajes

Las más simples y baratas. Dos engranajes que giran en un cuerpo
sellado. El espacio entre los dientes "transporta" aceite del lado de
aspiración al lado de descarga.

| Ventaja | Desventaja |
|---|---|
| Simples, baratas, robustas | Caudal fijo, eficiencia 70-80% |
| Resisten contaminación moderada | Ruidosas, presiones máximas ~250 bar |
| Mantenimiento mínimo | No regulables sin componentes externos |

**Dónde se usan**: aplicaciones de baja presión (pilotaje, carga
inicial, lubricación). En una excavadora, la JCB JS330 tiene **una
bomba de engranajes como bomba piloto** — provee la presión que mueve
las palancas del operador (45 bar máx, 29 L/min según manual).

### 2. Bombas de paletas

Mejor que las de engranajes. Un rotor con paletas deslizantes que
crean cámaras de bombeo variable. Más silenciosas y eficientes.

| Ventaja | Desventaja |
|---|---|
| Más silenciosas, mayor eficiencia | Más sensibles a contaminación |
| Pueden ser de caudal variable | Presiones máximas ~280 bar |
| Costos medios | Menos comunes en excavadoras |

**Dónde se usan**: aplicaciones industriales, prensas, máquinas
herramientas. **Poco comunes en maquinaria pesada moderna** porque las
de pistones axiales las superan.

### 3. Bombas de pistones axiales (las que importan)

**El estándar de la maquinaria pesada moderna.** Un cilindro con
varios pistones que se mueven en paralelo al eje de rotación. Cuanto
más se mueven, más aceite bombean. Y eso se controla con la **placa
oblicua**.

| Ventaja | Desventaja |
|---|---|
| Caudal variable preciso | Más caras |
| Eficiencia 90-95% | Sensibles a contaminación |
| Presiones muy altas (350-400 bar) | Reparación compleja |
| Respuesta inmediata a demanda | Requieren aceite específico |

**Dónde se usan**: TODA la maquinaria pesada seria. Excavadoras
Caterpillar, Komatsu, JCB, Volvo, Hitachi. La JCB JS330 tiene **2
bombas de pistones axiales en paralelo** según el manual.

## La placa oblicua: el secreto del caudal variable

Acá entra el componente que la mayoría de los operadores nunca
mencionan pero hace toda la diferencia: la **placa oblicua** (en
inglés *swash plate*).

Imaginá una bomba de pistones axiales como una mano cerrada con los
dedos paralelos al brazo. Esos "dedos" son los pistones. Giran sobre
un eje y mientras giran, deben subir y bajar para bombear. Lo que
los hace subir y bajar es una **superficie plana inclinable** contra
la que apoyan: la placa oblicua.

- **Placa vertical** (0° de inclinación): los pistones giran pero NO
  se mueven adentro-afuera. Cero bombeo. Cero caudal.
- **Placa muy inclinada** (15-20°): los pistones se mueven mucho.
  Caudal máximo.
- **Placa medio inclinada**: caudal intermedio.

El **regulador** (que vamos a ver en el próximo punto) controla este
ángulo segundo a segundo. Cuando el operador pide poco trabajo, la
placa se endereza y la bomba consume poca energía del motor. Cuando
pide mucho, la placa se inclina al máximo y el motor diésel se carga
para entregar el caudal.

Esto es lo que hace que una excavadora moderna tenga **20-30% menos
consumo de diésel** que una de los años 80 que usaban bombas de caudal
fijo. La placa oblicua "le habla" al motor por demanda.

## El regulador: el cerebro de la bomba

El regulador es el componente que **decide cuánto inclinar la placa
oblicua** en cada momento. Lo hace leyendo varias señales:

1. **La presión de control negativo** — viene de la válvula principal.
   Le dice al regulador "necesito más" o "ya basta".
2. **La presión de carga** — cuánta resistencia está encontrando el
   aceite.
3. **El corte de caudal máximo** — un límite de seguridad para no
   forzar el motor en condiciones extremas.

Según el manual JCB:

> Las bombas de pistones axiales tienen cada una un regulador que
> ajusta el caudal de salida conforme a la demanda del sistema.

En operación normal, el regulador ajusta la posición de la placa
oblicua varias veces por segundo. Es una micro-orquestación
permanente.

## Especificaciones reales de la JCB JS330

Del manual oficial, los números técnicos exactos de la bomba de una
JS330 nivel 2:

| Parámetro | Valor |
|---|---|
| Tipo de bomba principal | 2 × pistones axiales de desplazamiento variable |
| Desplazamiento máximo | 145 cc/rev cada una (290 cc/rev total) |
| Presión de trabajo (oruga) — fijada | **319 bar** (325 kgf/cm²) |
| Presión de trabajo — máxima | **348 bar** (355 kgf/cm²) |
| Velocidad de operación | 2.150 RPM ± 25 |
| Caudal máximo | **275 L/min cada una** (550 L/min total) |
| Par de entrada máximo | 803 Nm |

Léelo otra vez: **2 bombas entregando 550 L/min en total a 348 bar**.
Eso es **15.500 watts mecánicos** transmitidos al sistema hidráulico
en cada momento de carga máxima. Y la bomba mide menos que una caja de
zapatos.

Además, la JS330 tiene una **bomba piloto de engranajes** separada:
- Desplazamiento: 15 cc/rev
- Presión máxima: 45 bar
- Caudal máximo: 29 L/min

Esta bomba chiquita es la que mueve las palancas del operador en
cabina. Tiene su propio circuito a menor presión para que el control
sea preciso.

## Por qué las excavadoras tienen 2 bombas principales

Esto sorprende a muchos. La razón es **redundancia y eficiencia
simultánea**:

- Cuando se opera **un solo movimiento** (por ejemplo, solo subir
  pluma), las 2 bombas pueden combinarse para entregar caudal doble →
  movimiento más rápido.
- Cuando se operan **varios movimientos simultáneos** (pluma + cazo +
  giro), una bomba alimenta unos circuitos y la otra alimenta los
  otros → los movimientos no se "roban" caudal entre sí.

Esta es la diferencia entre una excavadora "buena" y una "torpe". Las
torpes tienen una sola bomba y los movimientos se traban entre sí
cuando hacés varios a la vez. Las buenas tienen 2 bombas con lógica de
prioridad — sentís que la máquina "responde" sin importar qué tantas
palancas estés moviendo.

## Síntomas de bomba en falla

Aprendí estos del manual y los confirmé con mecánicos de campo. Si
detectás cualquiera de estos en tu máquina, **no la sigas operando**:

1. **Pérdida de fuerza al cargar**: la pluma sube vacía sin problemas
   pero con peso se queda colgada.
2. **Ruido nuevo en el compartimiento de la bomba**: zumbido agudo
   (cavitación) o golpeteo metálico (desgaste interno).
3. **Temperatura del aceite excesiva**: superior a 80 °C en operación
   sostenida indica fugas internas.
4. **Caída de presión en pruebas con manómetro**: si la presión de
   servicio cae bajo 319 bar (en la JS330), hay desgaste interno.
5. **Virutas metálicas en filtros**: el SOS final. Si encontrás
   partículas brillantes al cambiar el filtro, la bomba está
   destruyéndose por dentro.

:::warning
**No abras una bomba hidráulica vos**. El manual de JCB dedica 12
páginas SOLAMENTE al procedimiento de desarmado y armado, con valores
de apriete específicos (en algunos tornillos, **47 Nm con sellador
LOCTITE**), tolerancias de ensamble y herramientas especiales. Es
trabajo de taller especializado con manómetros, prensas y banco de
pruebas. Intentar repararla en obra termina típicamente en daño total
de la pieza.
:::

## Cómo se conecta el cuidado del aceite con la vida de la bomba

Esto cierra el bucle con el post anterior. **La bomba es la víctima
principal del aceite contaminado.** Como vimos en [aceite hidráulico
para excavadora](/posts/aceite-hidraulico-excavadora-tipos-viscosidad/),
el manual JCB cita: 70% de las fallas hidráulicas vienen del aceite.

La razón física: las superficies internas de los pistones y la placa
oblicua tienen tolerancias de **5-10 micrones** (recordá: cabello
humano = 70 micrones). Cuando partículas más grandes que esa tolerancia
circulan en el aceite, **rayan las superficies**. Las ralladuras
generan fugas internas → pérdida de caudal → más calor → más oxidación
del aceite → más contaminación. Es un círculo destructivo que termina
en bomba muerta en 3-12 meses dependiendo de la severidad.

## En resumen

La bomba hidráulica de una excavadora moderna es una pieza de
**ingeniería de precisión** disfrazada de "componente mecánico". En la
JCB JS330 son 2 bombas de pistones axiales de caudal variable
trabajando en paralelo, controladas por un regulador que decide
segundo a segundo el ángulo de la placa oblicua según la demanda real
del operador.

Los números: 348 bar, 550 L/min, 803 Nm, 2.150 RPM. Una máquina que
transmite 15 kW de potencia hidráulica desde un volumen del tamaño de
una caja de zapatos. Por eso cuesta lo que cuesta (USD 8.000-15.000
nueva) y por eso destruirla por descuido de mantenimiento es uno de
los errores más caros en obra.

El mantenimiento es indirecto: **mantener el aceite limpio y a la
viscosidad correcta** mantiene viva la bomba. Y mantener viva la
bomba mantiene viva la excavadora. Toda la cadena empieza ahí.

---

*Datos técnicos del **Manual de Servicio JCB JS330, Sección E -
Funcionamiento de la bomba hidráulica** (Publicación 9803/6543-1, JCB
Service, 2004). Es el tercer post de la serie de hidráulica de
excavadoras. Los anteriores: [qué es un sistema
hidráulico](/posts/que-es-un-sistema-hidraulico-en-una-excavadora/) y
[aceite hidráulico - tipos, viscosidad y cuándo
cambiarlo](/posts/aceite-hidraulico-excavadora-tipos-viscosidad/).*
