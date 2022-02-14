window.addEventListener('load', function(){
   

let formulario = document.querySelector('#login-form');

function emailValido(email){
    let emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let valido = emailReg.test(email)
    if (!valido) {
      return true
    }
}


formulario.addEventListener("submit",function(e){
    let errores =[];
    let email = document.querySelector('#email');
    let password =document.querySelector('#password');
 
    if (email.value == "") {
        errores.push("El campo de correo debe estar completo");
    }else if (!emailValido(email)){
        errores.push ("El correo debe ser valido")
        
    }
    if (password.value == "") {
        errores.push("Escribe una contraseña");
    }else if (password.value.length < 8){
        errores.push ("La contraseña debe tener al menos 8 caracteres");
    }

    if (errores.length>0){
        e.preventDefault ();
        let ulErrores =document.querySelector("div.erroresLogin ul");
        for (let i= 0; i < errores.length; i++){
            ulErrores.innerHTML += "<li>" + errores[i] + "</i>"
        }
        errores=[];
    }

})

})


