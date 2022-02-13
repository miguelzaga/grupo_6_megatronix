window.addEventListener('load', function () {


    let formulario = document.querySelector('#registerForm');
    let expresionEmail = /\w+@\w+\.+[a-z]/;
    //let expresionPass= [];
    let extensionImgValida = /(.jpg|.jpeg|.png|.gif)$/i;

    formulario.addEventListener("submit", function (evento) {
        let errores = [];
        let name = document.querySelector('name');
        let description_short = document.querySelector('#description_short');
        let description_long = document.querySelector('#description_long');
        let price = document.querySelector('#price');
        let image = document.querySelector('#image');

        if (name == "") {
            errores.push("El campo de nombre debe estar completo");
        } else if (firs_name.value.length < 5) {
            errores.push("El campo nombre debe tener almenos 5 caracteres");
        }
        if (description_short.value == "") {
            errores.push("Debes agregar una descripcion corta");
        } else if (description_short.value.length < 20) {
            errores.push("La descripcion debe tener al menos 20 caracteres");
        }
        
        if (description_long.value == "") {
            errores.push("Debes agregar una descripcion");
        } else if (description_long.value.length < 100) {
            errores.push("La descripcion debe tener al menos 1000 caracteres");
        }
 
        if (price.value == "") {
            errores.push("Debes agregar un valor del producto");
        } else if (firs_name.value.length < 3) {
            errores.push("Tiene menos de 3 caracteres estas seguro del valor??");
        }

        if (!extensionImgValida.exec(image.value)) {
            errores.push("Debe ser un formato con extension valdiad .jpeg/.jpg/.png/.gif");
        }

        if (errores.length > 0) {
            evento.preventDefault();
            let ulErrores = document.querySelector("div.errores.ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</i>"
            }
        }
    })
})

