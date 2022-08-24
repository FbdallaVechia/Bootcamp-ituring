function grupos (alunos){
    let alunoIndice = 0
    let gruposAlunos = []
    
    while (alunoIndice < alunos.length) {
            let grupo
       
       if (alunoIndice + 3 < alunos.length) {
           grupo = alunos.slice(alunoIndice, alunoIndice + 2)
         alunoIndice += 2
       } else {
         grupo = alunos.slice(alunoIndice, alunoIndice + 3)
         alunoIndice += 3
       }
       
       gruposAlunos.push(grupo)
    }
    
    gruposAlunos.forEach((item, index) => {
        console.log(`Grupo ${index + 1}: ${item.join(', ')}`)
    })
 }
 
 let turma = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]
 
 grupos(turma)

 //------------------------------------------------------//

 function formatarGenero(generos) {
    const listaSemUltimoGenero = generos.slice(0, generos.length- 1)
  return `${listaSemUltimoGenero.join(', ')} e ${generos[generos.length - 1]}`
}

function minhaListaDeFilmes(filmes) {
  filmes.forEach(filme => {
    const generoFormatado = formatarGenero(filme.genero)

    console.log(`
      ${filme.titulo} (Nota: ${filme.notaAvaliacao})
      • Duração: ${filme.duracao} minutos 
      • Ano de publicação: ${filme.anoPublicacao}
      • Gênero: ${generoFormatado}
     `)
  })

  /* Estrelas Além do Tempo (Nota: 7.8)
  • Duração: 127 minutos
  • Ano de publicação: 2016
  • Gênero: biografia, drama e história */
}

const filmes = [{
  titulo: "Estrelas Além do Tempo",
  notaAvaliacao: 7.8,
  duracao: 127,
  anoPublicacao: 2016,
  genero: ["Biografia", "Drama", "História"]
},
{
  titulo: "Top Gun",
  notaAvaliacao: 8.6,
  duracao: 130,
  anoPublicacao: 2022,
  genero: ["Ação", "Drama"]
},
{
  titulo: "O Jogo da Imitação",
  notaAvaliacao: 8.0,
  duracao: 114,
  anoPublicacao: 2014,
  genero: ["Biografia", "Drama", "Suspense", "Guerra"]
}]

minhaListaDeFilmes(filmes)

//---------------------------------------------------------------------//

let paises = ['Brasil', 'Argentina', 'Espanha', 'Portugal']

function votacao(votos) {
  let votosComputados = {  }

  for (let voto of votos) {
      const pais = votosComputados[paises[voto - 1]]

    if (pais){
        votosComputados[paises[voto - 1]]++
    } else {
        votosComputados[paises[voto - 1]] = 1
    }
  }

  for (let pais in votosComputados) {
      console.log(`${pais}: ${votosComputados[pais]} voto(s)`)
  }

  const maiorValor = Math.max(...Object.values(votosComputados))
  const favorito = Object.keys(votosComputados).find(pais => votosComputados[pais] === maiorValor)

  console.log(`${favorito} é o preferido para ganhar a Copa do Mundo!`)
}
let eleicao = [1, 1, 1, 4, 4, 2, 3, 2]

votacao([1,1,1,3,3,4,4])