function primo(y) {
    let ehPrimo = true

    for (let i = 2; i < y; i++) {
        if (y % i === 0) {
            ehPrimo = false
        }
    }
    console.log(ehPrimo)

}

primo(17)
primo(2)
primo(7)
primo(8)
primo(5)
primo(23)
primo(15)
primo(1500450271)