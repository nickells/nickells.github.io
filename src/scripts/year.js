const $year = document.getElementById('year')

const update = () => {
  $year.innerText = new Date().getFullYear()
}

export default update