// function buscaSerie (lista, busca) {
        

//     if (lista.includes(busca)){
    
//         console.log(lista.indexOf(busca))
//     } else {
//         console.log(undefined)
//     }

// }
listaSeries = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"] 


// buscaSerie (listaSeries, "Dexter")

// buscaSerie (listaSeries, "Breaking Bad")

// buscaSerie (listaSeries, "Friends")

function buscaSerie (lista, busca){
    let resultado;
    
    lista.forEach((serie, index) => {
        if (busca === serie){
            resultado = index
        } 
    })
    return resultado
}

console.log(buscaSerie (listaSeries, "Dexter"))

console.log(buscaSerie (listaSeries, "Friends"))