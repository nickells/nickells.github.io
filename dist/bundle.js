/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function clock() {
  const $secondHand = document.getElementById('seconds')
  const $minuteHand = document.getElementById('minutes')
  const $hourHand = document.getElementById('hours')

  const update = () => {
    let time = new Date()
    let hours = time.getHours() % 12
    let minutes = time.getMinutes() 
    let seconds = time.getSeconds() % 60
    let milliseconds = time.getMilliseconds()

    let secondsAngle = (360 * (seconds / 60)) + (( 360 / 60 ) * (milliseconds / 1000))
    let minutesAngle = (360 * (minutes / 60)) + (secondsAngle / 60)
    let hoursAngle = (360 * (hours / 12)) + (minutesAngle / 60)

    $secondHand.style.transform = `rotate(${secondsAngle}deg)`
    $minuteHand.style.transform = `rotate(${minutesAngle}deg)`
    $hourHand.style.transform = `rotate(${hoursAngle}deg)`

  }

  function loop(){
    // console.log('loop')
    update()
    requestAnimationFrame(loop)
  }

  return {
    start: () => {
      requestAnimationFrame(loop)
    }
  }
}

module.exports =  clock()

/***/ }),
/* 1 */
/***/ (function(module, exports) {

const links = Array.from(document.querySelectorAll("a[data-unfriendly]"))

const hijack = (evt) => {
  const oldDom = evt.target.innerHTML
  evt.preventDefault()
  evt.stopPropagation()
  const dom = `
    note: I didn't really build this with your touch device in mind. It might not work.

    Continue?
    <div>
      <button class="no">No</button><button class="yes">Yes</button>
    </div>
  `
  const $warning = document.createElement('div')
  $warning.classList.add('gate')
  $warning.innerHTML = dom
  document.body.appendChild($warning)
  $warning.getElementsByClassName('no')[0].addEventListener('touchend', () => {
    setTimeout(() => {

      document.body.removeChild($warning)
    }, 500)
  })
  $warning.getElementsByClassName('yes')[0].addEventListener('touchend', () => {
    window.location.href = evt.currentTarget.href
  })
}

const hijackLinks = () => {
  console.log('doing')
  links.forEach(elem => elem.addEventListener('click', hijack))
}

module.exports = hijackLinks

/***/ }),
/* 2 */
/***/ (function(module, exports) {

console.log('hi')

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const grid_size = 18;
const font_size = 18;
const particle_duration = 800;
const explosion_count = 50;
const trail_width = 300;
const trail_delay = 0


const size = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width * 2;
  canvas.height = height * 2;
  
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  console.log(canvas.style)
  canvas.getContext('2d').scale(2,2)

  context.textBaseline = "middle";
  context.textAlign = "center";
}

size()

window.addEventListener("resize", () => {
  size()
});

const cursorGlyph = "↖";
const trailGlyph = "･✻◦✷✧○❋";

let trail = [];

let glyphCanvases = []
let cursorCanvas = undefined

const renderSeed = () => {
  const glyphs = [...trailGlyph, cursorGlyph]
  glyphs.forEach((glyph, idx) => {
    const newCanvas = document.createElement('canvas')
    newCanvas.width = font_size * 2
    newCanvas.height = font_size * 2
    newCanvas.style.width = `${font_size}px`;
    newCanvas.style.height = `${font_size}px`;
    const newContext = newCanvas.getContext('2d')
    newContext.scale(2,2)
    newContext.fillStyle = "black"
    newContext.font = `${font_size}px Monaco`;
    newContext.textAlign = 'center'
    newContext.textBaseline = 'middle'  
    newContext.fillText(glyph, font_size / 2, font_size / 2)
    if (glyph !== cursorGlyph) {
      glyphCanvases.push(newCanvas)
    }
    else cursorCanvas = newCanvas
  })
}

renderSeed()

const toGrid = (x, y) =>{
  return [
    Math.round(x / grid_size) * grid_size,
    Math.round(y / grid_size) * grid_size,
  ]
}

document.body.addEventListener("mousedown", (e) => {
  const [originX, originY] = [e.clientX, e.clientY]

  // get x and y for an explosion
  for (let i = 0; i < explosion_count; i++) {
    const randomX = Math.floor((Math.random() * trail_width) - trail_width / 2);
    const randomY = Math.floor((Math.random() * trail_width) - trail_width / 2);
    trail.unshift({
      originX,
      originY, 
      deltaX: randomX,
      deltaY: randomY,
      start: performance.now(),
      char: Math.floor(Math.random() * glyphCanvases.length)
    });
  }
 })

document.body.addEventListener("mousemove", (e) => {
  const [originX, originY] = [e.clientX, e.clientY]

  // if no last cursor, "mock" it with this cursor's values
  const lastCursor = trail[0] || {
    originX,
    originY
  }
  
  // debouncer
  const [movementX, movementY] = toGrid(originX - lastCursor.originX, originY - lastCursor.originY)
  if (trail[0] && movementX === 0 && movementY === 0) return

  // calculate eventual spread location
  for (let i = 0; i < 1; i++) {
    const randomX = Math.floor((Math.random() * trail_width) - trail_width / 2);
    const randomY = Math.floor((Math.random() * trail_width) - trail_width / 2);

    trail.unshift({
      originX,
      originY, 
      deltaX: randomX,
      deltaY: randomY,
      start: performance.now(),
      char: Math.floor(Math.random() * trailGlyph.length)
    });
  }
  
});


const render = () => {


  context.clearRect(0, 0, canvas.width, canvas.height)
  const [cursor, ...tail] = trail;

  tail.forEach((item, index) => {
    const life = performance.now() - item.start;
    
    // don't render yet if under delay time
    if (life < trail_delay) return
    
    const adjustedLifespan = life - trail_delay
    
    // don't render if it's over the duration
    if (adjustedLifespan > particle_duration) {
      trail.pop()
      return
    }
    
    const lifeRatio = adjustedLifespan / particle_duration

    // calculate decreasing text size as function of life
    const textSize = font_size - lifeRatio * font_size;

    // calculate spread position as function of life
    const [spreadX, spreadY] = [
      item.deltaX * lifeRatio,
      item.deltaY * lifeRatio]
    
    // add spread to origin
    const [resultX, resultY] = toGrid(item.originX + spreadX, item.originY + spreadY)
    
    // offset location so we can still center the particle
    let adjustedX = resultX - (textSize / 2)
    let adjustedY = resultY - (textSize / 2)

    // render
    const char = item.char

    context.drawImage(
      glyphCanvases[char], // img
      adjustedX, // x 
      adjustedY, // y
      Math.round(textSize), // x height
      Math.round(textSize)  // y height
    )
  });

  requestAnimationFrame(render);
  

};

render();

module.exports = {
  render
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

const $year = document.getElementById('year')

const update = () => {
  $year.innerText = new Date().getFullYear()
}

module.exports = update

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// require index.html so livereload will watch it
const clock = __webpack_require__(0)
const gate = __webpack_require__(1)
const { render: renderTrails } = __webpack_require__(2)
const updateYear = __webpack_require__(3)

renderTrails()
clock.start()
updateYear()
if ('ontouchstart' in window) gate()

console.log('YELLOS')

/***/ })
/******/ ]);