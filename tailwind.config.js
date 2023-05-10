/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#8698D9',
        'press-blue': '#93A5E4',
        'light-blue': '#D5DEFE',
        'white': '#F3F5FF',
        'yellow': '#E6C877',
        'press-yellow': '#F2D37E',
        'pink': '#D99CAB',
        'press-pink': '#E6A5B5',
        
        // gradient colors
        'g-blue': '#BDE4FF',
        'g-violet': '#AEA1F0',
        'g-purple': '#B484D9',
        'g-pink': '#F596FA',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
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

