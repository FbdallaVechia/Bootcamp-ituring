//Função para validar senha

function senhaEhValida(senha) {
    const senhaPossuiMinimo6Caracteres = senha.length >= 6
    return senhaPossuiMinimo6Caracteres
}

function senhaEhValida1(senha) {
    const senhaPossuiMinimo6Caracteres = senha.length >= 6
    return senha.length >= 6
}

console.log(senhaEhValida('12345'))
console.log(senhaEhValida1('12345678'))