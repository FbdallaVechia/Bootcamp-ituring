function impares(x) {
    if (x > 0){
    for (let i = 1; i <= x; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
} else {
    console.log(`O valor ${x} é inválido `)
}
}

    impares (17)
    impares(0)
