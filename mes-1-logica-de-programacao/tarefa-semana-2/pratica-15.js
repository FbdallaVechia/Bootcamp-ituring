let imc = function (pesoKg, alturaM) {
   let calculoIMC = pesoKg / (alturaM * alturaM); // variável adota escopo global porque não foi declarada dentro da função!!!
    console.log(`Seu IMC é de ${calculoIMC.toFixed(2)}`);

    return calculoIMC;
}

function classificacaoIMC(imcCalculado) {
    if (imcCalculado < 18.5) {
        console.log('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
        console.log('Peso Normal');
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
        console.log('Sobrepeso');
    } else if (imcCalculado >= 30) {
        console.log('Obesidade')
    }
    return imcCalculado
}


classificacaoIMC(imc(50, 1.70))


classificacaoIMC(imc(70, 1.70))


classificacaoIMC(imc(85, 1.7))


classificacaoIMC(imc(100, 1.7))