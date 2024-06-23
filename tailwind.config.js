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
        'proxima': ['Proxima Nova', 'Georgia', 'sans-serif'],
      },

      boxShadow: {
        'pl-card': '0px 4px 4px 0px #0000000F',
        'pl-popup': '0px 0px 0px 4px #0000000D',      
        'check-shadow': '0px 4px 4px 0px #00000010;',  
      },
      colors: {
        // planet learn
        pl: {
          text: {
            primary: '#000000',
            accent: '#FF8D24',
            contrast: '#FFFFFF',
            input: '#6C727F',
          },
          background: {
            primary: '#FFFFFF',
          },
          button: {
            default: '#000000',
            hover: '#01C120',
            inactive: '#D2D2D2',
          },
          card: {
            border: '#CDCDCD',
          },
          ui: {
            valid: '#01C120',
            'valid-lighter': '#00CA14',
            invalid: '#FF0000',
          },
          input: {
            border: '#D2D5DA',
          },
        },
        // smart study
        ss: {
          text: {
            primary: '#FFFFFF',
            accent: '#66EDFF',
            secondary1: '#4EAAFF',
            secondary2: '#495EEE',
            inactive: '#FFFFFF66',
          },
          background: {
            primary: '#4D5E82',
            secondary: '#617398',
            secondary2: '#00000099',
          },
          button: {
            default: '#FFFFFF',
            hover: '#6C89FF',
            inactive: '#617398',
            default2: '#00000033',
          },
          card: {
            border: '#FFFFFF66',
            background: '#00000066',
          },
          selector: {
            border: '#FFFFFF4D',
          },
          ui: {
            valid: '#7899FF',
            invalid: '#FF0000',
          },
        },
      },
    },
  },
  plugins: [],
}

