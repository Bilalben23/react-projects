/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "my-screen": "calc(100vh - 88px)"
      }
    },
  },
  plugins: [],
}

