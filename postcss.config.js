module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('@davidwells/postcss-math'),
    require('postcss-extend'),
    require('tailwindcss/nesting'),
    require('postcss-flexbugs-fixes'),
    require('tailwindcss')("tailwind.config.js"),
    require('autoprefixer')

  ],
}
