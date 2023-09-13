/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./publicc/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', ' sans-serif']
      },
      colors: {
        'coffee': {
          50: '#E8E6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838'
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.7s ease-in-out'
      },
      backgroundImage: {
        'slider-bg': 'url("./images/slider.jpg")'
      }
    },
  },
  plugins: [],
}

