const findGreaterNumber = function (pFirstNumber, pSecondNumber) {
    if (pFirstNumber > pSecondNumber) {
        console.log(`The greater number of ${pSecondNumber} and ${pFirstNumber} is ${pFirstNumber}.`)
    } else if (pSecondNumber > pFirstNumber) {
        console.log(`The greater number of ${pFirstNumber} and ${pSecondNumber} is ${pSecondNumber}.`)
    } else {
        console.log(`Numbers are equal`)
    }
}