function mensagemComprador(nomeComprador) {
    console.log(`Olá, ${nomeComprador}`)
}

function mensagemEntrega(nomeProduto, nomeRecebedor, enderecoEntrega) {
    console.log(`Fizemos a entrega do produto ${nomeProduto} no endereço ${enderecoEntrega} com sucesso!\nO seu produto foi recebido por: ${nomeRecebedor}\nEsperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`)
}

function envioEmail(nomeDeQuemEnviou) {
    console.log(`Atenciosamente,\n
    ${nomeDeQuemEnviou}`)
}

mensagemComprador()
mensagemEntrega()
envioEmail()