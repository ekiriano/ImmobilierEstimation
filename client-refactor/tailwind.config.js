module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/hero.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
