let indexSeries = function (lista) {
    let resultado = lista.forEach((valor, index) => {

        console.log(`[${index}] ${valor}`)

    })
    return resultado
}

let series = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];

indexSeries(series);