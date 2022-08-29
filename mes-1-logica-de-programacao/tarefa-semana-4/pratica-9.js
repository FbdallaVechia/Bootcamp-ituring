let filmes = [{
  titulo: "Um Sonho de Liberdade",
  notaAvaliacao: 9.2,
  duracao: 142,
  anoPublicacao: 1994,
  categoria: "Drama"
},
{
  titulo: "Clube da Luta",
  notaAvaliacao: 8.7,
  duracao: 139,
  anoPublicacao: 1999,
  categoria: "Drama"
},
{
  titulo: "Toy Story 3",
  notaAvaliacao: 8.3,
  duracao: 103,
  anoPublicacao: 2010,
  categoria: "Animação"
}]

// function ordenarNota (lista){
//   let newList = []

//   for (filme of lista)
//   if (lista[filme].notaAvaliacao > 8) {
//       newList.push(lista[filmes])
//   }
//   return newList
// }

function ordenarPorNota(lista) {
  let newList = lista.sort(function (elementoA, elementoB) {
    return elementoA.anoPublicacao - elementoB.anoPublicacao
  })

  console.log(`O filme de melhor avaliação com nota ${newList[0].notaAvaliacao} é: ${newList[0].titulo}.`)
  return newList
}

ordenarPorNota(filmes)



