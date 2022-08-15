/*Adivinhe o número

Vamos criar um jogo contra o computador. Uma função "jogar" que recebe um número de 1 a 6 escolhido pelo jogador.*/

/*let numero = 3

const numeroSorteado = Math.floor(Math.random() * 6) + 1;
console.log(numeroSorteado)

if (numero == numeroSorteado) {
    console.log('Voê ganhou!');
} else {
    console.log("Você perdeu! Tente outra vez!")
} */

function jogar(numero) {
    const numeroSorteado = Math.floor(Math.random() * 6) + 1;
console.log(numeroSorteado)

if (numero == numeroSorteado) {
    console.log('Voê ganhou!');
} else {
    console.log("Você perdeu! Tente outra vez!")
}
}

jogar (3)