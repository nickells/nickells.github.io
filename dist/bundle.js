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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Nick Ellsworth</title>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n\n<body>\n  <script defer type=\"text/javascript\" src=\"dist/bundle.js\"></script>\n  <section>\n    <h1>Nick Ellsworth's web portfolio</h1>\n    <p id=\"hero\">\n      Nick <nobr>Ellswor<span id=\"th\">th</span></nobr>\n    </p>\n    <h2 id=\"copy\">\n      NYC-based creative web developer. Here's some stuff you may find fun or weird.\n    </h2>\n    <a class=\"thing\" href=\"http://strings.glitch.me/\">\n      <h3><span>Strings</span><span>2018</span></h3>\n      <p>Elastic physics simulation (mostly working)</p>\n    </a>\n    <a class=\"thing\" href=\"http://nickmakes.website/drummer\">\n      <h3><span>Drummer</span><span>2018</span></h3>\n      <p>Procedrual drum loop generator</p>\n    </a>\n    <a class=\"thing\" href=\"http://nickmakes.website/gif-saver/?urls=https://i.imgur.com/frFzz7e.gif,https://ubisafe.org/images/gif-transparent-1.gif\">\n      <h3><span>Gif screen saver</span><span>2018</span></h3>\n      <p>Prevent dead pixels with internet art</p>\n    </a>\n    <a class=\"thing\" href=\"http://nickmakes.website/knob\">\n      <h3><span>Knob</span><span>2016 (updated 2018)</span></h3>\n      <p>Customizable knob interface</p>\n    </a>\n    <a class=\"thing\" href=\"http://nickmakes.website/metronome\">\n      <h3><span>Metronome</span><span>2018</span></h3>\n      <p>Timekeeping device</p>\n    </a>\n    <a class=\"thing\" data-unfriendly href=\"http://nickmakes.website/pillow\">\n      <h3><span>Flip Grid</span><span>2018</span></h3>\n      <p>Hover effect demo</p>\n    </a>\n    <a class=\"thing\" href=\"http://nickmakes.website/spatial-audio\">\n      <h3><span>Ambience Generator</span><span>2017</span></h3>\n      <p>Spatial audio toy for ambient sounds</p>\n    </a>\n    <a class=\"thing\" data-unfriendly href=\"http://www.clavier.party\">\n      <h3><span>Clavier Party</span><span>2017</span></h3>\n      <p>Multiplayer music \"game\"</p>\n    </a>\n    <a class=\"thing\" data-unfriendly href=\"https://codepen.io/nickells/full/gWEPLd/\">\n      <h3><span>CSS Hover card</span><span>2017</span></h3>\n      <p>Matte 3D effect using CSS</p>\n    </a>\n    <a class=\"thing\" href=\"http://chills.network\">\n      <h3><span>Anagrammer</span><span>2017</span></h3>\n      <p>Word-to-word animation demo</p>\n    </a>\n    <a class=\"thing\" href=\"http://nickmakes.website/clumsy-typer\">\n      <h3><span>Clumsy Typer</span><span>2017</span></h3>\n      <p>Semi-useless typing simulation</p>\n    </a>\n    <a class=\"thing\" href=\"http://bpm-count.firebaseapp.com\">\n      <h3><span>BPM Counter</span><span>2016</span></h3>\n      <p>Music tool for counting tempo</p>\n    </a>\n    <a class=\"thing\" href=\"https://chrome.google.com/webstore/detail/delta-for-youtube/ofbfdabicijcdjoeemcgabeeapciibbf\">\n      <h3><span>Delta for Youtube</span><span>2016</span></h3>\n      <p>Subtle Chrome plugin for extra Youtube UI</p>\n    </a>\n    <a class=\"thing\" href=\"https://www.npmjs.com/package/tiny-interpolator\">\n      <h3><span>Tiny Interpolator</span><span>2016</span></h3>\n      <p>Barebones templating NPM module</p>\n    </a>\n    <a class=\"thing\" href=\"http://nickmakes.website/fingerTrainer\">\n      <h3><span>Finger Trainer</span><span>2016</span></h3>\n      <p>Dexterity exercise for symbols on the keyboard</p>\n    </a>\n    <a class=\"thing\" href=\"http://nickmakes.website/slack-emoji-converter/\">\n      <h3><span>Emoji Text Converter</span><span>2015</span></h3>\n      <p>Converts emoji into pasteable text</p>\n    </a>\n    <a class=\"thing\" href=\"https://codepen.io/nickells/full/ZbymYe/\">\n      <h3><span>Burger button</span><span>2015</span></h3>\n      <p>Burger button</p>\n    </a>\n    <a class=\"thing\" data-unfriendly href=\"http://nickmakes.website/keyboard-simulator-2015/\">\n      <h3><span>Keyboard Simulator</span><span>2015</span></h3>\n      <p>Imagine you are using a keyboard while using a keyboard.</p>\n    </a>\n    <a class=\"thing\" href=\"http://blipcrowd.herokuapp.com/\">\n      <h3><span>Blipcrowd</span><span>2015</span></h3>\n      <p>Multiplayer music sequencer</p>\n    </a>\n  </section>\n  <section class=\"dark\">\n    <h2>Other things I do:</h2>\n    <a class=\"thing\" href=\"https://soundcloud.com/nickells/\">\n      <h3><span>Music</span><span>2012 - Now</h3>\n      <p>Bleeps, bloops, and miscellaneous blops</p>\n    </a>\n    <a class=\"thing\" href=\"https://nickellsworth.photography/\">\n      <h3><span>Photography</span><span>2005 - Now</h3>\n      <p>Pixels arranged neatly and with intention</p>\n    </a>\n  </section>\n  <div id=\"clock\">\n    <div class=\"hand minutes\" id=\"minutes\">\n      <div class=\"outer semicircle\"></div>\n      <div class=\"inner semicircle\"></div>\n    </div>\n    <div class=\"hand hours\" id=\"hours\">\n      <div class=\"outer semicircle\"></div>\n      <div class=\"inner semicircle\"></div>\n    </div>\n    <div class=\"hand seconds\" id=\"seconds\">\n      <div class=\"outer semicircle\"></div>\n      <div class=\"inner semicircle\"></div>\n    </div>\n  </div>\n  <footer>\n    <span>Copyright © <span id=\"year\">2019</span> Nick&nbsp;Ellsworth</span>\n    <a href=\"https://github.com/nickells\">Github</a>\n    <a href=\"https://www.linkedin.com/in/nickells/\">LinkedIn</a>\n    <a href=\"https://twitter.com/nickells\">Twitter</a>\n  </footer>\n  <!-- Google Analytics -->\n  <script>\n    (function (i, s, o, g, r, a, m) {\n      i['GoogleAnalyticsObject'] = r;\n      i[r] = i[r] || function () {\n        (i[r].q = i[r].q || []).push(arguments)\n      }, i[r].l = 1 * new Date();\n      a = s.createElement(o),\n        m = s.getElementsByTagName(o)[0];\n      a.async = 1;\n      a.src = g;\n      m.parentNode.insertBefore(a, m)\n    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n\n    ga('create', 'UA-71299429-1', 'auto');\n    ga('send', 'pageview');\n  </script>\n  <!-- End Google Analytics -->\n\n\n</body>\n\n</html>"

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// require index.html so livereload will watch it
const index = __webpack_require__(0) // eslint-disable-line no-unused-vars
const clock = __webpack_require__(1)
const gate = __webpack_require__(2)
const updateYear = __webpack_require__(4)


clock.start()
updateYear()
if ('ontouchstart' in window) gate()

/***/ }),
/* 4 */
/***/ (function(module, exports) {

const $year = document.getElementById('year')

const update = () => {
  $year.innerText = new Date().getFullYear()
}

module.exports = update

/***/ })
/******/ ]);