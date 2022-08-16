function ordenando (lista) {
   let ordem = lista.sort(function(a, b){
        return a - b
    })
    console.log(ordem)
}

let pratica11 = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]

ordenando (pratica11)