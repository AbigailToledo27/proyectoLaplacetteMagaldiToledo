let header = document.querySelector(".header-nav")
mail = localStorage.getItem("email")


if(mail != ""){
    header.style.display = "none"
    let nombreusu = document.querySelector(".usuarioSaludo")
    nombreusu.innerHTML += ` ${mail}`
}




