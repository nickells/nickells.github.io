// viewport position from layout offsets, which ignore transforms
const layoutPosition = (el) => {
  let x = 0
  let y = 0
  for (let node = el; node; node = node.offsetParent) {
    x += node.offsetLeft
    y += node.offsetTop
  }
  return { x: x - window.scrollX, y: y - window.scrollY }
}

const move = () => {
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2

  document.body.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  document.body.addEventListener('mouseleave', () => {
    mouseX = window.innerWidth / 2
    mouseY = window.innerHeight / 2
  })

  document.querySelectorAll('.thing, .era-card:not([data-still])').forEach(thing => {
    thing.style.transition = 'transform 0.3s ease-out'
  })




  const raf = () => {
    requestAnimationFrame(raf)

    document.querySelectorAll('.thing, .era-card:not([data-still])').forEach(thing => {
      // Measure where the card sits without its own offset. The bounding rect
      // includes the transform set here (mid-transition, too), so using it
      // fed each frame's nudge back into the next: near the cursor the push
      // direction kept flipping and the cards jiggled.
      const { x, y } = layoutPosition(thing)
      const thingCenterX = x + thing.offsetWidth / 2;
      const thingCenterY = y + thing.offsetHeight / 2;

      const xSign = mouseX - thingCenterX > 0 ? 1 : -1
      const ySign = mouseY - thingCenterY > 0 ? 1 : -1
      const distX = Math.sqrt(Math.abs(mouseX - thingCenterX)) * xSign * 0.2
      const distY = Math.sqrt(Math.abs(mouseY - thingCenterY)) * ySign * 0.2

      thing.style.transform = `translate(${distX}px, ${distY}px)`
    })


  }
  raf();
}


export default move;