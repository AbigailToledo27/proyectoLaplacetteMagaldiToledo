let formulario = document.querySelector(".formlogin")
let email = document.querySelector("#email")
let pass = document.querySelector(".passlogin")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    
    if (email.value == ""){
        let erroremail = document.querySelector(".email")
        erroremail.innerText = "El campo es obligatorio, no puede estar vacío"
        erroremail.style.display = "block"
        return erroremail // Me explican por que el return aca?
    }else if (pass.value == ""){
        let errorpass = document.querySelector(".contraseña")
        errorpass.innerText = "El campo es obligatorio, no puede estar vacío"
        errorpass.style.display = "block"
        return errorpass //x2
    } else if (pass.value.length < 6){
        let errorcarac = document.querySelector(".caracteres")
        errorcarac.innerText = "La contraseña debe tener al menos 6 caracteres"
        errorcarac.style.display = "block"
    } else {
         this.submit()
    }
})