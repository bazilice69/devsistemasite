/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fundo e superfícies
        base: '#050509',
        surface: '#0b0b14',
        card: '#0f0f1b',
        // Neons da marca
        roxo: {
          DEFAULT: '#A855F7',
          soft: '#8B5CF6',
        },
        azul: {
          DEFAULT: '#00A3FF',
          soft: '#2563EB',
        },
        // Textos
        claro: '#F5F5F5',
        suave: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradiente-marca': 'linear-gradient(120deg, #A855F7 0%, #2563EB 100%)',
        'gradiente-suave': 'linear-gradient(120deg, rgba(168,85,247,0.15) 0%, rgba(37,99,235,0.15) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(168,85,247,0.45)',
        'glow-azul': '0 0 40px -8px rgba(0,163,255,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};
