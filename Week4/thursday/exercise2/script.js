let myNumber=prompt("Enter a number between 0 to 20", "")
/* if(myNumber%2===0){
    document.write( myNumber + " is an even number")
}else{
    document.write(myNumber + " is an odd number")
} */
if(myNumber%2===0 && myNumber<=20){
    document.write(`${myNumber} is an even number`)
}else if(myNumber%2===1 && myNumber<=20){
    document.write(`${myNumber} is an odd number`)
}else{
    document.write("This is not within my limits.")
}