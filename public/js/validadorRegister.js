    window.addEventListener("load", function () {
    let formularioR = document.querySelector("#register-form");
    //let extensionImgValida = /(.jpg|.jpeg|.png|.gif)$/i;
    function emailValido(email){
        let emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let valido = emailReg.test(email)
        if (!valido) {
          return true
        }
    }      
  
    formularioR.addEventListener("submit", function (evento) {
        let errores = [];
        let first_name = document.querySelector('#first_name');
        let last_Name = document.querySelector('#last_name');
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let image = document.querySelector('#image');
   
       
        if (first_name.value == "") {
            errores.push("El campo de nombre debe estar completo");
        } else if (first_name.value.length < 2) {
            errores.push("El campo nombre debe tener almenos 2 caracteres");
        }
       if (last_Name.value == "") {
            errores.push("El campo de Apellido debe estar completo");
        } else if (last_Name.value.length < 2) {
            errores.push("El campo Apellido debe tener almenos 2 caracteres");
        }
        if (email.value == "") {
            errores.push("El campo de correo debe estar completo");
        }else if (!emailValido(email)){
            errores.push ("El correo debe ser valido")
            
        }
        if (password.value == "") {
            errores.push("Escribe una contraseña");
        } else if (password.value.length < 8) {
            errores.push("La contraseña debe tener al menos 8 caracteres");
        }

        let imageFile = image.value;
        let extensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!extensions.exec(imageFile)){
            errores.push('La foto no es válida (solo se permiten archivos con formato JPG, JPEG, PNG o GIF)' );
            image.value = '';} 

        if (errores.length > 0) {
            evento.preventDefault();
            let ulErrores = document.querySelector("div.erroresRegister ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</i>"
            }
        }
    })

    })
