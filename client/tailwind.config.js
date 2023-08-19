/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#F68400',
      secondary: '#254A7E',
      neutral: '#EDF2F6',
      plain: '#FFFFFF',
      font: {
        dark: '#0F172A',
        base: '#334155',
        light: '#CBD5E1',
        white: '#FFFFFF',
        link: '#2563EB',
        warning: '#FF2020',
      },
    },
  },
  plugins: [],
};
