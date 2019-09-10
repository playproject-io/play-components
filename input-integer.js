const brand = require('playproject-brand')

// const fionasinputinteger = require('fionas-input-integer')

module.exports = inputInteger

function inputInteger (opts, protocol) {
  const input = document.createElement('input')
  input.placeholder = `@todo: implement themed input-integer component`
  return input
  // opts.theme = brand.theme
  // return fionasinputinteger(opts, protocol)
}