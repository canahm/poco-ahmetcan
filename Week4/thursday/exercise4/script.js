let userNumber = prompt("enter a number between 0 and 10", " ")
let parsedValue = parseInt(userNumber)

if (userNumber >= 0 && userNumber <= 10) {
    let result = parsedValue * 9
} else {
    document.write("this not in the limit")
}
document.write(`${userNumber} * 9 = ${result}`)
