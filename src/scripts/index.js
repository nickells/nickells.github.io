// Import styles
import '../styles/index.less'

// Import modules
import clock from './clock.js'
import gate from './gate.js'
import { render as renderTrails } from './trails.js'
import updateYear from './year.js'

renderTrails()
clock.start()
updateYear()
if ('ontouchstart' in window) gate()

console.log('YELLOS')