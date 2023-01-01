const colorsGrid = document.getElementById('colors-grid')
const form = document.getElementById('form')

let colorsArray = [
  '#F55A5A', '#2B283A', '#FBF3AB', '#AAD1B6', '#A626D3'
]

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const seed = e.target.color.value.replace('#', '')
  const mode = e.target.mode.value
  colorsArray = []
  fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}`)
    .then(res => res.json())
    .then(data => {
      data.colors.map((item) => {
        colorsArray.push(item.hex.value)
      })
      render()
    })
})

document.addEventListener('click', (e) => {
    if(e.target.dataset.hex) {
      navigator.clipboard.writeText(e.target.dataset.hex)
      document.getElementById('copyModal').style.display = 'block'
      setTimeout(() => {
        document.getElementById('copyModal').style.display = 'none'
      },2000)
    }
})

function render() {
  let gridHtml = ''
  colorsArray.map((color) => {
    gridHtml += `
    <div class="color" data-hex=${color} style="background: ${color}">
    <h4>${color}</h4>
    </div>
    `
  })
  colorsGrid.innerHTML = gridHtml;
  document.getElementById('infoModal').style.display = 'block'
      setTimeout(() => {
        document.getElementById('infoModal').style.display = 'none'
      },2000)
}

render()