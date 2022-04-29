let numberList = prompt("please enter the numbers separated by comma", "").split(",")

let sum = parseInt(numberList[0])

for (let i = 1; i < numberList.length; i++) {
    console.log(sum)
    sum += parseInt(numberList[i])
}

document.write(sum)