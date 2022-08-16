//Função para dizer que horas são:
function queHorasEh () {
    let horaAtual = new Date ();
    let horaFormatada = horaAtual.toLocaleTimeString()
    console.log(`Olá, agora são ${horaFormatada}`)
}

queHorasEh()