/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#061f46',
          'navy-light': '#123e77',
          blue: '#123e77',
          'blue-light': '#eaf2ff',
          'blue-hover': '#092754',
          teal: '#123e77',
          gold: '#f3bf28',
          ink: '#122747',
          muted: '#65758b',
          line: '#dce4ee'
        },
        dt: {
          navy: '#061f46',
          'navy-dark': '#041329',
          'navy-bottom': '#04152f',
          blue: '#123e77',
          gold: '#f3bf28',
          'gold-dark': '#bd8b09',
          'gold-accent': '#986800',
          'gold-shadow': '#c99308',
          'gold-soft': '#fff5d8',
          cream: '#f7f9fc',
          'cream-alt': '#fbf8f0',
          ink: '#122747',
          muted: '#65758b',
          line: '#dce4ee',
          'hero-start': '#f2f6f3',
          'hero-end': '#e7efeb'
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'dt-button': '0 4px 0 #c99308',
        'dt-card': '0 15px 40px rgba(16, 44, 77, 0.04)',
        'dt-photo': '0 20px 60px rgba(8, 33, 64, 0.18)',
        'dt-note': '0 12px 35px rgba(16, 44, 77, 0.12)',
        'soft-sm': '0 2px 8px rgba(6, 31, 70, 0.05)',
        'soft-md': '0 6px 20px rgba(6, 31, 70, 0.08)',
        'soft-lg': '0 12px 32px rgba(6, 31, 70, 0.12)'
      },
      borderRadius: {
        'dt-card': '16px',
        'dt-photo': '14px',
        'dt-btn': '10px'
      }
    },
  },
  plugins: [],
}
