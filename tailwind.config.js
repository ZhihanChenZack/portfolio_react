/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/hero-pattern.jpg')",
      },
      borderRadius: {
        xl: "20px",
      },
      colors: {
        primary: "#000000",
        secondary: "#59C378",
        tertiary: "#F48D14",
        quaternary: "#DD49CE",
        text: "#ffffff",
        yellow: "#FFE600",
        boxContainer: "#222222",
      },
      boxShadow: {
        skillBoxShadow: "0px 0px 5px 6px rgba(255, 255, 255, 0.27);",
      },
    },
  },
  plugins: [require("daisyui")],
};
