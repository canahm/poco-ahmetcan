const daysOfWeek=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const wocheTages=["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
if(daysOfWeek[0]){
    console.log(wocheTages[0])
}if(daysOfWeek[1]){
    console.log(wocheTages[1])
}if(daysOfWeek[2]){
    console.log(wocheTages[2])
}if(daysOfWeek[3]){
    console.log(wocheTages[3])
}if(daysOfWeek[4]){
    console.log(wocheTages[4])
}if(daysOfWeek[5]){
    console.log(wocheTages[5])
}if(daysOfWeek[6]){
    console.log(wocheTages[6])
}
let day= 'Monday'
let day1= 'Tuesday'
let day2= 'Wednesday'
let day3= 'Thursday'
let day4= 'Friday'
let day5= 'Saturday'
let day6= 'Sunday'
switch(day){
    case 'Monday':
        console.log('Montag') 
}switch(day1){
    case 'Tuesday':
        console.log('Dienstag')
}switch(day2){
    case 'Wednesday':
        console.log('Mittwoch')
}switch(day3){
    case 'Thursday':
        console.log('Donnerstag')
}switch(day4){
    case 'Friday':
        console.log('Freitag')
}switch(day5){
    case 'Saturday':
        console.log('Samstag')
}switch(day6){
    case 'Sunday':
        console.log('Sonntag')
}
for (let i = 0; i <= 6; i++){
    console.log(`${daysOfWeek[i]}: ${wocheTages[i]}`)
}