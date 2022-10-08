/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0095F6",
        facebook: "#385185",
        link: "#00376B"
      },
      backgroundImage: {
        'phone-pattern': 'url(https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png)'
      }
    },
  },
  plugins: [],
}
