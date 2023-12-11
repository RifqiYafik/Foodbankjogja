/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/src/assets/circle-right.svg")',
      },
      backgroundImage: {
        hero: "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
