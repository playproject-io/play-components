const brand = require('playproject-brand')

// require('play-components/input-integer')
const InputInteger = require('../input-integer')
// require('play-components/button')
const Button = require('../button')

module.exports = playComponents

function playComponents () {
  const container = document.createElement('div')
  const button = Button()
  const input = InputInteger()
  container.innerHTML = `<h1>
    @todo: make page to demo all components
  </h1>`
  container.appendChild(button)
  container.appendChild(input)
  return container
}