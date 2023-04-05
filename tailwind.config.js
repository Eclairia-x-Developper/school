/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1300px',
    },
    extend: {
      colors: {
        primaryColor: 'rgba(0, 2, 57, 1)',
      },
      fontFamily: {
        sofia: "'Sofia', sans-serif",
        dmsans: "'DM Sans', sans-serif",
        paralucent: "'Paralucent', sans-serif",
        helvetica: "'Helvetica', sans-serif",
        inter: "'Inter var', sans-serif",
      },
      boxShadow: {
        primary: '4px 4px 20px rgba(142, 202, 230, 0.3)',
      },
      fontSize: {
        md: '18px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
