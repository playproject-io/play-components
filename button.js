const brand = require('playproject-brand')

// const ninasbutton = require('ninas-button')

module.exports = button

function button (opts, protocol) {
  const button = document.createElement('button')
  button.textContent = `@todo: implement themed button component`
  return button
  // opts.theme = brand.theme
  // return ninasbutton(opts, protocol)
}