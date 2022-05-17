module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'home': "url('./assets/home.png')",
        'ocean': "url('./assets/ocean.jpg')",
        'multi': "url('./assets/multi.jpg')",
        'soulplan': "url('./assets/soulplan.jpg')",

        '01': "url('./assets/multiHealing/1.jpg')",
        '02': "url('./assets/multiHealing/2.jpg')",
        '03': "url('./assets/multiHealing/3.jpg')",
        '04': "url('./assets/multiHealing/4.jpg')",
        '05': "url('./assets/multiHealing/5.jpg')",
        '06': "url('./assets/multiHealing/6.jpg')",
        '07': "url('./assets/multiHealing/7.jpg')",
        '08': "url('./assets/multiHealing/8.jpg')",

        



      },
      fontFamily:{
        'main':['"Taviraj"', 'serif']
      },
      colors: {
        rosebrown: {
          
          100: 'rgb(187,152,148)',
          200: 'rgb(224,206,206)',
          300: 'rgb(146,123,144)',
          500: 'rgb(87,71,85)'
        
        }
      }
    }
  },
  plugins: [],
}
