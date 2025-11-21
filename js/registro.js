let form = document.querySelector(".formRegister")
let email = document.querySelector(".email")
let password = document.querySelector(".pass1")
let repeatPass = document.querySelector(".pass2")
let aceptarCheck = document.querySelector("#aceptacion") // Ver si este casillero tambien lo validamos como obligatorio o no

let errorEmail = document.querySelector(".errorEmail")
let errorPass = document.querySelector(".errorPassUno") 
let errorRepetirPass = document.querySelector(".errorPassDos")
let noCheckTerminos = document.querySelector(".checkTerminos")

function emailValido() {
    if (email.value == "") {
        errorEmail.innerText = "Este campo es obligatorio, no puede quedar vacio";
        errorEmail.style.display = "block";
        errorEmail.style.color = "red";
        return false
    }
    return true
}

function passValida() {
    if (password.value == "") {
        errorPass.innerText = "Este campo es obligatorio, no puede quedar vacio";
        errorPass.style.display = "block";
        errorPass.style.color = "red";
        return false      
    }
    else if (password.value.length < 6){
        errorPass.innerText = "La contraseña debe tener al menos 6 caracteres";
        errorPass.style.display = "block";
        errorPass.style.color = "red";
        return false
    }
    return true
}

function repeatPassValida() {
    if (repeatPass.value == "") {
        errorRepetirPass.innerText = "Repetir la contraseña";
        errorRepetirPass.style.display = "block";
         errorRepetirPass.style.color = "red";
        return false
    }
    else if (password.value != repeatPass.value) {
        errorRepetirPass.innerText = "Las contraseñas no coinciden";
        errorRepetirPass.style.display = "block";
        errorRepetirPass.style.color = "red";
        return false
    }
    return true 
}


email.addEventListener("input", function (evento) {
    if (emailValido()) {
        errorEmail.style.display = "none";
    }
})
password.addEventListener("input", function (evento) {
    if (passValida()) {
        errorPass.style.display = "none";
    }
    if (!repeatPassValida()) {
        errorRepetirPass.innerText = "Las contraseñas no coinciden";
        errorRepetirPass.style.display = "block";
        errorRepetirPass.style.color = "red";
    }
    else{
        errorRepetirPass.style.display = "none";
    }
})
repeatPass.addEventListener("input", function (evento) {
    if (repeatPassValida()) {
        errorRepetirPass.style.display = "none";
    }
})

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    let emailValidado = emailValido(evento);
    let passValidado = passValida(evento);
    let repeatPassValidado = repeatPassValida(evento);

    if (emailValidado && passValidado && repeatPassValidado) {
        this.submit()
    }
})