/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "primary": '#8C357F',
        'secondary': '#2a0a33',
        'celeste': '#19CAFE',
        'naranja': '#FC5C21',
        'blanco': '#fff',
        'gris': '#EFEFEF',
        'hover-primary': '#753787',
        'hover-celeste': '#A8EBFF',
        'black': '#000'
      }
    },
  },
  plugins: [],
};
