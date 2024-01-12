

const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const peso = Number(pesoInput.value);
  const altura = Number(alturaInput.value);
  const imc = peso / (altura * altura);
  alert(`Seu IMC é ${imc.toFixed(2)}`)

  if (imc < 18.5) {
    alert("Você está magro(a)!");
  } else if (imc >= 18.5 && imc < 24.9) {
    alert("Seu peso está normal");
  } else if (imc >= 24.9 && imc < 30) {
    alert("Você está em sobrepeso!");
  } else {
    alert("Você está obeso!");
  }

});