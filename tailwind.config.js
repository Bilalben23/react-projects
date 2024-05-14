/** @type {import('tailwindcss').Config} */
module.exports = {
  // where the tailwindcss should be available.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // prefix: "tw-",

  // to generate utilities as '!important'
  // important: true,
  // important: '#app',

  // where you define your color platte, fonts, type scale, border sizes, breakpoints...
  theme: {

    extend: {
      height: {
        "my-screen": "calc(100vh - 88px)"
      }
    },
  },
  // register a plugin
  plugins: [],
}

