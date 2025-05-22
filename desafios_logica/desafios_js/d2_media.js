const numbers = [10, 20, 30, 40, 50];

function mediaNumber(numbers) {
    let soma = numbers.reduce((a, b) => a + b, 0);
    let media = soma / numbers.length;
    return media;
}
console.log("A média é:", mediaNumber(numbers));

function aprovaAluno(media) {
    if (media >= 30) {
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}

console.log("Com essa média o aluno está:", aprovaAluno(mediaNumber(numbers)));