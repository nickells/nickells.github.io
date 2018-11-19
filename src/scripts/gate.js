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