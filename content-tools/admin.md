# Panel editorial Decap CMS — guía completa

Tu sitio tiene un panel admin web en `/admin/` (ej.
`https://nexomundial.com/admin/`). Desde ahí publicas posts sin tocar código.

Funciona basado en **Netlify Identity** (para login) y **Git Gateway** (para
que el panel pueda hacer commits al repo en tu nombre). Ambos son features
gratis de Netlify que tienes que activar UNA VEZ.

## Setup inicial (5 minutos, lo haces una sola vez)

### 1. Activar Netlify Identity

1. Ve al panel de Netlify → tu sitio (nexo mundial).
2. Menú lateral → **Integrations** → **Identity** (a veces también está en
   menú lateral directo si lo tienes habilitado).
3. Click **"Enable Identity"**.

Al activarlo verás varias opciones. Configura así:

- **Registration**: cambia de "Open" a **"Invite only"** (solo tú podrás
  registrarte; nadie más).
- **External providers**: ignora (no hace falta).
- **Emails**: deja por defecto (Netlify envía los emails de invitación).

### 2. Activar Git Gateway

Dentro de la misma sección Identity:

1. Baja hasta **"Services"** → **"Git Gateway"**.
2. Click **"Enable Git Gateway"**.

Esto le da al CMS permiso para hacer commits al repo cuando publiques desde
el panel.

### 3. Invitarte como usuario admin

1. Vuelve a Identity → **"Invite users"** → escribe tu email → "Send".
2. Recibirás un email "You've been invited to join Nexo Mundial".
3. Click en el link del email → te lleva a `tunexomundial.com/?invite_token=...`.
4. La página principal abrirá automáticamente un modal de Netlify para que
   pongas tu contraseña.
5. Confirma → quedas registrado.

### 4. Obtener tu Cloudinary API Key

El panel necesita la API key de Cloudinary para subir imágenes:

1. Abre `cloudinary.com/console`.
2. Settings (rueda dentada arriba a la derecha) → **Access Keys**.
3. Copia el valor de **"API Key"** (es un número largo tipo `123456789012345`).
   - **No es secreta**, es pública. Es seguro tenerla en `config.yml`.
4. Abre `public/admin/config.yml` en tu editor.
5. Busca la línea:
   ```yaml
   api_key: REEMPLAZAR_CON_TU_API_KEY_DE_CLOUDINARY
   ```
6. Reemplaza el placeholder por tu API key real.
7. Commit y push. Netlify deploya, listo.

### 5. (Opcional pero recomendado) Crear un upload preset unsigned

Para que el upload de imágenes desde el panel sea más limpio:

1. Cloudinary → Settings → **Upload** → "Upload presets" → **Add upload preset**.
2. Nombre: `nexo_mundial`.
3. Signing mode: **Unsigned**.
4. (Opcional) Folder: `posts` — para organizar.
5. Save.
6. En `public/admin/config.yml`, descomenta la línea:
   ```yaml
   # upload_preset: nexo_mundial
   ```

## Cómo entrar al panel

Una vez hecho el setup:

1. Ve a `tunexomundial.com/admin/`.
2. Click **"Login with Netlify Identity"**.
3. Pon tu email y contraseña.
4. ¡Listo! Ves el dashboard.

En local (dev) también funciona si arrancas con `pnpm dev` → `localhost:4321/admin/`
y has activado Identity en Netlify (mismo dominio).

## El panel — qué puedes hacer

### Dashboard principal

Verás cuatro **Collections**:

- **Artículos** — los posts.
- **Glosario** — entradas del diccionario técnico.
- **Categorías** — solo edición, no se crean/borran desde aquí.
- **Autores** — bio del equipo editorial.

### Workflow editorial (importante)

El panel está configurado con **"Editorial Workflow"**: cada cambio pasa por
tres estados antes de publicarse:

```
Draft → In Review → Ready → Published
```

Cuando creas un post nuevo:
1. Empieza como **Draft** (borrador, no se ve en el sitio).
2. Lo mandas a **In Review** cuando consideras que está listo.
3. Lo mueves a **Ready** cuando lo revisaste por última vez.
4. Click **"Publish now"** → commit a GitHub → Netlify deploy → live en ~30s.

Si tú eres el único editor, puedes saltarte estados haciendo click directo
en "Publish now" desde Draft.

### Crear un post nuevo

