// function ordenando (lista) {
//    let ordem = lista.sort(function(a, b){
//         return a - b
//     })
//     console.log(ordem)
// }

let pratica11 = [10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824]

// ordenando (pratica11)

function ordenando(lista) {
    let menorNumero;
    
    for (let i = 0; i < lista.length; i++){
        for (let j = i + 1; j < lista.length; j++){
            if (lista[j] < lista[i]){
                // menorNumero = lista[j];
                // lista[j] = lista[i];
                // lista[i] = menorNumero;

                [lista[j], lista[i]] = [lista[i], lista[j]]
            }
        }
    }
    
    console.log(lista)
    return lista
}



ordenando(pratica11)
