class CursorTrail extends HTMLElement {
  constructor() {
    super()

    this.grid_size = 18
    this.font_size = 18
    this.particle_duration = 800
    this.explosion_count = 50
    this.trail_width = 300
    this.trail_delay = 0

    this.cursorGlyph = "↖"
    this.trailGlyph = "･✻◦✷✧○❋"
    this.colorOptions = [
      'red',
      'green',
      'blue',
      'yellow',
      'purple',
      'orange',
      'pink',
    ]

    this.trail = []
    this.glyphCanvases = []
    this.cursorCanvas = undefined
  }

  connectedCallback() {
    this.canvas = document.createElement('canvas')
    this.canvas.id = 'canvas'
    this.appendChild(this.canvas)
    this.context = this.canvas.getContext('2d')

    this.size()
    this.renderSeed()
    this.bindEvents()
    this.render()
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.boundResize)
    document.body.removeEventListener('mousedown', this.boundMousedown)
    document.body.removeEventListener('mousemove', this.boundMousemove)
  }

  size() {
    const width = window.innerWidth
    const height = window.innerHeight

    this.canvas.width = width * 2
    this.canvas.height = height * 2

    this.canvas.style.width = `${width}px`
    this.canvas.style.height = `${height}px`

    this.canvas.getContext('2d').scale(2, 2)

    this.context.textBaseline = "middle"
    this.context.textAlign = "center"
  }

  renderSeed() {
    const glyphs = [...this.trailGlyph, this.cursorGlyph]
    glyphs.forEach((glyph, idx) => {
      const newCanvas = document.createElement('canvas')
      newCanvas.width = this.font_size * 2
      newCanvas.height = this.font_size * 2
      newCanvas.style.width = `${this.font_size}px`
      newCanvas.style.height = `${this.font_size}px`
      const newContext = newCanvas.getContext('2d')
      newContext.scale(2, 2)
      newContext.fillStyle = "black"
      newContext.font = `${this.font_size}px Monaco`
      newContext.textAlign = 'center'
      newContext.textBaseline = 'middle'
      newContext.fillStyle = this.colorOptions[idx % this.colorOptions.length]

      newContext.fillText(glyph, this.font_size / 2, this.font_size / 2)
      if (glyph !== this.cursorGlyph) {
        this.glyphCanvases.push(newCanvas)
      } else {
        this.cursorCanvas = newCanvas
      }
    })
  }

  toGrid(x, y) {
    return [
      Math.round(x / this.grid_size) * this.grid_size,
      Math.round(y / this.grid_size) * this.grid_size,
    ]
  }

  bindEvents() {
    this.boundResize = () => this.size()
    this.boundMousedown = (e) => this.handleMousedown(e)
    this.boundMousemove = (e) => this.handleMousemove(e)

    window.addEventListener('resize', this.boundResize)
    document.body.addEventListener('mousedown', this.boundMousedown)
    document.body.addEventListener('mousemove', this.boundMousemove)
  }

  handleMousedown(e) {
    const [originX, originY] = [e.clientX, e.clientY]

    for (let i = 0; i < this.explosion_count; i++) {
      const randomX = Math.floor((Math.random() * this.trail_width) - this.trail_width / 2)
      const randomY = Math.floor((Math.random() * this.trail_width) - this.trail_width / 2)
      this.trail.unshift({
        originX,
        originY,
        deltaX: randomX,
        deltaY: randomY,
        start: performance.now(),
        char: Math.floor(Math.random() * this.glyphCanvases.length)
      })
    }
  }

  handleMousemove(e) {
    const [originX, originY] = [e.clientX, e.clientY]

    const lastCursor = this.trail[0] || { originX, originY }

    const [movementX, movementY] = this.toGrid(originX - lastCursor.originX, originY - lastCursor.originY)
    if (this.trail[0] && movementX === 0 && movementY === 0) return

    for (let i = 0; i < 1; i++) {
      const randomX = Math.floor((Math.random() * this.trail_width) - this.trail_width / 2)
      const randomY = Math.floor((Math.random() * this.trail_width) - this.trail_width / 2)

      this.trail.unshift({
        originX,
        originY,
        deltaX: randomX,
        deltaY: randomY,
        start: performance.now(),
        char: Math.floor(Math.random() * this.trailGlyph.length)
      })
    }
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    const [cursor, ...tail] = this.trail

    tail.forEach((item) => {
      const life = performance.now() - item.start

      if (life < this.trail_delay) return

      const adjustedLifespan = life - this.trail_delay

      if (adjustedLifespan > this.particle_duration) {
        this.trail.pop()
        return
      }

      const lifeRatio = adjustedLifespan / this.particle_duration

      const textSize = this.font_size - lifeRatio * this.font_size

      const [spreadX, spreadY] = [
        item.deltaX * lifeRatio,
        item.deltaY * lifeRatio
      ]

      const [resultX, resultY] = this.toGrid(item.originX + spreadX, item.originY + spreadY)

      let adjustedX = resultX - (textSize / 2)
      let adjustedY = resultY - (textSize / 2)

      const char = item.char

      this.context.drawImage(
        this.glyphCanvases[char],
        adjustedX,
        adjustedY,
        Math.round(textSize),
        Math.round(textSize)
      )
    })

    requestAnimationFrame(() => this.render())
  }
}

customElements.define('cursor-trail', CursorTrail)
