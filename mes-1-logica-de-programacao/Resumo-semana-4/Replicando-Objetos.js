function criarUsuario (nome, idade, cidade, livroPreferido) {

    let objeto = {}

    objeto.nome = nome
    objeto.idade = idade
    objeto.cidade = cidade
    objeto.livroPreferido = livroPreferido

    objeto.maiorDeIdade = idade > 18 ? true : false

    objeto.seApresentar = function () {
    
    //     console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    //     //se naõ der um return, volta un undefined desse função!, mas o ideal é dar o return para a instrução da função !!
    //     return null

        return `Oi, meu nome é ${this.nome} e tenho ${this.idade} anos`
   }



    return objeto
}

let usuarioTiago = criarUsuario("Tiago", 30, "São Paulo", "Neuromancer")

let usuarioThales = criarUsuario ("Thales", 30, "Vitória", "Mindset")

console.log(usuarioTiago.livroPreferido)
console.log(usuarioThales)

console.log(usuarioTiago.seApresentar())

