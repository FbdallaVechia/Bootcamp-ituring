//Funçao para extrair as iniciais do nome em maiúsculas

function extrairIniciais(nomeCompleto) {
    const listaNomes = nomeCompleto.split(' ')
    console.log(listaNomes)
    const primeiroNome = listaNomes[0]
    console.log(primeiroNome)
    const posicaoUltimoNome = listaNomes.length - 1
    const ultimoNome = listaNomes[posicaoUltimoNome]

    const letraPrimeiroNome = primeiroNome.charAt(0)
    const letraUltimoNome = ultimoNome.charAt(0)

    const iniciais = letraPrimeiroNome + letraUltimoNome
    const iniciaisMaiusculas = iniciais.toUpperCase()

    return iniciaisMaiusculas
    
}

console.log(extrairIniciais('Luiz Araújo'))
console.log(extrairIniciais('José dias'))
console.log(extrairIniciais('maria alves da Conceição silva'))