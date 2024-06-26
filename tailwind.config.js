/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-color": "#0D0D0D",
        "light-blue-color": "#0D0D0D",

      },
      backgroundColor: {
        "primary-color": "#f9f9f9",
        "secandory-color": "#059adf28",
        "hover-bg" : 'rgba(128, 128, 128, 0.105)'
      },
      fontFamily : {
        "text-family" : "Poppins, sans-serif",
        "heading-family" : "Nunito, sans-serif"
      }
    },
  },
  plugins: [],
};
