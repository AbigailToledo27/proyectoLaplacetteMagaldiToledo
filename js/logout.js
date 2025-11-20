window.addEventListener("load", function(){
    let logoutBoton = document.querySelector(".botonLogout")

    logoutBoton.addEventListener("click", function(){
        localStorage.clear();
    
    let usu = document.querySelector(".usuarioSaludo")
    usu.style.display = "none"
    let usunav = document.querySelector(".navlogout")
    usunav.style.display = "none"
    let navheder = document.querySelector(".header-nav")
    navheder.style.display = "flex"

    })
})

///pasar header nav a display flex o blok

