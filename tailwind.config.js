const windmill = require('@windmill/react-ui/config');

module.exports = windmill({
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', ''],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui'],
        brand: ['Montserrat', 'system-ui'],
        mono: ['Fira Code', 'system-ui'],
      },
      borderRadius: {
        DEFAULT: '10px',
        md: '7px',
        lg: '14px',
      },
      boxShadow: {
        DEFAULT: '0 12px 24px 0 rgba(0,0,0,0.05), 0 2px 4px 0 rgba(0,0,0,0.07)',
      },
      colors: {
        primary: {
          darker: '#E61ECD',
          dark: '#E61ECD',
          DEFAULT: '#E61ECD',
          hover: '#EB279D',
          light: '#EB279D',
        },
        secondary: {
          dark: '#4E0050',
          DEFAULT: '#4E0050',
          hover: '#4E0050',
          light: '#4E0050',
          'light-hover': '#4E0050',
        },
        dark: {
          900: '#121227',
          800: '#181834',
          700: '#232345',
          600: '#363F52',
          10: 'rgba(0,0,0,0.1)',
        },
        light: {
          900: '#FFF',
          800: '#F6FBFF',
          700: '#F6F9FB',
          600: '#E2F0FF',
          10: 'rgba(255,255,255,0.1)',
        },
        positive: '#00D395',
        negative: '#E55656',
        caution: '#EE8A46',
        gold: '#F6B611',
        header: {
          DEFAULT: '#39344C',
          dark: '#FFF',
        },
        paragraph: {
          DEFAULT: '#62677A',
          dark: '#FFF',
        },
      },
      borderColor: (theme) => ({
        DEFAULT: '#EAECEF',
        dark: '#363F52',
        opacity: {
          DEFAULT: 'rgba(255,255,255,0.03)',
          dark: 'rgba(0,0,0,0.03)',
        },
      }),
    },
    screens: {
      // min widths, mobile first
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      // Named sizes, should correspond to above
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
});
