let pratica11 = [{
    valor: 100.00,
    movimentacao: "deposito",
    dataMovimentacao: "2021-08-02T07:46:36.611Z"
},
{
    valor: 20.00,
    movimentacao: "retirada",
    dataMovimentacao: "2021-09-17T09:46:36.611Z"
},
{
    valor: 30.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-02-24T09:46:36.611Z"
},
{
    valor: 10.00,
    movimentacao: "deposito",
    dataMovimentacao: "2022-03-02T09:46:36.611Z"
},
{
    valor: 7.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-04-20T09:46:36.611Z"
},
{
    valor: 21.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-03-20T09:46:36.611Z"
},
{
    valor: 5.00,
    movimentacao: "retirada",
    dataMovimentacao: "2022-06-08T09:46:36.611Z"
}]

function saldo(lista) {
    let saldoFinal;
    let totalDepositos = 0;
    let totalRetiradas = 0;

    let listaValores = lista.map(elemento => {
        if (elemento.movimentacao === "retirada") {
            return elemento.valor * -1
        } else {
            return elemento.valor
        }

    })

    for (valor of listaValores) {
        valor > 0 ? (totalDepositos = valor + totalDepositos) : (totalRetiradas = valor + totalRetiradas)
    }

    saldoFinal = listaValores.reduce((valorInicial, elementAtualDaLista) => {
        return valorInicial + elementAtualDaLista
    })

    console.log(`
    O valor total depositado foi de: R$ ${totalDepositos}
    O valor total retirado foi de: R$ ${totalRetiradas * -1}
    O saldo final de sua conta foi positivo no valor de R$ ${saldoFinal}`)
    return saldoFinal
}

saldo(pratica11)