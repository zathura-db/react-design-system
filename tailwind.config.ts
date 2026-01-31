import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Include Storybook and story files so Tailwind's JIT doesn't purge classes used in stories
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.stories.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBlack: "#131A25",
        themeRed: "#ED0101",
        themeRedOffset: "#C70000",
        themeOrange: "#ED7701",
        themeGreen: "#009500",
        themeBlue: "#0177ED",
        themePurple: "#7701ED",
      },
      borderColor: {
        themeBlack: "#131A25",
        themeRed: "#ED0101",
        themeRedOffset: "#C70000",
        themeOrange: "#ED7701",
        themeGreen: "#009500",
        themeBlue: "#0177ED",
        themePurple: "#7701ED",
      },
      outlineColor: {
        themeBlack: "#131A25",
        themeRed: "#ED0101",
        themeRedOffset: "#C70000",
        themeOrange: "#ED7701",
        themeGreen: "#009500",
        themeBlue: "#0177ED",
        themePurple: "#7701ED",
      },
    },
    variants: {
      extend: {
        visibility: ["group-hover"],
      },
    },
  },
  plugins: [],
  safelist: [
    // bg
    "bg-themeOrange",
    "bg-themeBlue",
    "bg-themeGreen",
    "bg-themeRed",
    "bg-themePurple",
    "bg-themeBlack",
    // border
    "border-themeOrange",
    "border-themeBlue",
    "border-themeGreen",
    "border-themeRed",
    "border-themePurple",
    "border-themeBlack",
    // text (if used)
    "text-themeOrange",
    "text-themeBlue",
    "text-themeGreen",
    "text-themeRed",
    "text-themePurple",
    "text-themeBlack",
    // outline (if used)
    "outline-themeOrange",
    "outline-themeBlue",
    "outline-themeGreen",
    "outline-themeRed",
    "outline-themePurple",
    "outline-themeBlack",
  ],
};
export default config;
