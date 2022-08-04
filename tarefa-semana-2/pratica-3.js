function numeroAleatorio (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min +1)) + min;
}

let numero = numeroAleatorio(0, 1000)
console.log(numero)

function numeroAleatorioSemParametro () {
    min = 0;
    max = 1000;

    return Math.floor(Math.random() * (max - min +1)) + min;
}

let numero1 = numeroAleatorioSemParametro()
console.log(numero1)

