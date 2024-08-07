import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./ui/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./features/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { raw: "(min-width: 375px)" },
      },
      backgroundImage: {
        profile: "url('/background.jpg')",
      },
      colors: {
        primary: {
          DEFAULT: "#242760",
          darker: {
            100: "#242752",
          },
        },
        gray: {
          DEFAULT: "#544C4C",
          100: "#C7C6C5",
          200: "#EAE9E9",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
