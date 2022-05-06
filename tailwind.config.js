module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/home.jpg')"
        
      },
      fontFamily:{
        'main':['"Taviraj"', 'serif']
      },
      colors: {
        rosebrown: {
          
          100: 'rgb(187,152,148)'
        
        }
      }
    }
  },
  plugins: [],
}
