/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        lg: "1920px",
        xl: "3840px",
      },
      colors: {
        inputs: "#155DA4",
        main: "#292929",
        "main-dark": "#f5f5f5",
        secondary: "#B0B0B0",
        accent: "#F2F2F2",
        "accent-dark": "#3E3E3E",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
