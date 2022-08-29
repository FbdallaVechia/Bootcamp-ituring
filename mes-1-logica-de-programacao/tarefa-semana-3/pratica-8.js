function extrato(lista) {
    let depositos = 0
    let saques = 0
    let saldo = 0

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > 0) {
            depositos += lista[i]

        } else if (lista[i] < 0) {
            saques += lista[i]
        }
        saldo = depositos + saques
    }
    console.log(`O valor total depositado foi de: R$ ${depositos}`)
    console.log(`O valor total sacado foi de: R$ ${saques * -1}`)
    console.log(`O valor saldo final de sua conta é de: R$ ${saldo}`)
}

let movimentoConta = [100, -20, -30, 10, -7, -21, -5]

extrato(movimentoConta)