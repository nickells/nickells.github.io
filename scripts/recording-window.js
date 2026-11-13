// Opens the current page in a popup whose page area is exactly 619:400,
// the shape of the portfolio's video cards, ready to screen record.
//
// Chrome won't resize a normal tab's window from a script, but it will
// resize a popup the script opened, so this reopens the page in one.
//
// Use it as a bookmarklet: make a bookmark and paste this as the URL
// (it's the code below, minified):
//
// javascript:(()=>{const W=+prompt('Page width in px (height follows 619:400)',1238);if(!W)return;const H=Math.round(W*400/619);const w=open(location.href,'_blank',`popup,width=${W},height=${H}`);if(!w)return alert('Allow popups for this site, then try again');const fit=()=>{try{w.resizeBy(W-w.innerWidth,H-w.innerHeight)}catch(e){}};w.addEventListener('load',fit);setTimeout(fit,800)})()
//
// Or paste the code below into the DevTools console on the page.

;(() => {
  const W = +prompt('Page width in px (height follows 619:400)', 1238)
  if (!W) return
  const H = Math.round((W * 400) / 619)

  // width/height here are the page area, but Chrome adds its own chrome to
  // popups, so measure once loaded and correct the difference.
  const w = open(location.href, '_blank', `popup,width=${W},height=${H}`)
  if (!w) return alert('Allow popups for this site, then try again')

  const fit = () => {
    try {
      w.resizeBy(W - w.innerWidth, H - w.innerHeight)
    } catch (e) {} // a cross-origin redirect hides innerWidth; the first guess stands
  }
  w.addEventListener('load', fit)
  setTimeout(fit, 800)
})()
