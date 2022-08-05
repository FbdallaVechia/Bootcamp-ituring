let precoFinal = (valorProduto, porcentagemDesconto) => valorProduto - (valorProduto * porcentagemDesconto / 100)

console.log(precoFinal(100, 10))