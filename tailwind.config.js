/** @type {import('tailwindcss').Config} */

const ratio = 1.333
const getRatio = n => `${n * ratio}rem`

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DE4B4',
        secondary: '#2C98F0',
        light: '#F5FAFF',
        dark: '#1A1C1B',
        gray: '#7A7A7A'
      },
      fontSize: {
        sm: [`${ratio - 1}rem`, '1.2'],
        base: ['1rem', '1.2'],
        lg: [getRatio(1), '1.2'],
        xl: [getRatio(2), '1.2'],
        '2xl': [getRatio(3), '1.2'],
        '3xl': [getRatio(4), '1.2'],
        '4xl': [getRatio(5), '1.2'],
      },
      spacing: {
        '0.5': `${ratio - 1}rem`,
        '1': '1rem',
        '2': getRatio(1), 
        '3': getRatio(2), 
        '4': getRatio(3), 
        '5': getRatio(4), 
        '6': getRatio(5), 
      },
      animation: {
        'jump': 'jump 0.4s linear'
      },
    },
  },
  plugins: [],
}