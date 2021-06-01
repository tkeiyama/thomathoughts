const colors = {
  'white': '#f0f6fc',
  'brand': '#64d2ff',
  'not-dark': '#373c43',
}

module.exports = {
  mode: 'jit',
  purge: [
    "./posts/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors,
      fontFamily: {
        'title': ['Comic Sans MS', 'Comic Sans', 'cursive']
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      scale: ['hover', 'focus']
    },
  },
  plugins: [],
}
