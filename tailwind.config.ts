import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme tokens
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-subtle': 'var(--color-surface-subtle)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['40px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1-md': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'h2-md': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['22px', { lineHeight: '1.4', fontWeight: '650' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'label': ['13px', { lineHeight: '1.4', fontWeight: '600' }],
        'technical': ['13px', { lineHeight: '1.4', fontWeight: '500' }],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        full: '999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.06)',
        elevated: '0 8px 24px rgba(15, 23, 42, 0.08)',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '120': '120px',
      },
      maxWidth: {
        content: '1200px',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
