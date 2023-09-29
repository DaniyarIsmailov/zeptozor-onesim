import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'semibold': 'TildaSansSemibold',
        'extrabold': 'TildaSansExtrabold',
        'bold': 'TildaSansBold'
      },
      colors: {
        'orange': '#F90',
        'gray': '848D9F',
        'bg': '#F6F7F9',
        'green': '#33C476',
        'red': '#C43333'
      },
      boxShadow: {
        'small': '0px 0px 31px 0px rgba(0, 0, 0, 0.05)'
      },
      fontSize: {
        15: '15px',
        26: '26px',
        28: '28px',
        32: '32px',
        36: '36px'
      }
    },
    borderRadius: {
      DEFAULT: '10px'
    },
    lineHeight: {
      120: '120%',
      150: '150%'
    },
    gap: {
      20: '20px',
      10: '10px',
      5: '5px'
    }
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        image: (value) => ({
              backgroundImage: `url('../public/images/${value}')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%'
          })
      })
    })
  ],
}
export default config
