import textStroke from '@designbycode/tailwindcss-text-stroke';
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    // ... 기타 경로
  ],
  plugins: [
    textStroke,
  ],

  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)", "ui-sans-serif", "system-ui"],
      },
    },
  },
};

export default config;