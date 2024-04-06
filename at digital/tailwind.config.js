/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#6B3CC9",
        secondary: "#F28D35",
      },
      fontFamily: {
        secondary: ['Poppins', 'sans-serif'],
        primary: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

