let listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

let ordemSeries = function (lista){
    
    for (let i = 0; i < lista.length; i++){
        let index = i 
        console.log (`[${index}] ${lista[i]}`)
    }
}

ordemSeries (listaSeries)

ordemSeries (["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"])