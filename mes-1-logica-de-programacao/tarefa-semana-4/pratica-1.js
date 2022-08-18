let indexSeries = function (lista){
    lista.forEach((valor, index) => {
        console.log(`[${index}] ${valor}`)

    })
}

let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

indexSeries (series);