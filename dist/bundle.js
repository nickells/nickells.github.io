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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <title>Nick Ellsworth</title>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n  <p id=\"hero\">\n    Nick <nobr>Ellswor<span id=\"th\">th</span></nobr>\n  </p>\n  <h2 id=\"copy\">\n    I am a creative developer working at Squarespace. I&nbsp;enjoy making things. Here are some things I have made:\n  </h2>\n  <a class=\"thing\" href=\"http://nickmakes.website/spatial-audio\">\n    <h3><span>Ambience Generator</span><span>2017</span></h3>\n    <p>Block out the noisy world around you with great precision.</p>\n  </a>\n  <a class=\"thing\" href=\"http://www.clavier.party\">\n    <h3><span>Clavier Party</span><span>2017</span></h3>\n    <p>Make chaotic piano tunes with your friends.</p>\n  </a>\n  <a class=\"thing\" href=\"http://chills.network\">\n    <h3><span>Anagrammer</span><span>2017</span></h3>\n    <p>Make a word into another word using magic and spelling.</p>\n  </a>\n  <a class=\"thing\" href=\"http://nickmakes.website/clumsy-typer\">\n    <h3><span>Clumsy Typer</span><span>2017</span></h3>\n    <p>Automate the text input of a careless individual.</p>\n  </a>\n  <a class=\"thing\" href=\"http://bpm-count.firebaseapp.com\">\n    <h3><span>BPM Counter</span><span>2016</span></h3>\n    <p>Figure out how fast you can snap your fingers at regular intervals.</p>\n  </a>\n  <a class=\"thing\" href=\"http://nickmakes.website/knob\">\n    <h3><span>Knob</span><span>2016</span></h3>\n    <p>Grab onto a circle and pretend you are affecting the world.</p>\n  </a>\n  <a class=\"thing\" href=\"https://chrome.google.com/webstore/detail/delta-for-youtube/ofbfdabicijcdjoeemcgabeeapciibbf\">\n    <h3><span>Delta for Youtube</span><span>2016</span></h3>\n    <p>Eliminate the effort of subtraction from your media experience.</p>\n  </a>\n  <a class=\"thing\" href=\"https://www.npmjs.com/package/tiny-interpolator\">\n    <h3><span>Tiny Interpolator</span><span>2016</span></h3>\n    <p>Easily make lists of things from differently formatted lists of things.</p>\n  </a>\n  <a class=\"thing\" href=\"http://nickmakes.website/fingerTrainer\">\n    <h3><span>Finger Trainer</span><span>2016</span></h3>\n    <p>Learn to touch-type the weird looking shapes on top of the keyboard.</p>\n  </a>\n  <a class=\"thing\" href=\"http://nickmakes.website/slack-emoji-converter/\">\n    <h3><span>Emoji Text Converter</span><span>2015</span></h3>\n    <p>Bother your coworkers by making words out of pictures.</p>\n  </a>\n  <a class=\"thing\" href=\"http://nickmakes.website/keyboard-simulator-2015/\">\n    <h3><span>Keyboard Simulator</span><span>2015</span></h3>\n    <p>Imagine you are using a keyboard while using a keyboard.</p>\n  </a>\n  <a class=\"thing\" href=\"http://blipcrowd.herokuapp.com/\">\n    <h3><span>Blipcrowd</span><span>2015</span></h3>\n    <p>Press squares to create music with strangers.</p>\n  </a>\n  <script>\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');\n    ga('create', 'UA-71299429-1', 'auto');\n    ga('send', 'pageview');\n  </script>\n\n</body>\n</html>"

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// require index.html so livereload will watch it
const index = __webpack_require__(0) // eslint-disable-line no-unused-vars



/***/ })
/******/ ]);