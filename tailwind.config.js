// @ts-check
/**
 * @type {import('tailwindcss').Config}
 */

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
      screens: {
        '2xl': { max: '1700px' },
        'xl': { max: '1360px' },
        'lg': { max: '1134px' },
        'md': { max: '970px' },
        'sm': { max: '784px' },
        'xs': { max: '600px' },
        'xxs': { max: '530px' },
      },
    },
  },
  plugins: [],
};
