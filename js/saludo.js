let header = document.querySelector(".header-nav")
let mail = localStorage.getItem("email")

let saludo = document.querySelector(".usuarioSaludo")
let logoutNav = document.querySelector(".navlogout")

console.log(mail)


if(mail){
    header.style.display = "none"
    saludo.style.display = "inline-block"
    saludo.innerHTML += ` ${mail}`
    logoutNav.style.display = "inline-block"
}
else {
    header.style.display = "block"
    logoutNav.style.display = "none"
    saludo.style.display = "none"

}




