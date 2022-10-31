/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      'portfolio' :['Saira Condensed', 'sans-serif'],
      'menus' : ['Bebas Neue', 'cursive']
    },
    colors:{
      "navbar" : "rgb(34, 40, 49)",
      "text" : "rgb(57, 62, 70)",
      "home" : "rgb(238, 238, 238)",
      "nav-text" : "rgb(0, 173, 181)"
      
    },
    extend: {},
  },
  plugins: [],
}