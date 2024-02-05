/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      },
      animation: {
        slidein: "slidein 600ms ease-in-out",
        popin: "popin 150ms ease-in-out"
      },
      keyframes: {
        slidein: {
          "0%": {
            opacity: 0,
            transform: 'translateY(-20px)'
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        },
        popin: {
          "0%": {
            transform: 'scale(0)'
          },
          "100%": {
            transform: "scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}