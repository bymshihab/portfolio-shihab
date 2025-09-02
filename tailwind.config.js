/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // or 'media' for system preference
  theme: {
    extend: {},
  },
 plugins: [require("daisyui")],
 daisyui: {
    themes: ["light", "dark"], // enables light and dark mode
  },
}

