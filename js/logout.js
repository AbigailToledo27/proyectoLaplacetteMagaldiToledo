window.addEventListener("load", function(){
    let logoutBoton = document.querySelector(".botonLogout")

    logoutBoton.addEventListener("click", function(){
        localStorage.clear();
    })
})

mail = localStorage.getItem("email")

if(mail == null){
    let usu = document.querySelector(".usuarioSaludo")
    usu.style.display = "none"
    let usunav = document.querySelector(".navlogout")
    usunav.style.display = "none"
}