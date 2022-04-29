const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")
const cross = document.getElementById("cross")

hamburger.addEventListener("click", () => {
    hamburger.classList.add("d-sm-none")
    hamburger.classList.remove("d-sm")
    nav.classList.add("d-sm")
    nav.classList.remove("d-sm-none")
})

cross.addEventListener("click", () => {
    nav.classList.add("d-sm-none")
    nav.classList.remove("d-sm")
    hamburger.classList.add("d-sm")
    hamburger.classList.remove("d-sm-none")
})