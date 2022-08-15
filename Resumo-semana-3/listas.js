/* Lista é um tipo de dado, que é declarado e fica entre [] e separado por vírgula.*/

let lista = ["JavaScript", "HTML", "CSS", "React"]

/* A lista é mapeada pelo índice, que nos da a posição do ítem na lista, que sempre se inicia em 0 (zero)*/

console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log(lista[3]);
console.log(lista);

//Modificando a lista

lista[0] = "Pyton"
lista[1] = "PostgreSQL"
lista[2] = "Jupiter"
lista[3] = "Pandas"

console.log(lista)

function geradorDeLista() {
    let lista = []

    lista[0] = 1
    lista[1] = 2
    lista [2] = "Thales"
    lista [3] = [1, 2, 3]

    return lista

}

console.log(geradorDeLista())

let minhaLista = geradorDeLista()
console.log(minhaLista[3])
console.log(minhaLista[3][1])


function geradorDeListaComLoop (n) {
    let listaLoop = []
    for (let i = 1; i <= n; i++){
        listaLoop[i] = i
    }
    return listaLoop
}

//Se o contador começa em 1, o índice 0 fica <empty item>
let minhaListaDeLoop = geradorDeListaComLoop(10)
console.table (minhaListaDeLoop)
console.log(minhaListaDeLoop)

//Contador do 0
function geradorDeListaComLoop1 (tamanhodalista) {
    let listaLoop = []
    for (let i = 0; i <= tamanhodalista; i++){
        listaLoop[i] = i
    }
    return listaLoop
}

let minhaListaDeLoop1 = geradorDeListaComLoop1(10)
console.table (minhaListaDeLoop1)
console.log(minhaListaDeLoop1)

