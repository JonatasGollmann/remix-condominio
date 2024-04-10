import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        outfit:['Outfit']
      },
      colors:{
        custom:{
          b0: "#002CDB",
          b1: "#0554F2",
          b2: "#056CF2",
          b3: "#0583F2",
          y1: "#F2B705",
          y2: "#F29F05",
          w1: "#D9D9D9",
        }
      }
    },
  },
  plugins: [],
} satisfies Config