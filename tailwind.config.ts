import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ink: '#0A0A0A',
        abyss: '#0D0D0D',
        obsidian: '#111111',
        gold: '#C9A55C',
        brass: '#A98842',
        cream: '#F5F0E8',
        parchment: '#E8E0D0',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(201,165,92,0.35), 0 22px 55px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 25% 30%, rgba(201,165,92,0.1), transparent 45%), radial-gradient(circle at 80% 15%, rgba(245,240,232,0.08), transparent 40%), linear-gradient(140deg, #0A0A0A 0%, #0D0D0D 55%, #111111 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
