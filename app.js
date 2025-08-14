let amigos = [];

function agregarAmigo() {
  let nombresValorInput = document.getElementById("amigo").value;

  if (nombresValorInput != "") {
    amigos.push(nombresValorInput);
    limpiarCaja();
  } else {
    alert("Por favor, inserte un nombre.");
  }
  console.log(amigos);
  return;
}

function limpiarCaja() {
  document.querySelector("input").value = " ";
}

document.querySelector("#listaAmigos");

function limpiarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
}
