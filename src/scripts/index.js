// require index.html so livereload will watch it
const index = require('../../index.html') // eslint-disable-line no-unused-vars
const clock = require('./clock')

console.log(clock)

clock.start()