const myList = [
    {
        numberOfChidren: 1,
        partnersName: "Daria",
        geographicLocation: "New York",
        jobTitle: "Developer"
    },
    {
        numberOfChidren: 5,
        partnersName: "Teya",
        geographicLocation: "Lugan",
        jobTitle: "Medical Doctor"
    },
    {
        numberOfChidren: 4,
        partnersName: "Shane",
        geographicLocation: "Ankara",
        jobTitle: "Manager"
    },
]
function fortunaTeller(item) {
    document.write(`You will be a ${item.jobTitle} in ${item.geographicLocation}, and married to ${item.partnersName} with ${item.numberOfChidren} ${item.numberOfChidren === 1 ? "kid" : "kids"}.`)
}
fortunaTeller(myList[2])





