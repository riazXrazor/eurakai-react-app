/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      DEFAULT: "#0449d0",
    },
    extend: {
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      smdesktop: { min: "1200px", max: "1440px" },
      mddesktop: { min: "1440px", max: "1920px" },
      lgdesktop: { min: "1920px" },
    },
  },
  plugins: [flowbite.plugin()],
};
