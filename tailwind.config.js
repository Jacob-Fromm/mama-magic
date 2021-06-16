module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'bright-sun': {  DEFAULT: '#F8CA42',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#FDF3D6',  '300': '#FCE6A4',  '400': '#FAD873',  '500': '#F8CA42',  '600': '#F6BC11',  '700': '#CC9B08',  '800': '#9B7506',  '900': '#6A5004'},
        'amethyst-smoke': {  DEFAULT: '#A089AB',  '50': '#FFFFFF',  '100': '#FFFFFF',  '200': '#E8E2EB',  '300': '#D0C5D5',  '400': '#B8A7C0',  '500': '#A089AB',  '600': '#886B96',  '700': '#6D5678',  '800': '#52405B',  '900': '#372B3D'},
      },
    },
  },
  variants: {},
  plugins: [],
}
