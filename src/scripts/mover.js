const move = () => {
  let mouseX = 0
  let mouseY = 0

  document.body.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

  })

  const raf = () => {
    requestAnimationFrame(raf)

    document.querySelectorAll('.thing').forEach(thing => {
      const thingRect = thing.getBoundingClientRect()
      const thingCenterX = thingRect.left + thingRect.width / 2;
      const thingCenterY = thingRect.top + thingRect.height / 2;

      const xSign = mouseX - thingCenterX > 0 ? 1 : -1
      const ySign = mouseY - thingCenterY > 0 ? 1 : -1
      const distX = Math.sqrt(Math.abs(mouseX - thingCenterX)) * xSign * 0.2
      const distY = Math.sqrt(Math.abs(mouseY - thingCenterY)) * ySign * 0.2

      thing.style.transition = 'transform 0.1s ease-in-out'
      thing.style.transform = `translate(${distX}px, ${distY}px)`
    })


  }
  raf();
}


export default move;