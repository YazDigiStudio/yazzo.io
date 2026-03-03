/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yazzo: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        background: {
          primary: '#ffffff',
          secondary: '#d1d5db',
          sidebar: '#1f2937',
          card: '#ffffff',
        },
        text: {
          primary: '#111827',
          secondary: '#6b7280',
          tertiary: '#9ca3af',
          inverse: '#ffffff',
        },
      },
      boxShadow: {
        'yazzo': '0 4px 14px 0 rgba(217, 70, 239, 0.39)',
        'yazzo-lg': '0 10px 40px 0 rgba(217, 70, 239, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}