// Genera la PWA en ../app a partir de src/app.html
const fs = require("fs"), path = require("path");
const src = __dirname, out = path.join(__dirname, "..", "app");
const body = fs.readFileSync(path.join(src, "app.html"), "utf8");
const head = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#eef1f8" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#10152b" media="(prefers-color-scheme: dark)">
<meta name="description" content="Planifica, paga tus deudas jugando y aprende a invertir para ser libre.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icon-192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Free Dream">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}img{max-width:100%}</style>
`;
// title/link/style del fragmento van en <head>; el resto en <body>
const split = body.indexOf("</style>") + "</style>".length;
const html = head + body.slice(0, split) + "\n</head>\n<body>\n" + body.slice(split) +
  `\n<script>if ("serviceWorker" in navigator) { addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {})); }</script>\n</body>\n</html>\n`;
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, "index.html"), html);
fs.copyFileSync(path.join(src, "icon.svg"), path.join(out, "icon.svg"));
console.log("app/index.html", html.length, "bytes");
