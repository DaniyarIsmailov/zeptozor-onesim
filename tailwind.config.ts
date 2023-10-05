import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        // 'semibold': 'TildaSansSemibold',
        'extrabold': 'TildaSansExtrabold',
        'bold': 'TildaSansBold'
      },
      colors: {
        'orange': '#F90',
        'gray': '#848D9F',
        'bg': '#F6F7F9',
        'green': '#33C476',
        'red': '#C43333',
        'blue': '#0075FF'
      },
      boxShadow: {
        'small': '0px 0px 31px 0px rgba(0, 0, 0, 0.05)'
      },
      fontSize: {
        48: '48px',
        40: '40px',
        20: '20px',
        15: '15px',
        26: '26px',
        28: '28px',
        32: '32px',
        36: '36px'
      },
      padding: {
        80: '80px',
        70: '70px',
        40: '40px',
        20: '20px',
        10: '10px'
      },
      margin: {
        80: '80px',
        70: '70px',
        40: '40px',
        20: '20px',
        10: '10px'
      },
    },
    borderRadius: {
      DEFAULT: '10px',
      full: '100%'
    },
    lineHeight: {
      100: '100%',
      120: '120%',
      150: '150%'
    },
    gap: {
      40: '40px',
      20: '20px',
      10: '10px',
      5: '5px',
      0: '0px'
    }
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      // matchUtilities({
      //   image: (value) => {
          
      //     console.log(`url('../public/images/regions/${value}')`)
      //     return {
      //       backgroundImage: `url('../public/images/regions/${value}')`,
      //       backgroundRepeat: 'no-repeat',
      //       backgroundSize: '100%'
      //     }
      //   }
      // })
    }),
  ],
}
export default config
