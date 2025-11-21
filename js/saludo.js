let header = document.querySelector(".header-nav")
let mail = localStorage.getItem("email")

let saludo = document.querySelector(".usuarioSaludo")
let logoutNav = document.querySelector(".navlogout")

console.log(mail)


if(mail){
    header.style.display = "none"
    saludo.style.display = "inline-block"
    saludo.style.fontSize = "14px"
    saludo.innerHTML += ` ${mail}`
    logoutNav.style.display = "flex"
}
else {
    header.style.display = "block"
    logoutNav.style.display = "none"
    saludo.style.display = "none"

}




