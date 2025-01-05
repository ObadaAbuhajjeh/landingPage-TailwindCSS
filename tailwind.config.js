/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    fontFamily: {
      Inter: ['Inter','sans-serif']
    },
    extend: {
      screens:{
        '2md': '960px'
      },
      colors:{
      primary: '#7E3AF2',
      secondary: '#687280',
      mainColor: '#111928'
    },
    },
  },
  plugins: [],
}