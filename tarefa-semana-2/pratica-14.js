let imc = function (pesoKg, alturaM) {
    const calculoIMC = pesoKg / (alturaM * alturaM);
    console.log(`Seu IMC é de ${calculoIMC.toFixed(2)}`);

    if (calculoIMC < 18.5){
        console.log('Abaixo do peso');
    } else if (calculoIMC >= 18.5 && calculoIMC < 25){
        console.log('Peso Normal');
    } else if ( calculoIMC >= 25 && calculoIMC < 30){
        console.log('Sobrepeso');
    } else if (calculoIMC >= 30){
        console.log('Obesidade')
    }


    
}

imc (40, 1.70)
imc (70, 1.70)
imc (85, 1.70)
imc (100, 1.70)