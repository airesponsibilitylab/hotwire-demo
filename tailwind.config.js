module.exports = {
  mode: 'jit',
  content: [
    // all application views
    './app/views/**/*.html.erb',
    // view helpers
    './app/helpers/**/*.rb',
    // all JS
    './app/javascript/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
