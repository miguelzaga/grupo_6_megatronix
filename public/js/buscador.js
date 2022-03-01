const { dbProduct, dbCategory, dbDestacados } = require('../../src/model')

const cuadroBuscar = document.querySelector('.cuadroBuscar')
const iconoBuscar = document.querySelector('.iconoBuscar')
const resultado = document.querySelector('.articulosList')

const filtrar = async() => {
    resultado.innerHTML += '';
    const busqueda = cuadroBuscar.value.toLowerCase()
    let products = await dbProduct.getAll();
    products.map(product => {
        let nombre = product.name.toLowerCase();
        if (nombre.indexOf(busqueda) !== -1) {
            resultado.innerHTML += `
            <article>
                    <a href="/products/${product.id}">
                        <img src="/images/products/${product.image}" class="productImg">
                    </a>
                    <i id= "addCarrito" class="fas fa-shopping-cart"></i>
                    <p class="nombre">${product.name} </p>
                    <p class="precio">$ ${product.price} </p>
            </article>
            `
        }
    })
    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
        <p>Producto no encontrado...</p>
        `;
    }
}

iconoBuscar.addEventListener('click', filtrar)