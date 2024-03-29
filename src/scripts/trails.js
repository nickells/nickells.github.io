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