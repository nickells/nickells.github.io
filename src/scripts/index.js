// require index.html so livereload will watch it
const clock = require('./clock')
const gate = require('./gate')
const { render: renderTrails } = require('./trails')
const updateYear = require('./year')

renderTrails()
clock.start()
updateYear()
if ('ontouchstart' in window) gate()

console.log('YELLOS')