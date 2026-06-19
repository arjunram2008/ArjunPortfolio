/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        midnight: '#05060a',
        graphite: '#0b0d14',
        surface: '#10131d',
        'surface-soft': 'rgba(255,255,255,0.055)',
        line: 'rgba(255,255,255,0.10)',
        muted: '#9aa3b2',
        frost: '#f7f8ff',
        electric: '#7c6dff',
        cyan: '#25d8ff',
        aurora: '#b86cff',
        ember: '#ffb86c',
      },
      boxShadow: {
        glow: '0 0 44px rgba(124,109,255,0.28)',
        card: '0 24px 80px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.08)',
        halo: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 55px rgba(7,10,23,0.55)',
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
        'hero-glow': 'radial-gradient(circle at 20% 20%, rgba(124,109,255,0.30), transparent 34%), radial-gradient(circle at 80% 10%, rgba(37,216,255,0.18), transparent 31%), radial-gradient(circle at 50% 90%, rgba(184,108,255,0.20), transparent 38%)',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 3.6s linear infinite',
        'slow-spin': 'slowSpin 18s linear infinite',
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
