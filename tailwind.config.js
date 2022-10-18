/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        "12.5": "3.125rem",
        18: "4.5rem",
      },
      fontSize: {
        "5.5": "1.375rem",
        "8.5": "2.125rem",
        13: "3.25rem",
      },
      lineHeight: {
        "8.6": "2.172rem",
        "16.25": "4.063rem",
      },
      colors: {
        "SC-Actions-AC-200": "#F2F2F2",
        "UNI-066": "#555555",
      },
      fontFamily: {
        "Nunito": ["Nunito"],
        "Poppins": ["Poppins"],
      }
    },
  },
  plugins: [],
}