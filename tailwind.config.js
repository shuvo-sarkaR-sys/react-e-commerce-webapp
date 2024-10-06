/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn:{
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },

      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

