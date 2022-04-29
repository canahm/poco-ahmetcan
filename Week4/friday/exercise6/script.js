let receipt = parseInt(prompt("Enter the bill amount", ""))
let tip = (receipt/100)*7.5

function myTipCalc(){
    document.write("Your recommended tip is "+tip + " CHF")

}
myTipCalc()
