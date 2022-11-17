/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  // content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      center: true,
      screens: {
        xl:'1170px'  
      }
    },
    extend: {
      backgroundImage:{
        'home-bg':'linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)',
        'member-bg':'linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%)',
        'community-bg':'linear-gradient(0deg, rgba(241, 246, 253, 0) 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%);',
        'fahmi-img':"url('/css/assets/Fahmi.svg')",
        'Kanji-img':"url('/css/assets/Kanji.svg')",
        'Masterio-img':"url('/css/assets/ali.png')",
        'Alia-img':"url('/css/assets/karon.png')",
        'yellow-bg':"linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)",
        'red-bg':"linear-gradient(154.49deg, #FF858A 6.61%, #F04148 89.72%)",
        'abstrack':"url('/css/assets/Abstrack.png)"
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
