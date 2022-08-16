/*LOOPS e Métodos:

- .forEach(): a função de parâmetro é chamada também de função de CALLBACK
*/

let listaDeNomes = ["Fabio", "Cleide", "Thiago"]

listaDeNomes.forEach(function(nome){
    console.log(`Olá, ${nome} da function`)
    //return `Olá ${nome} com return`
})

//console.log(ola) valor undefined

//usando arrow function

listaDeNomes.forEach((nome) => {
    console.log(`Olá, ${nome} da arrow`)
})

//que é a mesma coisa que:

for (let nome of listaDeNomes) {
    console.log(`Olá, ${nome}, do loop`)
}

let lista = ["JavaScript", "HTML", "CSS", "React"]

lista.forEach(function(item) {
    //comandos que vão ser executados para cada item da lista

})

/*
- .filter():

*/
let nomesMaisQueCincoLetras = listaDeNomes.filter(function(nome){
    //toda vez que retornar True ele filtra
    //toda vez que retornar False ele joga fora
    //return nome.length > 5
    return false //lista vazia
})

console.log(nomesMaisQueCincoLetras)

//o método .filter retorna sempre uma lista.

listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

let seriadosComTh = listaSeries.filter(function(seriado){
    return seriado.includes("Th")
})

console.log(seriadosComTh)

// modo que o termoDeBusca fique dinamico

function buscaTextoComFilter (lista, termoDeBusca) {
    let listaFiltrada = lista.filter(function (seriado) {
        return seriado.includes(termoDeBusca)
    })

    return listaFiltrada
}

let seriadosFiltrados = buscaTextoComFilter (listaSeries, "ing")
console.log(seriadosFiltrados)

/* Método .map()

lista.map(function(item) {
    return // processa o dado da forma que quisermos
}) */

let retornoDoMap = listaDeNomes.map(function(nome) {
    return `Olá, ${nome}`
    
})

console.log(retornoDoMap)
console.table(retornoDoMap)

// No .filter a lista retornada é sempre menor do que a original
// No .map a lista retornada é sempre do mesmo tamanho, ou seja, se verifica e da uma resposta pra cada item da lista

let retornoDoMap2 = listaDeNomes.map(function(nome){

    if (nome.length > 5) {
        return nome
    }
})

console.log(retornoDoMap2)
console.table(retornoDoMap2)

let idadeInscritos = [10, 12, 15, 18, 21, 30, 40, 32, 20]
// ver a lista de idades
// uma lista só com maiores de 18 anos
// corrigir a lista de um jeito facil

function mexerComIdade (lista, maiorDe, corretor) {

    lista.forEach(function(idade, maiorDe, corretor){
        console.log(idade)
    })

        let maioresDeMaiorDe = lista.filter(function(idade){
        return idade > maiorDe
    })
    console.log(`Lista maiores de ${maiorDe} anos: ${maioresDeMaiorDe}`)

    let listaCorrigida = lista.map(function(idade) {
        return idade + corretor
    })
    console.log(`Lista Corrigida: ${listaCorrigida}`)

    return 0 //esse retorno da função declarada
}


console.log(mexerComIdade(idadeInscritos, 18, -3))