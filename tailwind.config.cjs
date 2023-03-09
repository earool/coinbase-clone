/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-blue': '#0052FF',
        'my-blue-darker': '#0A46E4',
        'my-blue-disabled': '#80A9FF',
        'gray-light': '#F0F3FA',
        'gray-light-hover': '#E2E5EC',
        'gray-border': '#ECEFF1',
        'gray-border-darker': '#5B616EAB',
      },
      gridTemplateColumns: {
        sidebar: '200px 1fr',
        sidebarSmall: '80px 1fr',
        MMenuColGrid: 'repeat(auto-fit, minmax(90px, 1fr))',
      },
    },
  },
  plugins: [],
};
