/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'intro': ['Intro', 'Proxima Nova', 'Georgia', 'sans-serif'],
      },

      boxShadow: {
        'var1-card': '0px 4px 4px 0px #0000000F',
        'var1-popup': '0px 0px 0px 4px #0000000D',      
        'check-shadow': '0px 4px 4px 0px #00000010;',  
      },
      colors: {
        // planet-learn
        var1: {
          text: {
            primary: '#000000',
            accent: '#FF8D24',
            input: '#6C727F',
          },
          background: {
            'button-inactive': '#D2D2D2',
            'button-hover': '#6C89FF',
            black: '#000000',
          },
          white: '#FFFFFF',
          black: '#000000',
          orange1: '#FF8D24',
          grey1: '#CDCDCD',
          green1: '#01C120',
          green2: '#00CA14',
          'input-border': '#D2D5DA',
          red1: '#FF0000',
        },
        var2: {
          text: {
            primary: '#FFFFFF',
            blue1: '#4EAAFF',
            blue2: '#495EEE',
            'light-blue1': '#66EDFF',
            white: '#FFFFFF',
          },
          background: {
            'white': '#FFFFFF',
            'button-inactive': '#D2D2D2',
            'button-hover': '#6C89FF',
          },
        },
      },
    },
  },
  plugins: [],
}

