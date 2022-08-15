/* Validação de email:
a) tem que ter um @, mas não pode ser o primeiro caractere;
b) tem que ter pelo menos um ".", mas não pode ser o primeiro nem o último caractere. */

let email = "a@mail.com"

const temArroba = email.includes("@")
console.log(email.includes("@"))

const temPonto = email.includes(".")
console.log(temPonto)

const primeiroCharNaoEhArroba = email.charAt(0) !== "@"
console.log(primeiroCharNaoEhArroba)

// const primeiroCharEhArroba = email.charAt(0) === "@"
// console.log(primeiroCharEhArroba)

// ! primeiroCharEhArroba = primeiroCharNaoEhArroba

const primeiroCharNaoEhPonto = email.charAt(0) !== "."
console.log(primeiroCharNaoEhPonto)

const emailInvertido = email.split('')
console.log(emailInvertido)

const emailInvertido1 = email.split('').reverse()
console.log(emailInvertido1)
/* o método SPLIT transforma a string em array, por isso o verificador precisa chamar a posição de uma array e não mais o CHARAT*/
const ultimoCharNaoEhPonto = emailInvertido1[0] !== "."
console.log(ultimoCharNaoEhPonto)

const resultado = temArroba && temPonto && primeiroCharNaoEhArroba && primeiroCharNaoEhPonto && ultimoCharNaoEhPonto

if (resultado === true) {
    console.log("O email é válido!")
}