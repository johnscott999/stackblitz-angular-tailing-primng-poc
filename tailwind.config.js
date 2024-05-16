import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: { files: ['./src/**/*.{html,js,ts}'], extract },
  theme: {
    screens,
    fontSize,
    extend: {},
  },
  plugins: [fluid],
};
