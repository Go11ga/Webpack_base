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
 * * Image
 */
import webpackLogo from './images/webpack-logo.svg'
const logo = document.createElement('img')
logo.src = webpackLogo

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
 * * Public dir
 */
import pic from '../public/cube.jpg'
const img = document.createElement('img')
img.src = pic

/**
 * * Append to the DOM
 */
const app = document.querySelector('#root')
app.append(logo, heading, img)


