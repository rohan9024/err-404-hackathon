/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            'neue' : ['NeueHaasDisplayBlack'],  // after you font, add some fonts separated by commas to handle fallback.
        }
    }
  },
  plugins: [],
}