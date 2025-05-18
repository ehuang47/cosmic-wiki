/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/cw-ui/src/**/*.{js,ts,jsx,tsx}',
    './libs/shared-ui/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
