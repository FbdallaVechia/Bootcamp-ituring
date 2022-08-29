function tabuada(n) {
    let i = 0;
    let resultado
    while (i <= 10) {
        resultado = i * n
        console.log(`${n} x ${i} = ${resultado}`)
        i++
    }

}

tabuada(9)
