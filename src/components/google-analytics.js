class GoogleAnalytics extends HTMLElement {
  connectedCallback() {
    const id = this.getAttribute('id') || 'G-BFX10B8LBE'

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments) }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', id)
  }
}

customElements.define('google-analytics', GoogleAnalytics)
