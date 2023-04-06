/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'peduly-orange': '#E7513B',
        'peduly-black': '#2C2C2C',
        'peduly-gray': '#E4E4E4',
      }
    },
  },
  plugins: [],
}

