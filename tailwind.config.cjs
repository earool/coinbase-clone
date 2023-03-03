/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-blue': '#0052FF',
        'my-blue-darker': '#0A46E4',
        'my-blue-disabled': '#80A9FF',
        'gray-border': '#ECEFF1',
        'gray-border-darker': '#5B616EAB',
      },
    },
  },
  plugins: [],
};
