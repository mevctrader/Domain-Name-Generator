import "./style.css";

window.onload = () => {
  //write your code here
  let pronoun = ["nuestro", "el"];
  let adj = ["gran", "grandioso"];
  let sustant = ["corredor", "jugador"];
  let extensions = ["com", "es", "net", "io", "com.ve"];

  const collection = document.getElementsByClassName("dominio");
  collection.innerHTML = GenerarDominios(pronoun, adj, sustant, extensions);
};

function GenerarDominios(pronoun, adj, sustant, extensions) {
  var element = document.querySelector(".dominio");

  for (let i = 0; i <= 8; i++) {
    let pronunciacion = Math.floor(Math.random() * pronoun.length);
    let adjetivo = Math.floor(Math.random() * adj.length);
    let sustantivo = Math.floor(Math.random() * sustant.length);
    let extension = Math.floor(Math.random() * extensions.length);
    let domin =
      pronoun[pronunciacion] +
      "" +
      adj[adjetivo] +
      "" +
      sustant[sustantivo] +
      "." +
      extensions[extension];

    let datoParrafo = document.createElement("p");

    datoParrafo.innerHTML = domin;

    element.appendChild(datoParrafo);

    //console.log(domin);
  }
}
