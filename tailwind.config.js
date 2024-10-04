/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./faq.html",
    "./**/*.js", // include your JS files if they contain Tailwind classes
    "./assets/**/*.{html,js,jsx,ts,tsx}", // adjust according to your assets structure
  ],
  theme: {
    extend: {},
    fontFamily:{
      'lexend': ['Lexend', 'sans-serif'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dracula", "dark", "lofi"],
  },
}