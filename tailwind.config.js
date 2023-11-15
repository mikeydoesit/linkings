/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      white: '#ffffff',
      text_primary: '#d1d1d1',
      black: '#222831',
      highlight: '#ffbc10',
      transparent: 'transparent'
    },
    gridTemplateColumns: {
      'tapbarmenu': '1fr 1fr 1fr 1fr 1fr',
      'homepage': '1fr',
      'dashboard_services': '1fr 1fr',
      'cars_grid': '1fr 1fr',
      'recentPosts': 'repeat(2, minmax(0, 1fr))',
      'newsIndex': '1fr 1fr',
      'habits': '1fr 1fr'
    },
    gridTemplateRows: {
      'tapbarmenu': '100%',
      'dashboard_services': 'repeat(4, minmax(0, 1fr))',
      'cars_grid': '1fr 1fr',
      'habits': '1fr 1fr 1fr 1fr'
    },
    extend: {},
  },
  plugins: [],
}

