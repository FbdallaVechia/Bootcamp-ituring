//Criando uma função debug


function debug(variavel) {
    console.log(`[DEBUG] Valor: ${variavel} - Tipo: ${typeof variavel}`) 
}

let nome = 'José'

debug('José')
debug(nome)