/*Objetos e métodos:

O objeto ajuda a ter um dado para trabalhar com uma 'coisa'.
Um objeto pode ser criado e pode-se adicionar propriedades a ele.

Um objeto é declarado entre {} e sempre possui uma chave e um valor:
    let obj = {chave: VALOR, item: "tenis", preço: 33}

Para acessar as informações de um objeto, assim como nas listas que passamos o índice, aqui passamos a chave.
    obj.chave = VALOR


*/

let usuario = {
    nome: "Tiago",
    "idade": 30,
    "temPremium": true,
    livrosPreferidos: ["Neuromancer", "O sol é para todos"],
    "habilidades": { musica: 10, videogame: 8, matemática: 10 }
} //A propriedade do objeto não precisa ficar entre "aspas"!!!

console.log(usuario)
console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.livrosPreferidos)
console.log(usuario.livrosPreferidos[1])
console.log(usuario.habilidades)
console.log(usuario.habilidades.musica)// Para acessar um objeto dentro de um objeto usa o '.' e a propriedade!

//Lista de objetos:

let alunos = [
    { nome: "Tiago", fezProva: true, "media": 10 },
    { nome: "Alvaro", fezProva: true, "media": 9 },
    { nome: "Tobias", fezProva: false, "media": 8 },
    { nome: "Regina", fezProva: true, "media": 9 },
    { nome: "Julia", fezProva: true, "media": 5 },
]

console.log(alunos[0])//Acessa o índice [0] da lista
console.log(alunos[0].nome)//Acessa o índice [0] da lista e a propriedade NOME do objeto que está ali

//nome dos aprovados
//precisa ter feito a prova e media maior ou igual a 6
function alunosAprovados(lista) {

    let alunosAprovados = []
    //let index = 0

    for (let aluno of alunos) {
        if (aluno.fezProva == true && aluno.media >= 6) {
            //alunosAprovados[index] =
            //index ++
            alunosAprovados.push(aluno.nome)
        }
    }
    return alunosAprovados
}

let _alunosAprovados = alunosAprovados(alunos)
console.log(_alunosAprovados)

function alunosAprovados2(lista) {

    let alunosAprovados2 = lista.filter((aluno) => {
        return aluno.fezProva && aluno.media >= 6
        //O filter retorna o objeto inteiro!
    })

    let nomesAlunosAprovados = alunosAprovados2.map(function (aluno) {
        return aluno.nome
    })

    //return alunosAprovados2 esse retorno da o objeto todo, não apenas os nomes
    return nomesAlunosAprovados
}

let _alunosAprovados2 = alunosAprovados2(alunos)
console.log(`[${_alunosAprovados2}] usando métodos .filter e . map`)

/* Listas são objetos em que o índice é a chave!!! */

let lista = ["JavaScript", "HTML", "CSS"]
console.log(typeof (lista))

console.log(typeof (usuario))

console.table(lista)
console.table(usuario)//aqui é multidimensional

/* Objetos podem conter FUNÇÕES! */

let pessoa = {
    nome: "Tobias",
    fezProva: false,
    media: 8,
    dizerOi: function () {
        console.log('Oi')
    }
}

pessoa.dizerOi()