/* FizzBuzz - Um clássico

Um dos problemas clássicos é na verdade uma brincadeira para ensinar crianças sobre múltiplos de 3 e 5. O desafio é:

criar um algoritmo que resolva esse problema avaliando um número e:

a) se esse número for múltiplo de 3 mostra Fizz;
b) se for múltiplo de 5 Buzz;
c) se for múltiplo de 3 e 5 mostra FizzBuzz;
d) se for qualquer outro valor mostra o número.
*/

let numero = 15
if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz")
} else if (numero % 3 === 0) {
    console.log("Fizz")
} else if (numero % 5 === 0) {
    console.log("Buzz")
} else {
    console.log(numero)
}

/* RESOLVENDO DE OUTRA MANEIRA */

let resultado = "";

if (numero % 3 === 0) {
    resultado = "Fizz";
}

/* Se não CONCATENAR, ele vai redeclarar a variavel resultado para 'Buzz' e nunca vai ficar "FizzBuzz" */
if (numero % 5 === 0) {
    resultado = resultado + "Buzz"; // ou resultado += "Buzz"
}

if (resultado === "") {
    resultado = numero; 
}

console.log("Modo 2: ", resultado)