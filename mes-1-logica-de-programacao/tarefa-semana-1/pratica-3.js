let nome = "Fabio Dalla Vechia";
let email = "fabiodallavechia@gmail.com";
let profissao = "Farmacêutico";
let idade = 33
let viagemSonhos = "Fazer uma EuroTrip"

if (typeof nome == 'string') {
    console.log(true)
} else {
    console.log(false)
}

if (typeof email == 'string') {
    console.log(true)
} else {
    console.log(false)
}

switch(typeof profissao == 'string'){
    case true:
        console.log(true);
        break;
        case false:
            console.log(false);
            break;
}

if (typeof idade == 'string') {
    console.log(true)
} else {
    console.log(false)
}

if (typeof viagemSonhos == 'string') {
    console.log(true)
} else {
    console.log(false)
}