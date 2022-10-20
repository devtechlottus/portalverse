/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        "12.5": "3.125rem",
        "8.5": "2.125rem",
        18: "4.5rem",
        22: "5.5rem",
      },
      fontSize: {
        "5.5": "1.375rem",
        "8.5": "2.125rem",
        10: "2.5rem",
        13: "3.25rem",
      },
      lineHeight: {
        "5.2": "1.3rem",
        "8.6": "2.172rem",
        "12.5": "3.125rem",
        "16.25": "4.063rem",
      },
      colors: {
        "SC-Actions-AC-200": "#F2F2F2",
        "SC/Blackandgrey/B-60": "#686868",
        "SC/Backgrounds/BG-GRAY": "#F2F2F2",
        "Brands/UANE/Primary/UANE-P-00": "#B0003C",
        "UNI-066": "#555555",
        "dark": "#282828",
      },
      fontFamily: {
        "Nunito": ["Nunito"],
        "Poppins": ["Poppins"],
      }
    },
  },
  plugins: [],
}