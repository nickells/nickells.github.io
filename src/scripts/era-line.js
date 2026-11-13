// One line that splits the grid into after/before LLM.
//
// It runs along the gap above the era cell's row, cuts diagonally across
// the cell, then runs along the gap below that row, so whatever the column
// count, everything above/left of it is "after" and below/right is "before".
//
//   ──────────────────────────────
//   [after] [after] [after] [after]
//   ─────────────────╮ ╭───────────
//   [after] [after]   ╱  [before] [before]
//                    ╱
//   ───────────────╯ ╰ ...
//
// Positions come from offsetLeft/Top (relative to the section), so the
// mover's parallax transforms don't throw the measurements off.

const NS = 'http://www.w3.org/2000/svg'
const RADIUS = 40 // corner rounding, px

// polyline -> path with each corner swapped for a curve. A corner's curve
// takes up to half of each neighbouring segment, so short runs stay smooth.
function roundedPath(pts, r) {
  const f = (n) => n.toFixed(1)
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1]
    const [x, y] = pts[i]
    const [nx, ny] = pts[i + 1]
    const lin = Math.hypot(x - px, y - py)
    const lout = Math.hypot(nx - x, ny - y)
    const k = Math.min(r, lin / 2, lout / 2)
    const ax = x - ((x - px) / lin) * k
    const ay = y - ((y - py) / lin) * k
    const bx = x + ((nx - x) / lout) * k
    const by = y + ((ny - y) / lout) * k
    d += ` L${f(ax)} ${f(ay)} Q${f(x)} ${f(y)} ${f(bx)} ${f(by)}`
  }
  const [ex, ey] = pts[pts.length - 1]
  return d + ` L${f(ex)} ${f(ey)}`
}

export default function eraLine() {
  const section = document.getElementById('projects')
  const card = section?.querySelector('.era-card')
  const tile = card?.querySelector('.era')
  if (!tile) return

  section.classList.add('has-era-line')
  // the labels sit on the line, so the cell has to sit still
  card.dataset.still = ''

  const svg = document.createElementNS(NS, 'svg')
  svg.classList.add('era-path')
  svg.setAttribute('aria-hidden', 'true')
  const path = document.createElementNS(NS, 'path')
  svg.appendChild(path)
  section.appendChild(svg)

  const draw = () => {
    const items = [...section.children].filter(
      (el) => el !== svg && el.offsetParent === section
    )
    const style = getComputedStyle(section)
    const colGap = parseFloat(style.columnGap) || 0
    const padBottom = (el) => parseFloat(getComputedStyle(el).paddingBottom) || 0

    // Flat in list view (one column, nothing to cut around); diagonal in the grid
    const flat = !section.classList.contains('grid')
    section.classList.toggle('era-flat', flat)

    if (flat) {
      const y = tile.offsetTop + tile.offsetHeight / 2
      path.setAttribute('d', `M${section.clientWidth} ${y} L0 ${y}`)
      // (labels are placed by the .era-flat styles)
      return
    }

    // the era cell (it stretches to fill its grid row)
    const tx0 = tile.offsetLeft
    const tx1 = tx0 + tile.offsetWidth

    // rows: the era card's row, plus the ones either side
    const rowTop = card.offsetTop
    const tops = [...new Set(items.map((el) => el.offsetTop))].sort((a, b) => a - b)
    const prevTop = tops.filter((t) => t < rowTop).pop()
    const nextTop = tops.find((t) => t > rowTop)
    const contentBottom = (top) =>
      Math.max(
        ...items
          .filter((el) => el.offsetTop === top)
          .map((el) => el.offsetTop + el.offsetHeight - padBottom(el))
      )

    // horizontal runs sit midway through the empty space between rows
    const yAbove =
      prevTop === undefined ? rowTop - 40 : (contentBottom(prevTop) + rowTop) / 2
    const rowBottom = contentBottom(rowTop)
    const yBelow = nextTop === undefined ? rowBottom + 40 : (rowBottom + nextTop) / 2

    // one straight diagonal across the era cell, from the gap above its row
    // (middle of the column gap on its right) to the gap below (on its left)
    const xr = tx1 + colGap / 2
    const xl = tx0 - colGap / 2

    // both ends run flat off the edges of the screen (the section is full width)
    const pts = [
      [section.clientWidth, yAbove],
      [xr, yAbove],
      [xl, yBelow],
      [0, yBelow],
    ]

    // labels ride the middle of the diagonal
    const angle = Math.atan2(yBelow - yAbove, xr - xl)
    tile.style.setProperty('--angle', `${angle}rad`)
    tile.style.setProperty('--mx', `${(xr + xl) / 2 - tile.offsetLeft}px`)
    tile.style.setProperty('--my', `${(yAbove + yBelow) / 2 - tile.offsetTop}px`)

    path.setAttribute('d', roundedPath(pts, RADIUS))
  }

  new ResizeObserver(draw).observe(section)
  window.addEventListener('resize', draw)
  document.fonts?.ready.then(draw)
  draw()
}
