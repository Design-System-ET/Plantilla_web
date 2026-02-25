// Ejemplo: generar contenido dinámico
const contenedor = document.getElementById("app");

const p = document.createElement("p");
p.textContent = "Este contenido fue agregado dinámicamente desde JS.";
p.style.color = "#1a73e8";
contenedor.appendChild(p);