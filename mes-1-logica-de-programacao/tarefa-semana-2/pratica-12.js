function diaSemana(queDiaEh) {
    switch (queDiaEh) {
        case 1:
            console.log("Segunda-feira");
            break;
        case 2:
            console.log("Terça-feira");
            break;
        case 3:
            console.log("Quarta-feira");
            break;
        case 4:
            console.log("Quinta-feira");
            break;
        case 5:
            console.log("Sexta-feira");
            break;
        case 6:
            console.log("Sábado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log(`O número ${queDiaEh} não é válido para dia da semana`)    

    }
}

diaSemana(1)
diaSemana(2)
diaSemana(3)
diaSemana(4)
diaSemana(5)
diaSemana(6)
diaSemana(7)
diaSemana(100)