1. Collections → **Artículos** → **"New Artículo"** (botón arriba derecha).
2. Llenas el formulario:
   - **Título** (10–80 caracteres, el sistema valida).
   - **Fecha de publicación**.
   - **Borrador** ✓ (déjalo activado mientras escribes).
   - **Categoría** (selecciona una de las 5).
   - **Formato**: guía, concepto, comparativa, tutorial, resumen, glosario.
   - **Nivel**: básico, intermedio, avanzado.
   - **Descripción** (50–180 caracteres — meta para Google).
   - **Tags** (en kebab-case: `cimentacion`, `hormigon-armado`).
   - **Imagen de portada**: arrastra o selecciona desde Cloudinary.
   - **Asistido por IA**: ✓ si usaste IA para redactar (añade disclaimer sutil).
   - **FAQs**: lista de preguntas/respuestas (aparecen al final del post y en
     resultados de Google con formato especial).
   - **Fuentes**: si citas manuales/normativas.
   - **Cuerpo**: editor Markdown con preview.
3. Cuando lo termines, desmarca **"Borrador"** y click **"Save"** → **"Publish now"**.

### Editar un post existente

1. Collections → Artículos → click sobre el título.
2. Modificas lo que quieras.
3. Save → Publish now (si ya estaba publicado, se actualiza).

### Subir imágenes

Cuando estás escribiendo un post y llegas al campo "Imagen de portada":

1. Click en el área de upload.
2. Se abre el **widget de Cloudinary** integrado.
3. Drag-drop tu imagen.
4. Recórtala / ajusta si quieres (Cloudinary tiene editor inline).
5. Done → el `public_id` se guarda en el frontmatter automáticamente.

También dentro del cuerpo del post puedes insertar imágenes con el botón de
imagen del editor → mismo flujo.

## Filtros y vista del dashboard

En el listado de Artículos puedes filtrar por:
- **Borradores** — solo los no publicados.
- **Publicados** — solo los visibles en el sitio.
- **Destacado en home** — los que aparecen como hero.

Y ordenar por fecha, título o categoría.

## Lo que NO puedes hacer desde el panel (todavía)

- Cambiar el diseño del sitio.
- Editar el código.
- Aprobar o rechazar usuarios (eso se hace desde Netlify Identity).

Para esas cosas sigues necesitando el repo + tu editor de código.

## Si algo falla

| Problema | Solución |
|---|---|
| El panel `/admin/` carga pero el login no funciona | Verifica que Netlify Identity esté activado, y que Git Gateway también. |
| "Authentication failed" después de poner password | Probable: el sitio en Netlify no tiene Git Gateway. Reactívalo desde Identity → Services. |
| "Error: Failed to load entries" tras login | El branch en `config.yml` puede no coincidir con tu repo. Edítalo (`branch: main`). |
| Las imágenes no suben a Cloudinary | Falta el API key real en `config.yml`. Revisa el paso 4 de Setup. |
| Veo cambios en el panel pero no en el sitio | Espera 1 minuto, Netlify tarda en deployar. Si pasa más, mira el panel de Deploys de Netlify. |

## Equivalencia con WordPress

| WordPress | Decap CMS |
|---|---|
| Posts | Artículos |
| Categorías | Categorías |
| Tags | Tags (campo del post) |
| Media Library | Cloudinary (CDN externo) |
| Publish | "Publish now" |
| Trash | Delete |
| Featured Image | Imagen de portada |
| SEO meta | Descripción (campo dedicado) |
| Plugins | No tienes, todo es código directo |

La diferencia conceptual: WordPress guarda en una base de datos MySQL.
Decap guarda **archivos Markdown en tu repo Git**, lo que significa:

✅ Backup automático (versionado en Git).
✅ Migración trivial a otro CMS o sin CMS.
✅ Cero cuota de DB, cero ataques SQL.
✅ Velocidad superior (sitio 100% estático).
❌ No tienes plugins pre-hechos (pero tampoco los necesitas).

## Para producir contenido a escala

Cuando tengas más volumen, puedes combinar el panel con los scripts IA que
ya tienes:

1. Generar borrador con `npm run ai:draft -- outline.md` (CLI).
2. Editar y revisar en VSCode o directamente en el panel.
3. Marcar el frontmatter como `aiAssisted: true`.
4. Publicar desde el panel.

Lo mejor de los dos mundos: IA para escribir rápido + panel visual para
revisar y publicar limpio.
