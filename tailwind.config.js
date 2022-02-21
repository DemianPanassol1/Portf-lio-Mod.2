module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      'small': ['12px', '14px'],
      'base': ['16px', '19px'],
      'h5': ['18px', '21px'],
      'h4': ['20px', '23px'],
      'h3': ['24px', '28px'],
      'h2': ['28px', '33px'],
      'h1': ['32px', '38px'],
      'h5xl': ['20px', '23px'],
      'h4xl': ['25px', '29px'],
      'h3xl': ['31px', '36px'],
      'h2xl': ['39px', '48px'],
      'h1xl': ['48px', '56px']
    },
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
    },
    screens: {
      'sm': '480px',
      'md': '640px',
      'lg': '768px',
      'xl': '1200px'
    },
    extend: {
      colors: {
        'primary': '#252526',
        'secondary': '#e5c365',
        'background': '#fcfcfc',
        'black': '#212121',
        'white': '#ffffff'
      },
      maxWidth: {
        'xs': '270px',
        '7xl': '1200px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
