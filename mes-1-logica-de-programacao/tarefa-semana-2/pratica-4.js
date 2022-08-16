function valorFinal (valorProduto, porcentagemDesconto) {
    let valorComDesconto = valorProduto - (valorProduto * porcentagemDesconto/100);
    return valorComDesconto;
    
}

let preco = valorFinal (100, 10)
console.log(preco)