/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/bg1.svg')",
        'hero1' :"url('../src/assets/0af694b75b33f7c2d90015dd00d4757a.png')",
        'product-bg': "url('../src/assets/product-bg.png')"
      }
    },
  },
  plugins: [],
}