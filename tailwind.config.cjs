/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        'greyIsh': '#e4e7eb',
        'cardShadow': '#e3e6e9',
        'textColor': '#1a212c',
      }
    },
  },
  plugins: [],
}
