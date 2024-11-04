import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tiempos: "var(--font-tiempos)",
        averta: "var(--font-averta)",
        inter: "var(--font-inter)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryYellow: "#D3AF22",
        secondaryYellow: "#C49700",
        opacYellow: "rgba(211, 175, 34, 0.04)",
        primaryBlue: "#021753",
        textBlue: "#001342",
        darkGrey: "#343434",
        lightGrey: "#747474",
        customBlack: "#1F1F1F",
      },
      dropShadow: {
        "3xl": "-6px 6px 4px rgba(0, 0, 0, 0.08)",
        "4xl": "-12px 12px 4px rgba(0, 0, 0, 0.08)",
        "custom-light": "0px 4px 6px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(-45deg, #021859 60%, #0434BF 100% )",
        "yellow-white-gradient":
          "linear-gradient(90deg, #C49700 0%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
