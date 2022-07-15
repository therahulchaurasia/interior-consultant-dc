/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ["Crimson Pro", "serif"],
        Lora: ["Lora", "serif"],
        Monts: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xss: "0.625rem",
      },
      boxShadow: {
        shd: "0px 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xxsm: "450px",
        xmd: "886px",
        xxmd: "930px",
        mlg: "1030px",
      },
    },
  },
  plugins: [],
};
