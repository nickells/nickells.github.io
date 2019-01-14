// require index.html so livereload will watch it
const index = require('../../index.html') // eslint-disable-line no-unused-vars
const clock = require('./clock')
const gate = require('./gate')
const updateYear = require('./year')


clock.start()
updateYear()
if ('ontouchstart' in window) gate()