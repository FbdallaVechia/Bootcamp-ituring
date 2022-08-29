function buscaTexto(lista, termoDeBusca) {
    let listaFiltrada = []

    for (let serie of lista) {
        if (serie.includes(termoDeBusca)) {
            listaFiltrada.push(serie)
        }
    }

    return listaFiltrada
}

listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

console.log(buscaTexto(listaSeries, "Th"))