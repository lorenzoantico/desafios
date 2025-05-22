/* Calcule o IMC de uma pessoa, dado o peso (72kg) e a altura(1.84m) dela. */

let peso = 72;
let altura = 1.84;

function imcCalculator() {
    return peso / (altura * altura);
}
imc = imcCalculator();

console.log("O seu peso é:", peso, "e a sua altura é:", altura);
console.log("Então o seu IMC é:", imc.toFixed(2));

/* Agora com base no imc, calcule a classificação do IMC. */

if (imc < 18.5) {
    console.log("Abaixo do peso");
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
}
else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
}
else if (imc >= 30 && imc <= 34.9) {
    console.log("Obesidade grau 1");
}
else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade grau 2");
}
else {
    console.log("Obesidade grau 3");
}