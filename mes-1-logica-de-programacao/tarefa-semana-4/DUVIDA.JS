let listaDeSerie = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
let listaDeSerieComTh = listaDeSerie.filter(function(item){
    let comTh = item.includes("Th")
    return comTh
})

console.log(listaDeSerieComTh)