function maiorNumero(lista) {

    let tamanho_da_lista = lista.length //. length nos traz o tamanho da lista

    let maior_valor = 0 //se não atribuir um valor, fica como 'udefined' e não compara com os números e pode colocar um item da lista
    console.log("Esse é o maior valor antes do loop e da condição " + maior_valor)

    for (let contador = 0; contador < tamanho_da_lista; contador++) {

        if (lista[contador] > maior_valor) {
            maior_valor = lista[contador]
            //console.log('O maior valor aqui é ' + maior_valor) **esse console imprime linha a linha a condição
        }
    }
    return maior_valor
}

let lista_de_teste = [1, 10, 15, 2, 30, 0]
let maior = maiorNumero(lista_de_teste)
console.log(maior)

/* Métodos e propriedades:

método é uma função e propriedade e tipo uma variável
O JavaScript disponibiliza um conjunto de propriedades e métodos que podemos utilizar para manipular a lista ou obter algumas informações dela como:
-lista.length: mostra o tamanho da lista
-lista.pop(): remove o último item da lista
-lista.push(): adiciona um item no fim da lista
-lista.slice(): retorna uma fatia da lista */

function tamanho() {
    let lista1 = ["a", "b", "c"]
    console.log(lista1)
    console.log(`O tamanho da lista é ${lista1.length}`)

    let palavra = "Fabio"
    console.log(palavra)
    console.log(`O tamanho da palavra é ${palavra.length}`)
}

tamanho()

let lista2 = ["JavaScript", "HTML", "CSS", "React"]

console.log(lista2)
let x = lista2.pop()
console.log(lista2)
console.log(x)

lista2.push("Python")
console.log(lista2)

let listaNova = lista2.slice(2, lista2.length)//o último não é incluso! o (.length - 1) é sempre o último índice da lista
console.log(listaNova)

/* Já existem diversos métodos prontos no JavaScript. Para acessá-los usamos a notação de "." juntando o método que queremos aplicar -> console.log 

O JS  já tem um loop pronto para percorrer listas:
for (let i=0; i<lista.length; i++) faz passar por cada item da lista, com o contador iniciando em zero!

o loop pronto é: for (let item of lista) { vai passar por cada item da lista e parar quando acabar } */

function menorDaLista(lista) {
    let menor_valor = lista[0]

    for (let numero of lista) {

        console.log(`Esse é o número atual do for ${numero}`)
        //if (numero < menor_valor) {
        //    menor_valor = numero
        //}

        menor_valor = menor_valor > numero ? numero : menor_valor

        console.log(`Esse é o menor valor na volta atual do loop ${menor_valor}`)
        console.log("______________________________________")
    }

    return menor_valor
}

let menor = menorDaLista([-1, -10, -15, -2, -30, -100])
console.log(menor)

function filtroDePares(listaP) {
    //precisa de um lugar para salvar os numeros
    //precisa passar pela lista toda e pegar só os pares
    //precisa verificar se o numero é par

    let listaDePares = []

    for (let aluno of listaP) {
        if (aluno % 2 === 0) {
            listaDePares.push(aluno)
        }
    }
    return listaDePares

}

let listaFiltrada = filtroDePares ([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])

console.table(listaFiltrada)


function contaVogais (texto) {
    //lugar para salvar a contagem
    //atravessar o texto
    //verificar se é vogal e somar
    //return o total de vogais

    let contVogais = 0;

    for (let letra of texto) {
        const temA = letra === "A" || letra === 'a'
        const temE = letra.toUpperCase() === "E"
        const temI = letra.toUpperCase() === "I"
        const temO = letra.toUpperCase() === "O"
        const temU = letra.toUpperCase() === "U"

        const ehVogal = temA || temE || temI || temO || temU

        if (ehVogal) {

            contVogais ++
        }
        
    }
    return contVogais

}

let vogaisFabio = contaVogais("Fabio")
console.log(vogaisFabio)


function contaVogais (texto) {
    //lugar para salvar a contagem
    //atravessar o texto
    //verificar se é vogal e somar
    //return o total de vogais

    let contVogais = 0;
    let vogais = ['a', 'e', 'i', 'o', 'u']

    for (let letra of texto) {
        if (vogais.includes(letra.toLowerCase())) {

            contVogais ++
        }
        
    }
    return contVogais

}

let vogUrso = contaVogais ("Urso")
console.log(vogUrso)
