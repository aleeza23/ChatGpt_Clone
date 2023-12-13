/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-color": "#03117e",
        "light-blue-color": "#059adf28",

      },
      backgroundColor: {
        "primary-color": "#03117e",
        "secandory-color": "#059adf28",
      },
      fontFamily : {
        "text-family" : "Poppins, sans-serif",
        "heading-family" : "Nunito, sans-serif"
      }
    },
  },
  plugins: [],
};
