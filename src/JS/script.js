function toggleMode() {
  // accesso documentElement (HTML tag)
  const html = document.documentElement
  // troca da class 'light'
  html.classList.toggle("light")
   
  // accesso img tag com id 'profile'
  const img = document.querySelector("#profile img")
   
  // atualização img src attribute baseado na classe
  if (html.classList.contains("light")) {
     img.setAttribute("src", "./src/assets/profile-light.png")
  } else {
     img.setAttribute("src", "./src/assets/profile.png")
  }
 }
 // Fim do Código