/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'md': '640px'
      },
      colors: {
        primaryGreen: '#89B133',
        darkGreen: '#13680B',
        primaryBlue: '#1F81BB',
        skyBlue: '#F3F6F9',
        textNicon: '#4A4A4A',
        white: '#FFFFFF',
        black: '#0F1115',
        regularBlue: '#D4E9F5'
      },
      fontFamily:{
        chelsea: ['Chelsea Market', 'cursive'], // Fallback to cursive
        futura: ['Futura LT', 'sans-serif'], 
        quicksand: ["Quicksand", 'sans-serif']
      },
      backgroundImage:{
        'green-bg': "url('/src/assets/green-bg.jpg')",
      }
    },
  },
  plugins: [],
}

