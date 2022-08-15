function saldo (lista) {
    let soma = 0

    for (let i = 0; i < lista.length; i++){
        soma = soma + lista[i]
    }
    return soma
}

let pratica7 = [100, -20, -30, 10, -7, -21, -5]
let extrato = saldo (pratica7)
console.log(extrato)