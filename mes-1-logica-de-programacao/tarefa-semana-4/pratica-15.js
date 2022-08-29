let pratica15 = [{
    motorista: "Thais S.",
    avaliacao: 9.8,
    tempoEstimado: 7,
    veiculo: 'Palio',
    placa: 'ABC4321'
},
{
    motorista: "Thales Gonçalves",
    avaliacao: 8.9,
    tempoEstimado: 4,
    veiculo: 'Celta',
    placa: 'ABC0987'
},
{
    motorista: "José Lopes",
    avaliacao: 9.9,
    tempoEstimado: 5,
    veiculo: 'Fox',
    placa: 'ABC1234'
},
{
    motorista: "Cristina Souza",
    avaliacao: 9.3,
    tempoEstimado: 3,
    veiculo: 'Fox',
    placa: 'ABC1234'
},
{
    motorista: "Leo Garcia",
    avaliacao: 8.5,
    tempoEstimado: 9,
    veiculo: 'Ka',
    placa: 'ABC8765'
}]

function motoristaMaisperto(lista) {
    let listaOrganizada = lista.sort((a, b) => {
        return a.tempoEstimado - b.tempoEstimado
    })
    console.log(`${listaOrganizada[0].motorista} está a caminho com o carro ${listaOrganizada[0].veiculo} de placa ${listaOrganizada[0].placa}. Chega em ${listaOrganizada[0].tempoEstimado} minutos.`)
}

motoristaMaisperto(pratica15)