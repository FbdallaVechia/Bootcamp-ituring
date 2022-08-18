function criarLista(tamDaLista) {
    let novaLista = [];
    for (let i = 0; i <= tamDaLista; i++){
       
        novaLista[i] = i
        
    }
    return novaLista
}

let lista10 = criarLista(10)

console.log(lista10)

lista10.forEach((valorDaLista) => {
    if (valorDaLista % 2 === 0){
        console.log(`O número ${valorDaLista} é par`)
    } else {
        console.log(`O número ${valorDaLista} é ímpar`)
    }
})

/* A função de callback do .forEach() pode receber 3 parâmetros:
    - Valor atual: o valor do elemento atual do array (obrigatório);
    - Índice: o número do índice do elemento atual (opcional);
    - Array: o objeto de array ao qual o elemento atual pertence (opcional).

    */

    lista10.forEach((valorDaLista, indiceDoValorDaLista, array) => {
        if (valorDaLista % 2 === 0){
            console.log(`Na posição ${indiceDoValorDaLista} O número ${valorDaLista} é par`)
        } else {
            console.log(`O número ${valorDaLista} é ímpar e está na lista ${array}`)
        }
    })

    lista10.forEach((valor, indice) => {
        console.log(lista10.slice(indice, indice + 2))
    })