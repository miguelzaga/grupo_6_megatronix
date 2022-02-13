window.addEventListener('load', function(){
   

let formulario = document.querySelector('#login-form');
let expresionEmail= /\w+@\w+\.+[a-z]/;

formulario.addEventListener("submit",function(evento){
    let errores =[];
    let email = document.querySelector('#email');
    let password =document.querySelector('#password');
 
    if (email.value == "") {
        errores.push("El campo de correo debe estar completo");
    }else if (!expresionEmail.test(email)){
        errores.push ("El correo debe ser valido");
    }
    if (password.value == "") {
        errores.push("Escribe una contraseña");
    }else if (firs_name.value.length < 8){
        errores.push ("La contraseña debe tener al menos 8 caracteres");
    }

    if (errores.length>0){
        evento.preventDefault ();
        let ulErrores =document.querySelector("div.errores.ul");
        for (let i= 0; i < errores.length; i++){
            ulErrores.innerHTML += "<li>" + errores[i] + "</i>"
        }
    }

})

})

