
function age(){

let birthYear = parseInt(prompt("Enter your year of birth ", ""));
let birthMonth = parseInt(prompt("Enter your month of birth ", ""));
let futureYear = parseInt(prompt("Enter a year in future",""));
let futureMonth = parseInt(prompt("Enter a month", ""));


    if(futureMonth >= birthMonth){
        document.write("I will be " + (futureYear - birthYear) + " years and " + (futureMonth-birthMonth) + " months old.")
    }else{
        document.write("I will be " + (futureYear - birthYear - 1) + " years and " + (futureMonth-birthMonth+12) + " months old.")
    }
}
age()
