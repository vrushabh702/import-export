/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure this includes all your files
  theme: {
    extend: {
      colors: {
        blue1: "#03045E",
        blue2: "#023E8A",
        blue3: "#0077B6",
        blue4: "#0096C7",
        blue5: "#00B4D8",
        blue6: "#48CAE4",
        blue7: "#90E0EF",
        blue8: "#ADE8F4",
        blue9: "#CAF0F8",
      },
    },
  },
  plugins: [],
}
