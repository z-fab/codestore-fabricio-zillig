/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
      colors: {
        "primary" : {
          '50' : '#DAD7CD',
          '100' : '#A3B18A',
          '300' : '#588157',
          '500' : '#3A5A40',
          '700' : '#293D33',
          '900' : '#121713'
        }
      }
    },
  },
  plugins: [],
}