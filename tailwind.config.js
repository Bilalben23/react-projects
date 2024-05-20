/** @type {import('tailwindcss').Config} */

let plugin = require("tailwindcss/plugin")

module.exports = {
  // where the tailwindcss should be available.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  // prefix: "tw-",

  // to generate utilities as '!important'
  // important: true,
  // important: '#app',
  // where you define your color platte, fonts, type scale, border sizes, breakpoints...

  darkMode: 'selector',




  theme: {
    supports: {
      grid: 'display: grid'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      height: {
        "my-screen": "calc(100vh - 88px)"
      },

      padding: {
        "100xl": "100px"
      },
      margin: {
        "100xl": "200px"
      },
      colors: {
        myColor: '#23ff00',
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      },
      borderRadius: {
        '20xl': '2rem'
      },
      backgroundImage: {
        'avatar': "https://avatar.iran.liara.run/public/42"
      }
    },
  },
  // register a plugin
  plugins: [
    plugin(function ({ addVariant }) {
      // add a `third' variant, ie. 'third:pb-0'
      addVariant('third', '&:nth-child(3)')
    })
  ],
}

