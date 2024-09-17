/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind procese todos los archivos en la carpeta src
  ],
  theme: {
    extend: {
      colors: {
        aquamarine: '#7FFFD4', // Define el color aquamarine
        black: '#000000', // Define el color negro
      },
    },
  },
  plugins: [],
}
