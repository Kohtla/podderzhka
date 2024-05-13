/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'beige':'#FCF4DD',
        'red': '#B1143A',
        'green': '#73B48C',
      },
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'"],
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'black': 900,
      },
    },
  },
  plugins: [],
}

