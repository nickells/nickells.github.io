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

export default clock()