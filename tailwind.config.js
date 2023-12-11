/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Space Grotesk", "Arial", "Sans-serief"],
      },

      fontSize: {
        default: "18px",
      },
      backgroundImage: {
        desktop: "url('/images/bg-main-desktop.png')",
        mobile: "url('/images/bg-main-mobile.png')",
        "front-card": "url('/images/bg-card-front.png')",
        "back-card": "url('/images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
