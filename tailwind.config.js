module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#FC4747'
        },
        blue: {
          500: '#FC4747',
          600: '#161D2F',
          700: '#10141E'
        },
      }
    },
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}