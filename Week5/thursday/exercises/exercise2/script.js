for (let a = 0; a < myArray.length; a++) {

    if (a === 0) {
        console.log(`My ${a + 1}st choice is ${myArray[a]}`)
    } else if (a === 1) {
        console.log(`My ${a + 1}nd choice is ${myArray[a]}`)
    } else if (a === 2) {
        console.log(`My ${a + 1}rd choice is ${myArray[a]}`)
    } else if (a >= 3) {
        console.log(`My ${a + 1}th choice is ${myArray[a]}`)
    }
}