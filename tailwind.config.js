/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./.storybook/**/*.{js,jsx,ts,tsx,mdx}"
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          foreground: '#ffffff'
        }
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
};
