/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme'); // Import defaultTheme to extend fonts

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: { // Use 'extend' to add/override without removing default Tailwind colors
      colors: {
        // Your custom 'primary' color scale
        primary: {
          50:  '#FCFCFC', 
          100: '#FBFBFB', 
          200: '#F8F8F8', 
          300: '#F4F4F4', 
          400: '#C7C7C7', 
          500: '#8A8A8A', 
          600: '#4D4D4D', 
          700: '#2F333B', 
          800: '#1B1F26', 
          900: '#12151B', 
          950: '#090909', 
        },
      },
      fontFamily: {
        // Set Plus Jakarta Sans as the primary sans-serif font
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans], 
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.75rem'],
        lg: ['1.125rem', '2rem'],
        xl: ['1.25rem', '2.125rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.375rem'],
        '4xl': ['2.25rem', '2.75rem'],
        '5xl': ['3rem', '3.5rem'],
        '6xl': ['3.75rem', '4.25rem'],
      },
    },
  },
  plugins: [],
};
