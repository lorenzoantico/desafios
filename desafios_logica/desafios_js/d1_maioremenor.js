const numbers = [3,7,4,3,4,2];
let max = null;
let min = null;

function  maxNumber(numbers){
    max = Math.max(...numbers);
    return max;
}

function minNumber(numbers){
    min = Math.min(...numbers);
    return min;
}

console.log("O número Maior é:", maxNumber(numbers));
console.log("O número Menor é:", minNumber(numbers));

/* const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maior = lista[0];
let menor = lista[0];

function maiorNumero(lista) {

    for (let i = 0; i < lista.length; i++) {

        if (lista[i] > maior) {
            maior = lista[i];
        }
    }

}
maiorNumero(lista);
console.log("o numero maior é:", maior);

function menorNumero(lista) {

    for (let i = 0; i > lista.length; i++) {

        if (lista[i] > menor) {
            menor = lista[i];
        }
    }

}

menorNumero(lista);
console.log("o numero menor é:", menor);*/