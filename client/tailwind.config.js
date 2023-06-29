/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  extend: {
      colors: {
        'darkblue': '#00435F',
        'blue': '#205360',
        'gray': '#707788',
        'green': '#2FD4B5',
        'red': '#EFA0B9',
        'inputs': '#D9D9D9',
      },
    },
  },
  plugins: [],
}

