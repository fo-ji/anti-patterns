/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#F68400',
      secondary: '#254A7E',
      neutral: '#EDF2F6',
      font: {
        dark: '#0F172A',
        base: '#334155',
        light: '#CBD5E1',
        warning: '#FF2020',
      },
    },
  },
  plugins: [],
};