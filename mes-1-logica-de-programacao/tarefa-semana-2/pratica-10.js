let maiorDe3 = function (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3)
    } else {
        console.log(num1, num2, num3)
    }
}

maiorDe3(30, 10, 20)
maiorDe3(10, 30, 20)
maiorDe3(20, 10, 30)