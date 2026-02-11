// Import styles
import '../styles/index.less'

// Import modules
import clock from './clock.js'
import gate from './gate.js'
import '../components/cursor-trail.js'
import './videos.js'
import '../components/site-footer.js'
import '../components/google-analytics.js'

import move from './mover.js'
move()

clock.start()
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