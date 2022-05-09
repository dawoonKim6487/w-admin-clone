module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'c-black': '#1d1d1d',
        'c-main': '#90a786',
        'c-main-deep': '#406d51'
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    }
  },
  plugins: [],
}
