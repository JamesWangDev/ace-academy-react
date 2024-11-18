/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['Manrope', 'serif'],
    },
    extend: {
      colors: {
        primary: {
          500: '#F09272',
          400: '#f4a286'
        },
        midblack: '#1F1F1F',
        tangerine: '#F5F5F5',
        brightgrey: '#8F8F8F',
        midgrey: '#525966',
        bannergrey: '#D9D9D9',
        disabled: {
          bg: '#f0f0f0',
          text: '#ccc'
        },
        semibrightgrey: '#ECECEC',
        success: '#5BCE00',
        warning: '#FF3030'
      },
      spacing: {
        0.25: '1px',
        0.5: '2px',
        1.5: '0.3125rem', // 5px
        1.6: '0.375rem', // 6px
        2.5: '0.625rem', // 10px
        3.25: '0.8125rem', // 13px
        3.5: '0.875rem', // 14px
        3.75: '0.9375rem', // 15px
        4.5: '1.125rem', // 18px
        6.5: '1.625rem',  // 26px
        7.5: '1.875rem', // 30px
        9.5: '2.375rem', // 38px
        11: '2.75rem', // 44px
        12.5: '3.125rem', // 50px
        15: '3.75rem', // 60px
        22.5: '5.625rem', // 90px
        23: '5.375rem', // 92px
        24.5: '6.125rem', // 98px
        25: '6.25rem', // 100px
        30: '7.5rem', // 120px
        33: '8.25rem', // 132px
        35: '8.75rem', // 140px
        39: '9.75rem', // 156px
        66: '16.5rem', // 264px
        75: '18.75rem', // 300px
        77: '19.25rem', // 308px
        82: '20.5rem', // 328px
        86: '21.5rem', // 344px
        88: '22rem', // 352px
        90: '22.5rem', // 360px
        101: '25.25rem', // 404px
        131: '32.75rem' // 524px
      },
      borderRadius: {
        1: '0.25rem', // 4px
        2.5: '0.625rem', // 10px
        5: '1.25rem', // 20px
        7.5: '1.875rem', // 30px
        12.5: '3.125rem', // 50px
        15: '3.75rem', //60px
        37.5: '9.375rem' // 150px
      },
      fontSize: {
        13: '13px',
        15: '15px',
        26: '26px',
        30: '30px'
      },
      boxShadow: {
        custom: '0px 4px 50px 10px rgba(0, 0, 0, 0.03)',
        custom2: '0px 4px 24px 0px rgba(0, 0, 0, 0.07)',
        custom3: '0px 4px 20px 0px rgba(0, 0, 0, 0.05)'
      },
      fontFamily: {
        "brawler": ['"Brawler"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}