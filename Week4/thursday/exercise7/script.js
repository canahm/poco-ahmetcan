const firstNumber = prompt("first number", 0)
const secondNumber = prompt("second number", 0)

let result = 0;

if (firstNumber > secondNumber) {
    result = firstNumber - secondNumber
} else if (secondNumber > firstNumber) {
    result = secondNumber - firstNumber
} else {
    alert("You passed the same number, no subtraction will be done")
}

document.write(result)