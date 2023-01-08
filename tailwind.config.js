/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        "primary":"#404eed",
        "discord-grey":"#36393f",
      
      },
      backgroundImage:{
        "login-bg":"url('./src/assets/login_bg.svg')"
      }

    },
  },
  plugins: [],
}
