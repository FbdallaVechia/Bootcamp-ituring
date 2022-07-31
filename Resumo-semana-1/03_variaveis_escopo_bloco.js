// Antes do ES6 o JavaScript só tinha escopo global e de função.
// Variáveis declaradas dento de {} não podem ser acessadas fora do bloco

//Exemplo 1 (usando Var):
{
var x = "olá"
console.log('Dentro do bloco', x);
}

console.log('Fora do bloco', x)

//Exemplo 2 (Agora com let/const):
{
    let y = "Mundo"
    console.log('Dentro do bloco', y);
    }
    
    //console.log('Fora do bloco', y) // A varíavel foi definida com LET dentro do bloco, por isso não pode ser chamada fora!!!