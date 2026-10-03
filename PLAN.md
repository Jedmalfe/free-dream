# Free Dream: plan del producto

**Objetivo:** una app de finanzas personales que convierte el camino a cero deudas en un juego, y que al llegar a la meta enseña a invertir el mismo dinero que antes iba a las deudas. Lema: *ser Libre*.

## 1. Funciones

### Núcleo (prototipo actual)
- **Deudas:** nombre, tipo, saldo original y actual, interés anual (TAE), pago mínimo.
- **Plan de pago:** presupuesto mensual para deudas y estrategia a elegir:
  - *Avalancha* (primero el interés más alto: pagas menos intereses).
  - *Bola de nieve* (primero el saldo más pequeño: victorias rápidas).
  - Simulación mes a mes: fecha de libertad, intereses totales, orden y mes en que cae cada deuda.
- **Pagos:** registrar abonos a cada deuda; el saldo baja y el progreso se actualiza.
- **Movimientos:** ingresos y gastos con categoría; resumen del mes (ingresos, gastos, balance, categorías principales).
- **Modo Libertad:** cuando las deudas llegan a cero, el presupuesto liberado se convierte en plan de inversión con proyección a 5, 10 y 20 años en tres escenarios, más una ruta paso a paso (fondo de emergencia, jubilación, fondos indexados).
- **Respaldo:** exportar e importar todos los datos en JSON.

### Gamificación
- **XP y niveles:** cada pago da XP (más XP cuanto más grande es el avance respecto a la deuda total). Liquidar una deuda da un bono grande.
- **Títulos por nivel:** Soñador, Aprendiz, Ahorrador, Estratega, Guerrero de deudas, Cazador de intereses, Maestro del presupuesto, Casi libre, Libre.
- **Logros:** primer pago, 10 %, 25 %, 50 %, 75 % pagado, primera deuda eliminada, racha de 3 y 6 meses, plan trazado, 10 movimientos registrados, libertad total.
- **Racha mensual:** meses seguidos con al menos un pago.
- **Celebraciones:** confeti, mensajes de ánimo y pantalla de subida de nivel.
- **Mapa del viaje:** cada deuda es una etapa; se ve cuál es el "jefe" actual (la deuda objetivo).

### Siguientes fases
1. Presupuesto por categorías con alertas, gastos recurrentes y recordatorios de pago (notificaciones push).
2. Metas de ahorro paralelas (fondo de emergencia como "escudo").
3. Sincronización opcional entre dispositivos y modo pareja/familia (deudas compartidas).
4. Importar extractos bancarios (CSV) y categorización automática.
5. Retos semanales ("una semana sin delivery") con XP extra.

## 2. Datos: primero en el dispositivo
- Todo se guarda en **IndexedDB** del navegador; funciona sin conexión y sin cuenta.
- La app es **PWA**: se instala en el móvil desde el navegador ("Añadir a pantalla de inicio") y un *service worker* la mantiene disponible offline.
- **Sincronización (fase 3), opciones recomendadas:**
  - *Supabase* (Postgres + auth + realtime, plan gratuito) guardando el estado cifrado en el cliente, o
  - *CRDT* (Automerge/Yjs) para fusionar cambios de varios dispositivos sin conflictos.
  - Recomendación: empezar con Supabase y cifrado de extremo a extremo (la clave nunca sale del dispositivo).

## 3. Stack sugerido
| Capa | Prototipo | Versión de producción |
|---|---|---|
| UI | HTML + CSS + JS sin dependencias | React + Vite + TypeScript |
| Almacenamiento | IndexedDB | IndexedDB con Dexie.js |
| PWA | manifest + service worker propio | vite-plugin-pwa (Workbox) |
| Sync | exportar/importar JSON | Supabase + cifrado E2E |
| Hosting | cualquier hosting estático | GitHub Pages, Netlify o Vercel (gratis, HTTPS) |

## 4. Avisos
Las recomendaciones de inversión son educativas y no constituyen asesoría financiera. Los rendimientos de los escenarios son supuestos, no promesas.
