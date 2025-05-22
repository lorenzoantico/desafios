/* calcule quantos dias você ja viveu */
let idade = 29;
let meses = 5

function diasDevida(idade, meses) {

    let dias = meses * 30 + 365 * idade;
    return dias;
}

let resultado = diasDevida(idade, meses);
console.log(`Você viveu até hoje ${idade} anos, ${meses} meses e ao todo foram ${resultado} dias`);
