import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        "test": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;