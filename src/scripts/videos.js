const videos = document.querySelectorAll('video[data-autoplay]')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play()
      } else {
        entry.target.pause()
      }
    })
  },
  {
    threshold: 0.9, // Play when 90% visible
  }
)

videos.forEach((video) => observer.observe(video))

export default observer
