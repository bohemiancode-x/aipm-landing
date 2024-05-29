/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['var(--font-dmsans)']
      },
      backgroundImage: {
        'insights-bg': "url('/assets/cta-bg.png')",
        'cohort-bg': "url('/assets/cohort-date-bg.png')",
        'reviews-bg': "url('/assets/reviews-bg.png')",
        'reviews-bg-mobile': "url('/assets/reviews-bg-mobile.png')",
        'review-card-bg': "url('/assets/review-card-bg.png')",
        'review-card-bg-mobile': "url('/assets/review-card-bg-mobile.png')",
        'tuition-card-bg': "url('/assets/tuition-card-bg.png)",
        'tuition-bg-mobile': "url('/assets/tuition-bg-mobile.png)",
        'instructor-bg-mobile': "url('/assets/instructor-bg-mobile.png)",
        'footer-bg': "url('/assets/footer-bg.png')",
        'course-module-bg-mobile': "url('/assets/course-module-bg-mobile.png')",
        'course-module-bg': "url('/assets/course-module-bg.png')",
        'coordinator-card-bg': "url('/assets/coordinator-card-bg.png')",
        'footer-bg-mobile': "url('/assets/footer-bg-mobile.png')"
      },
      colors: {
        "dark-green": "#012528",
        "deep_green": "#19343F",
        "light-green": "#2BA7AA",
        "grey-green": "#424343",
        "light-grey": "#d9d9d9",
        "medium-grey": "#ebffff"
      }
    },
  },
  plugins: [],
};
