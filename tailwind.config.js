/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      screens: {
        "xs" : '460px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        transparent: 'transparent',
        blue: '#00B9AD',
        gray: '#606E71',
        white: '#FFFFFF',
        orange : '#F2A330'
       
      },
      fontFamily: {
        'nasalization': ['nasalization', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'steelfish': ['steelfish', 'sans-serif'],
    
      },
      extend: {
        textColor: ['active'],   
    },
    },
  },
  plugins: [],
}
