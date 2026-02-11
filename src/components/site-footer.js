class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <span>© <span id="year">${new Date().getFullYear()}</span> Nick&nbsp;Ellsworth</span>
        <a href="#" id="email-link">ellsworth.nick@gmail.com</a>
        <a href="https://www.linkedin.com/in/nickells/">LinkedIn</a>
      </footer>
    `

    const emailLink = this.querySelector('#email-link')
    emailLink.addEventListener('click', (e) => {
      e.preventDefault()
      const originalText = emailLink.textContent

      navigator.clipboard.writeText('ellsworth.nick@gmail.com')
      emailLink.textContent = 'copied!'
      emailLink.style.pointerEvents = 'none'

      setTimeout(() => {
        emailLink.textContent = originalText
        emailLink.style.pointerEvents = 'auto'
      }, 2000)
    })
  }
}

customElements.define('site-footer', SiteFooter)
