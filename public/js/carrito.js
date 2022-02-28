const clickCarrito = document.querySelectorAll('#addCarrito');
let carrito = [];

clickCarrito.forEach(boton =>{
    boton.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const item = button.closest("article");
    const itemTile = item.querySelector('.nombre')
}