/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand primaries
        primary: '#000D23',
        'primary-container': '#10233F',
        'on-primary': '#FFFFFF',
        'on-primary-container': '#798BAC',
        'inverse-primary': '#B5C7EB',

        // Accent (secondary in Stitch)
        accent: '#005BBE',
        secondary: '#005BBE',
        'secondary-container': '#5494FF',
        'on-secondary': '#FFFFFF',
        'on-secondary-container': '#002D64',
        'secondary-fixed': '#D7E2FF',
        'secondary-fixed-dim': '#ACC7FF',
        'on-secondary-fixed': '#001A40',
        'on-secondary-fixed-variant': '#004491',

        // WhatsApp green – ONLY for WhatsApp/chat actions
        whatsapp: '#16A34A',

        // Tertiary
        tertiary: '#001103',
        'tertiary-container': '#002A0D',
        'on-tertiary': '#FFFFFF',
        'on-tertiary-container': '#0D9F47',
        'tertiary-fixed': '#7FFC97',
        'tertiary-fixed-dim': '#62DF7D',
        'on-tertiary-fixed': '#002109',
        'on-tertiary-fixed-variant': '#005320',

        // Surfaces
        surface: '#F5F7FA',
        'surface-dim': '#D8DADD',
        'surface-bright': '#F7F9FC',
        'surface-container-lowest': '#FFFFFF',
        'surface-container-low': '#F2F4F7',
        'surface-container': '#ECEEF1',
        'surface-container-high': '#E6E8EB',
        'surface-container-highest': '#E0E3E6',
        'surface-tint': '#4D5F7E',
        'surface-variant': '#E0E3E6',

        // On surface
        'on-surface': '#191C1E',
        'on-surface-variant': '#44474D',
        'inverse-surface': '#2D3133',
        'inverse-on-surface': '#EFF1F4',

        // Outlines / borders
        outline: '#75777E',
        'outline-variant': '#C5C6CE',
        border: '#E2E8F0',

        // Background
        background: '#F5F7FA',
        'on-background': '#191C1E',

        // Error
        error: '#BA1A1A',
        'on-error': '#FFFFFF',
        'error-container': '#FFDAD6',
        'on-error-container': '#93000A',

        // Primary fixed
        'primary-fixed': '#D6E3FF',
        'primary-fixed-dim': '#B5C7EB',
        'on-primary-fixed': '#071B37',
        'on-primary-fixed-variant': '#364765',
      },
      fontFamily: {
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      animation: {
        'slide-down': 'slideDown 0.2s ease-out',
        float: 'float 3s ease-in-out infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
