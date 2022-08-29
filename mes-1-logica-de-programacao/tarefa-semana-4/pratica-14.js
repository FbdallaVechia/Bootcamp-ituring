let pratica14 = {
    restaurante: "Turing Gourmet",
    tipo: "Comida britânica",
    avaliacoes: [
        {
            cliente: "Thais S.",
            nota: 9.8
        },
        {
            cliente: "Thales Gonçalves",
            nota: 8.9
        },
        {
            cliente: "José Lopes",
            nota: 9.9
        },
        {
            cliente: "Cristina Souza",
            nota: 9.3
        },
        {
            cliente: "Leo Garcia",
            nota: 8.5
        }
    ]
}

function mediaAvaliacoes(obj) {
    let mediaNotas;
    let notasAvaliadas = obj.avaliacoes.map(avaliacoes => {
        return avaliacoes.nota
    })
    mediaNotas = (notasAvaliadas.reduce((valorInicial, notaDeCadaCliente) => {
        return valorInicial + notaDeCadaCliente
    })) / notasAvaliadas.length

    mediaNotas = mediaNotas.toFixed(2)

    console.log(`A média de avaliações do restaurante Turing Gourmet foi de ${mediaNotas}.`)
    return mediaNotas
}

mediaAvaliacoes(pratica14)