const colorsGrid = document.getElementById('colors-grid')

fetch('https://www.thecolorapi.com/scheme?hex=00ff00&mode=monochrome')
  .then(res => res.json())
  .then(data => {
    let gridHtml = ''
    data.colors.map((item) => {
      gridHtml += `
      <div class="color" style="background: ${item.hex.value}">
      <h4>${item.hex.value}</h4>
      </div>
      `
    })
    colorsGrid.innerHTML = gridHtml;
  })
