/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-background': '#c9c2b2', // Example background color
        'brand-text': '#2C3E50', // Example text color
        'brand-primary': '#4A90E2', // Primary color for buttons and accents
        'brand-secondary': '#50E3C2', // Example secondary color
      },
      fontFamily: {
        sans: ['Fustat', 'sans-serif'], // Changed to Fustat font
        serif: ['Merriweather', 'serif'], // Example font family
      },
    },
  },
  plugins: [],
}
