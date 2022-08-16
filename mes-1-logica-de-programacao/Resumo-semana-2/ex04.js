//Calcular valor com desconto com uma função

function calcularDesconto(valorProduto, desconto) {
    let valorDesconto = valorProduto * desconto/100;
    let totalMenosDesconto = valorProduto - valorDesconto;
    return totalMenosDesconto;
}

console.log(calcularDesconto(100, 5))
console.log(calcularDesconto(100, 20))
console.log(calcularDesconto(100, 50))