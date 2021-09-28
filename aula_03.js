/* Segunda-feira,27/09/2021 {à noite} das 22:54:35 as h +|- */
var numeroSecreto = parseInt(Math.random() * 11); /* ele guardo na memória*/
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Voce acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Voce deve digitar um numero de 0 de 10";
  } else {
    elementoResultado.innerHTML = "Errou  ";
  }
}