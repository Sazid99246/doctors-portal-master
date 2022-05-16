module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#19D3AE",
          "secondary": "#0FCFEC",
          "neutral": "#3A4256",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}