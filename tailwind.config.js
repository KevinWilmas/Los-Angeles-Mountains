/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          a: "#414f6b",
        },
      },
      fontFamily: {
        Oswald: ["Oswald"],
        Lato: ["Lato"],
      },
    },
  },
  plugins: [],
};
