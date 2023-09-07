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
    extend: {
      backgroundImage: {
        'wp-project': "bg-[url('/img/chaletsetcaviar.png')]",
        'html_css-project': "url('/img/lesfilmsdepleinair.png')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
