module.exports = {
  content: [
    "./index.html",         // Asegura que Tailwind pueda encontrar tu archivo HTML
    "./js/**/*.js",         // Asegura que Tailwind pueda encontrar todos los archivos JS en la carpeta 'js'
    "./css/**/*.css",       // Si tienes archivos CSS que usen clases de Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
