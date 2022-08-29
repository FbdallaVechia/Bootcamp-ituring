function grupos(alunos, gruposDe) {
    let grupo = alunos.forEach((valor, index) => {
        console.log(alunos.slice(index, index + gruposDe))
    })
    return grupo
}

let turma = ["Anderson Luz", "Fabio Vechia", "Claudia Lopes", "Rafael Alves", "Maria Mansano", "Jairo Ferreira", "Vitor Ribeiro"]

grupos(turma, 2)