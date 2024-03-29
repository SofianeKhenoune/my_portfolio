/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    colors: {
      light: 'hsl(220,32%,40%)',
      dark: 'hsl(234 84% 10%)',
      medium: 'hsl(215, 50%, 15%)',
      button: '#59ffff',
      buttonHover: 'hsl(215, 50%, 30%)',
    },
    fontFamily: {
      body: ['Gothic A1', 'Verdana', 'Tahoma', 'Arial', 'sans-serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
};
