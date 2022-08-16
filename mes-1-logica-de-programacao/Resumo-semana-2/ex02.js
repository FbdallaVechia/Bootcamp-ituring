//Criar uma função para gerar um número inteiro aleatório de 0 a 10 sempre for chamada 

function getRandomIntInclusive() {
    min = 0
    max = 10
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numero = getRandomIntInclusive()
console.log(numero)