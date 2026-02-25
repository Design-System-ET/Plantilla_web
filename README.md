# Plantilla Web

Esta es una plantilla básica para iniciar proyectos web. Incluye soporte para `sitemap.xml`, `robots.txt`, y `site.webmanifest`.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente:
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Design-System-ET/Plantilla_web.git
   
2. Navega al directorio del proyeto:
   
   ```bash
   cd nombre-proyecto

3. Instala las dependencias
   
   ```bash
   npm install

## Estructura del proyecto

```bash
TU-PROYECTO/
├── css/
│   └── style.scss         # Archivo SCSS principal
├── favicons/              # Puede generarlos aqui https://realfavicongenerator.net/
├── img/                   # Almacena las imagenes necesarias
├── node_modules/
├── pages/                 # Almacena todas las paginas del sitio
├── script/
│   └── script.js          # Archivo JavaScript principal
├── .gitignore             # Ignora archivos/carpetas que no deben subirse al repositorio
├── README.md              # Guia del proyecto
├── index.html             # Archivo HTML principal
├── package.json           # Configuración de npm
├── robots.txt             # Archivo para motores de búsqueda
├── site.webmanifest       # Archivo de configuración de la web app
└── sitemap.xml            # Mapa del sitio
```


# USO
## Servidor de Desarrollo
Instala un servidor Live Server (a menos que tengas el plugin)
```bash
npm install live-server --save-dev
```

Ejecuta el siguiente comando para iniciar un servidor local (a menos que tengas Live Server):

```bash
npm start
```
Esto abrira tu proyecto en el navegador y recargara automaricamente los cambios.

## Generar archivos para produccion
Ejecuta el siguiente comando para compilar los arcivos SCSS y JavaScript

```bash
npm run build
```

👉 Si tu proyecto es HTML/CSS/JS puro, NO necesitas build.
build se usa cuando hay:
* React
* Vue
* Angular
* TypeScript
* Bundlers (Vite, Webpack, etc.)

## Generar el sitemap.xml
1. Abre el meni de comando con Ctrl + Shift + p.
2. Selecciona la opcion Sitemap: Generate sitemap.xml.
3. Si necesitas actualizar el archivo, selecciona Sitemap: Update sitemap.xml.
4. Cambia el dominio en el archivo generado por el de tu sitio web.

## Configuraciones
**robots.txt**

En el archivo robots.txt, el sitemap debe referise a la ubicacion del archivo sitemap.xml que contiene la estructura de tu sitio web. Esto ayuda a los motores de busqueda a indexar tu sitio de manera mas eficiente.

Asegurate de que la URL en el sitemap.xml sea correcta y accesible para los motores de busqeuda.

**site.webmanifest**

En este archivo, debes modificar los datos para que correspondan a los de tu sitio web.

## Dependencias
* Bootstrap: Framework CSS para diseno responsivo, a traves de CDN.
* Font Awesome: Libreria de iconos.
* SweetAlert2: Libreria de alertas.
* Webpack: Herramienta para empaquetar JavaScript.
* node-sass: Compilador de SCSS a CSS.
* live-server: Servidor local para desarrollo

## Personalizacion
* Estilos: modifica el archivo css/style.css para personalizar los estilos.
* Script: Edita el archivo script.js para agregar o modificar funcionalidades.
* index.html: modificar los valores de og:image para la imagen indicada, titulo y descripcion y og:url para el dominio de tu sitio.
* Icons: sobre escribir los icons para los que vas a utilizar en tu proyecto.

## Notas
RECUERDA SUSTITUIR EL DOMINIO POR EL DE TU SITIO