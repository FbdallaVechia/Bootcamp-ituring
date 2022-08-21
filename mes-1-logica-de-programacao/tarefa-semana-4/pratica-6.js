let filme = {
 titulo: "Estrelas Além do Tempo",
 notaDeAvaliacao: 7.8,
 duracao: 127,
 anoDePublicacao: 2016,
 categoria: "Drama",
}

function infoFilme (obj){
    return `O filme ${filme.titulo} que estreou em ${filme.anoDePublicacao}, tem a avaliação de ${filme.notaDeAvaliacao} pelo IMDb.`
}

console.log(infoFilme(filme))