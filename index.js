const fs = require("node:fs");
const path = require("node:path");

const estudiante = process.argv[2] || "Estudiante";

const videojuego = {
  titulo: "Minecraft",
  estudio: "Mojang Studios",
  anio: 2011,
  plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
  multijugador: true
};

const plataformasTexto = videojuego.plataformas.join(", ");
const multijugadorTexto = videojuego.multijugador ? "Sí" : "No";

const ficha = `FICHA DE VIDEOJUEGO
===================

Estudiante: ${estudiante}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}
Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${multijugadorTexto}
`;

const carpetaSalida = path.join(__dirname, "salida");
const archivoSalida = path.join(carpetaSalida, "ficha-videojuego.txt");

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(archivoSalida, ficha, "utf8");

console.log(ficha);
console.log(`Archivo generado en: ${archivoSalida}`);
