/**
 * * JS
 */
import { example } from './js/example.js'
console.log(example())

/**
 * * SASS
 */
import './styles/index.scss'

/**
 * * Images
 */
import webpackLogo from './images/webpack-logo.svg'
const logo = document.createElement('img')
logo.src = webpackLogo

import cube from './images/cube.jpg'
const img = document.createElement('img')
img.src = cube

/**
 * * Class properties
 */
class Test {
  heading = "Some string"
}

let test = new Test

const heading = document.createElement('h1')
heading.textContent = test.heading

/**
 * * Public folder
 */
import cube2 from './../public/cube2.jpg'
const img2 = document.createElement('img')
img2.src = cube2

/**
 * * Append to the DOM
 */
const app = document.querySelector('#root')
app.append(logo, heading, img, img2)


