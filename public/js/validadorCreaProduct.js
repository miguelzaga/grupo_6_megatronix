window.addEventListener('load', function () {

    let formulario=document.querySelector("#registerForm")
 
    formulario.addEventListener("submit", function (evento) {
        let errores = [];
        let name = document.querySelector('#name');
        let description_short = document.querySelector('#description_short');
        let description_long = document.querySelector('#description_long');
        let price = document.querySelector('#price');
        let image = document.querySelector('#image');

        if (name == "") {
            errores.push("El campo de nombre debe estar completo");
        } else if (name.value.length < 3) {
            errores.push("El campo nombre debe tener almenos 3 caracteres");
        }
        if (description_short.value == "") {
            errores.push("Debes agregar una descripcion corta");
        } else if (description_short.value.length < 10) {
            errores.push("La descripcion debe tener al menos 10 caracteres");
        }
        
        if (description_long.value == "") {
            errores.push("Debes agregar una descripcion");
        } else if (description_long.value.length < 50) {
            errores.push("La descripcion debe tener al menos 50 caracteres");
        }
 
        if (price.value == "") {
            errores.push("Debes agregar un valor del producto");
        } else if (price.value < 7) {
            errores.push("Tiene menos de 3 caracteres estas seguro del valor??");
        }

        let imageFile = image.value;
        let extensions = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!extensions.exec(imageFile)){
            errores.push('La foto no es válida (solo se permiten archivos con formato JPG, JPEG, PNG o GIF)' );
            image.value = '';}

        if (errores.length > 0) {
            evento.preventDefault();
            let ulErrores = document.querySelector("div.erroresCreaProduct ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</i>"
            }
        }
        else{
            formulario.submit();
        }
    })
})