function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag image
  const img = document.querySelector("#profile img")

 // substituir a imagem 
 if (html.classList.contains('light')){
 // se tiver light mode, imagem light
  img.setAttribute('src', './assets/diogo-light.png')
  img.setAttribute('alt', 'Foto de Myke LIGHT')
  } else {
 // se tiver sem light, imagem normal
  img.setAttribute('src', './assets/diogo.png')
  img.setAttribute('alt', 'Foto de Myke')
  }



  
  // substituir imagem
}