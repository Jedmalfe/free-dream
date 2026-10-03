# Free Dream (prototipo)

PWA de finanzas personales: plan para salir de deudas con gamificación y modo Libertad para invertir después.

- `PLAN.md`: plan del producto.
- `src/app.html`: código de la app (HTML + CSS + JS, sin dependencias).
- `src/build.js`: genera la PWA instalable en `app/` (`node src/build.js`).
- `app/`: la PWA lista para subir a cualquier hosting estático con HTTPS (GitHub Pages, Netlify, Vercel).

Probar en local: `npx serve app` y abrir la URL en el navegador. Los datos se guardan en IndexedDB del dispositivo.

## Publicación
Cada push a `main` reconstruye `app/` y la publica en GitHub Pages: https://jedmalfe.github.io/free-dream/
