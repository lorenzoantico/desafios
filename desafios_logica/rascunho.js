const lista = [1, 5, 20, 385, 10, 50];

function maiorNumero(lista){
    let numero = 0;
for (let i = 0; i < lista.length; i++) {
    if (lista[i] > numero) {
        numero = lista[i];
    }
}
return numero;
}
console.log("O maior número da lista é:", maiorNumero(lista));

function parOuImpar() {
    if (maiorNumero % 2 === 0) {
        return "Par";
    }
	else {
            return "Impar";
        }
    }

console.log("O numero é:", parOuImpar());
