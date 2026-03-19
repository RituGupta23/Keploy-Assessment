const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    './pages/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        keploy: {
          orange: '#FF6B35',
          dark: '#0f0f0f',
          card: '#1a1a1a',
          border: '#2a2a2a',
          muted: '#888888',
          green: '#22c55e',
          blue: '#3b82f6',
          yellow: '#f59e0b',
        },
      },
    },
  },
};

export default config;
