/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGreen': '#292F1F',
        'lightBrown': '#E2CCB9',
        'black': '#000000',
      },
      fontFamily: {
        'julius': ['"Julius Sans One"', 'sans-serif'],
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
        'noto': ['"Noto Sans"', 'sans-serif'],
        'times': ['"Times New Roman"', 'serif'],
      },
      gridTemplateColumns: {
        '40-60': '40% 60%',
        '60-40': '60% 40%',
      },
      textShadow: {
        'outline': '0 0 3px rgba(0, 0, 0, 0.5)',
      },
      height: {
        130: '39.4rem',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-outline': {
          'text-shadow': '0 0 3px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      })
    },
  ],
}