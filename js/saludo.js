let header = document.querySelector(".header-nav")
let links = document.querySelector(".nav-links")

mail = localStorage.getItem("email")

let formatoLogOut = `<h3 class = "usuarioSaludo">Bienvenido: ${mail}</h3>
                    <nav class="header-nav navlogout">
                        <ul class="nav-links">
                            <li><a href="./index.html">Home</a></li>
                            <li><a class= "botonLogout" >Logout</a></li>
                        </ul>
                    </nav>`; 

if(mail != ""){
    header.innerHTML = formatoLogOut
}




