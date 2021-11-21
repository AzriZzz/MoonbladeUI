module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  darkMode: false,
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        moongray: {
          DEFAULT: '#4B5563',
          light: '#F9FAFB'
        },
        moonred: {
          DEFAULT: '#DC2626',
        },
        moonyellow: {
          DEFAULT: '#D97706',
        },
        moongreen: {
          DEFAULT: '#059669',
        },
        moonblue: {
          DEFAULT: '#2563EB',
        },
        moonindigo: {
          DEFAULT: '#4F46E5',
        },
        moonpurple: {
          DEFAULT: '#7C3AED',
        },
        moonpink: {
          DEFAULT: '#DB2777',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};