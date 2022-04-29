const helloWorld = function (pLanguageCode = "en") {
    if (pLanguageCode === "en") {
        return "Hello, World"
    } else if (pLanguageCode === "es") {
        return "Ola, Mondo"
    } else if (pLanguageCode === "de") {
        return "Hallo, Welt"
    } else {
        return "The language code you entered is not valid"
    }
}