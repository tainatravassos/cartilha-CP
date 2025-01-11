const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

console.log(body)

botaoAbrir.addEventListener('click', abirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")

}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")

}


