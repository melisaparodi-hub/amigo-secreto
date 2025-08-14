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
  return;
}

function limpiarCaja() {
  document.querySelector("input").value = "";
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
  return;
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay elementos agregados aún. Por favor ingrese los nombres para poder continuar");
    return;
  }
  const randomIndex = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[randomIndex];

  const elementoLi2 = document.createElement("li");
  elementoLi2.innerHTML = `El nombre sorteado es ${nombreSorteado}`;

  const resultado = document.getElementById("resultado")
  resultado.innerHTML = "";
  resultado.appendChild(elementoLi2);

}





