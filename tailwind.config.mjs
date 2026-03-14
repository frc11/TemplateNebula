export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#6c4fff",
        accent: "#00e5ff",
        pink: "#ff4daa",
        bg: "#04060f",
        bg2: "#080d1a",
        card: "#0d1225",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        ticker: "ticker 18s linear infinite",
        "fade-up": "fadeUp 0.8s ease both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
