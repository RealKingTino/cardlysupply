/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#fefeff",
          "200": "#7c7b7b",
          "300": "#201f22",
          "400": "#2a2a2b",
          "600": "#00263e",
          "700": "rgba(0, 0, 0, 0.2)",
        },
        darkslategray: {
          "100": "#383838",
          "200": "#333",
          "300": "#393838",
          "500": "#383636",
        },
        darkgray: {
          "100": "#afadad",
          "200": "#999696",
        },
        darkorange: "#f38927",
        skyblue: "#6ec1e4",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
        "rocknroll-one": "'RocknRoll One'",
        "roboto-slab": "'Roboto Slab'",
      },
    },
    fontSize: {
      "8xl": "27px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
