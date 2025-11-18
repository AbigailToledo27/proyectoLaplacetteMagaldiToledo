let formulario = document.querySelector(".formlogin")
let email = document.querySelector("#email")
let pass = document.querySelector(".passlogin")

function validarPass() {
    if (pass.value == "") {
        let errorpass = document.querySelector(".contraseña")
        errorpass.innerText = "El campo es obligatorio, no puede estar vacío"
        errorpass.style.display = "block"
        return false;
    }
    else if (pass.value.length < 6) {
        let errorcarac = document.querySelector(".contraseña")
        errorcarac.innerText = "La contraseña debe tener al menos 6 caracteres"
        errorcarac.style.display = "block"
        return false;
    }
    return true;
}

function validarMail() {
    if (email.value == ""){
        let erroremail = document.querySelector(".email")
        erroremail.innerText = "El campo es obligatorio, no puede estar vacío"
        erroremail.style.display = "block"
        return false;
    }
    return true
}

email.addEventListener("input", function (evento) {

    if (validarMail()) {
        let erroremail = document.querySelector(".email")
        erroremail.style.display = "none"
    }
})

pass.addEventListener("input", function (evento) {

    if (validarPass()) {
        let errorPass = document.querySelector(".contraseña")
        errorPass.style.display = "none"
    }
})


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let passValida = validarPass(evento); 
    let mailValido = validarMail(evento);

    if (passValida && mailValido) {
        localStorage.setItem("email", `${email.value}`)
        localStorage.setItem("contraseña", `${pass.value}`)
        this.submit()
    }
})
