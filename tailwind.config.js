/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Karla': ['Karla', 'sans-serif']
    },
    colors: {
      'light-coffee': '#C89F84'
    },
    keyframes: {
      'menuDown': {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      'menuDown': 'menuDown 0.5s ease-out',
    }
  },
  plugins: [],
}

