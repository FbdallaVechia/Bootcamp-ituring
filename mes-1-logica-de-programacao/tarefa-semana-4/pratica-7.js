let presente = {
    marca: "Tramontina",
    produto: "Jogo de talheres",
    preco: 500,
    quantidade: 132,
    categoria: "Utensilhos domésticos"
  }

  function propriedade(obj) {
    return Object.keys(obj)
  }

  console.log (propriedade(presente))