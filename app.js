let amigos = [];

function agregarAmigo() {
  let nombresValorInput = document.getElementById("amigo").value;

  if (nombresValorInput != "") {
    amigos.push(nombresValorInput);
    limpiarCaja();
    crearElementoLista();
  } else {
    alert("Por favor, inserte un nombre.");
  }
  console.log(amigos);
  return;
}

function limpiarCaja() {
  document.querySelector("input").value = " ";
}

let elementoLista = document.querySelector("#listaAmigos");

function limpiarLista() {
  elementoLista.innerHTML = "";
}

function crearElementoLista() {
  let elementoLista = document.querySelector("#listaAmigos");
  limpiarLista();
  for (let i = 0; i < amigos.length; i++) {
    const elementoLi = document.createElement("li");
    elementoLi.textContent = amigos[i];
    elementoLista.appendChild(elementoLi);
  }
}
