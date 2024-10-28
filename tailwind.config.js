/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage: {
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)"
      },
      boxShadow: {
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        glow: { // Define the glow animation from golden to dark pink
          '0%': { boxShadow: '0 0 20px 10px rgba(255, 215, 0, 0.7)' }, // Start with golden
          '50%': { boxShadow: '0 0 30px 15px rgba(255, 20, 147, 1)' }, // Transition to dark pink
          '100%': { boxShadow: '0 0 20px 10px rgba(255, 215, 0, 0.7)' }, // Back to golden
        },
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
        glow: 'glow 2s infinite', // Use the glow animation
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
