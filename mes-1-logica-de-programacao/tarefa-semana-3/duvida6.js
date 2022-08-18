function serie (lista, busca){

    let listaFiltrada = []

    for (let i = 0; i < lista.length ; i ++){

        if (lista[i].includes(busca)){

           listaFiltrada[i] = lista[i]

        }
    }

    return listaFiltrada 
}

let resultadoBusca = serie (["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"], "Th")
console.log(resultadoBusca)