/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarygray: "#f8f8f8",
        qblack: "rgb(var(--secondary-color))",
        qyellow: "rgb(var(--primary-color))",
        qred: "#EF262C",
        qgray: "#797979",
        qblacktext: "#1D1D1D",
        qgraytwo: "#8E8E8E",
        btnHovercolor: "rgb(29 78 216 / 36%)",
        "qgray-border": "#EFEFEF",
        "qblue-white": "#CBECFF",
        "qh2-green": "#2D6F6D",
      },
      scale: {
        60: "0.6",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["focus-within"],
      borderColor: ["last"],
      space: ["responsive", "direction"],
    },
  },
  plugins: [],
};
