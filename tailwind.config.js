module.exports = {
  
  purge: {
    enabled: true,
    safeList: [
      'nav-toggle',
      'nav-container'
    ],
    content: ['./*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive']
      },
      minHeight: {
        'auto': 'auto'
      },
      maxHeight: {
        'auto': 'auto'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}
