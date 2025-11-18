// Import styles
import '../styles/index.less'

// Import modules
import clock from './clock.js'
import gate from './gate.js'
import { render as renderTrails } from './trails.js'
import updateYear from './year.js'
import './videos.js'

import move from './mover.js'
move()

renderTrails()
clock.start()
updateYear()
if ('ontouchstart' in window) gate()

document.getElementById('grid-toggle').addEventListener('click', () => {
  document.getElementById('projects').classList.add('grid')
  document.getElementById('projects').classList.remove('list')
  document.getElementById('grid-toggle').classList.add('active')
  document.getElementById('list-toggle').classList.remove('active')
})
document.getElementById('list-toggle').addEventListener('click', () => {
  document.getElementById('projects').classList.remove('grid')
  document.getElementById('projects').classList.add('list')
  document.getElementById('grid-toggle').classList.remove('active')
  document.getElementById('list-toggle').classList.add('active')
})
