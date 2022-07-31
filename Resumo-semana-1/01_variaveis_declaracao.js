// 1) Comentários
    //comentário de uma linha
    /*comentário de várias linhas */

// 2) Variáveis -> espaço em memória para guardar um valor
    // Declarar variável

    var email = 'fabiodallavechia@gmail.com';
    
        console.log(email);

    let nome = 'Fabio Dalla Vechia'; //ES6
        console.log (nome);

    const dataNascimento = '11/11/1988' //ES6
    // A constante deve ser declarada e atribuída!

/*Regras para declarar variáveis:
    Cuidar com as palavras reservadas!
    VAR está caindo em desuso por ser de escopo global! Cunsume memória de maneira desnecessária!

    -Podem iniciar com _, $ ou letra (a-z ou A-Z)
    -Depois podem ter caracteres e números
    -Não podem ter caracteres especiais
    -Não pode ser palavra reservada (const, break, continue, if, function, ...)
    */

//Variáveis podem ser declaradas numa mesma linha:

let _nota1, _a, _B, $valor

// O JS é uma linguagem case sensitive

let cidade = "A";
let Cidade = "B";
let CIDADE = "C";

//O JS entende como 3 variáveis diferentes!!!

console.log(cidade, Cidade, CIDADE)

