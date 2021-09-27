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
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** ./scripts/clock.js ***!
  \**************************/
/***/ (function(module, exports) {

eval("function clock() {\n  const $secondHand = document.getElementById('seconds')\n  const $minuteHand = document.getElementById('minutes')\n  const $hourHand = document.getElementById('hours')\n\n  const update = () => {\n    let time = new Date()\n    let hours = time.getHours() % 12\n    let minutes = time.getMinutes() \n    let seconds = time.getSeconds() % 60\n    let milliseconds = time.getMilliseconds()\n\n    let secondsAngle = (360 * (seconds / 60)) + (( 360 / 60 ) * (milliseconds / 1000))\n    let minutesAngle = (360 * (minutes / 60)) + (secondsAngle / 60)\n    let hoursAngle = (360 * (hours / 12)) + (minutesAngle / 60)\n\n    $secondHand.style.transform = `rotate(${secondsAngle}deg)`\n    $minuteHand.style.transform = `rotate(${minutesAngle}deg)`\n    $hourHand.style.transform = `rotate(${hoursAngle}deg)`\n\n  }\n\n  function loop(){\n    // console.log('loop')\n    update()\n    requestAnimationFrame(loop)\n  }\n\n  return {\n    start: () => {\n      requestAnimationFrame(loop)\n    }\n  }\n}\n\nmodule.exports =  clock()//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvY2xvY2suanM/NWVjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbG9jaygpIHtcbiAgY29uc3QgJHNlY29uZEhhbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kcycpXG4gIGNvbnN0ICRtaW51dGVIYW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbnV0ZXMnKVxuICBjb25zdCAkaG91ckhhbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cnMnKVxuXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKClcbiAgICBsZXQgaG91cnMgPSB0aW1lLmdldEhvdXJzKCkgJSAxMlxuICAgIGxldCBtaW51dGVzID0gdGltZS5nZXRNaW51dGVzKCkgXG4gICAgbGV0IHNlY29uZHMgPSB0aW1lLmdldFNlY29uZHMoKSAlIDYwXG4gICAgbGV0IG1pbGxpc2Vjb25kcyA9IHRpbWUuZ2V0TWlsbGlzZWNvbmRzKClcblxuICAgIGxldCBzZWNvbmRzQW5nbGUgPSAoMzYwICogKHNlY29uZHMgLyA2MCkpICsgKCggMzYwIC8gNjAgKSAqIChtaWxsaXNlY29uZHMgLyAxMDAwKSlcbiAgICBsZXQgbWludXRlc0FuZ2xlID0gKDM2MCAqIChtaW51dGVzIC8gNjApKSArIChzZWNvbmRzQW5nbGUgLyA2MClcbiAgICBsZXQgaG91cnNBbmdsZSA9ICgzNjAgKiAoaG91cnMgLyAxMikpICsgKG1pbnV0ZXNBbmdsZSAvIDYwKVxuXG4gICAgJHNlY29uZEhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3NlY29uZHNBbmdsZX1kZWcpYFxuICAgICRtaW51dGVIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHttaW51dGVzQW5nbGV9ZGVnKWBcbiAgICAkaG91ckhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke2hvdXJzQW5nbGV9ZGVnKWBcblxuICB9XG5cbiAgZnVuY3Rpb24gbG9vcCgpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb29wJylcbiAgICB1cGRhdGUoKVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydDogKCkgPT4ge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gIGNsb2NrKClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NjcmlwdHMvY2xvY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./scripts/gate.js ***!
  \*************************/
/***/ (function(module, exports) {

eval("const links = Array.from(document.querySelectorAll(\"a[data-unfriendly]\"))\n\nconst hijack = (evt) => {\n  const oldDom = evt.target.innerHTML\n  evt.preventDefault()\n  evt.stopPropagation()\n  const dom = `\n    note: I didn't really build this with your touch device in mind. It might not work.\n\n    Continue?\n    <div>\n      <button class=\"no\">No</button><button class=\"yes\">Yes</button>\n    </div>\n  `\n  const $warning = document.createElement('div')\n  $warning.classList.add('gate')\n  $warning.innerHTML = dom\n  document.body.appendChild($warning)\n  $warning.getElementsByClassName('no')[0].addEventListener('touchend', () => {\n    setTimeout(() => {\n\n      document.body.removeChild($warning)\n    }, 500)\n  })\n  $warning.getElementsByClassName('yes')[0].addEventListener('touchend', () => {\n    window.location.href = evt.currentTarget.href\n  })\n}\n\nconst hijackLinks = () => {\n  console.log('doing')\n  links.forEach(elem => elem.addEventListener('click', hijack))\n}\n\nmodule.exports = hijackLinks//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvZ2F0ZS5qcz85MDc4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtkYXRhLXVuZnJpZW5kbHldXCIpKVxuXG5jb25zdCBoaWphY2sgPSAoZXZ0KSA9PiB7XG4gIGNvbnN0IG9sZERvbSA9IGV2dC50YXJnZXQuaW5uZXJIVE1MXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxuICBjb25zdCBkb20gPSBgXG4gICAgbm90ZTogSSBkaWRuJ3QgcmVhbGx5IGJ1aWxkIHRoaXMgd2l0aCB5b3VyIHRvdWNoIGRldmljZSBpbiBtaW5kLiBJdCBtaWdodCBub3Qgd29yay5cblxuICAgIENvbnRpbnVlP1xuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibm9cIj5ObzwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJ5ZXNcIj5ZZXM8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYFxuICBjb25zdCAkd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICR3YXJuaW5nLmNsYXNzTGlzdC5hZGQoJ2dhdGUnKVxuICAkd2FybmluZy5pbm5lckhUTUwgPSBkb21cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCgkd2FybmluZylcbiAgJHdhcm5pbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbm8nKVswXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCgkd2FybmluZylcbiAgICB9LCA1MDApXG4gIH0pXG4gICR3YXJuaW5nLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3llcycpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZXZ0LmN1cnJlbnRUYXJnZXQuaHJlZlxuICB9KVxufVxuXG5jb25zdCBoaWphY2tMaW5rcyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2RvaW5nJylcbiAgbGlua3MuZm9yRWFjaChlbGVtID0+IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWphY2spKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhpamFja0xpbmtzXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3JpcHRzL2dhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!***************************!*\
  !*** ./scripts/trails.js ***!
  \***************************/
/***/ (function(module, exports) {

eval("console.log('hi')\n\nconst canvas = document.getElementById(\"canvas\");\nconst context = canvas.getContext(\"2d\");\n\nconst grid_size = 18;\nconst font_size = 18;\nconst particle_duration = 800;\nconst explosion_count = 50;\nconst trail_width = 300;\nconst trail_delay = 150\n\n\nconst size = () => {\n  let width = window.innerWidth;\n  let height = window.innerHeight;\n\n  canvas.width = width * 2;\n  canvas.height = height * 2;\n  \n  canvas.style.width = `${width}px`;\n  canvas.style.height = `${height}px`;\n\n  console.log(canvas.style)\n  canvas.getContext('2d').scale(2,2)\n\n  context.textBaseline = \"middle\";\n  context.textAlign = \"center\";\n}\n\nsize()\n\nwindow.addEventListener(\"resize\", () => {\n  size()\n});\n\nconst cursorGlyph = \"↖\";\nconst trailGlyph = \"･✻◦✷✧○❋\";\n\nlet trail = [];\n\nlet glyphCanvases = []\nlet cursorCanvas = undefined\n\nconst renderSeed = () => {\n  const glyphs = [...trailGlyph, cursorGlyph]\n  glyphs.forEach((glyph, idx) => {\n    const newCanvas = document.createElement('canvas')\n    newCanvas.width = font_size * 2\n    newCanvas.height = font_size * 2\n    newCanvas.style.width = `${font_size}px`;\n    newCanvas.style.height = `${font_size}px`;\n    const newContext = newCanvas.getContext('2d')\n    newContext.scale(2,2)\n    newContext.fillStyle = \"black\"\n    newContext.font = `${font_size}px Monaco`;\n    newContext.textAlign = 'center'\n    newContext.textBaseline = 'middle'  \n    newContext.fillText(glyph, font_size / 2, font_size / 2)\n    if (glyph !== cursorGlyph) {\n      glyphCanvases.push(newCanvas)\n    }\n    else cursorCanvas = newCanvas\n  })\n}\n\nrenderSeed()\n\nconst toGrid = (x, y) =>{\n  return [\n    Math.round(x / grid_size) * grid_size,\n    Math.round(y / grid_size) * grid_size,\n  ]\n}\n\ndocument.body.addEventListener(\"mousedown\", (e) => {\n  const [originX, originY] = [e.clientX, e.clientY]\n\n  // get x and y for an explosion\n  for (let i = 0; i < explosion_count; i++) {\n    const randomX = Math.floor((Math.random() * trail_width) - trail_width / 2);\n    const randomY = Math.floor((Math.random() * trail_width) - trail_width / 2);\n    trail.unshift({\n      originX,\n      originY, \n      deltaX: randomX,\n      deltaY: randomY,\n      start: performance.now(),\n      char: Math.floor(Math.random() * glyphCanvases.length)\n    });\n  }\n })\n\ndocument.body.addEventListener(\"mousemove\", (e) => {\n  const [originX, originY] = [e.clientX, e.clientY]\n\n  // if no last cursor, \"mock\" it with this cursor's values\n  const lastCursor = trail[0] || {\n    originX,\n    originY\n  }\n  \n  // debouncer\n  const [movementX, movementY] = toGrid(originX - lastCursor.originX, originY - lastCursor.originY)\n  if (trail[0] && movementX === 0 && movementY === 0) return\n\n  // calculate eventual spread location\n  for (let i = 0; i < 1; i++) {\n    const randomX = Math.floor((Math.random() * trail_width) - trail_width / 2);\n    const randomY = Math.floor((Math.random() * trail_width) - trail_width / 2);\n\n    trail.unshift({\n      originX,\n      originY, \n      deltaX: randomX,\n      deltaY: randomY,\n      start: performance.now(),\n      char: Math.floor(Math.random() * trailGlyph.length)\n    });\n  }\n  \n});\n\n\nconst render = () => {\n\n\n  context.clearRect(0, 0, canvas.width, canvas.height)\n  const [cursor, ...tail] = trail;\n\n  tail.forEach((item, index) => {\n    const life = performance.now() - item.start;\n    \n    // don't render yet if under delay time\n    if (life < trail_delay) return\n    \n    const adjustedLifespan = life - trail_delay\n    \n    // don't render if it's over the duration\n    if (adjustedLifespan > particle_duration) {\n      trail.pop()\n      return\n    }\n    \n    const lifeRatio = adjustedLifespan / particle_duration\n\n    // calculate decreasing text size as function of life\n    const textSize = font_size - lifeRatio * font_size;\n\n    // calculate spread position as function of life\n    const [spreadX, spreadY] = [\n      item.deltaX * lifeRatio,\n      item.deltaY * lifeRatio]\n    \n    // add spread to origin\n    const [resultX, resultY] = toGrid(item.originX + spreadX, item.originY + spreadY)\n    \n    // offset location so we can still center the particle\n    let adjustedX = resultX - (textSize / 2)\n    let adjustedY = resultY - (textSize / 2)\n\n    // render\n    const char = item.char\n\n    context.drawImage(\n      glyphCanvases[char], // img\n      adjustedX, // x \n      adjustedY, // y\n      Math.round(textSize), // x height\n      Math.round(textSize)  // y height\n    )\n  });\n\n  requestAnimationFrame(render);\n  \n\n};\n\nrender();\n\nmodule.exports = {\n  render\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvdHJhaWxzLmpzPzRkOTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2hpJylcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgZ3JpZF9zaXplID0gMTg7XG5jb25zdCBmb250X3NpemUgPSAxODtcbmNvbnN0IHBhcnRpY2xlX2R1cmF0aW9uID0gODAwO1xuY29uc3QgZXhwbG9zaW9uX2NvdW50ID0gNTA7XG5jb25zdCB0cmFpbF93aWR0aCA9IDMwMDtcbmNvbnN0IHRyYWlsX2RlbGF5ID0gMTUwXG5cblxuY29uc3Qgc2l6ZSA9ICgpID0+IHtcbiAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgY2FudmFzLndpZHRoID0gd2lkdGggKiAyO1xuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogMjtcbiAgXG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG5cbiAgY29uc29sZS5sb2coY2FudmFzLnN0eWxlKVxuICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5zY2FsZSgyLDIpXG5cbiAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG59XG5cbnNpemUoKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIHNpemUoKVxufSk7XG5cbmNvbnN0IGN1cnNvckdseXBoID0gXCLihpZcIjtcbmNvbnN0IHRyYWlsR2x5cGggPSBcIu+9peKcu+KXpuKct+Kcp+KXi+Kdi1wiO1xuXG5sZXQgdHJhaWwgPSBbXTtcblxubGV0IGdseXBoQ2FudmFzZXMgPSBbXVxubGV0IGN1cnNvckNhbnZhcyA9IHVuZGVmaW5lZFxuXG5jb25zdCByZW5kZXJTZWVkID0gKCkgPT4ge1xuICBjb25zdCBnbHlwaHMgPSBbLi4udHJhaWxHbHlwaCwgY3Vyc29yR2x5cGhdXG4gIGdseXBocy5mb3JFYWNoKChnbHlwaCwgaWR4KSA9PiB7XG4gICAgY29uc3QgbmV3Q2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBuZXdDYW52YXMud2lkdGggPSBmb250X3NpemUgKiAyXG4gICAgbmV3Q2FudmFzLmhlaWdodCA9IGZvbnRfc2l6ZSAqIDJcbiAgICBuZXdDYW52YXMuc3R5bGUud2lkdGggPSBgJHtmb250X3NpemV9cHhgO1xuICAgIG5ld0NhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtmb250X3NpemV9cHhgO1xuICAgIGNvbnN0IG5ld0NvbnRleHQgPSBuZXdDYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIG5ld0NvbnRleHQuc2NhbGUoMiwyKVxuICAgIG5ld0NvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiXG4gICAgbmV3Q29udGV4dC5mb250ID0gYCR7Zm9udF9zaXplfXB4IE1vbmFjb2A7XG4gICAgbmV3Q29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJ1xuICAgIG5ld0NvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZScgIFxuICAgIG5ld0NvbnRleHQuZmlsbFRleHQoZ2x5cGgsIGZvbnRfc2l6ZSAvIDIsIGZvbnRfc2l6ZSAvIDIpXG4gICAgaWYgKGdseXBoICE9PSBjdXJzb3JHbHlwaCkge1xuICAgICAgZ2x5cGhDYW52YXNlcy5wdXNoKG5ld0NhbnZhcylcbiAgICB9XG4gICAgZWxzZSBjdXJzb3JDYW52YXMgPSBuZXdDYW52YXNcbiAgfSlcbn1cblxucmVuZGVyU2VlZCgpXG5cbmNvbnN0IHRvR3JpZCA9ICh4LCB5KSA9PntcbiAgcmV0dXJuIFtcbiAgICBNYXRoLnJvdW5kKHggLyBncmlkX3NpemUpICogZ3JpZF9zaXplLFxuICAgIE1hdGgucm91bmQoeSAvIGdyaWRfc2l6ZSkgKiBncmlkX3NpemUsXG4gIF1cbn1cblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gIGNvbnN0IFtvcmlnaW5YLCBvcmlnaW5ZXSA9IFtlLmNsaWVudFgsIGUuY2xpZW50WV1cblxuICAvLyBnZXQgeCBhbmQgeSBmb3IgYW4gZXhwbG9zaW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXhwbG9zaW9uX2NvdW50OyBpKyspIHtcbiAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHRyYWlsX3dpZHRoKSAtIHRyYWlsX3dpZHRoIC8gMik7XG4gICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiB0cmFpbF93aWR0aCkgLSB0cmFpbF93aWR0aCAvIDIpO1xuICAgIHRyYWlsLnVuc2hpZnQoe1xuICAgICAgb3JpZ2luWCxcbiAgICAgIG9yaWdpblksIFxuICAgICAgZGVsdGFYOiByYW5kb21YLFxuICAgICAgZGVsdGFZOiByYW5kb21ZLFxuICAgICAgc3RhcnQ6IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgY2hhcjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2x5cGhDYW52YXNlcy5sZW5ndGgpXG4gICAgfSk7XG4gIH1cbiB9KVxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgY29uc3QgW29yaWdpblgsIG9yaWdpblldID0gW2UuY2xpZW50WCwgZS5jbGllbnRZXVxuXG4gIC8vIGlmIG5vIGxhc3QgY3Vyc29yLCBcIm1vY2tcIiBpdCB3aXRoIHRoaXMgY3Vyc29yJ3MgdmFsdWVzXG4gIGNvbnN0IGxhc3RDdXJzb3IgPSB0cmFpbFswXSB8fCB7XG4gICAgb3JpZ2luWCxcbiAgICBvcmlnaW5ZXG4gIH1cbiAgXG4gIC8vIGRlYm91bmNlclxuICBjb25zdCBbbW92ZW1lbnRYLCBtb3ZlbWVudFldID0gdG9HcmlkKG9yaWdpblggLSBsYXN0Q3Vyc29yLm9yaWdpblgsIG9yaWdpblkgLSBsYXN0Q3Vyc29yLm9yaWdpblkpXG4gIGlmICh0cmFpbFswXSAmJiBtb3ZlbWVudFggPT09IDAgJiYgbW92ZW1lbnRZID09PSAwKSByZXR1cm5cblxuICAvLyBjYWxjdWxhdGUgZXZlbnR1YWwgc3ByZWFkIGxvY2F0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiB0cmFpbF93aWR0aCkgLSB0cmFpbF93aWR0aCAvIDIpO1xuICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogdHJhaWxfd2lkdGgpIC0gdHJhaWxfd2lkdGggLyAyKTtcblxuICAgIHRyYWlsLnVuc2hpZnQoe1xuICAgICAgb3JpZ2luWCxcbiAgICAgIG9yaWdpblksIFxuICAgICAgZGVsdGFYOiByYW5kb21YLFxuICAgICAgZGVsdGFZOiByYW5kb21ZLFxuICAgICAgc3RhcnQ6IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgY2hhcjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdHJhaWxHbHlwaC5sZW5ndGgpXG4gICAgfSk7XG4gIH1cbiAgXG59KTtcblxuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG5cblxuICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4gIGNvbnN0IFtjdXJzb3IsIC4uLnRhaWxdID0gdHJhaWw7XG5cbiAgdGFpbC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGxpZmUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGl0ZW0uc3RhcnQ7XG4gICAgXG4gICAgLy8gZG9uJ3QgcmVuZGVyIHlldCBpZiB1bmRlciBkZWxheSB0aW1lXG4gICAgaWYgKGxpZmUgPCB0cmFpbF9kZWxheSkgcmV0dXJuXG4gICAgXG4gICAgY29uc3QgYWRqdXN0ZWRMaWZlc3BhbiA9IGxpZmUgLSB0cmFpbF9kZWxheVxuICAgIFxuICAgIC8vIGRvbid0IHJlbmRlciBpZiBpdCdzIG92ZXIgdGhlIGR1cmF0aW9uXG4gICAgaWYgKGFkanVzdGVkTGlmZXNwYW4gPiBwYXJ0aWNsZV9kdXJhdGlvbikge1xuICAgICAgdHJhaWwucG9wKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaWZlUmF0aW8gPSBhZGp1c3RlZExpZmVzcGFuIC8gcGFydGljbGVfZHVyYXRpb25cblxuICAgIC8vIGNhbGN1bGF0ZSBkZWNyZWFzaW5nIHRleHQgc2l6ZSBhcyBmdW5jdGlvbiBvZiBsaWZlXG4gICAgY29uc3QgdGV4dFNpemUgPSBmb250X3NpemUgLSBsaWZlUmF0aW8gKiBmb250X3NpemU7XG5cbiAgICAvLyBjYWxjdWxhdGUgc3ByZWFkIHBvc2l0aW9uIGFzIGZ1bmN0aW9uIG9mIGxpZmVcbiAgICBjb25zdCBbc3ByZWFkWCwgc3ByZWFkWV0gPSBbXG4gICAgICBpdGVtLmRlbHRhWCAqIGxpZmVSYXRpbyxcbiAgICAgIGl0ZW0uZGVsdGFZICogbGlmZVJhdGlvXVxuICAgIFxuICAgIC8vIGFkZCBzcHJlYWQgdG8gb3JpZ2luXG4gICAgY29uc3QgW3Jlc3VsdFgsIHJlc3VsdFldID0gdG9HcmlkKGl0ZW0ub3JpZ2luWCArIHNwcmVhZFgsIGl0ZW0ub3JpZ2luWSArIHNwcmVhZFkpXG4gICAgXG4gICAgLy8gb2Zmc2V0IGxvY2F0aW9uIHNvIHdlIGNhbiBzdGlsbCBjZW50ZXIgdGhlIHBhcnRpY2xlXG4gICAgbGV0IGFkanVzdGVkWCA9IHJlc3VsdFggLSAodGV4dFNpemUgLyAyKVxuICAgIGxldCBhZGp1c3RlZFkgPSByZXN1bHRZIC0gKHRleHRTaXplIC8gMilcblxuICAgIC8vIHJlbmRlclxuICAgIGNvbnN0IGNoYXIgPSBpdGVtLmNoYXJcblxuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgZ2x5cGhDYW52YXNlc1tjaGFyXSwgLy8gaW1nXG4gICAgICBhZGp1c3RlZFgsIC8vIHggXG4gICAgICBhZGp1c3RlZFksIC8vIHlcbiAgICAgIE1hdGgucm91bmQodGV4dFNpemUpLCAvLyB4IGhlaWdodFxuICAgICAgTWF0aC5yb3VuZCh0ZXh0U2l6ZSkgIC8vIHkgaGVpZ2h0XG4gICAgKVxuICB9KTtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgXG5cbn07XG5cbnJlbmRlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVuZGVyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3JpcHRzL3RyYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!*************************!*\
  !*** ./scripts/year.js ***!
  \*************************/
/***/ (function(module, exports) {

eval("const $year = document.getElementById('year')\n\nconst update = () => {\n  $year.innerText = new Date().getFullYear()\n}\n\nmodule.exports = update//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMveWVhci5qcz8zMDI5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0ICR5ZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXInKVxuXG5jb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICR5ZWFyLmlubmVyVGV4dCA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2NyaXB0cy95ZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

eval("// require index.html so livereload will watch it\nconst clock = __webpack_require__(/*! ./clock */ 0)\nconst gate = __webpack_require__(/*! ./gate */ 1)\nconst { render: renderTrails } = __webpack_require__(/*! ./trails */ 2)\nconst updateYear = __webpack_require__(/*! ./year */ 3)\n\nrenderTrails()\nclock.start()\nupdateYear()\nif ('ontouchstart' in window) gate()\n\nconsole.log('YELLOS')//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvaW5kZXguanM/ZGVhOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXF1aXJlIGluZGV4Lmh0bWwgc28gbGl2ZXJlbG9hZCB3aWxsIHdhdGNoIGl0XG5jb25zdCBjbG9jayA9IHJlcXVpcmUoJy4vY2xvY2snKVxuY29uc3QgZ2F0ZSA9IHJlcXVpcmUoJy4vZ2F0ZScpXG5jb25zdCB7IHJlbmRlcjogcmVuZGVyVHJhaWxzIH0gPSByZXF1aXJlKCcuL3RyYWlscycpXG5jb25zdCB1cGRhdGVZZWFyID0gcmVxdWlyZSgnLi95ZWFyJylcblxucmVuZGVyVHJhaWxzKClcbmNsb2NrLnN0YXJ0KClcbnVwZGF0ZVllYXIoKVxuaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgZ2F0ZSgpXG5cbmNvbnNvbGUubG9nKCdZRUxMT1MnKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2NyaXB0cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);