function saldo (lista) {
    let soma = 0

    for (let i = 0; i < lista.length; i++){
        soma = soma + lista[i]
    }
    console.log(`O saldo final de sua conta foi positivo no valor de ${soma}`)
    return soma
}

let pratica7 = [100, -20, -30, 10, -7, -21, -5]
let extrato = saldo (pratica7)
