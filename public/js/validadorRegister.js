window.addEventListener('load', function(){
   

let formulario = document.querySelector('#register-form');
let expresionEmail= /\w+@\w+\.+[a-z]/;
//let expresionPass= [];
let extensionImgValida=/(.jpg|.jpeg|.png|.gif)$/i;

formulario.addEventListener("submit",function(evento){
    let errores =[];
    let firs_name = document.querySelector('#firs_name');
    let last_Name = document.querySelector('#last_Name');
    let email = document.querySelector('#email');
    let password =document.querySelector('#password');
    let imag = document.querySelector('#image');
    let button = document.querySelector('#sent-register');
    let erNombre = document.querySelector('.erName');

    if (firs_name.value == "") {
        errores.push("El campo de nombre debe estar completo");
    }else if (firs_name.value.length < 2){
        errores.push ("El campo nombre debe tener almenos 2 caracteres");
    }
    if (last_Name.value == "") {
        errores.push("El campo de Apellido debe estar completo");
    }else if (last_name.value.length < 2){
        errores.push ("El campo Apellido debe tener almenos 2 caracteres");
    }
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

    if (!extensionImgValida.exec(imag.value)) {
        errores.push("Debe ser un formato con extension valdiad .jpeg/.jpg/.png/.gif");
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

