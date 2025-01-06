/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yellowtail: ['"Yellowtail"', 'cursive'], // Custom font configuration
        cinzel: ['"Cinzel"', 'serif'],
        bonheur: ['"Bonheur Royale"', 'cursive'],
        ballet: ['"Ballet"', 'cursive'],
        ebgaramond: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}

