/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'light-purple':'#b297ea5e',
      'gray-600':'#1F2937',
      'black':'#000000',
      'white':'#fff',
      'header-logo': '#b46e3c',
      'icon':'aliceblue',
      "light-green":'#59ce596e',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem', 
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      width: {
        'wxx': '30rem',
      }
    }
  },
}
