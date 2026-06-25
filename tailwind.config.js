/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"],
      },
      animation: {
        "slide-right": "slideRight 1s linear forwards",
        "slide-left": "slideLeft 1s linear forwards",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-20vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
