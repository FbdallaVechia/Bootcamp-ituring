let listaTarefa = [4, 9, 16, 25, 36, 49]

function raizQuadrada(lista) {
    const resultado = lista.map(function (elemento) {
        return Math.sqrt(elemento)
    })

    return resultado
}

console.log(raizQuadrada(listaTarefa))