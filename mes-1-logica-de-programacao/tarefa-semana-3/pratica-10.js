function votacao(votos) {
    let brasil = 0
    let argentina = 0
    let espanha = 0
    let portugal = 0

    for (let item of votos) {
        if (item === 1) {
            brasil++
        } else if (item === 2) {
            argentina++
        } else if (item === 3) {
            espanha++
        } else if (item === 4) {
            portugal++
        }

    }
    console.log(`Brasil: ${brasil} voto(s)`)
    console.log(`Argentina: ${argentina} voto(s)`)
    console.log(`Espanha: ${espanha} voto(s)`)
    console.log(`Portugal: ${portugal} voto(s)`)

    if (brasil > argentina && brasil > espanha && brasil > portugal) {
        console.log("Brasil é o preferido para ganhar a Copa do Mundo")
    }


}

let eleicao = [1, 1, 1, 4, 4, 2, 3, 2]

votacao(eleicao)