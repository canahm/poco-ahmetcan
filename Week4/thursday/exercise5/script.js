let numberList = prompt("please enter the numbers separated by comma", "").split(",")

let mappedList = numberList.map(Number)

let sortedArray = mappedList.sort((a, b) => a - b)


/* let myNumbers = []
for (let i = 0; i < 10; i++) {
    myNumbers.push(parseInt(prompt("please enter the first number", "")))
}
 */


document.write(sortedArray)