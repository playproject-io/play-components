(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"playproject-brand":4}],2:[function(require,module,exports){
const playcomponents = require('../')

document.body.innerHTML = `<h1>
  @todo: showcase play components
</h1>`

document.body.appendChild(playcomponents())
},{"../":5}],3:[function(require,module,exports){
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
},{"playproject-brand":4}],4:[function(require,module,exports){

module.exports = brand

function brand () {
  const div = document.createElement('div')
  div.innerHTML = `<h1> @todo: make brandbook & styleguide`
  return div
}
},{}],5:[function(require,module,exports){
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
},{"../button":1,"../input-integer":3,"playproject-brand":4}]},{},[2]);
