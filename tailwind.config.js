/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '4000': '4000ms',
        '2000': '2000ms',
      }
    },
    fontFamily: {
      firaCode: `Fira Code monospace`,
      poppins: `Poppins sans-serif`
    }
  },
  plugins: [],
}
