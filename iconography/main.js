import '../src/styles/footer.less'
import '../src/components/site-footer.js'
import '../src/components/google-analytics.js'

// Map thumb paths to full-size paths
const getFullSizePath = (thumbSrc) => {
  return thumbSrc.replace('/thumbs/', '/').replace('.webp', '.png')
}

const isLargeScreen = () => window.innerWidth >= 1024

// Preview for large screens
const previewImg = document.getElementById('preview-img')
const iconItems = document.querySelectorAll('.icon-item img')
let isPersisted = false

iconItems.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    if (isLargeScreen() && !isPersisted) {
      previewImg.src = getFullSizePath(img.src)
      previewImg.classList.add('visible')
    }
  })

  img.addEventListener('mouseleave', () => {
    if (isLargeScreen() && !isPersisted) {
      previewImg.classList.remove('visible')
    }
  })

  img.addEventListener('click', (e) => {
    if (isLargeScreen()) {
      e.stopPropagation()
      previewImg.src = getFullSizePath(img.src)
      previewImg.classList.add('visible')
      isPersisted = true
    } else {
      openLightbox(getFullSizePath(img.src))
    }
  })
})

// Click anywhere else to clear persisted preview
document.addEventListener('click', (e) => {
  if (isLargeScreen() && isPersisted) {
    const isIconClick = e.target.closest('.icon-item img')
    if (!isIconClick) {
      previewImg.classList.remove('visible')
      isPersisted = false
    }
  }
})

// Lightbox for small/medium screens
const lightbox = document.getElementById('lightbox')
const lightboxImg = document.getElementById('lightbox-img')
const lightboxClose = document.getElementById('lightbox-close')

const openLightbox = (src) => {
  lightboxImg.src = src
  lightbox.classList.add('open')
}

const closeLightbox = () => {
  lightbox.classList.remove('open')
  lightboxImg.src = ''
}

lightboxClose.addEventListener('click', closeLightbox)
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox()
  }
})
