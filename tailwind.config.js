/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blueLight: '#2a75bb',
        blueDark: '#3c5aa6',
        yellowLight: '#ffcb05',
        yellowDark: '#c7a008',
      },
    },
  },
  plugins: [],
};
