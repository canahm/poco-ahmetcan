let author = prompt("Enter your favorite author's name", "")
let quote = prompt("His famous quote is ", "")
function quoteOfAuthor(){
    document.write(author + " says, " + `"${quote}"`)
}
quoteOfAuthor()