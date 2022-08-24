let filmes = [{
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

  function formatarGenero (generos){
    const listaSemUltimoGenero = generos.slice(0, generos.length - 1)
    return `${listaSemUltimoGenero.join(', ')} e ${generos[generos.length - 1]}`
  }

  function exibirInfo (lista) {
        
    lista.forEach((elemento) => {
      const generoFormatado = formatarGenero (elemento.genero)

      console.log(`${elemento.titulo} (Nota: ${elemento.notaAvaliacao})
      • Duração: ${elemento.duracao} minutos
      • Ano de publicação: ${elemento.anoPublicacao}
      • Gênero: ${generoFormatado}\n`)
    })
     
  }

  exibirInfo(filmes)

  // Estrelas Além do Tempo (Nota: 7.8)
  // • Duração: 127 minutos
  // • Ano de publicação: 2016
  // • Gênero: biografia, drama e história
  