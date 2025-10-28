/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fac638",
        "background-light": "#f8f8f5",
        "background-dark": "#0f1723",
      },
    },
  },
  plugins: [],
}

