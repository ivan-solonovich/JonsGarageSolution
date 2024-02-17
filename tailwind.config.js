/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#142A21',
      secondary: '#E7E2C5',

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("@tailwindcss/forms"),
  ],
}
