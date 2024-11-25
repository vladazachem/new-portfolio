/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#EDE8E4',
        text: '#181410',
        blue: '#2570BB',
        highlight: '#F06543',
      },
    },
  },
  plugins: [],
};
