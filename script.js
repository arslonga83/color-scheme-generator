fetch('https://www.thecolorapi.com/scheme?hex=00ff00&mode=triad')
  .then(res => res.json())
  .then(data => console.log(data))