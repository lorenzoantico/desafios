/*let numero = Number(prompt("Digite um número: "));  Essa maneira só funciona no browser, pois o prompt não funciona no node.js*/
const lista = [1, 5, 20, 385, 10, 50];

function maiorNumero(lista) {
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
/*alert(`O número ${numero} é ${parOuImpar(numero)}`); Essa maneira só funciona no browser, pois o alert não funciona no node.js*/
console.log("O numero é:", parOuImpar());
