import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./ui/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./features/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        profile: "url('/public/background.jpg')",
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
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
