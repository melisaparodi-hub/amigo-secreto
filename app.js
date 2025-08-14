let amigos = [];

function agregarAmigo() {
  let nombresValorInput = document.getElementById("amigo").value;

  if (nombresValorInput != "") {
    amigos.push(nombresValorInput);
  } else {
    alert("Por favor, inserte un nombre.");
  }
  console.log(amigos);
}
