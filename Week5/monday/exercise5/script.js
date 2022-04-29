const calcRetairementAge = function() {
    const currentAge = prompt("What is your age?",)
    const retairementAgeYouLike = prompt("At what age you like to retire?",)
    const yearsLeft = `You have  ${retairementAgeYouLike - currentAge} years left until you retaire.`
    const yearsOfRetairement = `It's 2022, so you can retire in ${2022 + (retairementAgeYouLike - currentAge)}.`
        console.log(yearsLeft)
        console.log(yearsOfRetairement)
    }
    
    calcRetairementAge()