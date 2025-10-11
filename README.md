# TetraStep

Proyecto React + Vite + TypeScript + TailwindCSS.
el proyecto, scope, si quieres vincular al repo). Responde según prefieras (puedes aceptar los valores por defecto si ya hiciste el setup en el Dashboard).

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
