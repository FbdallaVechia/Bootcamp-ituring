// function buscaTexto (lista, termoDeBusca){
//     let listaFiltrada = []
    
//     for (let serie of lista) {
//         if (serie.includes(termoDeBusca)) {
//             listaFiltrada.push(serie)
//         }
//     }

//     return listaFiltrada
// }

listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

function buscaTermo (lista, termoDeBusca) {
    
   const resultado = lista.filter(function(elemento){
      const busca = elemento.includes(termoDeBusca)
       return busca
    })

    return resultado
}

console.log(buscaTermo(listaSeries, "Th"))