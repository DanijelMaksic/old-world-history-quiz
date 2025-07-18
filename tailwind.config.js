/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{html,js,jsx}'],
   theme: {
      fontFamily: {
         sans: ['MedievalSharp', 'serif'],
      },

      extend: {
         keyframes: {
            appear: {
               '0%': {
                  opacity: '0',
               },
               '100%': {
                  opacity: '1',
               },
            },
         },
         animation: {
            appear: 'appear 0.2s ease-in-out',
         },
         backgroundImage: {
            'game-art': 'url(./src/game-artwork.jpg)',
         },
      },
   },
   plugins: [],
};
