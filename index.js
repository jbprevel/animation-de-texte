//Inspiré d'un tuto du designer du web sur youtube => https://www.youtube.com/c/LeDesignerduWeb?app=desktop

const txtAnim = document.querySelector("h1"); //on cible notre element h1

new Typewriter(txtAnim, {
  //on appelle la fonction que l'on a importé dans le script en html
  loop: true,
  deleteSpeed: 25, // modifie la vitesse d'effacement
})
  .changeDelay(50) //on peut changer la vitesse d'ecriture
  .typeString("Moi c' est JB") // on ecrit ce que l'on souhaite
  .pauseFor(1000) // on fait une pause entre deux "phrases"
  .typeString("<strong>, Passionné de Développement WEB") //on ajoute une balise span pour pouvoir y injecter du style
  .pauseFor(1000)
  .deleteChars(17) //on supprime les lettres voulues en comptant les espaces
  .typeString('<span style="color: #27ae60;"> Design</span>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: blue;"> CSS</span>')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('<span style="color: yellow;"> JavaScript</span>')
  .pauseFor(1000)
  .start(); // on lance la fonction;
