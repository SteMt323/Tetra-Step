# TetraStep

Proyecto React + Vite + TypeScript + TailwindCSS.

Instalación (PowerShell):

```powershell
# Instala dependencias definidas en package.json
npm install

# Ejecuta el servidor de desarrollo (Vite)
npm run dev

# Para construir la app para producción
npm run build

# Para previsualizar la build localmente
npm run preview
```

Archivos principales añadidos:

- `vite.config.ts` - configuración de Vite
- `tsconfig.json`, `tsconfig.node.json` - TypeScript
- `postcss.config.cjs`, `tailwind.config.cjs` - Tailwind/PostCSS
- `index.html` - entrada HTML
- `src/main.tsx` - punto de arranque que monta `src/App.tsx`

Siguientes pasos: ejecutar `npm install` para descargar dependencias.

## Despliegue en Vercel (paso a paso)

Hay dos maneras comunes de desplegar: usando el panel web de Vercel (Dashboard) o la CLI. A continuación están ambos métodos.

1) Despliegue usando Vercel Dashboard (recomendado para la mayoría)

- Ve a https://vercel.com y crea una cuenta o inicia sesión.
- Haz clic en "New Project" → "Import Git Repository" y concede acceso a tu repositorio (GitHub/GitLab/Bitbucket).
- Selecciona el repositorio que contiene este proyecto.
- En la pantalla de configuración del proyecto, confirma las siguientes opciones:
	- Framework Preset: "Other" o "Vite" (si aparece). En Vercel, Vite suele detectarse automáticamente.
	- Build Command: `npm run build`
	- Output Directory: `dist`
	- Install Command: `npm install`

- (Opcional) Si usas variables de entorno, en la sección "Environment Variables" añade cada clave/valor para `Production`, `Preview`, y `Development` según corresponda.

- Haz clic en "Deploy". Vercel ejecutará la build y publicará la app. Al finalizar tendrás una URL temporal `https://<project>.vercel.app`.

Notas: En este proyecto hay un archivo `vercel.json` que fuerza `@vercel/static-build` y `dist` como directorio de salida. Vercel detecta el comando `npm run build` y la carpeta `dist` por la configuración de Vite.

2) Despliegue usando Vercel CLI (útil para integración local / deploys desde terminal)

- Instala Vercel CLI (si aún no está instalado):

```powershell
npm i -g vercel
```

- Inicia sesión desde la CLI:

```powershell
vercel login
```

- Desde la raíz del proyecto (donde está `package.json`) ejecuta:

```powershell
vercel --prod
```

- La primera vez te pedirá algunas opciones (nombre del proyecto, scope, si quieres vincular al repo). Responde según prefieras (puedes aceptar los valores por defecto si ya hiciste el setup en el Dashboard).

3) Ajustes importantes y debugging

- Si la build falla en Vercel, revisa los logs desde el Dashboard (Deployments → <deploy> → View Build Logs). Errores comunes:
	- Dependencias faltantes: Asegúrate de que `package.json` lista correctamente `dependencies` y `devDependencies`.
	- Versión de Node: Si necesitas una versión específica de Node, agrega un archivo `engines` en `package.json`, por ejemplo:

```json
"engines": { "node": ">=18.0.0" }
```

- Si tu app requiere variables de entorno (API keys, etc.), añádelas en la sección Environment Variables del proyecto en Vercel.

4) Archivos que añadí para Vercel

- `vercel.json` — configuración de build / rutas (en la raíz). Ya lo agregué y está configurado para `@vercel/static-build` y `dist` como `distDir`.
- `.vercelignore` — archivos a ignorar en despliegues.

5) Resumen de comandos útiles

```powershell
# instalar dependencias
npm install

# build local
npm run build

# preview local de la build
npm run preview

# desplegar con Vercel CLI (producción)
vercel --prod
```

Si quieres, puedo:
- Hacer el primer deploy por ti desde la CLI (necesitaría tu confirmación y que ejecutes `vercel login` en tu máquina), o
- Vincular la configuración de variables de entorno que me pases directamente en el `vercel.json` (no recomendado para secretos — mejor añadirlos en el Dashboard), o
- Ajustar la configuración de `vercel.json` si tu build usa una carpeta distinta a `dist`.
