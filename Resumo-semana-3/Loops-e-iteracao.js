/* Existem valores em JS que são considerados falsos (falsy):

- false
- 0
- -0
- "" string vazia
- null
- NaN

Qualquer outro valor é considerado verdade (truthy) 
--------------------------------
O QUE É ITERAR?
E se pudéssemos fazer com que, ao invés de executar um novo comando, o computador voltar e executar os comandos anteriores? Ou seja, repetir os comandos anteriores.

Iterar é repetir um conjunto de comandos de um código!
---> ENQUANTO algo estiver acontecendo, continue fazendo isso...

Foguete SpaceX
    while(distanciaDoChao > 0) {
        garantirEstabilidade();
        distanciaDoChao -= 1;
        garantirEquilibrio();
        controlarPotenciaDoMotor();
    }

    console.log("Foguete Pousou")
-----------------------------------
    while (condição) {
        código a ser repetido
    }

    condição falsa, sai do loop
-----------------------------------
*/

console.log("Hello World.");

function numerosDe1a10() {
    let i = 1;

    while (i <= 10) {
        console.log(i)
        i += 1 // se não iterar a variável (contador), entra em loop infinito!
    }
}

numerosDe1a10()

function numerosDe1aN (n) {
    let i = 1;

    while (i <= n) {
        console.log(i) // aqui imprime até o 20
        i ++
        console.log(i) // aqui imprime até o 21, que é a condição para parar
    }
    console.log(i) // aqui imprime só o 21!!!
}

numerosDe1aN(20)

function numerosParesEntre1eN (n) {
    let i = 2;

    while (i <= n) {
        console.log(i)
        i += 2
    }
}

numerosParesEntre1eN (10)

function geradorDeBla (n) {
    let i = 1;

    let texto = ""

    while (i <= n) {
        //escreve mais blas
        texto = texto + "bla"
        i += 1
        // console.log(texto)  imprime cada iteração!!!
    }

    console.log(texto)
}

geradorDeBla(10)

function tabuada (x, n) {
    let i =1;
    let tabuada = 1;
    
    while (i <= n) {
        tabuada = x * i;
        console.log(tabuada)
        i += 1
    }
}

tabuada (10, 10)

//LOOP FOR - tudo dentro do ()

function tabuadaDoFor (z, y){

for (let j = 1; j <= y; j++){
    let continha = z * j;
    console.log(`${j} x ${z} = ${continha}`)
}

}

tabuadaDoFor (2, 10)